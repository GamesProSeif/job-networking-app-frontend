// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";
import JobComponent from "../components/Job";

function UserPage() {
	// const { userid } = useParams();
	// Fetch user

	const user = {
		id: "1",
		name: "John Doe",
		bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus magni eligendi minima reprehenderit architecto quod sapiente ea recusandae labore a saepe id magnam quasi, suscipit aut debitis ipsum eaque.",
		company: {
			id: "1",
			name: "My Company"
		},
		jobs: [
			{
				id: "1"
			},
			{
				id: "2"
			},
			{
				id: "3"
			}
		]
	};

	return (
		<>
			<h4>{ user.name }</h4>
			<p>{ user.bio }</p>
			<p>Company: <Link to={`/company/${user.company.id}`}>{ user.company.name }</Link></p>

			<hr />

			<h4 className="mb-4">Jobs Offered</h4>

			<Stack gap={3}>
				{ user.jobs.map(job => (
					<JobComponent key={job.id} />
				))}
			</Stack>
		</>
	);
}

export default UserPage;
