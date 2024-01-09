/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomForm } from "../components/form";
import HeaderComponent from "../components/header";
import Loading from "../components/loading";
import { Card } from "../components/style/styled";
import { EmployeeBuild, EmployeeModel } from "../model/employee.model";
import { findEmployeeById, updateEmployee } from "../utils/axios.requests.util";

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
				<Card style={style_card}>
					<CustomForm
						data={data}
						onSubmit={RequestUpdate}
						style_card={style_card}
					/>
				</Card>
			)}
		</>
	);
}

const style_card = { width: "50%", margin: "0 0 0 3rem", minWidth: "265px" };

function RequestUpdate(_id: string, data: any) {
	const body: EmployeeModel = EmployeeBuild({
		_id: _id,
		name: data.name,
		surname: data.surname,
		email: data.email,
		birth_date: data.birth_date,
		department: data.department,
		create_at: data.create_at,
		update_at: data.update_at,
	});
	const {
		data: res,
		error: updateError,
		isLoading: loading,
	} = useQuery({
		queryKey: ["updateEmployee"],
		queryFn: () => updateEmployee(_id, body),
	});

	return { res, updateError, loading };
}
