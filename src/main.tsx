import { QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import queryClient from "./utils/queryClient.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		{setTheme()}
		<QueryClientProvider client={queryClient}>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
			/>
			<App/>
		</QueryClientProvider>
	</>
);
//TODO descobrir para que serve o React.StrictMode
function setTheme() {
	const body = document.querySelector("body");
	body?.setAttribute("data-theme", "light");
	if (body) {
		body.style.background = "var(--white)";
	}
}
