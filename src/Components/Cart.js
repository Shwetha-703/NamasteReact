import { useDispatch, useSelector } from "react-redux";
import { HotelMenuItem } from "./HotelMenuItem";
import { clearCart } from "./cartSlice";

const Cart =()=>{
    const cartItems = useSelector(store=>store.cart.items)

    const dispatch = useDispatch();

    const clearCartHandle=()=>{
        dispatch(clearCart());
    }

    return(
        <>
            <div>
                <button onClick={()=>clearCartHandle()} className= "bg-green-300 rounded-md"> Clear Cart </button>
            </div>
            {(!cartItems||cartItems.length===0)?
            (<div className="flex flex-wrap justify-center">
                Cart is empty! 
            </div>):
            (<div className="flex flex-wrap justify-center">
                    {
                        (!cartItems|| cartItems.length==0)?
                            (<h1> Card is empty  ! </h1>):
                            cartItems.map(item => {
                                return  <HotelMenuItem key={item.id} items={item}/>
                            })
                    }
            </div>)}
        </>
    )
}

export default Cart;