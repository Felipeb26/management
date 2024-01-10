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
	text-shadow: var(--shadowWine);
	height: 7rem;
	box-shadow: 0 0 0.8rem var(--black);
	margin-bottom: 3rem;
`;

export const Img = styled.img`
	width: 15rem;
	height: 9rem;
`;

export const Nav = styled.nav`
	flex: 1;
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

	& a {
		width: 100%;
		padding: 12px 0;
		transition: all 0.5s ease-in-out;
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
		transition: 0.3s ease-in-out;
	}
	& a:hover::after {
		transform: scale(0.8, 0.8);
	}
	*/ & span {
		cursor: pointer;
	}

	& svg {
		color: var(--yellow);
		cursor: pointer;
		font-size: 1.5rem;
		filter: drop-shadow(0 0 0.75rem var(--yellow));
		transition: all ease-in-out 1s;
	}
	& svg:hover {
		box-shadow: 0 0 1rem white, inset 0 0 1rem var(--yellow);
		animation: ${animate} 2s infinite;
	}
`;
