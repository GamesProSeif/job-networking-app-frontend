import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
	return (
		<Navbar bg="primary" fixed="top" collapseOnSelect expand="lg">
			<Container>
				<Navbar.Brand href="/">Job Networking App</Navbar.Brand>
				<Navbar.Toggle aria-controls="my-navbar-nav" />
				<Navbar.Collapse id="my-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/about">About</Nav.Link>
						<Button as={Link} variant="secondary" to="/signin">Sign in</Button>
						<Button as={Link} variant="secondary" to="/signup" className="ms-2">Sign Up</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
