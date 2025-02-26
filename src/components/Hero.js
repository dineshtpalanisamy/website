import React from "react";
import "../style/Hero.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling

const Hero = () => {
	return (
		<>
			<div className="hero">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6"></div>
						<div className="col-sm-12 col-md-6 col-lg-6">
							<img
								src="/assets/banner.png"
								alt="Banner Background"
								loading="lazy"
								className="img-fluid"
								style={{ width: "100%", height: "auto" }}
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
