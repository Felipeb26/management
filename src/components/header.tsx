import { Link } from "react-router-dom";
import { Header, Img, Li, Nav, Ul } from "../components/style/styled.header";
import "../styles/header.scss";
import logo from "../assets/logo.png"

export default function HeaderComponent() {
	return (
		<>
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
					</Ul>
				</Nav>
			</Header>
		</>
	);
}
