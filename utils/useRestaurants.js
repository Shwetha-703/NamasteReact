import { FOOD_API_LOAD } from "../src/constants";
import {useEffect, useState} from "react";

export const useRestaurants = () =>{


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

    return {allRestaurants, filteredRestaurants};
}