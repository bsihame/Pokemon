import React from "react";
import "../css/Home.css";

const Home = () => {
	return (
		<div className="welcomePage">
			<div className="homeContainer">
				<h2 className="title">Welcome to my Pokemon App!</h2>
				<br />
				<h1 className="description">
					This App was created by Sihame Bazi. Check out all the different
					pokemon and select your favorites to find ou more about them!
					<h2 className="enjoy">enjoy!!</h2>
				</h1>
			</div>
		</div>
	);
};

export default Home;
