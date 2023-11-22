import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function JobComponent({ job }) {
	job = job || {
		id: "1",
		title: "Job title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptatum voluptates laborum dolorum placeat quae hic nostrum iste possimus architecto velit, aut molestiae sed quam quos consequuntur ipsum mollitia excepturi.",
		employer: "John Doe",
		company: "My Company"
	};

	return (
		<>
			<Link to={ "/jobs/" + job.id } style={{ textDecoration: "none" }}>
				<Card>
					<Card.Body>
						<Card.Title>{ job.title }</Card.Title>
						<Card.Subtitle className="text-muted">{ job.employer + " - " + job.company }</Card.Subtitle>
						<hr />
						{/* <Card.Text>{ job.description.slice(0, 100) + "..." }</Card.Text> */}
						<Card.Text className="text-truncate">{ job.description }</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</>
	);
}

export default JobComponent;
