import { HotelCard } from "./HotelCard";
import { cardList } from "../constants";
import {useState} from "react";

function filterData(searchText, restaurants){
    console.log(searchText);
    const filterdata =  restaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterdata;
}

const Body = () =>{

    const [searchText, setSearchText] = useState("Arogya Ahara");
    const [restaurants, setRestaurant] = useState(cardList);

    return (
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
                        const data = filterData(searchText, restaurants); 
                        console.log(data);
                        setRestaurant(data);
                        }}>
                Search
            </button>
            <button id="clearBtn" 
                    onClick={()=>{
                        setSearchText("");
                        setRestaurant(cardList);
                        }}>
                Clear
            </button>
        </div>
        <div className="hotel-container">
            {
            restaurants.map(res => <HotelCard key={res.data.id} resData={res}/>)
            }
        </div>
    </div>)
};

export default Body;