
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./Navbar.css";
    import ButtonLogin from "../ButtonLogin/ButtonLogin";

function Navbar(){
    return(
        <div className="NavBar">   
            <Brand/>         
            <CategoryList/>
            <CartWidget/>
            <ButtonLogin/>
        </div>
        
    )
}

export default Navbar;