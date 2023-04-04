import {useState} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logofood.png';
import { useOffline } from '../../utils/useOffline';

export const Title = () => (
    <Link to="/">
        <img className="w-20 h-20" src={Logo}/>
        {/*"https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png"*/}
    </Link>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOffLine = useOffline();

    const cartItems = useSelector(store=>store.cart.items);
    console.log(cartItems);

    return (<div className="flex justify-between shadow-md px-4">
    
        <Title/>
        <div className="nav-items">
            <ul className="flex">
                <li className="p-2 my-8"><Link to="/">Home </Link></li>
                <li className="p-2 my-8"><Link to="/instamart">Instamart</Link></li>
                <li className="p-2 my-8"><Link to="/about">About Us</Link></li>
                <li className="p-2 my-8"><Link to="/contact">Contact Us</Link></li>
                <li className="p-2 my-8"><Link to="/cart"> Cart - {cartItems.length}</Link></li>
                {isLoggedIn ? (<li  className="p-2 my-8" onClick={()=>
                                            setIsLoggedIn(false)}>LogOut</li>)  : 
                                (<li c className="p-2 my-8" onClick={()=>setIsLoggedIn(true)}>LogIn</li>)}
                <li className="p-2 my-8">{!isOffLine? "🟢" : "🔴"}</li>
            </ul>
        </div>
    </div>)
};

export default Header;