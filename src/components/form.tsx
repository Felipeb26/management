/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ZodObject, ZodString, z } from "zod";
import { CustomButton } from "../components/button";
import {
	Actions,
	AlignItens,
	AlignItensCol,
	Input,
} from "../components/style/styled";
import { Departments } from "../model/departments";
import { EmployeeModel } from "../model/employee.model";
import { findAllDepartments } from "../utils/axios.requests.util";
import { SelectComponent, SelectionOption } from "./select";

type FormProps = {
	data?: EmployeeModel;
	onSubmit: (...value: any) => any;
	style_card?: React.CSSProperties | undefined;
	updateForm?: boolean;
	userSchema: ZodObject<{
		name: ZodString;
		surname: ZodString;
		email: ZodString;
		birth_date: ZodString;
		department: ZodString;
	}>;
};

export const CustomForm = (props: FormProps) => {
	const Schema = props.userSchema;
	type UserForm = z.infer<typeof Schema>;
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<UserForm>({
		resolver: zodResolver(props.userSchema),
	});

	const { data: departments, error: departError } = useQuery({
		queryKey: ["departments"],
		queryFn: findAllDepartments,
	});
	toast.error(departError?.message);
	const data = props.data;

	const handleReset = () => {
		reset({
			name: "",
			surname: "",
			email: "",
			department: "",
			birth_date: "",
		});
	};

	const options = departmentToOption(data?.department, departments);
	const actualOption = options[0];
	const [select, setSelect] = useState<typeof actualOption | undefined>(
		actualOption
	);

	return (
		<>
			<form>
				<AlignItensCol>
					<AlignItens style={props.style_card}>
						<label htmlFor="name">Name:</label>
						<Input
							type="text"
							id="name"
							placeholder={data?.name || "nome"}
							autoComplete="given-name"
							{...register("name")}
						/>
					</AlignItens>
					{errors.name?.message && <span>{errors.name.message}</span>}
				</AlignItensCol>

				<AlignItensCol>
					<AlignItens style={props.style_card}>
						<label htmlFor="sobrenome">Sobrenome:</label>
						<Input
							type="text"
							id="sobrenome"
							placeholder={data?.surname || "sobrenome"}
							autoComplete="family-name"
							{...register("surname")}
						/>
					</AlignItens>
					{errors.surname?.message && (
						<span>{errors.surname.message}</span>
					)}
				</AlignItensCol>

				<AlignItensCol>
					<AlignItens style={props.style_card}>
						<label htmlFor="email">Email:</label>
						<Input
							type="email"
							id="email"
							placeholder={data?.email || "email"}
							autoComplete="email"
							{...register("email")}
						/>
					</AlignItens>
					{errors.email?.message && (
						<span>{errors.email.message}</span>
					)}
				</AlignItensCol>

				<AlignItensCol>
					<AlignItens style={props.style_card}>
						<label htmlFor="nascimento">Nascimento:</label>
						<Input
							id="nascimento"
							placeholder={formatStringToDate(
								data?.birth_date || "2000-01-01"
							)}
							type="date"
							{...register("birth_date")}
						/>
					</AlignItens>
					{errors.birth_date?.message && (
						<span>{errors.birth_date.message}</span>
					)}
				</AlignItensCol>

				<SelectComponent
					options={departmentsToOptions(
						data?.department,
						departments
					)}
					value={select}
					onChange={(v) => {
						setSelect(v);
						if (v?.label) {
							Schema._input.department.replace(
								/[\s\S]*/g,
								v.label
							);
						}
					}}
				/>
				{errors.department?.message && (
					<span>{errors.department.message}</span>
				)}
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
						type="reset"
						style={{ margin: "0 1rem", flex: 1 }}
						func={handleReset}
					>
						limpar
					</CustomButton>
				</Actions>
			</form>
		</>
	);
};

const formatStringToDate = (value?: string) => {
	if (value == undefined) return;
	if (value.indexOf("/") <= 0) return "";
	const values = value.split("/");
	return `${values[2]}-${values[1]}-${values[0]}`;
};

function departmentsToOptions(
	department: string | undefined,
	departments?: Departments[],
	filter?: boolean
): SelectionOption[] {
	// eslint-disable-next-line prefer-const
	let options: any[] = [];

	if (filter) {
		departments
			?.filter((it) => it.name !== department)
			.map((obj, index) => {
				const option = {
					label: obj.name,
					value: index,
				};
				options.push(option);
			});
		return options;
	}

	departments?.map((it, index) => {
		const option = {
			label: it.name,
			value: index,
		};
		options.push(option);
	});
	return options;
}

function departmentToOption(
	department: string | undefined,
	departments?: Departments[]
) {
	const options = departmentsToOptions(department, departments);
	const value = options.filter(
		(it) => it.label.trim() === department?.trim()
	);
	return value;
}
