/* eslint-disable @typescript-eslint/no-unused-vars */
import { RouterProvider } from "react-router-dom";
import Router from "./routes/routes";

function App() {
	return (
		<>
			<RouterProvider router={Router} />
		</>
	);
}

export default App;
