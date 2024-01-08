import { QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import Router from "./routes/routes.tsx";
import queryClient from "./utils/queryClient.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		<QueryClientProvider client={queryClient}>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
			/>
			<RouterProvider router={Router} />
		</QueryClientProvider>
	</>
);
//TODO descobrir para que serve o React.StrictMode
