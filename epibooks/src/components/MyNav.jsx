import {
	Nav,
	Container,
	Navbar,
	Form,
	Row,
	Col,
	Button,
} from "react-bootstrap";
import logo from "../logo.svg";
import navBarConfig from "./dataConfig/navBarConfig.json";
function MyNav() {
	return (
		<Navbar expand="md" data-bs-theme="dark" bg="dark">
			<Container fluid>
				<Navbar.Brand href="#">
					<img
						src={logo}
						className="App-logo"
						alt="logo"
						style={{ height: "50px" }}
					/>
					<span>Reactibooks</span>
				</Navbar.Brand>
				<Navbar.Toggle className="ms-auto" aria-controls="myNavbar" />

				<Navbar.Collapse
					id="myNavbar"
					className="justify-content-between"
				>
					<Nav>
						{navBarConfig.map((navItem, index) => {
							return (
								<Nav.Link
									href={navItem.link}
									key={`navItem-${index}`}
								>
									{navItem.name}
								</Nav.Link>
							);
						})}
					</Nav>
					{/* <Form>
						<Row className="justify-content-center">
							<Col xs="auto">
								<Form.Control
									type="text"
									placeholder="Cerca un libro qui"
									className="mr-sm-2"
								/>
							</Col>
							<Col xs="auto">
								<Button type="submit">Cerca</Button>
							</Col>
						</Row>
					</Form> */}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNav;
