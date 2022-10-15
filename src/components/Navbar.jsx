import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex justify-between items-center py-4 w-full absolute z-[100]">
			<Link to="/">
				<h1 className="flex justify-between text-[#20B2AA] uppercase md:text-4xl text-3xl font-bold cursor-pointer hover:text-slate-400 md:pl-4 pl-2">
					FilmBuff
				</h1>
				<p className="text-[#FFFAF0] md:pl-4 pl-2 text-sm md:text-base">
					{user?.email ? <p>Welcome, {user.email}</p> : null}
				</p>
			</Link>
			{user?.email ? (
				<div>
					<Link to="/account">
						<button className="text-[#FFFAF0] pr-4 font-bold hover:text-[#20b2aa]">
							Account
						</button>
					</Link>
					<button
						onClick={handleLogout}
						className="bg-[#20b2aa] px-6 py-2 rounded cursor-pointer text-[#FFFAF0] mr-2 hover:bg-slate-400">
						Logout
					</button>
				</div>
			) : (
				<div>
					<Link to="/login">
						<button className="text-[#FFFAF0] font-bold pr-4 hover:text-[#20b2aa]">
							Login
						</button>
					</Link>
					<Link to="/register">
						<button className=" bg-[#20B2AA] hover:bg-[#88e1e2] hover:text-black px-6 py-2 rounded-[6px] cursor-pointer text-[#FFFAF0] mr-2">
							Register
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
