export interface EmployeeModel {
	_id?: string;
	name: string;
	surname: string;
	email: string;
	birth_date: string;
	department: string;
	create_at?: string;
	update_at?: string;
}

export const EmployeeBuild = (data: EmployeeModel) => {
	return data;
};
