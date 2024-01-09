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
	text-transform: capitalize;

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
	box-shadow: 0 0 0.5rem var(--wine);
	padding: 0.3rem;
	margin: 0.3rem 0;
	border-radius: 0.5rem;
	min-width: 300px;
	& * {
		padding: 0.2rem;
	}
`;

export const Input = styled.input`
	outline: none;
	border: none;
	width: 75%;
`;