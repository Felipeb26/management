import { EmployeeModel } from "./employee.model";

export interface Props {
    closeFn: ()=> unknown;
	function: () => unknown;
    params?: string[]
}

export interface UpdateEmployee{
    function: () => unknown,
    employee: EmployeeModel
}