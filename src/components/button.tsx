import { Button } from "./style/styled.button";

interface BtnProps {
	style?: React.CSSProperties ;
	func?: () => unknown;
	type?: "button" | "submit" | "reset";
	children?: React.ReactNode;
}

export const CustomButton = (props: BtnProps) => {
	return (
		<>
			<Button style={props.style} type={props.type} onClick={props.func}>
				{props.children}
			</Button>
		</>
	);
};
