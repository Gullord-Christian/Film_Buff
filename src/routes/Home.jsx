import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
	return (
		<div>
			<Main />
			<Row rowId="1" title="Trending" fetchURL={requests.requestTrending} />
			<Row rowId="2" title="Upcoming" fetchURL={requests.requestUpcoming} />
			<Row rowId="3" title="Popular" fetchURL={requests.requestPopular} />
			<Row rowId="4" title="Top Rated" fetchURL={requests.requestTopRated} />
			<Row rowId="5" title="Horror" fetchURL={requests.requestHorror} />
			<Row rowId="6" title="Comedy" fetchURL={requests.requestComedy} />
			<Row
				rowId="7"
				title="Documentary"
				fetchURL={requests.requestDocumentary}
			/>
			<Row rowId="8" title="Drama" fetchURL={requests.requestDrama} />
			<Row rowId="9" title="Animated" fetchURL={requests.requestAnimated} />
		</div>
	);
};

export default Home;
