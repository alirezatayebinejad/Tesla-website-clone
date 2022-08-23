import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
	return (
		<Container>
			<Section title="Model S" description="Order Online for Touchless Delivery" btnFirst="custom order" btnSecond="existing inventory" imgSrc="model-s.jpg" />
			<Section title="Model Y" description="Order Online for Touchless Delivery" btnFirst="custom order" btnSecond="existing inventory" imgSrc="model-y.jpg" />
			<Section title="Model 3" description="Order Online for Touchless Delivery" btnFirst="custom order" btnSecond="existing inventory" imgSrc="model-3.jpg" />
			<Section title="Model X" description="Order Online for Touchless Delivery" btnFirst="custom order" btnSecond="existing inventory" imgSrc="model-x.jpg" />
			<Section title="Solar Panels" description="Lowest Cost Solar Panels in America" btnFirst="Order Now" btnSecond="Learn more" imgSrc="solar-panel.jpg" />
			<Section title="Solar Roof" description="Produce Clean Energy From Your Roof" btnFirst="Order Now" btnSecond="Learn more" imgSrc="solar-roof.jpg" />
			<Section title="Accessories" description="" btnFirst="shop now" btnSecond="" imgSrc="accessories.jpg" />
		</Container>
	);
}

export default Home;

const Container = styled.div`
	scroll-snap-type: y proximity;
	overflow-y: scroll;
	height: 100vh;
`;
