import { GET_RES_DETAILS } from "../src/constants";
import {useState} from "react";


export const useRestaurant = (props) =>{
    const {id} = props;

    const [restaurant, setRestaurant] = useState();
    const [restaurantMenu, setRestaurantMenu] = useState();

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(GET_RES_DETAILS+id);
        const json = await data.json();
        setRestaurant(json?.data.cards[0]);
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card);
    }

    return {restaurant, restaurantMenu};
}
