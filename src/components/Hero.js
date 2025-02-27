import React from "react";
import "../style/Hero.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling

const Hero = () => {
	return (
		<>
			<section className="hero">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-6 left-side">
							<div className="first-box">
								<div>
									<div className="d-flex">
										<div className="star"></div>
										<div className="star"></div>
										<div className="star"></div>
										<div className="star"></div>
										<div className="star"></div>
									</div>
									<div className="star-text">
										<h2>20,000+ TRUST CUSTOMER</h2>
									</div>
								</div>
								<div>
									<div className="enamato">
										<div className="star"></div>
									</div>
									<div className="enamato-text">
										<h2>ENVATO ELITE AUTHOR</h2>
									</div>
								</div>
							</div>
							<div className="sec-box">
								<h1> Have your dream site in minutes for University</h1>
							</div>
							<div className="third-box">
								<p>
									The most <span className="bold-underline">powerful</span> yet
									the <span className="bold-underline">easiest</span> theme
									ever.
								</p>
							</div>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-6 right-side">
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
			</section>
			<section className="icon-box">
				<div className="container icon-box-content">
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-4 card">
							<figure></figure>
							<figcaption></figcaption>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 card">
							<figure></figure>
							<figcaption></figcaption>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 card">
							<figure></figure>
							<figcaption></figcaption>
						</div>
						<div className="col-sm-12 col-md-6 col-lg-4 card">
							<figure></figure>
							<figcaption></figcaption>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
