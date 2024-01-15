import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 20em;
	min-height: 1.5em;
	border: 0.05em solid var(--wine);
	display: flex;
	align-items: center;
	gap: 0.5em;
	padding: 0.5em;
	border-radius: 0.25em;
	outline: none;
	width: 100%;
	box-shadow: inset 0 0 0.5rem var(--wine);
`;

export const Value = styled.span`
	flex-grow: 1;
`;

export const CloseButton = styled.button`
	background: none;
	color: var(--wine);
	outline: none;
	cursor: pointer;
	font-size: 1.25em;
	padding: 0 0.3em;
	border-radius: 0.2em;

	:focus,
	:hover {
		color: red;
	}
`;

export const Divider = styled.div`
	background-color: var(--wine);
	align-self: stretch;
	width: 0.08em;
`;

export const Caret = styled.div`
	translate: 0 25%;
	border: 0.25em solid transparent;
	border-top-color: var(--wine);
	cursor: pointer;
`;

export const Options = styled.div`
	position: absolute;
	margin: 0;
	padding: 0.5em;
	list-style: none;
	display: inline;

	max-height: 15em;
	overflow-y: auto;
	border-radius: 0.25em;
	width: 100%;
	left: 0;
	top: calc(100% + 0.25em);
	z-index: 2;

	background: var(--pink);
	color: var(--black);
`;

export const Option = styled.li`
	padding: 0.25em 0.5em;
	cursor: pointer;
	color: var(--black);
	transition: all ease-in-out 200ms;
`;
