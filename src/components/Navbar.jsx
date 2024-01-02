import { useEffect, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultProfile from "../assets/Images/default.jpg";

export default function NavbarComponent() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		async function getUser() {
			const res = await fetch("http://localhost:5000/me", { credentials: "include" });
			if (res.ok) {
				const json = await res.json();
				setUser(json);
			}
		}

		getUser();
	}, []);

	return (
		<Navbar bg="primary" fixed="top" collapseOnSelect expand="lg">
			<Container>
				<Navbar.Brand href="/">Job Networking App</Navbar.Brand>
				<Navbar.Toggle aria-controls="my-navbar-nav" />
				<Navbar.Collapse id="my-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/about">About</Nav.Link>
						{
							user ?
								<>
									<Link to="/profile">
										<Image src={defaultProfile} roundedCircle height={40} className="me-2" />
									</Link>
									<Button variant="secondary" href="http://localhost:5000/logout">Log out</Button>
								</>
								:
								<>
									<Button as={Link} variant="secondary" to="/signin">Sign in</Button>
									<Button as={Link} variant="secondary" to="/signup" className="ms-2">Sign Up</Button>
								</>
						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
