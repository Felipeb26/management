import { Departments } from "../model/departments";
import { EmployeeModel } from "../model/employee.model";
import { Message } from "../model/message.model";
import { EmployeeInstance } from "./axios.intercepter.utils";

export const findAllEmployee = async () => {
	const response = await EmployeeInstance.get<EmployeeModel[]>("");
	return response.data;
};
export const findEmployeeById = async (id:string) => {
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
