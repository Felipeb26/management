import styled from "styled-components";

export const SpaceAroundDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0.8rem;
	justify-content: space-around;
	margin: 0.2rem;
`;

export const BodyCards = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	box-shadow: 0 0 0.5rem var(--blueT);
	padding: 0.8rem;
	min-width: 10rem;
	min-height: 12rem;
	justify-content: space-around;
	margin: 0.2rem;

	& span {
		margin: 0.1rem;
	}
`;

export const Actions = styled.div`
	margin: 0.8rem 0.5rem 0 0.5rem;
	display: flex;
	flex-direction: row;
`;

export const AlignItens = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	padding: 0.3rem;
	margin: 0.6rem 0;
	border-radius: 0.5rem;
	min-width: 300px;
	color: var(--black);
	align-items: center;
	justify-content: space-between;

	& :nth-child(1) {
		text-transform: capitalize;
	}
`;
export const AlignItensCol = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	min-width: 100%;
	color: var(--black);
	justify-content: space-between;
	& span {
		text-transform: capitalize;
		text-decoration: underline;
		color: var(--red);
		text-align: start;
		font-weight: 500;
		font-size: 0.8rem;
	}
`;

export const Input = styled.input`
	outline: none;
	border: none;
	width: 90%;
	background: transparent;
	color: var(--black);
	margin: 0 0 0 2rem;
`;

export const H1 = styled.h1`
	text-align: center;
	text-transform: lowercase;
	text-decoration: underline;
`;
