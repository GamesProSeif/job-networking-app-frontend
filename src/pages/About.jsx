import ContactUs from "../components/Contact-Us";

function AboutPage() {
	return (
		<>
			<section>
				<h2>About Us</h2>
				<p>
					Networking Application is a social networking
					platform that helps professionals connect with each other to
					find jobs, learn new skills, and grow their careers.
				</p>

				<p>
					We believe that everyone should have the opportunity to
					reach their full potential, and we&apos;re committed to making
					Job Networking Application Name the best place for
					professionals to connect and succeed.
				</p>
			</section>

			<section>
				<h2>Our Mission</h2>
				<p>
					To empower professionals to achieve their career goals by
					providing them with the tools and resources they need to
					connect, collaborate, and learn.
				</p>
			</section>

			<section>
				<h2>Our Values</h2>
				<ul>
					<li>Empowerment</li>
					<li>Connection</li>
					<li>Collaboration</li>
					<li>Learning</li>
					<li>Growth</li>
				</ul>
			</section>

			<hr />

			<h2>Contact Us</h2>
			<ContactUs />
		</>
	);
}

export default AboutPage;
