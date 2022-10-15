import React from "react";
import {
	RiRedditLine,
	RiInstagramLine,
	RiTwitterLine,
	RiFacebookCircleLine,
} from "react-icons/ri";

const Footer = () => {
	return (
		<div className="bg-gray-600 mx-4 rounded-lg my-2 ">
			<div className="py-3 text-center text-[#20B2AA] font-bold">
				<div>All rights reserved FilmBuff</div>
			</div>
			<div className="flex justify-center pb-2">
				<RiFacebookCircleLine size={25} className="mr-2" />
				<RiInstagramLine size={25} className="mr-2" />
				<RiRedditLine size={25} className="mr-2" />
				<RiTwitterLine size={25} className="mr-2" />
			</div>
		</div>
	);
};

export default Footer;
