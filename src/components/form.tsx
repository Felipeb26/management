/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";
import { CustomButton } from "../components/button";
import { Actions, AlignItens, Input } from "../components/style/styled";
import { Select, SelectContainer } from "../components/style/styled.select";
import { EmployeeModel } from "../model/employee.model";
import { findAllDepartments } from "../utils/axios.requests.util";

type FormProps = {
	data?: EmployeeModel;
	onSubmit: (...value: any) => any;
	style_card?: React.CSSProperties | undefined;
	updateForm?: boolean;
};

export const CustomForm = (props: FormProps) => {
	const { register, handleSubmit } = useForm();

	const { data: departments, error: departError } = useQuery({
		queryKey: ["departments"],
		queryFn: findAllDepartments,
	});
	toast.error(departError?.message);
	const data = props.data;

	return (
		<>
			<AlignItens style={props.style_card}>
				<label htmlFor="name">Name:</label>
				<Input
					type="text"
					id="name"
					placeholder={data?.name}
					autoComplete="given-name"
					{...register("name")}
				/>
			</AlignItens>
			<AlignItens style={props.style_card}>
				<label htmlFor="sobrenome">Sobrenome:</label>
				<Input
					type="text"
					id="sobrenome"
					placeholder={data?.surname}
					autoComplete="family-name"
					{...register("surname")}
				/>
			</AlignItens>
			<AlignItens style={props.style_card}>
				<label htmlFor="email">Email:</label>
				<Input
					type="email"
					id="email"
					placeholder={data?.email}
					autoComplete="email"
					{...register("email")}
				/>
			</AlignItens>
			<AlignItens style={props.style_card}>
				<label htmlFor="nascimento">Nascimento:</label>
				<Input
					id="nascimento"
					placeholder={formatStringToDate(data?.birth_date)}
					type="date"
					{...register("birth_date")}
				/>
			</AlignItens>
			<AlignItens style={props.style_card}>
				<label>Departamento:</label>
				<SelectContainer>
					<Select {...register("department")}>
						<option>{data?.department}</option>
						{departments
							?.filter((it) => it.name !== data?.department)
							.map((obj, id) => {
								return <option key={id}>{obj.name}</option>;
							})}
					</Select>
					<IoIosArrowDown />
				</SelectContainer>
			</AlignItens>
			<Actions>
				{props.updateForm && (
					<CustomButton
						style={{ margin: "0 1rem", flex: 1 }}
						func={handleSubmit((it) =>
							props.onSubmit(data?._id, it, data)
						)}
					>
						confirmar
					</CustomButton>
				)}
				{!props.updateForm && (
					<CustomButton
						style={{ margin: "0 1rem", flex: 1 }}
						func={handleSubmit(props.onSubmit)}
					>
						confirmar
					</CustomButton>
				)}
				<CustomButton
					style={{ margin: "0 1rem", flex: 1 }}
					func={() => {}}
				>
					limpar
				</CustomButton>
			</Actions>
		</>
	);
};

const formatStringToDate = (value?: string) => {
	if (value == undefined) return;
	if (value.indexOf("/") <= 0) return "";
	const values = value.split("/");
	return `${values[2]}-${values[1]}-${values[0]}`;
};
