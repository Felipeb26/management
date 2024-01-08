import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContatosComponent from "../screens/contatos";
import EmployeesComponent from "../screens/employees";
import EmployeeComponent from "../screens/employee";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "employee/:id",
		element: <EmployeeComponent />,
	},
	{
		path: "employees",
		element: <EmployeesComponent />,
	},
	{
		path: "contato",
		element: <ContatosComponent />,
	},
]);

export default Router;
