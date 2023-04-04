
const Shimmer = () =>{
    return (
        <div className="w-80 px-4 my-5">
            {Array(30).fill("").map((e, index)=>{
            
            return <div className="w-80 px-4 my-5" key={index} >
                <div className="w-80 h-80 bg-gray-400 rounded"/>
                <div className="w-80 h-20 p-2 bg-gray-500 hotel-card-details">
                </div>
            </div>
            }
            )}
        </div>
    )
}

export default Shimmer;
