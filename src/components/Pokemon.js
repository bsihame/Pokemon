import React, { useState, useEffect } from "react";
import "../css/Pokemon.css";
import axios from "axios";

const Pokemon = () => {
	const [types, setTypes] = useState([]);
	const [targetType, setTargetType] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.get(targetType);
			console.log("RESULT", res.data.pokemon);
			setSearchResult(res.data.pokemon);
		} catch (error) {
			setError(error);
			console.log(error);
		}
	};

	const typeOfPokemon = async () => {
		try {
			const { data } = await axios.get(`https://pokeapi.co/api/v2/type/`);
			setTypes(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		typeOfPokemon();
	}, []);

	let errorDiv = null;
	if (error) {
		errorDiv = (
			<div className="err">
				<div onClick={() => setError("")}> (X) </div>
				No results found
			</div>
		);
	}

	let results = `NO RESULTS FOUND`;
	if (searchResult.length) {
		results = searchResult.map((result) => {
			return (
				<a key={result.pokemon.url} href={`/pokemon/${result.pokemon.name}`}>
					<button
						className="showList"
						onClick={(e) => console.log(e.target.value)}
					>
						{result.pokemon.name}
					</button>
				</a>
			);
		});
	}

	return (
		<div className="divForm">
			<form onSubmit={handleSubmit} className="pokemonForm">
				<select
					type="text"
					value={targetType}
					onChange={(e) => setTargetType(e.target.value)}
					className="searchPokemon"
				>
					<option value={""} disabled className="listType">
						Select Type
					</option>

					{types.map((type) => (
						<option key={type.url} value={type.url} className="listType">
							{type.name}
						</option>
					))}
				</select>

				<input type="submit" value="Submit" className="submitButton" />
			</form>

			{errorDiv}
			{results}
		</div>
	);
};

export default Pokemon;
