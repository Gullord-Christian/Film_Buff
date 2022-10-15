import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
	const [like, setLike] = useState(false);
	const [saved, setSaved] = useState(false);

	const { user } = UserAuth();

	const movieID = doc(db, "users", `${user?.email}`);

	const saveShow = async () => {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: item.id,
					title: item.title,
					img: item.backdrop_path,
				}),
			});
		} else {
			alert("You must be signed in to save a show or movie!");
		}
	};

	const IMG_API = "https://image.tmdb.org/t/p/w500/";

	return (
		<div className="cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w-[200[x] w-[160px] relative p-2">
			{item?.backdrop_path ? (
				<img
					className="w-full h-auto block"
					src={IMG_API + item?.backdrop_path}
					alt={item?.title}
				/>
			) : (
				<img
					className="w-full h-auto block"
					src="/static/images/movie.jpg"
					alt={item?.original_title}
				/>
			)}

			<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-[#FFFAF0]">
				<Link to={`/movie/${item.id}`}>
					<p className="whitespace-normal text-sm md:text-sm font-bold flex justify-center items-center h-full text-center">
						{item?.original_title}
						{item?.original_name}
					</p>
				</Link>
				<p onClick={saveShow}>
					{like ? (
						<FaHeart className="absolute top-4 left-4 text-gray-400 " />
					) : (
						<FaRegHeart className="absolute top-4 left-4 text-gray-400 " />
					)}
				</p>
			</div>
		</div>
	);
};

export default Movie;
