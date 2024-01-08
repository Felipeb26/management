import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomButton } from "../components/button";
import HeaderComponent from "../components/header";
import Loading from "../components/loading";
import { Actions, AlignItens, Card, Input } from "../components/style/styled";
import { Select, SelectContainer } from "../components/style/styled.select";
import { dates } from "../interfaces/date.interface";
import {
	findAllDepartments,
	findEmployeeById,
} from "../utils/axios.requests.util";


export default function EmployeeComponent() {
	const { id } = useParams();
	const navigate = useNavigate();
	const _id = id == undefined ? "" : id;

	const { data, error, isLoading } = useQuery({
		queryKey: ["employee"],
		queryFn: () => findEmployeeById(_id),
	});
	if (error) navigate("/");

	const { data: departments, error: departError } = useQuery({
		queryKey: ["departments"],
		queryFn: findAllDepartments,
	});

	toast.error(departError?.message);
	const [date, setDate] = useState(toDate(data?.birth_date) || today());
	const [showCalendar, setShowCalendar] = useState(false);

	const changeDate = (selectedDate: unknown) => {
		setDate(formatCalendarDate(selectedDate));
	};

	return (
		<>
			<Loading show={isLoading} />
			<HeaderComponent />

			<Card style={style_card}>
				<AlignItens>
					<label htmlFor="name">Name:</label>
					<Input
						type="text"
						id="name"
						placeholder={data?.name}
						autoComplete="given-name"
					/>
				</AlignItens>
				<AlignItens>
					<label htmlFor="sobrenome">Sobrenome:</label>
					<Input
						type="text"
						id="sobrenome"
						placeholder={data?.surname}
						autoComplete="family-name"
					/>
				</AlignItens>
				<AlignItens>
					<label htmlFor="email">Email:</label>
					<Input
						type="email"
						id="email"
						placeholder={data?.email}
						autoComplete="email"
					/>
				</AlignItens>
				<AlignItens>
					<label onClick={() => setShowCalendar(!showCalendar)}>
						Nascimento:
					</label>
					<Input
						id="nascimento"
						placeholder={date.toLocaleDateString("pt-br")}
						onClick={() => setShowCalendar(!showCalendar)}
					/>
				</AlignItens>
				{showCalendar && (
					<Calendar
						locale="pt-br"
						value={date}
						maxDate={new Date()}
						onChange={changeDate}
					/>
				)}
				<AlignItens>
					<label>Departamento:</label>
					<SelectContainer>
						<Select>
							<option>{data?.department}</option>
							{departments
								?.filter((it) => it.name !== data?.department)
								.map((obj, id) => {
									return <option key={id}>{obj.name}</option>;
								})}
						</Select>
						<IoIosArrowDown/>
					</SelectContainer>
				</AlignItens>
				<Actions>
					<CustomButton func={() => {}}>confirmar</CustomButton>
					<CustomButton func={() => {}}>limpar</CustomButton>
				</Actions>
			</Card>
		</>
	);
}

const style_card = { width: "50%", margin: "0 0 0 3rem", minWidth: "265px" };

const today = () => {
	const date = new Date();
	return new Date(date.getFullYear(), date.getMonth() + 1, date.getDay());
};

const toDate = (value: string | undefined) => {
	let date;
	if (value === undefined) {
		const actualDate = new Date();
		date = dates({
			day: actualDate.getDay(),
			month: actualDate.getMonth(),
			year: actualDate.getFullYear(),
		});
	} else {
		const values = value.split("/");
		date = dates({
			day: Number(values[0]),
			month: Number(values[1]),
			year: Number(values[2]),
		});
	}
	return new Date(date.year, date.month, date.day);
};

const formatCalendarDate = (valueDate: unknown) => {
	let value = JSON.stringify(valueDate);
	value = value.substring(0, value.indexOf("T"));
	value = value.replace('"', "");
	const values = value.split("-");
	const date = dates({
		year: Number(values[0]),
		month: Number(values[1]),
		day: Number(values[2]),
	});
	const data = new Date(date.year, date.month, date.day);
	return data;
};
