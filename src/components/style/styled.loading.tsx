import styled, { keyframes } from "styled-components";

const animate = keyframes`
	to {
		transform: rotate(1turn);
	}
`;

export const Back = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.473);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
`;

export const Span = styled.div`
	position: absolute;
	position: absolute;
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
	border: 0.5rem solid var(--white-incomplete);
	border-top-color: var(--wine);
	animation: ${animate} 2s infinite;
`;
