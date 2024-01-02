import "./assets/styles.scss";
import { Container } from "react-bootstrap";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import FooterComponent from "./components/Footer";
import SigninPage from "./pages/Signin";
import SignUpPage from "./pages/SignUp";
import JobsPage from "./pages/Jobs";
import JobPage from "./pages/Job";
import CompanyPage from "./pages/Company";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import UserPage from "./pages/User";
import ProfilePage from "./pages/Profile";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="d-flex flex-column vh-100">
				<NavbarComponent />
				<div style={{ marginTop: "5em" }} />
				<Container>
					<Routes>
						<Route element={<HomePage />} path="/" />
						
						<Route element={<AboutPage />} path="/about" />
						<Route element={<PrivacyPolicyPage />} path="/privacypolicy" />
						<Route element={<SigninPage />} path="/signin" />
						<Route element={<SignUpPage />} path="/signUp" />
						<Route element={<JobsPage />} path="/jobs" />
						<Route element={<JobPage />} path="/jobs/:jobid" />
						<Route element={<CompanyPage />} path="/company/:companyid" />
						<Route element={<UserPage />} path="/user/:userid" />
						<Route element={<ProfilePage />} path="/profile" />

						<Route element={<NotFound />} path="*" />
					</Routes>
				</Container>
				<div className="flex-fill mt-auto mb-4" />
				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}

export default App;
