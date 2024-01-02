import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfilePage() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		async function getUser() {
			const res = await fetch("http://localhost:5000/me", { credentials: "include" });
			if (res.ok) {
				const json = await res.json();
				setUser(json);
			}
		}

		getUser();
	}, []);

	return (
		<>
			{
				user ?
					<>
						<h2>{ user.NAME }</h2>
						<h3>Reset your password</h3>
						<form action="http://localhost:5000/reset-password" method="post">
							<label htmlFor="new_password">New Password</label>
							<input
								className="form-control my-2"
								type="password"
								id="new_password"
								name="new_password"
								placeholder="Enter new password"
							/>
							<Button type="submit">Reset</Button>
						</form>
					</>
					:
					<>
						<Link to="/signin">Sign in to view this page</Link>
					</>
			}
		</>
	);
}

export default ProfilePage;