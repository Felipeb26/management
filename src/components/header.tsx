import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { ToastItem, toast } from "react-toastify";
import logo from "../assets/logo.png";
import {
	H1,
	Hamburguer,
	Header,
	Img,
	Li,
	Nav,
	Ul
} from "../components/style/styled.header";
import "../styles/header.scss";

export default function HeaderComponent() {
	toast.onChange((payload: ToastItem) => {
		if (payload.type && payload.type.startsWith("success")) {
			setTimeout(() => location.reload(), 8000);
		}
	});

	const [menuOpen, setMenuOpen] = useState(false);
	const [theme, setTheme] = useState(false);
	const [style, setStyle] = useState<React.CSSProperties>();
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
				<NavLink to="/">
					<Img src={logo} alt="imagem logo" />
				</NavLink>
				<H1>management</H1>
				<Hamburguer style={style}>
					{menuOpen && (
						<span
							onClick={() => {
								setMenuOpen(!menuOpen);
								setStyle({ padding: "0" });
							}}
						>
							<IoCloseSharp />
						</span>
					)}
					{!menuOpen && (
						<span
							onClick={() => {
								setMenuOpen(!menuOpen);
								setStyle({ top: "5rem", padding: "0 0.5rem" });
							}}
						>
							<CiMenuBurger />
						</span>
					)}
					{menuOpen && (
						<div>
							<ul>
								<Li>
									<NavLink to="/">login</NavLink>
								</Li>
								<Li>
									<NavLink to="/employees">employees</NavLink>
								</Li>
								<Li>
									<NavLink to="/contato">contato</NavLink>
								</Li>
								<Li>
									<NavLink to="#">about</NavLink>
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
					)}
				</Hamburguer>
				<Nav>
					<Ul>
						<Li>
							<NavLink to="/">login</NavLink>
						</Li>
						<Li>
							<NavLink to="/employees">employees</NavLink>
						</Li>
						<Li>
							<NavLink to="/contato">contato</NavLink>
						</Li>
						<Li>
							<NavLink to="#">about</NavLink>
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

			<main>
				<Outlet />
			</main>
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
