import { mount as mountProduct } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartIndex";

//? mounting products
const myProducts = document.querySelector("#my-products");
mountProduct(myProducts);

//? mounting cart
const myCart = document.querySelector("#my-cart");
mountCart(myCart);
