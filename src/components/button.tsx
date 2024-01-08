import { Button } from "./style/styled.button";

interface BtnProps {
	func: () => unknown;
	type?: "button" | "submit" | "reset";
	children?: React.ReactNode;
}

export const CustomButton = (props: BtnProps) => {
	return (
		<>
			<Button type={props.type} onClick={() => props.func()}>
				{props.children}
			</Button>
		</>
	);
};
