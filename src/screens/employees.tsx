/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomButton } from "../components/button";
import { CustomForm } from "../components/form";
import HeaderComponent from "../components/header";
import Loading from "../components/loading";
import ModalComponent from "../components/modal";
import PopUp from "../components/popup";
import {
	Actions,
	AlignItens,
	BodyCards,
	Card,
	SpaceAroundDiv,
} from "../components/style/styled";
import { Each } from "../hooks/each";
import { Props } from "../model/function.props";
import {
	deleteEmployee,
	findAllEmployee,
	saveEmployee,
} from "../utils/axios.requests.util";

const removeShadow = { boxShadow: "none", margin: "0.1rem 0" };

export default function EmployeesComponent() {
	const navigate = useNavigate();
	const [id, setId] = useState("");
	const [openPopup, setOpenPopup] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const {
		data: employees,
		error,
		isLoading,
		refetch: findAll,
	} = useQuery({
		queryKey: ["employees"],
		queryFn: findAllEmployee,
		retry: false,
	});

	const {
		data: deleteMessage,
		error: deleteError,
		refetch,
	} = useQuery({
		queryKey: ["deleteOne"],
		queryFn: () => deleteEmployee(id),
		enabled: false,
	});

	toast.error(error?.message);
	toast.success(deleteMessage?.message);
	toast.error(deleteError?.message);

	const handleClick = async (data: any) => {
		const body = {
			name: data.name,
			surname: data.surname,
			email: data.email,
			birth_date: formatDate(data.birth_date),
			department: data.department,
		};
		saveEmployee(body)
			.then((data) => {
				findAll();
				setOpenModal(false);
				toast.success(`usuario ${data.name} salvo com sucesso`);
			})
			.catch((err: Error) => toast.error(err.message));
	};

	return (
		<>
			<Loading show={isLoading} />
			<HeaderComponent />
			<CustomButton
				style={{ margin: "0 0 0 3rem" }}
				func={() => setOpenModal(!openModal)}
			>
				<FaPlus />
			</CustomButton>
			<ModalComponent open={openModal} chooseState={setOpenModal}>
				<CustomForm onSubmit={handleClick} />
			</ModalComponent>
			<BodyCards>
				{error && toast(error.message)}
				<Each
					of={employees}
					render={(value, index) => (
						<Card key={index}>
							<AlignItens style={removeShadow}>
								<span>nome:</span>
								<p>{value.name}</p>
							</AlignItens>
							<AlignItens style={removeShadow}>
								<span>sobrenome:</span>
								<p>{value.surname}</p>
							</AlignItens>
							<AlignItens style={removeShadow}>
								<span>email:</span>
								<p>{value.email}</p>
							</AlignItens>
							<AlignItens style={removeShadow}>
								<span>nascimento:</span>
								<p>{value.birth_date}</p>
							</AlignItens>

							<AlignItens style={removeShadow}>
								<span>departamento</span>
								<p>{value.department}</p>
							</AlignItens>

							<PopUp
								open={openPopup}
								chooseState={setOpenPopup}
								btn_children={"x"}
							>
								{popupContent({
									closeFn: () => setOpenPopup(!openPopup),
									function: refetch,
									params: [id],
								})}
							</PopUp>

							<Actions>
								<CustomButton
									style={{ margin: "0 0.5rem", flex: 1 }}
									func={() =>
										navigate(`/employee/${value._id}`)
									}
								>
									editar
								</CustomButton>
								<CustomButton
									style={{ margin: "0 0.5rem", flex: 1 }}
									func={() => {
										setOpenPopup(true),
											setId(
												value._id ||
													Math.random().toFixed()
											);
									}}
								>
									deletar
								</CustomButton>
							</Actions>
						</Card>
					)}
				/>
			</BodyCards>
		</>
	);
}

const popupContent = (props: Props) => {
	return (
		<>
			<h1>Apos confirmar não terá como restaurar os dados deletados</h1>
			<h1>tem certeza?</h1>

			<SpaceAroundDiv>
				<CustomButton func={props.closeFn}>cancelar!</CustomButton>
				<CustomButton func={props.function}>confirmar!</CustomButton>
			</SpaceAroundDiv>
		</>
	);
};

const formatDate = (value: string) => {
	const values = value.split("-");
	return `${values[2]}/${values[1]}/${values[0]}`;
};
