import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Engineering() {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="src\assets\Images\Internship-Engineering.jpg"
			/>
			<Card.Body>
				<Card.Title>Engineering</Card.Title>
				<Card.Text>
					&quot;Precision meets innovation in our engineering realm. From
					designing structures that touch the sky to crafting
					intricate solutions for complex challenges, our engineers
					are the architects of tomorrow.&quot;
				</Card.Text>
				<Button as={Link} variant="primary" to="/jobs">
					Check it out
				</Button>
			</Card.Body>
		</Card>
	);
}

export default Engineering;
