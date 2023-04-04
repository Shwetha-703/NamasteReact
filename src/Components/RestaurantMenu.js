import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { GET_RES_DETAILS, IMG_CARD_CDN } from '../constants';
import { addItem, clearCart } from './cartSlice';
import Shimmer from './Shimmer';

const RestaurantMenu = () =>{

    const {id} = useParams();


    const [restaurant, setRestaurant] = useState();
    const [restaurantMenu, setRestaurantMenu] = useState();

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(GET_RES_DETAILS+id);
        const json = await data.json();
        //console.log(json);
        setRestaurant(json?.data.cards[0]);
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card);
    }

    const dispatch = useDispatch();

    function addItemHandle(item){
        dispatch(addItem(item));
    }

    function clearCartHandle(){
        dispatch(clearCart());
    }

    return(!restaurant)? <Shimmer/> : (
        <div className="flex flex-wrap">
            <img className="p-2" src={IMG_CARD_CDN+restaurant?.card?.card?.info?.cloudinaryImageId}/>
            <div className="p-2">
                <h3>{restaurant?.card?.card?.info?.name}</h3>
                <p>{restaurant?.card?.card?.info?.costForTwoMessage}</p>
                <p>{restaurant?.card?.card?.info?.cuisines.join(", ")}</p>
                <p>{restaurant?.card?.card?.info?.areaName}</p>
                <p>{restaurant?.card?.card?.info?.avgRating} stars</p>
            </div>  
            <div className="p-2">
                <h4 className="text-lg">Recommended</h4>
                <ul className="p-2">
                {
                    (!restaurantMenu.itemCards|| restaurantMenu.itemCards.length===0)?
                    (<h1> No menu items! </h1>):
                    restaurantMenu.itemCards.map((res, index) =>(
                        <li key={res?.card?.info?.name}>
                            {res?.card?.info?.name}
                            <button onClick={()=>addItemHandle(res?.card?.info)} className= "bg-green-300 rounded-md"> Add Item </button>
                        </li>
                    ) )
                    //<MenuItem key={index} item={res}/>)
                }
                </ul>
            </div>
            <div>
                <button onClick={()=>clearCartHandle()} className= "bg-green-300 rounded-md"> Clear Cart </button>
            </div>
        </div>
    )
}

export default RestaurantMenu;