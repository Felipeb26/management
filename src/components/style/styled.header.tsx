import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	align-items: center;
	flex-direction: row;
	background: var(--pink);
	text-shadow: var(--shadowWine);
	height: 7rem;
	box-shadow: 0 0 0.5rem var(--black);
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
`;
