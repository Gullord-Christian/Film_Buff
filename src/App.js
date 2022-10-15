import Navbar from "./components/Navbar";
import Home from "./routes/Home";
// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Account from "./routes/Account";
import Detail from "./routes/Detail";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
					<Route path="/movie" element={<Detail />}>
						<Route path=":movieId" />
					</Route>
				</Routes>
				{/* <Footer /> */}
			</AuthContextProvider>
		</>
	);
}

export default App;
