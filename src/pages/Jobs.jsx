import { FormControl, Stack } from "react-bootstrap";
import JobComponent from "../components/Job";

function JobsPage() {
	return (
		<>
			<h1 className="mb-4">Jobs</h1>

			<FormControl className="mb-3" placeholder="Search jobs" />

			<Stack gap={3}>
				<JobComponent />
				<JobComponent />
				<JobComponent />
				<JobComponent />
			</Stack>
		</>
	);
}

export default JobsPage;
