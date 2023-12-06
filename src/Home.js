import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
    return (
			<div>
				<div className="home__container">
					<img
						className="home__image"
						src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
						alt=""
					/>
					
					<div className="home__row">
						<Product
							id="12321341"
							title="RAK Magnetic Pickup Tool with LED Lights - Telescoping Magnet Pick Up Gadget Tool for Men, DIY Handyman, Father/Dad, Husband, Boyfriend, Him, Women"
							price={16.99}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/I/819DK3QrDVL._AC_SX522_.jpg"
						/>
						<Product
							id="2"
							title="Roll over image to zoom in
ASUS ZenBook Duo UX481 Laptop, 14” FHD NanoEdge Bezel Touch, Intel Core i7-10510U, GeForce MX250, 16GB RAM, 1TB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Pro, Celestial Blue, UX481FL-XS74T"
							price={1399.95}
							rating={3}
							image="https://images-na.ssl-images-amazon.com/images/I/814LADIi8NL._AC_SX522_.jpg"
						/>
					</div>
					<div className="home__row">
					<Product
							id="3"
							title="Ethiopian Christian art Christ in Glory Ethiopian Cross T-Shirt"
							price={15.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91Etdp5vzbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
						/>
						<Product
							id="4"
							title="Dior Sauvage for Men Eau De Toilette, 3.4 Fl Oz"
							price={110.25}
							rating={2}
							image="https://images-na.ssl-images-amazon.com/images/I/61NU2vszYVL._SX466_.jpg"
						/>
						<Product
							id="5"
							title="Citizen Watches BU0054-52L Calendrier"
							price={314.01}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/I/81Ml8NQYfYL._AC_UX679_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="6"
							title="YAMAHA P125 88-Key Weighted Action Digital Piano With Power Supply And Sustain Pedal, Black"
							price={649.99}
							rating={3}
							image="https://images-na.ssl-images-amazon.com/images/I/71aFZyG4THL._AC_SL1500_.jpg"
						/>
					</div>
				</div>
			</div>
		);
}

export default Home
