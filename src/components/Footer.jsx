import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooterComponent() {
	return (
		<footer style={{ background: "rgba(0, 0, 0, 0.1)"}} className="p-3">
			<p className="text-center pt-2">
				&copy; Job Networking App - All Rights Reserved 2023
			</p>
			<Stack gap={2} className="text-center">
				<Link to="/privacypolicy">Privacy Policy</Link>
			</Stack>
		</footer>
	);
}

export default FooterComponent;
