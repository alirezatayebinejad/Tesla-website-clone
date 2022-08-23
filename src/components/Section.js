import React from "react";
import styled from "styled-components";

function Section({ title, description, btnFirst, btnSecond, imgSrc }) {
	return (
		<Wrap bgImage={imgSrc}>
			<HeadTitle>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</HeadTitle>
			<DownSec>
				<Bottons>
					<BtnFirst>{btnFirst}</BtnFirst>
					{btnSecond && <BtnSecond>{btnSecond}</BtnSecond>}
				</Bottons>
				<DownArrow src="/images/down-arrow.svg"></DownArrow>
			</DownSec>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	z-index: 0;
	width: 100vw;
	height: 100vh;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const HeadTitle = styled.div`
	margin-top: 80px;
	text-align: center;
`;
const Title = styled.h1`
	color: #171a20;
	font-size: 45px;
`;
const Description = styled.p`
	color: #57595d;
	margin-top: 8px;
`;
const Bottons = styled.div`
	display: flex;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
const DownSec = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;
const BtnFirst = styled.button`
	font-size: 12px;
	text-transform: uppercase;
	width: 260px;
	height: 40px;
	border-radius: 100px;
	border: none;
	background-color: RGB(61, 64, 68);
	opacity: 0.85;
	color: white;
	cursor: pointer;
`;
const BtnSecond = styled(BtnFirst)`
	background-color: white;
	opacity: 0.55;
	color: black;
	margin-left: 25px;
	@media (max-width: 600px) {
		margin-left: 0px;
		margin-top: 15px;
	}
`;
const DownArrow = styled.img`
	width: 35px;
	margin: 50px 0 20px;
	cursor: pointer;
	animation: animateDown infinite 1.5s;
`;
