import { useState } from "react";
import { Each } from "../hooks/each";
import {
	Caret,
	CloseButton,
	Container,
	Divider,
	Option,
	Options,
	Value,
} from "./style/styled.select";
import "./style/styles.select.scss"


export type SelectionOption = {
	label: string;
	value: number;
};

type SelectProps = {
	options: SelectionOption[];
	value?: SelectionOption;
	onChange: (value: SelectionOption | undefined) => void;
};

export function SelectComponent({ value, onChange, options}: SelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	function clearOptions() {
		onChange(undefined);
	}
	function selectOption(value: SelectionOption) {
		onChange(value);
	}

	function isOptionSelected(option: SelectionOption) {
		const v = option.value == value?.value;
		return v;
	}
	return (
		<Container
			onBlur={() => setIsOpen(false)}
			onClick={() => setIsOpen((prev) => !prev)}
			tabIndex={0}
		>
			<Value>{value?.label}</Value>
			<CloseButton
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					clearOptions();
				}}
			>
				&times;
			</CloseButton>
			<Divider className="divider"></Divider>
			<Caret className="caret"></Caret>
			<Options
				className="show"
				style={{ display: isOpen ? "block" : "none" }}
			>
				<Each
					of={options}
					render={(value) => (
						<Option
							style={
								isOptionSelected(value) ? containerStyle : {}
							}
							className={
								isOptionSelected(value) ? "normal" : "high"
							}
							onClick={(e) => {
								e.stopPropagation();
								selectOption(value);
								setIsOpen(false);
							}}
							key={value.value}
						>
							{value.label}
						</Option>
					)}
				/>
			</Options>
		</Container>
	);
}

const containerStyle: React.CSSProperties = {
	letterSpacing: "0.1em",
	background: "var(--wine)",
	color: "var(--black)",
	fontWeight: 500,
	borderRadius: "0.3rem",
};
