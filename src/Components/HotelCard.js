import { IMG_CARD_CDN } from "../constants";

export const HotelCard = (props) =>{
    const {resData} = props; 
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;
    return <div className="w-80 px-4 my-5">
        <img className="w-80 rounded" alt="hotel-logo" 
            src = {IMG_CARD_CDN+cloudinaryImageId} />
        <div className="hotel-card-details">
            <p>{name}</p>
            <p className="text-xs">{cuisines.join(", ")}</p>
            <p className="text-xs">{avgRating} stars 🍪 {deliveryTime} mins 🍪  ₹{costForTwo/100} FOR TWO</p>
        </div>
    </div>
}
