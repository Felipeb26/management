import { Button, ButtonDiv, Modal, Popup } from "./style/styled.popup";
interface Props {
	open: boolean;
	chooseState: (value: boolean) => unknown;
	children?: React.ReactNode;
	btn_children?: React.ReactNode;
}

const ModalComponent = (props: Props) => {
	return props.open ? (
		<>
			<Popup>
				<Modal>
					<ButtonDiv>
						<Button onClick={() => props.chooseState(!props.open)}>
							{props.btn_children || "x"}
						</Button>
					</ButtonDiv>
					{props.children}
				</Modal>
			</Popup>
		</>
	) : (
		""
	);
};

export default ModalComponent;
