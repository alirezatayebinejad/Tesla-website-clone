import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);
	console.log(cars);
	return (
		<>
			<Container>
				<Logo>
					<a href="#">
						<img src="/images/logo.svg" alt="tesla logo" />
					</a>
				</Logo>
				<MenuMid>
					{cars &&
						cars.map((car, index) => (
							<a key={index} href="#">
								{car}
							</a>
						))}
					<a href="#">Solar Roof</a>
					<a href="#">Solar Panels</a>
				</MenuMid>
				<MenuRight>
					<a href="#">Shop</a>
					<a href="#">Account</a>
					<a onClick={() => setBurgerStatus(true)} href="#">
						Menu
					</a>
				</MenuRight>
				<BurgerMenu isOpen={burgerStatus}>
					<CloseIcon onClick={() => setBurgerStatus(false)}>
						<img src="/images/close-icon.svg" alt="" />
					</CloseIcon>
					{cars &&
						cars.map((car, index) => (
							<a key={index} href="#">
								<li>{car}</li>
							</a>
						))}
					<a href="#">
						<li>Solar Roof</li>
					</a>
					<a href="#">
						<li>Solar Panels</li>
					</a>
					<a href="#">
						<li>Existing inventory</li>
					</a>
					<a href="#">
						<li>Used Inventory</li>
					</a>
					<a href="#">
						<li>Trade-In</li>
					</a>
					<a href="#">
						<li>Test Drive</li>
					</a>
					<a href="#">
						<li>Insurance</li>
					</a>
					<a href="#">
						<li>Powerwall</li>
					</a>
					<a href="#">
						<li>Commercial Energy</li>
					</a>
					<a href="#">
						<li>Utilities</li>
					</a>
				</BurgerMenu>
			</Container>
		</>
	);
}

export default Header;

const Container = styled.div`
	z-index: 20;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	height: 55px;
	width: 100%;
	position: fixed;
	padding: 0 40px;
`;
const Logo = styled.div``;
const MenuMid = styled.div`
margin-right:100px
	height: 100%;
	display: flex;
	align-items: center;
	margin-right:-100px;
	a {
		color: black;
		font-weight: 600;
		padding: 10px 10px;
		color: #3b3b3b;
	}
	a:hover {
		background-color: rgba(66, 66, 66, 0.092);
		border-radius: 13px;
		transition: background-color 0.4s;
	}
	@media (max-width: 1000px) {
		display: none;
	} ;
	`;
const MenuRight = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	a {
		color: black;
		font-weight: bold;
		padding: 10px 10px;
		color: #3b3b3b;
	}
	a:hover {
		background-color: rgba(66, 66, 66, 0.092);
		border-radius: 13px;
		transition: background-color 0.4s;
	}
`;

const CloseIcon = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	img {
		width: 20px;
		cursor: pointer;
	}
`;
const BurgerMenu = styled.div`
	z-index: 20;
	::-webkit-scrollbar {
		display: none;
	}
	width: 280px;
	background-color: white;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	padding: 15px 40px;
	transform: ${(props) => (props.isOpen ? `translateX(0%)` : `translateX(100%)`)};
	transition: 0.2s ease-out;
	a {
		color: black;
	}
	li {
		list-style: none;
		padding: 10px 5px;
		cursor: pointer;
	}
	li:hover {
		background-color: rgba(66, 66, 66, 0.092);
		border-radius: 13px;
		transition: background-color 0.3s ease-out;
	}
`;
