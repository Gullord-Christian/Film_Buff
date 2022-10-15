import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { user, register } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await register(email, password);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full h-screen">
			<img
				className="hidden sm:block absolute w-full h-full object-cover"
				src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/c86afdf7-1b44-4911-80fd-f97d0130fcd8/US-en-20221010-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
				alt="/"
			/>
			<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
			<div className="fixed w-full px-4 py-24 z-50">
				<div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-[#FFFAF0]">
					<div className="max-w-[320px] mx-auto py-16">
						<h1 className="text-3xl font-bold">Register</h1>
						<form
							onSubmit={handleSubmit}
							className="w-full flex flex-col py-4">
							<input
								onChange={(e) => setEmail(e.target.value)}
								className="p-3 my-2 bg-gray-600 rounded"
								type="email"
								placeholder="Email"
								autoComplete="email"
							/>
							<input
								onChange={(e) => setPassword(e.target.value)}
								className="p-3 my-2 bg-gray-600 rounded"
								type="password"
								placeholder="Password"
								autoComplete="current-password"
							/>
							<button className="bg-[#20B2AA] py-3 my-6 rounded font-bold hover:scale-105 ease-in-out duration-300 hover:bg-[#70d1cc] hover:text-gray-600">
								Register
							</button>
							<div className="flex justify-between items-center text-gray-600 text-sm">
								<p>
									<input type="checkbox" className="mr-2" />
									Remember Me
								</p>
								<p>Forgetting something?</p>
							</div>
							<p className="py-6  text-center">
								<span className="text-gray-600 mr-1">
									Already subscribed to FilmBuff?
								</span>
								<Link to="/login" className="hover:text-[#20b2aa]">
									Login
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
