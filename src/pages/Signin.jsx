import { Button, Card, Form, FormControl, FormLabel, Stack } from "react-bootstrap";

function SigninPage() {
	return (
		<div className="d-flex justify-content-center">
			<Card className="w-100 w-lg-50 shadow">
				<Card.Header as="h4">Sign In</Card.Header>
				<Card.Body>
					<Form>
						<Stack gap={2} className="mb-3">
							<Form.Group>
								<FormLabel>Email</FormLabel>
								<FormControl placeholder="Enter email" />
							</Form.Group>
							<Form.Group>
								<FormLabel>Password</FormLabel>
								<FormControl placeholder="Enter password" type="password" />
							</Form.Group>
						</Stack>
						<Button variant="primary" className="w-100">Sign In</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default SigninPage;
