import { HotelCard } from "./HotelCard";    
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import { filterData } from "../../utils/helper";
import { useOffline } from "../../utils/useOffline";
import { FOOD_API_LOAD } from "../constants";

const Body = () =>{

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurants();   
    }, []);

    async function getRestaurants(){
        const data = await fetch(FOOD_API_LOAD);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    const [searchText, setSearchText] = useState();

    const isOffLine = useOffline();

    if(isOffLine) return (<h1> 🔴 Oops, Looks like you're offline, check your internet connection!</h1>)

    if(!allRestaurants) return null; //early return 
    
    return (allRestaurants.length===0)? (
        <div className="flex flex-wrap  justify-center ">
            
                <Shimmer/>
           
        </div>
    ) : (
    <div className="flex flex-wrap  justify-center m-4 w-fit lg:w-auto">
        <div className=" m-4 h-20 bg-black rounded ">
            <div className="flex justify-start p-8">
                <input type="text" 
                        className="shadow-md" 
                        placeholder="Search" 
                        value={searchText} 
                        onChange={(e)=> {
                            setSearchText(e.target.value);
                        } }/>
                <button id="searchBtn" className="bg-red-400 rounded-r-lg shadow-md"
                        onClick={()=>{
                            const data = filterData(searchText, allRestaurants); 
                            
                            setFilteredRestaurants(data);
                            }}>
                    Search
                </button>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
                {
                    (!filteredRestaurants|| filteredRestaurants.length==0)?
                        (<h1> No such restaurant found, please check your input! </h1>):
                        filteredRestaurants.map(res => {
                            return (<Link to={"/restaurant/"+ res.data.id}><HotelCard key={res.data.id} resData={res}/></Link>)
                        })
                }
        </div>
    </div>)
};

export default Body;