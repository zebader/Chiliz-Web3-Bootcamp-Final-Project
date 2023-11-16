import { getVoteContract } from "@/utils/getContracts";
import {useState} from "react";

export const DaoPropose = () => {
    const { vote_contract } = getVoteContract();
    const [description, setDescription] = useState("")

    const createPropose = async () => {
        if(!description) return
        try {
            const data = await vote_contract?.propose(description);
            console.info("contract call success", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const updateDescription = (e:any) => {
        setDescription(e.target.value)
    }
        
    return (
        <>
        <div className="flex max-w-7xl m-auto flex-col items-center sticky bottom-0 bg-black">
        <div className="w-full py-4 px-8 ">
            <label className="block text-sm font-bold mb-2">
                Describe a new proposal
            </label>
            <div className="flex gap-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ie. Hummus is the best food" onChange={updateDescription}/>
            <button 
                className={`text-xl rounded-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded`} 
                onClick={async () => await createPropose()}>
                    + 
            </button>

            </div>
        </div>
        </div>
        </>
    );
}