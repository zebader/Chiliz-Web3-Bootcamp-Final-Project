export const Title = ({title}:{title:string}) => {

    return (
        <div className="flex justify-center items-center mb-6 gap-4">
        <h1 className="text-2xl text-white font-medium ">
           {title}
        </h1>
    <hr className="flex-1 opacity-25"></hr>
    </div>
    );
}