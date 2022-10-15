import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "../components/Review";
import Similar from "../components/Similar";

const Detail = () => {
	const [movie, setMovie] = useState({});
	const [review, setReview] = useState([]);
	const [similar, setSimilar] = useState([]);
	const params = useParams();

	const url = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=540329d9571cab65e94d3477681553f1&language=en-US`;

	const review_url = `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?api_key=540329d9571cab65e94d3477681553f1&language=en-US&page=1`;

	const similar_url = `https://api.themoviedb.org/3/movie/${params.movieId}/similar?api_key=540329d9571cab65e94d3477681553f1&language=en-US&page=1`;

	useEffect(() => {
		axios.get(url).then((res) => {
			setMovie(res.data);
			console.log(res.data);
		});
		axios.get(review_url).then((res) => {
			setReview(res.data.results);
			console.log(res.data.results);
		});
		axios.get(similar_url).then((res) => {
			setSimilar(res.data.results);
		});
	}, [url]);

	const IMG_API = "https://image.tmdb.org/t/p/original";

	return (
		<>
			<div className="w-full min-h-[600px] md:h-[500px] text-[#FFFAF0]">
				<div className="w-full h-full">
					<div className="absolute w-full min-h-[600px] md:h-[500px] bg-gradient-to-r from-black"></div>
					<img
						className="w-full h-full object-cover"
						src={IMG_API + movie?.backdrop_path}
						alt={movie?.title}
					/>
					<div className="absolute w-full md:top-[20%] top-[15%] p-4 md:p-8">
						<h1 className="text-3xl md:text-5xl font-bold text-[#FFFAF0]">
							{movie.original_title}
						</h1>
						<p className="py-4 text-sm text-gray-400">{movie.tagline}</p>
						<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-[#FFFAF0]">
							{movie?.overview}
						</p>
						<div className="flex py-8 text-sm text-gray-400">
							{movie.genres?.map((item, i) => (
								<p key={i} className="mx-1">
									{item.name}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="md:flex">
				<div className=" mt-[30px] md:w-[30%] w-full ">
					<p className="text-[#747372] text-3xl md:ml-5 pb-6 text-center">
						Movie Info
					</p>
					<div className="flex justify-evenly">
						<p className="text-[#FFFAF0] text-md ml-4  mt-4 ">
							Average Rating:
						</p>
						{movie.vote_average >= 8 ? (
							<p className="mt-2 py-[9px] ml-5 px-[7px] bg-green-700 max-w-[40px] max-h-[42px] text-center rounded-lg">
								{movie.vote_average &&
									movie?.vote_average.toFixed(1)}
							</p>
						) : movie.vote_average >= 7 ? (
							<p className="mt-2 py-[9px] ml-5 px-[7px] bg-green-500 max-w-[40px] max-h-[42px] text-center rounded-lg">
								{movie.vote_average &&
									movie?.vote_average.toFixed(1)}
							</p>
						) : movie.vote_average >= 6 ? (
							<p className="mt-2 py-[9px] ml-5 px-[7px] bg-orange-500 max-w-[40px] max-h-[42px] text-center rounded-lg">
								{movie.vote_average &&
									movie?.vote_average.toFixed(1)}
							</p>
						) : (
							<p className="mt-2 py-[9px] ml-5 px-[7px] bg-red-600 max-w-[40px] max-h-[42px] text-center rounded-lg">
								{movie.vote_average &&
									movie?.vote_average.toFixed(1)}
							</p>
						)}
					</div>
					<p className="text-[#747372] md:ml-[50px] ml-[90px]">
						({movie.vote_count && movie.vote_count.toLocaleString()}{" "}
						reviews)
					</p>
					<div className="flex justify-evenly">
						<p className="text-[#FFFAF0] text-md ml-5 mt-5">Released:</p>
						<p className="mt-2 py-[11px] ml-6 px-[6px] text-[#747372] text-md ">
							{movie.release_date && movie.release_date}
						</p>
					</div>
					<div className="flex justify-evenly">
						<p className="text-[#FFFAF0] text-md ml-5 mt-5">Runtime:</p>
						<p className="mt-2 py-[11px] ml-6 px-[6px] text-[#747372] text-md ">
							{movie.runtime && movie.runtime} minutes
						</p>
					</div>
					{movie.budget ? (
						<div className="flex justify-evenly">
							<p className="text-[#FFFAF0] text-md ml-5 mt-5">
								Budget:
							</p>
							<p className="mt-2 py-[11px] ml-6 px-[6px] text-[#747372] text-md">
								<p>
									${movie.budget && movie.budget.toLocaleString()}
								</p>
							</p>
						</div>
					) : null}
					{movie.revenue ? (
						<div className="flex justify-evenly">
							<p className="text-[#FFFAF0] text-md ml-5 mt-5">
								Revenue:
							</p>
							<p className="mt-2 py-[11px] ml-6 px-[6px] text-[#747372] text-md">
								${movie.revenue && movie.revenue.toLocaleString()}
							</p>
						</div>
					) : null}
					<Similar similar={similar} params={params.movieId} />
				</div>

				{review.length > 0 ? (
					<div className="md:w-[70%] w-full">
						<p className="text-center text-[#FFFAF0] text-3xl pt-[30px]">
							Top Reviews
						</p>
						{review?.map((item, i) => (
							<Review key={i} item={item} />
						))}
					</div>
				) : (
					<p className="text-[#FFFAF0]  text-center text-3xl mx-auto mt-[150px] hidden md:block">
						No reviews currently listed with us!
					</p>
				)}
			</div>
		</>
	);
};

export default Detail;
