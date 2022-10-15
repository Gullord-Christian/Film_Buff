import React from "react";
import DOMPurify from "dompurify";

const Review = ({ item }) => {
	return (
		<>
			<div>
				<div className="bg-[#646161] rounded-xl mx-2 px-2">
					<p
						className="px-4 pt-4 pb-2 my-3 text-[#FFFaF0]"
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(item.content),
						}}></p>
					<p className="pb-2">- {item.author}</p>
				</div>
			</div>
		</>
	);
};

export default Review;
