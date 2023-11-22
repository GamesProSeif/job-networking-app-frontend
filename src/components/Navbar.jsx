import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarComponent() {
	return (
		<Navbar bg="primary" fixed="top" collapseOnSelect expand="lg">
			<Container>
				<Navbar.Brand href="/">Job Networking App</Navbar.Brand>
				<Navbar.Toggle aria-controls="my-navbar-nav" />
				<Navbar.Collapse id="my-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Button variant="secondary" href="/signin">Sign in</Button>
						<Button variant="secondary" href="/signup">Sign Up</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
