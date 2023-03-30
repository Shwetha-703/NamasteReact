
const Shimmer = () =>{
    return (
        <div className="shimmerview">
            {Array(30).fill("").map((e, index)=><div key={index} className="shimmerdiv"></div>)}
        </div>
    )
}

export default Shimmer;