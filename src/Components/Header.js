import foodvista_logo from "/public/resources/foodvista_logo.png";
const Header = () => {
    return(
        <>
        <div className="header">
            <div className="header-left">
                <img src={foodvista_logo} />
                <h1>FoodVista</h1>
            </div>
            <div className="header-right">
                <ul className="navlist">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        </> 
    )
}
export default Header;