import {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logofood.png';

export const Title = () => (
    <Link to="/">
        <img className="logo" src={Logo}/>
        {/*"https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png"*/}
    </Link>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (<div className="header">
    
        <Title/>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                {isLoggedIn ? (<li className="LogInOut" onClick={()=>setIsLoggedIn(false)}>LogOut</li>)  : (<li className="LogInOut" onClick={()=>setIsLoggedIn(true)}>LogIn</li>)}
            </ul>
        </div>
    </div>)
};

export default Header;