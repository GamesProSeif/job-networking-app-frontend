import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link,/* useParams */} from "react-router-dom";

function JobPage() {
	// const { jobid } = useParams();

	// fetch job

	const job = {
		id: "1",
		title: "Job title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptatum voluptates laborum dolorum placeat quae hic nostrum iste possimus architecto velit, aut molestiae sed quam quos consequuntur ipsum mollitia excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptatum voluptates laborum dolorum placeat quae hic nostrum iste possimus architecto velit, aut molestiae sed quam quos consequuntur ipsum mollitia excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptatum voluptates laborum dolorum placeat quae hic nostrum iste possimus architecto velit, aut molestiae sed quam quos consequuntur ipsum mollitia excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptatum voluptates laborum dolorum placeat quae hic nostrum iste possimus architecto velit, aut molestiae sed quam quos consequuntur ipsum mollitia excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptatum voluptates laborum dolorum placeat quae hic nostrum iste possimus architecto velit, aut molestiae sed quam quos consequuntur ipsum mollitia excepturi. ",
		employer: {
			id: "1",
			name: "John Doe",
		},
		company: {
			id: "1",
			name: "My Company"
		}
	};

	const employees = [
		{
			id: "1",
			name: "Pizza Lover",
			comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, modi aliquam rerum corporis consequuntur nobis. Impedit reprehenderit quaerat, atque itaque minus eum dolores officiis ad voluptatum ab tempora quasi fugit!"
		},
		{
			id: "2",
			name: "Burger Lover",
			comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, modi aliquam rerum corporis consequuntur nobis. Impedit reprehenderit quaerat, atque itaque minus eum dolores officiis ad voluptatum ab tempora quasi fugit!"
		},
		{
			id: "3",
			name: "Taco Lover",
			comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, modi aliquam rerum corporis consequuntur nobis. Impedit reprehenderit quaerat, atque itaque minus eum dolores officiis ad voluptatum ab tempora quasi fugit!"
		},
	];

	return (
		<>
			<h4>
				<Link style={{ textDecoration: "none" }} to={`/user/${job.employer.id}`}>{ job.employer.name }</Link>
				{" "}-{" "}
				<Link style={{ textDecoration: "none" }} to={`/company/${job.company.id}`}>{ job.company.name }</Link>
			</h4>
			<h2 className="mb-4">{ job.title }</h2>
			<p>{ job.description }</p>

			<Button variant="primary">Apply</Button>

			<hr />

			<h4 className="mb-4">Applied for</h4>

			<ListGroup variant="flush">
				{ employees.map(employee => (
					<ListGroupItem key={employee.id}>
						<Link
							style={{ textDecoration: "none" }}
							to={`/user/${employee.id}`}
						>{employee.name}</Link>
						<p>{ employee.comment }</p>
					</ListGroupItem>
				))}
			</ListGroup>
		</>
	);
}

export default JobPage;
