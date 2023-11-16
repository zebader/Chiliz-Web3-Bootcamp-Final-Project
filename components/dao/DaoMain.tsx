import { getVoteContract } from "@/utils/getContracts";
import { getTokenAddress } from "@/utils/getContractAddress";
import {  useContractRead, Proposal, ProposalVote, ProposalState} from "@thirdweb-dev/react";
import {useEffect, useState} from "react";
import { VoteType } from "@thirdweb-dev/sdk";

export const DaoProposal = ({proposalId = ""}) => {
    const [proposal, setProposal] = useState<Proposal | null>(null)
    const [proposalVotes, setProposalVotes] = useState<ProposalVote[] | null>(null)
    const [isVotingLoading, setIsVotingLoading] = useState(false)
    const { vote_contract } = getVoteContract();

    const { data:state, isLoading:isStateLoading } = useContractRead(vote_contract , "state", [proposalId])

    useEffect(() => {
        vote_contract?.get(proposalId).then((proposal) => {
            setProposal(proposal)
        })
        vote_contract?.getProposalVotes(proposalId as any).then((proposalVotes) => {
            setProposalVotes(proposalVotes)
        })

    }, [vote_contract])

    const doVote = async (voteType:VoteType, reason?:string) => {
        setIsVotingLoading(true)
        await vote_contract?.vote(proposalId, voteType, reason);
        setIsVotingLoading(false)
    }

    return (
        <>
            {proposal && (<div className="flex max-w-5xl m-auto p-4 flex-col bg-gray-800 rounded-lg">

                <h2 className="text-lg text-amber-300 font-medium mb-6">{ proposal.description}</h2>
                <div className="text-white text-md">
                    <span className="text-sm font-medium mb-4 text-slate-500">Endblock:</span> {proposal.endBlock._hex}
                </div>
                <div className="text-white text-md">
                    <span className="text-sm font-medium mb-4 text-slate-500">StartBlock:</span> {proposal.startBlock._hex}
                </div>
                <p>{`State: ${ProposalState[state]}`}</p>
                <div className="flex pt-4 gap-4">
                    {
                        proposalVotes?.map((vote, index) => {
                            return (
                                <button 
                                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                                        ${state === ProposalState.Defeated ? "bg-red-500 hover:bg-red-700 pointer-events-none" : ""}
                                        `}
                                    key={index}
                                    onClick={async () => {
                                        await doVote(vote.type, vote.label)
                                    }}
                                    >
                                    {`${vote.label}`}
                                </button>
                            )
                        })
                    }
                </div>
            </div>)}
            {isVotingLoading && <div>Voting...</div>}
        </>
    );
}

export const DaoMain = () => {
    const { vote_contract } = getVoteContract();
    const [balance, setBalance] = useState("")
    const [tokenBalance, setTokenBalance] = useState("")
    
    useEffect(() => {
        vote_contract?.balance().then((balance) => {
            setBalance(balance?.displayValue)
        })
        vote_contract?.balanceOfToken(getTokenAddress()).then((tokenBalance) => {
            setTokenBalance(tokenBalance?.displayValue)
        })

    }, [vote_contract])

        const { data: voteProposals, isLoading:proposalsLoading } = useContractRead(vote_contract, "getAllProposals")
        const { data: name, isLoading:nameLoading } = useContractRead(vote_contract, "name")
        
    return (
      
        <div className="flex max-w-5xl m-auto p-4">
            <div className="p-8">
                <h1 className="text-2xl text-white font-medium mb-6">
                    {nameLoading? "":name}
                </h1>{
                        proposalsLoading ? <div>Loading information... </div> :
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="text-white text-md">
                                <span className="text-sm font-medium mb-4 text-slate-500">Balance:</span> {balance}
                            </div>
                            <div className="text-white text-md">
                                <span className="text-sm font-medium mb-4 text-slate-500">Token Balance:</span> {tokenBalance}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {voteProposals.map((proposal:Proposal, index:number) => {
                                return (
                                    
                                        <DaoProposal proposalId={proposal.proposalId._hex || ""} key={index}/>
                                    
                                )
                            })
                        }</div>
                        </div>
                }
            </div>
        </div>
       
    );
}