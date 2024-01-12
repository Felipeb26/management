import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import ContatosComponent from "../screens/contatos";
import EmployeeComponent from "../screens/employee";
import EmployeesComponent from "../screens/employees";
import ErrorScreen from "../screens/error.screen";
import Home from "../screens/home";
import HeaderComponent from "../components/header";

const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/management/" element={<HeaderComponent />}>
			<Route index element={<Home />} />
			<Route
				path="/management/employee/:id"
				element={<EmployeeComponent />}
			/>
			<Route
				path="/management/employees"
				element={<EmployeesComponent />}
			/>
			<Route path="/management/contato" element={<ContatosComponent />} />
			<Route path="*" element={<ErrorScreen />} />
		</Route>
	)
);

export default Router;
