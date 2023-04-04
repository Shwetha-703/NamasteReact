import { FOOD_MENU_IMG } from "../constants";

export const HotelMenuItem = (props) =>{
    const {imageId, name, price, isVeg} = props.items; 
    console.log(props);
    return (
        <div className="w-80 px-4 my-5">
            <img className="w-40 h-40 rounded" alt="hotel-logo" 
                src = {FOOD_MENU_IMG+imageId} />
            <div className="hotel-card-details">
                <p>{name}</p>
                <p className="text-xs">Rs.{price/100} </p>
                {isVeg?<p>🟢</p>:<p>🔴</p>}
            </div>
        </div>
    )
}
