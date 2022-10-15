import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const SavedMovie = () => {
	const [movies, setMovies] = useState([]);
	const { user } = UserAuth();

	const slideLeft = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	useEffect(() => {
		onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
			setMovies(doc.data()?.savedShows);
		});
	}, [user?.email]);

	// firebase needs to delete an array on client side
	const movieRef = doc(db, "users", `${user?.email}`);

	// using passed Id to filter out what we passed in on the deleteMovie function
	const deleteMovie = async (passedID) => {
		try {
			const result = movies.filter((item) => item.id !== passedID);
			await updateDoc(movieRef, {
				savedShows: result,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">
				My movies and shows
			</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>

				<div
					id={"slider"}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scrolls-mooth scrollbar-hide relative">
					{movies?.map((item) => (
						<div
							key={item.id}
							className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
							<img
								className="w-full h-auto block"
								src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
								alt={item?.title}
							/>
							<div className="absolute top-0 left-0 w-full h-full hover:bg-[#181818]/80 opacity-0 hover:opacity-100 text-[#FFFAF0]">
								<Link to={`/movie/${item.id}`}>
									<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
										{item?.title}
									</p>
								</Link>
								<p
									onClick={() => deleteMovie(item.id)}
									className="absolute text-gray-300 top-4 right-4 hover:scale-125 ease-in-out duration-300 hover:text-red-600">
									<AiOutlineClose />
								</p>
							</div>
						</div>
					))}
				</div>
				<MdChevronRight
					size={40}
					onClick={slideRight}
					className="bg-[#FFFAF0] right-0 rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block cursor-pointer"
				/>
			</div>
		</>
	);
};

export default SavedMovie;
