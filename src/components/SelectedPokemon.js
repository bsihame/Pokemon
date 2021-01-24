import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import "../css/SelectedPokemon.css";

const SelectedPokemon = (props) => {
	const { name } = useParams();
	const [pokemonInfo, setPokemonInfo] = useState({});
	const getPokemon = async (pokemon) => {
		try {
			const { data } = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${pokemon}`
			);

			let name = data.name;
			console.log(name + "Name");

			let frontImg = data["sprites"]["front_default"];
			let backImg = data["sprites"]["back_default"];
			console.log(backImg);
			console.log(frontImg);
			let type = data["types"].map((type) => <li>{type.type.name}</li>);

			setPokemonInfo({ name, backImg, frontImg, type });
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getPokemon(name);
	}, []);

	const [userName, setName] = useState();
	const [comment, setComment] = useState();
	const [userPosts, setUserPosts] = useState([]);
	const nameHandle = (e) => {
		setName(e.target.value);
	};

	const commentChange = (e) => {
		setComment(e.target.value);
	};

	const handleSubmit = () => {
		setUserPosts([{ userName, comment }, ...userPosts]);
		setName("");
		setComment("");
	};

	const handleClick = () => {
		if ("frontImg") {
		}
	};

	return (
		<div className="display">
			<div className="displayPoke">
				<div className="pokemonImage">
					<div className="image">
						<img key="" src={pokemonInfo.frontImg} className="frontPic"></img>

						<img src={pokemonInfo.backImg} className="backPic"></img>
					</div>
					<div className="submitBtn">
						{
							<input
								key={pokemonInfo.name}
								type="submit"
								value="Turn Pokemon"
								onClick={handleClick}
							/>
						}
					</div>
				</div>

				<div className="pokeInfo">
					<div className="pokemonName">
						<h2>{pokemonInfo.name}</h2>
					</div>

					<div className="type">
						<h2>Type:</h2>
					</div>

					<div className="typeName">{pokemonInfo.type}</div>
				</div>
			</div>
			<div className="divComment">
				<div className="form">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						className="displayComment"
					>
						<label>
							Name:
							<br />
							<input
								type="text"
								name="name"
								value={userName}
								onChange={nameHandle}
								className="userName"
							/>
						</label>
						<br />
						<label>
							Comment:
							<br />
							<input
								type="text"
								name="comment"
								value={comment}
								onChange={commentChange}
								className="comment"
							/>
						</label>
						<br />
						<input
							type="submit"
							value="Submit Comment"
							className="submitButton"
						/>
					</form>
				</div>
				<div className="post">
					{userPosts.map((post) => {
						return (
							<div>
								<h2>Comments</h2>
								<h2>Name : {post.userName}</h2>
								<h2>{post.comment}</h2>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SelectedPokemon;
