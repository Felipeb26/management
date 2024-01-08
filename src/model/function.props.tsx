import { EmployeeModel } from "./employee.model";

export interface Props {
	function: () => unknown;
    params?: string[]
}

export interface UpdateEmployee{
    function: () => unknown,
    employee: EmployeeModel
}