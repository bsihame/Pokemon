import React from "react";
import { NavLink } from "react-router-dom";
import pokemonLogo from "../logo/pokemonLogo.png";
import "../css/NavBar.css";

const NavBar = () => {
	return (
		<>
			<nav>
				<div className="navLeft">
					<img src={pokemonLogo} alt="logo" className="navLogo" />
				</div>

				<div className="navRight">
					<NavLink className="inactive" activeClassName="active" exact to={"/"}>
						Home
					</NavLink>
					<NavLink
						className="inactive"
						activeClassName="active"
						exact
						to={"/pokemon"}
					>
						Pokemon By Type
					</NavLink>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
