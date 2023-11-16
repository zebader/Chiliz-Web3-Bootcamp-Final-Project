import { getVoteContract } from "@/utils/getContracts";
import { getTokenAddress } from "@/utils/getContractAddress";
import {  useContractRead, Proposal } from "@thirdweb-dev/react";
import {useEffect, useState} from "react";
import { DaoProposal } from "./DaoProposal";
import { DaoPropose } from "./DaoPropose";
import {Title} from "@/components/Title";

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
        <>
        
        <div className="flex max-w-7xl m-auto">
            <div className="p-8 w-full">
                <Title title={nameLoading? "":name}/>
                {proposalsLoading ? <div>Loading information... </div> :
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="text-white text-md">
                                <span className="text-sm font-medium mb-4 text-slate-500">Balance:</span> {balance}
                            </div>
                            <div className="text-white text-md">
                                <span className="text-sm font-medium mb-4 text-slate-500">Token Balance:</span> {tokenBalance}
                            </div>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            {voteProposals.map((proposal:Proposal, index:number) => {
                                return (
                                        <DaoProposal proposalId={proposal.proposalId._hex || ""} key={index}/>
                                    )
                                })
                            
                        }   
                        </div>
                    </div>
                }
            </div>
            
        </div>
        <DaoPropose />
        </>
    );
}