import React from "react";
import Headers from "../components/Header";
import "../style/NotFound.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<div style={{ width: "100%", height: "100vh", position: "relative" }}>
				<Headers />
				<div
					className="container not-found-details"
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<h1>404 - ERROR</h1>
					<p>Page Not Found</p>
					<div>
						<Link to="/" style={{ textDecoration: "none" }}>
							<button className="not-found">Go to Home</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;
