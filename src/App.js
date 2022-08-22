import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Section from "./components/Section";

function App() {
	return (
		<div className="App">
			<Section title="Model 3" description="Order Online for Touchless Delivery" btnFirst="custom order" btnSecond="existing inventory" imgSrc="model-3.jpg" />
			<Section title="Model Y" description="Order Online for Touchless Delivery" btnFirst="custom order" btnSecond="existing inventory" imgSrc="model-y.jpg" />
			<Section title="Model S" description="Order Online for Touchless Delivery" btnFirst="custom order" btnSecond="existing inventory" imgSrc="model-s.jpg" />
			<Section title="Model X" description="Order Online for Touchless Delivery" btnFirst="custom order" btnSecond="existing inventory" imgSrc="model-x.jpg" />
			<Section title="Solar Panels" description="Lowest Cost Solar Panels in America" btnFirst="Order Now" btnSecond="Learn more" imgSrc="solar-panel.jpg" />
			<Section title="Solar Roof" description="Produce Clean Energy From Your Roof" btnFirst="Order Now" btnSecond="Learn more" imgSrc="solar-roof.jpg" />
			<Section title="Accessories" description="" btnFirst="shop now" btnSecond="" imgSrc="accessories.jpg" />
		</div>
	);
}

export default App;
