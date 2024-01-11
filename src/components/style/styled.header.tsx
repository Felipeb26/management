import styled, { keyframes } from "styled-components";

const animate = keyframes`
	0% {
		transform: rotate(360deg);
	}
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	flex-direction: row;
	background: var(--pink);
	height: 7rem;
	box-shadow: 0 0 0.5rem var(--black);
	margin-bottom: 3rem;
`;

export const H1 = styled.h1`
	flex: 3;
	text-align: center;
	text-transform: uppercase;
`;

export const Img = styled.img`
	width: 15rem;
	height: 9rem;
`;

export const Nav = styled.nav`
	flex: 1;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 860px) {
		display: none;
	}
`;
export const Ul = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const Li = styled.li`
	text-transform: capitalize;
	font-size: 0.9rem;
	text-align: center;
	flex: 1;
	margin: 0 0.5rem;

	& a {
		width: 100%;
		padding: 12px 0;
		transition: all ease-in-out 0.5s;
		font-size: 14px;
		position: relative;
	}

	& a::after {
		content: "";
		background: var(--cyan);
		position: absolute;
		height: 3px;
		width: 100%;
		left: 0;
		right: 0;
		bottom: 0.2rem;
		transform: scale(0, 0.8);
		transition: all ease-in-out 0.3s;
	}
	& a:hover::after {
		transform: scale(0.8, 0.8);
	}
	& span {
		cursor: pointer;
		border-radius: 50%;
	}

	& svg {
		color: var(--yellow);
		cursor: pointer;
		font-size: 1.5rem;
		filter: drop-shadow(0 0 0.75rem var(--yellow));
		transition: all ease-in-out 1s;
		border-radius: 50%;
	}
	& svg:hover {
		box-shadow: 0 0 1rem white, inset 0 0 1rem var(--yellow);
		animation: ${animate} 2s infinite;
	}
`;

export const Hamburguer = styled.div`
	@media (min-width: 860px) {
		display: none;
	}
	flex: 0.5;

	& svg {
		font-size: 1.5rem;
		cursor: pointer;
	}
`;
