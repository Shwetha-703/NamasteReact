import {useState} from 'react';

export const Title = () => (
    <a href="/">
        <img className="logo" src="https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png"/>
    </a>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (<div className="header">
    
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                {isLoggedIn ? (<li className="LogInOut" onClick={()=>setIsLoggedIn(false)}>LogOut</li>)  : (<li className="LogInOut" onClick={()=>setIsLoggedIn(true)}>LogIn</li>)}
            </ul>
        </div>
    </div>)
};

export default Header;