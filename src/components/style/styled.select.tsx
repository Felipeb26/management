import styled from "styled-components";

export const SelectContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	flex-wrap: nowrap;
	height: 1.5rem;
	border-radius: 0.3rem;
	/* border: 0.5px solid var(--pink); */
	box-shadow: 0 0 0.3rem var(--black);

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


	& option {
        background: var(--pink);
		color: var(--black);
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
