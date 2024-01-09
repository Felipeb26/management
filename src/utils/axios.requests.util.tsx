import { QueryFunction, useQuery } from "@tanstack/react-query";
import { Departments } from "../model/departments";
import { EmployeeModel } from "../model/employee.model";
import { Message } from "../model/message.model";
import { EmployeeInstance } from "./axios.intercepter.utils";

export const findAllEmployee = async () => {
	const response = await EmployeeInstance.get<EmployeeModel[]>("");
	return response.data;
};
export const findEmployeeById = async (id: string) => {
	const response = await EmployeeInstance.get<EmployeeModel>(id);
	return response.data;
};

export const deleteEmployee = async (id: string) => {
	const response = await EmployeeInstance.delete<Message>(`?id=${id}`);
	return response.data;
};

export const findAllDepartments = async () => {
	const response = await EmployeeInstance.get<Departments[]>("/departments");
	return response.data;
};

export const saveEmployee = async (body: EmployeeModel) => {
	const response = await EmployeeInstance.post("", body);
	return response.data;
};
export const updateEmployee = async (_id: string, body: EmployeeModel) => {
	const response = await EmployeeInstance.post(_id, body);
	return response.data;
};

export function GlobalRequest(key: string, query: QueryFunction) {
	return useQuery({
		queryKey: [key],
		queryFn: query,
	});
}
