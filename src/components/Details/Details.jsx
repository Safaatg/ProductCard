import "./Details.css";
// @ts-ignore
import IconCart from "../../assets/image/icon-cart.svg";
function Details (){
    return (
        <div id="DetailsDiv">
         <label id="tittle">PERFUME</label>
         <h1 id="Header">Gabrielle Essence Eau De Parfum</h1>
         <p id="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse tenetur at accusamus
             ipsam ullam corporis natus expedita quis iste saepe, repellat consequatur asperio</p>
             <div id="PriceDiv">
                <label id="PriceLabel">$149.99</label>
                <label id="DisPrice"><s>169.99</s></label>
             </div>
             <button id="btn">
                <img src={IconCart}></img>
                <span>Add to cart</span>
                </button>
        </div>
    )
}
export default Details