import React from "react";
import { Link } from "react-router-dom";

const Similar = ({ similar }) => {
	return (
		<div className="pb-2 ">
			<p className="text-center text-[#747372] text-3xl py-5">
				You might like
			</p>
			{similar.map((item, idx) => (
				<Link to={`/movie/${item.id}`}>
					<p
						key={idx}
						className="px-5 text-[#FFFAF0] hover:scale-105 hover:text-[#20B2AA] ease-in-out">
						{item.original_title}
					</p>
				</Link>
			))}
		</div>
	);
};

export default Similar;
