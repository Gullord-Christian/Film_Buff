import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
	return (
		<>
			<div className="w-full text-white">
				<img
					className="w-full h-[525px] object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/c86afdf7-1b44-4911-80fd-f97d0130fcd8/US-en-20221010-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
					alt="/"
				/>
				<div className="bg-[#181818]/60 fixed top-0 left-0 w-full h-[525px]"></div>
				<div className="absolute top-[15%] md:top-[30%] p-4 md:p-8">
					<h1 className="text-3xl md:text-5xl font-bold">My Stuff</h1>
				</div>
			</div>
			<SavedMovies />
		</>
	);
};

export default Account;
