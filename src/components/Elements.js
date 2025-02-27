import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling
import "../style/Elements.css";

const Elements = () => {
	const features = [
		{ icon: "favorite", label: "Brand" },
		{ icon: "badge", label: "Button" },
		{ icon: "favorite", label: "Badge" },
		{ icon: "badge", label: "Language Switcher" },
		{ icon: "favorite", label: "Call to action" },
		{ icon: "favorite", label: "Animated Button" },
		{ icon: "badge", label: "TimeLine" },
		{ icon: "favorite", label: "Exam Preparation" },
		{ icon: "badge", label: "Card" },
		{ icon: "favorite", label: "Call to action" },
		{ icon: "favorite", label: "Brand" },
		{ icon: "badge", label: "Button" },
		{ icon: "favorite", label: "Badge" },
		{ icon: "badge", label: "Card" },
		{ icon: "favorite", label: "Call to action" },
	];
	return (
		<>
			<div className="elements">
				<div className="container elements-desc">
					<div className="ele-1">
						<h1>YOU DON'T NEED ANY EXTERNAL PLUGINS.</h1>
					</div>
					<div className="ele-2">
						<h1>100+ Elements included.</h1>
					</div>
					<div className="ele-3">
						<div className="icons">
							{features.map((feature, index) => (
								<div className="icons-txt">
									<div className="d-flex">
										<div>
											<span className="material-icons">{feature.icon}</span>
										</div>
										<div>{feature.label}</div>
									</div>
								</div>
							))}
						</div>
						<div className="side-btn">
							<h2>Features Request</h2>
						</div>
					</div>
					<div className="ele-4">
						<p>SAVE YOUR TIME AND MONEY BY USING READY ELEMENTS</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Elements;
