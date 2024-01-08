import { Button, ButtonDiv, InnerPopup, Popup } from "./style/styled.popup";

interface Props {
	open: boolean;
	chooseState: (value: boolean) => unknown;
	children?: React.ReactNode;
	btn_children?: React.ReactNode;
}

const PopUp = (props: Props) => {
	return props.open ? (
		<>
			<Popup>
				<InnerPopup>
					<ButtonDiv>
						<Button onClick={() => props.chooseState(!props.open)}>
							{props.btn_children}
						</Button>
					</ButtonDiv>
					{props.children}
				</InnerPopup>
			</Popup>
		</>
	) : (
		""
	);
};

export default PopUp;
