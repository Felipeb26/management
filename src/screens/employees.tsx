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
	BodyCards,
	Card,
	SpaceAroundDiv,
} from "../components/style/styled";
import { EmployeeModel } from "../model/employee.model";
import { Props } from "../model/function.props";
import {
	deleteEmployee,
	findAllEmployee,
	saveEmployee,
} from "../utils/axios.requests.util";

export default function EmployeesComponent() {
	const navigate = useNavigate();
	const [openPopup, setOpenPopup] = useState(false);
	const [id, setId] = useState("");
	const [openModal, setOpenModal] = useState(true);
	const [employee, setEmployee] = useState<EmployeeModel>();

	const {
		data: employees,
		error,
		isLoading,
	} = useQuery({
		queryKey: ["employees"],
		queryFn: findAllEmployee,
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

	
	const saveBody = async (body:EmployeeModel) => {
		return saveEmployee(body);
	}

	const { error: saveError, refetch: save } = useQuery({
		queryKey: ["save", employee],
		queryFn: () => saveEmployee(employee),
		enabled: false,
		retry: false,
	});
	toast.error(saveError?.message);

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
		console.log(body);
		setEmployee(body);
		await save(["",body]);
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

				{employees?.map((value, index) => {
					return (
						<Card key={index}>
							<span>nome: {value.name}</span>
							<span>sobrenome: {value.surname}</span>
							<span>email: {value.email}</span>
							<span>departamento: {value.department}</span>
							<span>data de nascimento: {value.birth_date}</span>

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
									func={() =>
										navigate(`/employee/${value._id}`)
									}
								>
									editar
								</CustomButton>
								<CustomButton
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
					);
				})}
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
