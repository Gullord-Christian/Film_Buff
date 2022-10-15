import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Requests";
import { Link } from "react-router-dom";

const Main = () => {
	const [movies, setMovies] = useState([]);

	const movie = movies[Math.floor(Math.random() * movies.length)];

	useEffect(() => {
		axios.get(requests.requestPopular).then((res) => {
			setMovies(res.data.results);
			console.log(movies);
		});
	}, []);

	const trucateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	};
	const IMG_API = "https://image.tmdb.org/t/p/original";

	return (
		<div className="w-full h-[550px] text-[#FFFAF0]">
			<div className="w-full h-full">
				<div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
				<img
					className="w-full h-full object-cover"
					src={IMG_API + movie?.backdrop_path}
					alt={movie?.title}
				/>
				<div className="absolute w-full top-[20%] p-4 md:p-8">
					<Link to={`/movie/${movie?.id}`}>
						<h1 className="text-3xl md:text-5xl font-bold">
							{movie?.title}
						</h1>
					</Link>
					<div className="py-4">
						<button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded-xl">
							Play
						</button>
						<button className="border text-[#FFFAF0] ml-4 border-gray-300 py-2 px-5 rounded-xl">
							Watch Later
						</button>
					</div>
					<p className="text-gray-400 text-sm">
						Released: {movie?.release_date}
					</p>
					<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
						{trucateString(movie?.overview, 175)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
