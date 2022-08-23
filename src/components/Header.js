import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<Container>
			<Logo>
				<a href="#">
					<img src="/images/logo.svg" alt="tesla logo" />
				</a>
			</Logo>
			<MenuMid>
				<a href="#">Model 3</a>
				<a href="#">Model y</a>
				<a href="#">Model s</a>
				<a href="#">Model x</a>
				<a href="#">Solar Roof</a>
				<a href="#">Solar Panels</a>
			</MenuMid>
			<MenuRight>
				<a href="#">Shop</a>
				<a href="#">Account</a>
				<a href="#">Menu</a>
			</MenuRight>
		</Container>
	);
}

export default Header;

const Container = styled.div`
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
