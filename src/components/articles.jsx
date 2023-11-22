import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function article() {
	return (
		<Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
			<span className="visually-hidden">unread messages</span>
		</Button>
	);
}

export default article;