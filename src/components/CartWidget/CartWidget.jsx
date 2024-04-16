import CartIcon from "../CartIcon/CartIcon";
import "./CartWidget.css"

function CartWidget(){
return(
    <div className="AllCartContainer">
        <CartIcon className="TheCar"/>        
        <span >
            3
        </span>    
        
    </div>
)
}

export default CartWidget;