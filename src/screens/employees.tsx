/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { CustomButton } from "../components/button";
import HeaderComponent from "../components/header";
import Loading from "../components/loading";
import PopUp from "../components/popup";
import {
	Actions,
	BodyCards,
	Card,
	SpaceAroundDiv,
} from "../components/style/styled";
import { Props } from "../model/function.props";
import { deleteEmployee, findAllEmployee } from "../utils/axios.requests.util";
import { useNavigate } from "react-router-dom";

export default function EmployeesComponent() {
	const navigate = useNavigate();
	const [openPopup, setOpenPopup] = useState(false);
	const {
		data: employees,
		error,
		isLoading,
	} = useQuery({
		queryKey: ["employees"],
		queryFn: findAllEmployee,
	});
	const [id, setId] = useState("");

	return (
		<>
			<Loading show={isLoading} />
			<HeaderComponent />
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
									function: () => setOpenPopup(!openPopup),
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
										setOpenPopup(true), setId(value._id);
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
				<CustomButton func={props.function}>cancelar!</CustomButton>
				<CustomButton func={() => requestDelete(props.params)}>
					confirmar!
				</CustomButton>
			</SpaceAroundDiv>
		</>
	);
};

// function modalContent(props: UpdateEmployee) {
// 	const value = props.employee;

// 	const { data, error, isLoading } = useQuery({
// 		queryKey: ["departments"],
// 		queryFn: findAllDepartments,
// 	});

// 	return (
// 		<>
// 			<AlignItens>
// 				<label htmlFor="name">nome:</label>
// 				<Input type="text" placeholder={value.name} id="name" />
// 			</AlignItens>
// 			<AlignItens>
// 				<label htmlFor="sobrenome">Sobrenome:</label>
// 				<Input type="text" placeholder={value.surname} id="sobrenome" />
// 			</AlignItens>
// 			<AlignItens>
// 				<label htmlFor="email">email:</label>
// 				<Input type="email" placeholder={value.email} id="email" />
// 			</AlignItens>

// 			<select>
// 				{data?.map((obj, id) => {
// 					return <option key={id}>{obj.name}</option>;
// 				})}
// 			</select>

// 			<SpaceAroundDiv>
// 				<CustomButton func={props.function}>cancelar!</CustomButton>
// 				<CustomButton func={() => {}}>confirmar!</CustomButton>
// 			</SpaceAroundDiv>
// 		</>
// 	);
// }

function requestDelete(id: string | string[] | undefined) {
	if (id === undefined) return;

	if (id instanceof Array) {
		id = id[0];
	}
	const _id = id;
	const { data, error } = useQuery({
		queryKey: ["deleteOne"],
		queryFn: () => deleteEmployee(_id),
	});

	toast.success(data?.message);
	toast.error(error?.message);
}
