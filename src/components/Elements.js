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
			<section className="elements">
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
			</section>
			<section className="elements">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-lg-6">
							<img
								src="/assets/last.jpg"
								alt="Last Section"
								loading="lazy"
								style={{ width: "100%", height: "auto", objectFit: "contain" }}
							></img>
						</div>
						<div className="col-sm-12 col-lg-6 last-right">
							<div className="last-right-one">
								<div className="right-1">ADVANCED FILTER</div>
								<h1 className="right-2">
									Find Course With Advanced Filters & Full Customization
								</h1>
								<p className="right-3">
									Quickly discover the perfect course with powerful,
									customizable filters tailored to your needs.
								</p>
								<div className="right-4">
									<div className="right-sub-1">
										<span className="material-icons">favorite</span>

										<h2>Filter with toggle</h2>
									</div>
									<div className="right-sub-2">
										<span className="material-icons">favorite</span>

										<h2>Course with tab</h2>
									</div>
								</div>
								<div className="right-5">
									<div className="right-sub-3"></div>
									<div className="right-sub-4"></div>
								</div>
							</div>
							<div className="last-right-two"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Elements;
