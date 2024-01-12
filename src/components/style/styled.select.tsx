import styled from "styled-components";

export const SelectContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	flex-wrap: nowrap;
	height: 1.5rem;
	border-radius: 0.3rem;
	width: 90%;
	margin: 0 0.5rem;

	& svg {
		font-size: 2rem;
		color: var(--black);
		cursor: pointer;
	}
`;

export const Select = styled.select`
	outline: none;
	border: none;
	appearance: none;
	color: var(--black);
	font-weight: bold;
	letter-spacing: 0.1rem;
	background: transparent;

	& option {
        background: var(--wine);
		color: var(--white);
		font-weight: 500;
	}

	& option:hover {
		letter-spacing: 0.1rem;
		color: var(--white);
		font-weight: bold;
	}

	& option:checked {
		letter-spacing: 0.1rem;
		color: var(--white);
		font-weight: bold;
	}
`;
