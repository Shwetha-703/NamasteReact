import { HotelCard } from "./HotelCard";    
import {useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import { useRestaurants } from "../../utils/useRestaurants";
import { filterData } from "../../utils/helper";
import { useOffline } from "../../utils/useOffline";

const Body = () =>{

    const restaurants = useRestaurants();

    const allRestaurants = restaurants.allRestaurants;
    const filteredRestaurants = restaurants.filteredRestaurants;

    const [searchText, setSearchText] = useState();

    const isOffLine = useOffline();

    if(isOffLine) return (<h1> 🔴 Oops, Looks like you're offline, check your internet connection!</h1>)

    if(!allRestaurants) return null; //early return 
    
    return (allRestaurants.length===0)? (
        <div className="body">
                <Shimmer/>
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
                    filteredRestaurants.map(res => {
                        return (<Link to={"/restaurant/"+ res.data.id}><HotelCard key={res.data.id} resData={res}/></Link>)
                    })
            }
        </div>
    </div>)
};

export default Body;