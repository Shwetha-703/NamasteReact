export const Title = () => (
    <a href="/">
        <img className="logo" src="https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png"/>
    </a>
)

const Header = () => (
    <div className="header">
    
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;