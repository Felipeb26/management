import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastItem, toast } from "react-toastify";
import logo from "../assets/logo.png";
import {
	H1,
	Hamburguer,
	Header,
	Img,
	Li,
	Nav,
	Ul,
} from "../components/style/styled.header";
import "../styles/header.scss";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import "./header.scss"

export default function HeaderComponent() {
	toast.onChange((payload: ToastItem) => {
		if (payload.type && payload.type.startsWith("success")) {
			setTimeout(() => location.reload(), 15000);
		}
	});

	const [menuOpen, setMenuOpen] = useState(false);
	const [theme, setTheme] = useState(false);
	const moon = <FaRegMoon />;
	const sun = <FaRegSun />;

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
				<H1>management</H1>
				<Hamburguer>
					{menuOpen && <IoCloseSharp />}
					{!menuOpen && <CiMenuBurger />}
					<div>
						<ul>
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
									{theme && sun}
									{!theme && moon}
								</span>
							</Li>
						</ul>
					</div>
				</Hamburguer>
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
								{theme && sun}
								{!theme && moon}
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
