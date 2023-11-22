import { ListGroup, ListGroupItem, Stack } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import JobComponent from "../components/Job";

function CompanyPage() {
	const { companyid } = useParams();

	// Fetch company

	const company = {
		id: companyid,
		name: "My Company",
		bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, corrupti eligendi cupiditate accusantium aperiam fuga blanditiis. Impedit sit laborum et eius praesentium vel, dignissimos, fuga nam tenetur quae saepe nesciunt?",
		employers: [
			{
				id: "1",
				name: "John Doe"
			},
			{
				id: "2",
				name: "Jack Smith"
			}
		],
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
			<h1>{ company.name }</h1>
			<p>{ company.bio }</p>

			<hr />

			<h4 className="mb-2">Employers</h4>
			<ListGroup variant="flush">
				{ company.employers.map(employer => (
					<ListGroupItem key={employer.id}>
						<Link style={{ textDecoration: "none" }} to={`/user/${employer.id}`}>{ employer.name }</Link>
					</ListGroupItem>
				))}
			</ListGroup>

			<hr />

			<h4 className="mb-4">Jobs</h4>

			<Stack gap={3}>
				{ company.jobs.map(job => (
					<JobComponent key={job.id} />
				))}
			</Stack>
		</>
	);
}

export default CompanyPage;
