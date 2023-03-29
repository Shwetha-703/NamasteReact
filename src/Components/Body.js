import { HotelCard } from "./HotelCard";    
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
    const filterdata =  restaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterdata;
}

const Body = () =>{

    useEffect(()=>{
        getRestaurants();   
    }, []);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }


    const [searchText, setSearchText] = useState();
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    createElements = () =>{
        const elements = [];
        for(let i=1;i<30;i++){
            elements.push(<Shimmer key={i}/>);
        }
        return elements;
    }

    if(!allRestaurants) return null; //early return 
    
    return (allRestaurants.length===0)? (
        <div className="body">
            <div className="shimmerview">
                
                <Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/>
                <Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/>
                
            </div>
        </div>
    ) : (
    <div className="body">
        <div className="search">
            <input type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText} 
                    onChange={(e)=> {
                        setSearchText(e.target.value);
                    } }/>
            <button id="searchBtn" 
                    onClick={()=>{
                        const data = filterData(searchText, allRestaurants); 
                        
                        setFilteredRestaurants(data);
                        }}>
                Search
            </button>
        </div>
        <div className="hotel-container">
            {
                (!filteredRestaurants|| filteredRestaurants.length==0)?
                    (<h1> No such restaurant found, please check your input! </h1>):
                    filteredRestaurants.map(res => <HotelCard key={res.data.id} resData={res}/>)
            }
        </div>
    </div>)
};

export default Body;