import "./assets/styles.scss";
import { Container } from "react-bootstrap";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import FooterComponent from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className="d-flex flex-column vh-100">
				<NavbarComponent />
				<div style={{ marginTop: "5em" }} />
				<Container>
					<Routes>
						<Route element={<HomePage />} path="/" />
						<Route element={<AboutPage />} path="/about" />

						<Route element={<NotFound />} path="*" />
					</Routes>
				</Container>
				<div className="flex-fill mt-auto" />
				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}

export default App;
