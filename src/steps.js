d//1. Create the header.js and header.css
//   => assign a class name "header" and add the amazon image
//   => create another div to hold the search bar
//   => create another div to hold the nav__bar options
//   => create three header options
//   => style the header.css
//2. => got to material UI and install the core module npm install @material-ui/core
//   => search icons on the material Ui website and install npm install @material-ui/icons
//   => import the SearchIcon in your Header.js next to the search input and add the CSS
//   => import the ShopingBasket in your Header.js next the last header option and add the CSS
// *********************************************************************************************************
//3. => create the Home.js and Home.css
//   => create a home__container div and add the banner image and the two closing divs
//   => style the home__image in the Home.css image part
//4. => create Product.js and Product.css 
//   => In home.js create a div.home__row and render Product.js in it
//5. => In Product.js assign a class name for the enclosing div.product
//  5.1 => create another div.product__info
//   => create a Paragraph.product__tiltle and add "title" for the time being
//   => create a paragraph.product__price and add the$ and price for the time being
//   => create a div.product__rating and add a  <p>🌟</p> get the star from "https://emojipedia.org/glowing-star/"
//  5.2=> create an img tag for the product image add url for the time being
//  5.3=> add a button add to basket
//6. => add the product.css
//7. => In Home.js render three or four rows of produt.js
//   => style home_row in Home.css 
//8. => pass the {id,title,price,rating, image} as a props to the Product.js in Home.js 
//   => use the props passed and map them in the product.js
//9. => create a Checkout.js and Checkout.css and import the css
//   => npm i react-router-dom
//10.=> In app.js import {BrowserRouter as Router, Router, Route } from "react-router-dom"
//   => wrap your app.js in Router, Routes  and route to Header + Home(path="/") and Header + checkout("path=/checkout")
//11.=> In the checkout.js import the  left("<checkout__left>") side image and add the two closing </div> 
//   => style the checkout ad 
//   => add the hello and your shoping basket part under the checkout image
//   => style the checkout__title 
//   => create another div("<checkout__right>") and add a heading subTotal for the time being
//   => style the checkout part   
//12.=> create the SubTotal.js and SubTotal.css and import it
//13.=> npm i react-currency-format
//   => import CurrencyFormat from 'react-currency-format'
//   => copy paste the subtotal elements and change the value to 0 and comment the button
//14.=> import the SubTotal.js in the checkout_right part
//   => uncomment the button and comment the click function and add the SubTotal.css
//15.=> In the header.js Link to="/" to amazon and Link to="/checkout" the shopiingBasket part
// ***************************************************************************************************************
//16.=> create stateProvider.js that provides a context and reducer to the app)
//   => In index.js wrap your <App> inside the <StateProvider> component
//17.=> create reducer.js and initialize your initialState ad export it
//   => import the initialState in the index.js
//18.=> initialize your reducer function in the reducer.js and default export it 
//19.=> In product.js add to basket button bind the click function {add to basket}
//   => add the basket and dispatch from useStateValue() and the add to basket function
//   => inspect and check the clg(action) on your browser and clg(basket) in your product.js
//20.=> In your header.js import the basket and change the basket__count 0 part to basket.length
//   => In your SubTotal.js change 0 items to basket.length items
//   => also declare the const getBasketTotal that takes basket as argument and assign it to value
// *******************************************************************************************************************
//21.=> create a CheckoutProduct.js and CheckoutProduct.css to display the chosen products, import the css
//22.=> style CheckoutProduct.css
//   => In checkout.js display the CheckoutProduct.js under Your shoping basket element
//22.=> In CheckoutProduct.js copy the return parts and paste them and comment the button
//23.=> In checkout.js add the basket and dispatch from useStateValue()
//   => map the basket items on the CheckoutProduct component in Checkout.js
//24.=> In CheckoutProduct.js pass {id,title,price,rating, image} as props    
//   => uncomment the button and cut and comment the "!hideButton&&" part and add the removeFromBasket dispatch function
//25.=> In the reducer.js add the "REMOVE_BASKET" action handler
//26.=> Create the Login.js and Login.css and import the css
//   => In app.js route the signin to Login
//   => Link to signin in Header.js 
//27.=> create the sign in elements in the Login.js
//   => style the Login.css  
//28.=> In Login.js create a state for the email amd password using useState() and initialze it to string 
//   => setemail and set password using e.target.value and set the value to email and password 
//   => create the signin and register functions and bind them to their respective buttons and comment the inside part 
//29.=> Go to the Firebase and create a project and npm i firebase-tools
//   => go to project overview settings and copy the fierbase config files and save it on firebase.js
// *********************************************************************************************
//   => go to authentication enable email and password sign in method
//30.=> npm i firebase and import it in firebase.js
//   => Initialize your firebase config, auth and database in firebase.js and export (aut, db).
//31.=> In Login.js import LInk and useNavigate() from react-router-dom 
//   => change history.push to history 
//   => and implement the login functions by binding them on the button(uncomment them)  
//32.=> In App.js use useState to decalre your authUser
//33.=> go to your reducer and assign the User state to null and the "SET_USER" action listner(reducer) function  
//34.=> In your Header.js import the User state in the useStateValue()
//   => adjust the header Guest to Hello {!user ? "Guest" : user?.email}
//   => adjust the header signin to {user ? "Sign Out" : "Sign In"}  
//   => declare the handleAutentication function and bind it to the guest and signin enclosing div
//   => also change the <Link> tag to Link to={!user && "/login"}
//35.=>   Deploy your fontend amazone-clone   
//36.=> on subtotal.js proceed to checkout button link Payment using useNavigate and const Navigate = useNavigate();
//37.=>create payment.js and payment.css and route it on App.js
//38.=> In payment.js copy paste the return part
//   => import the CheckoutProduct.js to display the items
//   => npm i @stripe/stripe-js and npm i @stripe/react-stripe-js
//39.=> on app.js import { loadStripe } from "@stripe/stripe-js"; and import { Elements } from "@stripe/react-stripe-js";
//   => go to stripe.com and get publishable API key
//   => on App.js use loadstripe to create a promise
//   => wrap the Payment.js in Elements stripe={promise} 
//40.=> on Payment.js const stripe = useStripe(); and const elements = useElements(); 
//   => import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
//   => place the CardElement component under Payment method
//   => import currencyformat and getbasketTotal 
//   => declare four states of the buy button const [error, setError] = useState(null); and 	const [disabled, setDisabled] = useState(true);const [succeeded, setSucceeded] = useState(false);	const [processing, setProcessing] = useState("");
//   => on the payment form assign onSubmit={handleSubmit}> and decalre handleSubmit function
//   => for the cardElement assign onSubmit={handleChange}> and decalre handleChange function
//   => display the error part under the button
//   => import const [clientSecret, setClientSecret] = useState(true); for stripe payment processing
//   => import the client secret useState() promise to charge customers npm i axios and import it