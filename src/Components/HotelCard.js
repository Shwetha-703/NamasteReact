import { IMG_CARD_CDN } from "../constants";

export const HotelCard = (props) =>{
    const {resData} = props; 
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;
    return <div className="hotel-card" style={{backgroundColor : "#f0f0f0"}}>
        <img className="hotel-logo" alt="hotel-logo" 
            src = {IMG_CARD_CDN+cloudinaryImageId} />
        <div className="hotel-card-details">
            <h5>{name}</h5>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{deliveryTime}</p>
            <p>₹{costForTwo/100} FOR TWO</p>
        </div>
    </div>
}
