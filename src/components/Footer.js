import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
	return (
		<>
			<div className="navFooterContainer">
				<nav className="text">
					<NavLink
						// className="git"
						className="inactiveFooter"
						activeClassName="activeFooter"
						exact
						to={"/github"}
					>
						Github
					</NavLink>
					<NavLink
						className="inactiveFooter"
						activeClassName="activeFooter"
						exact
						to={"/linkedIn"}
					>
						LinkedIn
					</NavLink>
				</nav>
			</div>
		</>
	);
};

export default Footer;
