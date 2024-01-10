import { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastItem, toast } from "react-toastify";
import logo from "../assets/logo.png";
import { Header, Img, Li, Nav, Ul } from "../components/style/styled.header";
import "../styles/header.scss";

export default function HeaderComponent() {
	toast.onChange((payload: ToastItem) => {
		if (payload.type && payload.type.startsWith("success")) {
			setTimeout(() => location.reload(), 15000);
		}
	});

	const [theme, setTheme] = useState(false);

	function startTheme() {
		const isDark = localStorage.getItem("data-theme");
		if (isDark?.match("true")) {
			darkMode();
		} else {
			lightMode();
		}
	}

	function toggleTheme() {
		if (theme) {
			darkMode();
		} else {
			lightMode();
		}
	}

	return (
		<>
			{startTheme()}
			<Header>
				<Link to="/">
					<Img src={logo} alt="imagem logo" />
				</Link>
				<h1>management</h1>
				<Nav>
					<Ul>
						<Li>
							<Link to="/">login</Link>
						</Li>
						<Li>
							<Link to="/employees">employees</Link>
						</Li>
						<Li>
							<Link to="/contato">contato</Link>
						</Li>
						<Li>
							<Link to="#">about</Link>
						</Li>
						<Li>
							<span
								onClick={() => {
									setTheme(!theme);
									toggleTheme();
								}}
							>
								<FaRegSun />
							</span>
						</Li>
					</Ul>
				</Nav>
			</Header>
		</>
	);
}

const darkMode = () => {
	document.querySelector("body")?.setAttribute("data-theme", "dark");
	localStorage.setItem("data-theme", "true");
};
const lightMode = () => {
	document.querySelector("body")?.setAttribute("data-theme", "light");
	localStorage.setItem("data-theme", "false");
};
