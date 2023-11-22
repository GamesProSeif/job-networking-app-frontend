import Video from "../components/Video";
import Engineering from "../components/Engineering";
import ContactUs from "../components/Contact-Us";
import bag from "../components/articles";

function HomePage() {
	return (
		<>
			<h1>Homepage</h1>
			{/* <Video />  */}

			<h4>
				"Welcome to Job Networking Application, your gateway to career
				connections and professional growth! We understand the power of
				meaningful connections in shaping your professional journey. Our
				job networking platform is designed to seamlessly connect
				ambitious individuals with exciting opportunities and
				like-minded professionals."
			</h4>
			<hr></hr>
			<h1>Explore collaborative articles</h1>
			<bag />
			<hr />
			<p>
				We're unlocking community knowledge in a new way. Experts add
				insights directly into each article, started with the help of
				AI.
			</p>
			<hr></hr>
			<h1>Find the right job or internship for you</h1>
			<Engineering />
			<hr />
			<h1>Find the top software resources.</h1>
			<hr />
			<h1>
				Inform those who matter that you are available for employment.
			</h1>
			<p>
				You may notify recruiters in private or openly share with the
				LinkedIn community that you are seeking new chances for
				employment by using the Open To Work tool.
			</p>

			<hr />

			<h1>Contact Us</h1>
			<ContactUs />
		</>
	);
}

export default HomePage;
