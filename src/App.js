import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
// import TypeOfPokemon from "./components/TypeOfPokemon";

import SelectedPokemon from "./components/SelectedPokemon";
import Error from "./components/Error";

import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path={"/"}>
					<Home />
				</Route>
				<Route exact path={"/pokemon"}>
					<Pokemon />
					{/* <TypeOfPokemon /> */}
				</Route>
				<Route path={"/pokemon/:name"}>
					<SelectedPokemon />
				</Route>
				<Route
					path="/github"
					component={() => {
						window.location.href = "https://github.com/bsihame";
						return null;
					}}
				></Route>
				<Route
					path="/linkedin"
					component={() => {
						window.location.href = "https://linkedin.com";
						return null;
					}}
				></Route>
				<Route>
					<Error />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
