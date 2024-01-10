import styled from "styled-components";

export const Popup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InnerPopup = styled.div`
	border-radius: 0.8rem;
	height: 30vh;
	position: relative;
	padding: 1.5rem;
	width: 100%;
	max-width: 640px;
	background: var(--white);
	box-shadow: 0 0 0.8rem var(--blue);
	display: flex;
	flex-direction: column;
	color: var(--black);
`;

export const ButtonDiv = styled.div`
	display: flex;
	align-items: end;
	justify-content: end;
`;

export const Button = styled.button`
	box-shadow: 0 0 0.5rem var(--pink);
	border: 1px solid black;
	border-radius: 50%;
	background: var(--redT);
	width: 2rem;
	height: 2rem;
	padding: 0 1.3rem 0 0.7rem;
	text-transform: uppercase;
	font-weight: bold;
	display: inline-block;
	font-size: 1rem;
	white-space: nowrap;
	overflow: hidden;
	max-width: 100%;
	color: var(--black);

	&:hover {
		box-shadow: 0 0 0.5rem var(--wine);
		background: var(--red);
	}

	&:active {
		border: 2px solid var(--black);
		padding: 0;
		background: var(--redT);
	}
`;

export const Modal = styled.div`
	border-radius: 0.8rem;
	height: 50vh;
	position: relative;
	padding: 1.5rem;
	width: 100%;
	max-width: 540px;
	background: white;
	box-shadow: 0 0 0.8rem var(--pink);
	display: flex;
	flex-direction: column;
`;
