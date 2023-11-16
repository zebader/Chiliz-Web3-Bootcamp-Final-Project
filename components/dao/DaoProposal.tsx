import { getVoteContract } from "@/utils/getContracts";
import {  useContractRead, Proposal, ProposalVote, ProposalState} from "@thirdweb-dev/react";
import {useEffect, useState} from "react";
import { VoteType } from "@thirdweb-dev/sdk";

export const DaoProposal = ({proposalId = ""}) => {
    const [proposal, setProposal] = useState<Proposal | null>(null)
    const [proposalVotes, setProposalVotes] = useState<ProposalVote[] | null>(null)
    const [error, setError] = useState("")
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
        try {
            await vote_contract?.vote(proposalId, voteType, reason);
        } catch (error) {
            setError("Something went wrong")
        } finally {
            setIsVotingLoading(false)
        }
    }

    return (
        <>
            {proposal && (<div className="flex max-w-5xl p-4 flex-col bg-gray-800 rounded-lg">

                <h2 className="text-lg text-pink-500 font-medium mb-6">{ proposal.description}</h2>
                <div className="text-white text-md">
                    <span className="text-sm font-medium mb-4 text-slate-500">Endblock:</span> {proposal.endBlock._hex}
                </div>
                <div className="text-white text-md">
                    <span className="text-sm font-medium mb-4 text-slate-500">StartBlock:</span> {proposal.startBlock._hex}
                </div>
                <div className="text-white text-md">
                    <span className="text-sm font-medium mb-4 text-slate-500">State:</span> {ProposalState[state]}
                </div>

                <div className="flex pt-4 gap-4">
                    {
                        proposalVotes?.map((vote, index) => {
                            return (
                                <button 
                                    className={`bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ${state === ProposalState.Defeated ? "opacity-25 pointer-events-none" : ""}`}
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
            {isVotingLoading &&  <div className="z-50 fixed backdrop-opacity-10 backdrop-invert bg-black/50 inset-0 flex items-center justify-center ">Voting...</div>}
            {error &&  <div className="z-50 fixed backdrop-opacity-10 backdrop-invert bg-black/50 inset-0 flex items-center justify-center ">{error}</div>}
           
        </>
    );
}