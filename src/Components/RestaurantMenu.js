import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { GET_RES_DETAILS, IMG_CARD_CDN } from '../constants';
import Shimmer from './Shimmer';
import { useRestaurant } from '../../utils/useRestaurantMenu';

const RestaurantMenu = () =>{

    const {id} = useParams();

    const restaurantAndMenu = useRestaurantMenu(id);

    const restaurant = restaurantAndMenu.restaurant;
    const restaurantMenu = restaurantAndMenu.restaurantMenu;

    return(!restaurant)? <Shimmer/> : (
        <div className="resto">
            <img src={IMG_CARD_CDN+restaurant?.card?.card?.info?.cloudinaryImageId}/>
            <div className="restoInfo">
                <h3>{restaurant?.card?.card?.info?.name}</h3>
                <p>{restaurant?.card?.card?.info?.costForTwoMessage}</p>
                <p>{restaurant?.card?.card?.info?.cuisines.join(", ")}</p>
                <p>{restaurant?.card?.card?.info?.areaName}</p>
                <p>{restaurant?.card?.card?.info?.avgRating} stars</p>
            </div>  
            <div className="restoInfo">
                <h4>Recommended</h4>
                <ul>
                {
                    (!restaurantMenu.itemCards|| restaurantMenu.itemCards.length===0)?
                    (<h1> No menu items! </h1>):
                    restaurantMenu.itemCards.map((res, index) =>(
                        <li key={index}>
                            {res?.card?.info?.name}
                        </li>
                    ) )
                    //<MenuItem key={index} item={res}/>)
                }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;