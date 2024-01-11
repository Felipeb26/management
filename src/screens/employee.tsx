/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomForm } from "../components/form";
import HeaderComponent from "../components/header";
import Loading from "../components/loading";
import { AlignItens, Card } from "../components/style/styled";
import { EmployeeBuild, EmployeeModel } from "../model/employee.model";
import { findEmployeeById, updateEmployee } from "../utils/axios.requests.util";
import { Optional } from "../utils/objects";
import { H1 } from "../components/style/styled";

export default function EmployeeComponent() {
	const { id } = useParams();
	const _id = id == undefined ? "" : id;

	const { data, error, isLoading } = useQuery({
		queryKey: ["employee"],
		queryFn: () => findEmployeeById(_id),
	});
	toast.error(error?.message);

	return (
		<>
			<Loading show={isLoading} />
			<HeaderComponent />
			{data && (
				<>
					<AlignItens style={style_body}>
						<Card style={style_card}>
							<CustomForm
								data={data}
								onSubmit={RequestUpdate}
								style_card={style_align_card}
								updateForm={true}
							/>
						</Card>
						<Card
							style={{
								width: "30%",
								margin: "0.5rem 1.5rem",
								minWidth: "350px",
								height: "25rem",
								minHeight: "10rem",
							}}
						>
							<H1>dados anteriores</H1>
							<AlignItens>
								<p>nome:</p>
								<p>{data.name}</p>
							</AlignItens>
							<AlignItens>
								<p>sobrenome:</p>
								<p>{data.surname}</p>
							</AlignItens>
							<AlignItens>
								<p>email:</p>
								<p>{data.email}</p>
							</AlignItens>
							<AlignItens>
								<p>data de nascimento:</p>
								<p>{data.birth_date}</p>
							</AlignItens>
							<AlignItens>
								<p>departamento:</p>
								<p>{data.department}</p>
							</AlignItens>
						</Card>
					</AlignItens>
				</>
			)}
		</>
	);
}

const style_align_card: React.CSSProperties = {
	padding: "0.5rem",
};

const style_card: React.CSSProperties = {
	width: "45%",
	margin: "0.5rem 1.5rem",
	minWidth: "350px",
	height: "25rem",
	minHeight: "10rem",
};
const style_body: React.CSSProperties = {
	flexWrap: "wrap",
	justifyContent: "center",
};

function RequestUpdate(_id: string, data: any, value: EmployeeModel) {
	const body: EmployeeModel = EmployeeBuild({
		_id: Optional(_id, value._id),
		name: Optional(data.name, value.name),
		surname: Optional(data.surname, value.surname),
		email: Optional(data.email, value.email),
		birth_date: formatDate(Optional(data.birth_date, value.birth_date)),
		department: Optional(data.department, value.department),
		create_at: Optional(data.create_at, value.create_at),
		update_at: Optional(data.update_at, value.update_at),
	});
	console.log(body);
	console.log(value);
	updateEmployee(_id, body)
		.then(() =>
			toast.success(`Usuario ${body.name} atualizado com sucesso`)
		)
		.catch((err: Error) => {
			console.log(err);
		});
}

function formatDate(value: string): string {
	const values = value.split("-");
	const [year, month, day] = values;
	return `${day}/${month}/${year}`;
}
