import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from "./Orders";
const promise = loadStripe(
	'pk_test_51IOFapDqGqBsecWeLHztnQJoc4tHB48nlRT5KFidt7wnPEwHTNsVM748YL6zamMNQhAIP80swGsDPUSTEdx7RoDp00Ci6oUs2p'
);
function App() {
	const [{user}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Route exact path="/">
					<Header />
					<Home />
				</Route>
				<Route exact path="/Checkout">
					<Header />
					<Checkout />
				</Route>
				<Route exact path="/orders">
					<Header />
					<Orders />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/payment">
					<Header />
					<Elements stripe={promise}>
						<Payment />
					</Elements>
				</Route>
			</div>
		</Router>
	);
}

export default App;
