import React from "react";
import { Link } from "react-router-dom";
import Headers from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling
import "../style/UnderConstruction.css";

const UnderConstruction = () => {
	return (
		<>
			<div style={{ width: "100%", height: "100vh", position: "relative" }}>
				<Headers />
				<div
					className="container construct"
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<h1>Page Under Construction</h1>
					<p>Site Nearly Ready</p>
					<div className="per-line"></div>
					<div className="start-end">
						<h1>0%</h1>
						<h1>100%</h1>
					</div>
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

export default UnderConstruction;
