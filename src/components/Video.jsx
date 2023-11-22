function Video() {
	return (
		<div className='hero-container'>
			<video src="src\assets\Videos\video-2.mp4" autoPlay loop muted />
			<h1>YOUR FUTURE AWAITS</h1>
			<p>What are you waiting for?</p>
			<div className="hero-btns">
				{/* <button className='btns' buttonStyle='btn--outline'
					buttonSize='btn--large'>GET STARTED</button>

				<button className='btns' buttonStyle='btn--primary'
					buttonSize='btn--large'>WATCH TUTORIAL<i className='far fa-play-circle'/> */}
				{/* </button> */}
			</div>
		</div>
	);
}

export default Video;
