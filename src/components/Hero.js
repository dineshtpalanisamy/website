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
				<div className="container">
					<div className="row icon-box-content">
						<div className="col-sm-12 col-lg-4 card">
							<figure>
								<img
									src="/assets/icons-01.png"
									alt="Icon with fast performance description"
									loading="lazy"
									style={{
										width: "60px",
										height: "60px",
										objectFit: "contain",
									}}
								></img>
							</figure>
							<figcaption>
								<h1>Fast Performance</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
									ipsum dolor sit amet.
								</p>
							</figcaption>
						</div>
						<div className="col-sm-12 col-lg-4 card">
							<figure>
								<img
									src="/assets/icons-02.png"
									alt="Icon with perfect theme description"
									loading="lazy"
									style={{
										width: "60px",
										height: "60px",
										objectFit: "contain",
									}}
								></img>
							</figure>
							<figcaption>
								<h1>Perfect Responsive</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
									ipsum dolor sit amet.
								</p>
							</figcaption>
						</div>
						<div className="col-sm-12 col-lg-4 card">
							<figure>
								<img
									src="/assets/icons-03.png"
									alt="Icon with fast and friendly description"
									loading="lazy"
									style={{
										width: "60px",
										height: "60px",
										objectFit: "contain",
									}}
								></img>
							</figure>
							<figcaption>
								<h1>Fast and Friendly Support</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
									ipsum dolor sit amet.
								</p>
							</figcaption>
						</div>
						<div className="col-sm-12 col-lg-4 card">
							<figure>
								<img
									src="/assets/icons-04.png"
									alt="Icon with fast easy to use description"
									loading="lazy"
									style={{
										width: "60px",
										height: "60px",
										objectFit: "contain",
									}}
								></img>
							</figure>
							<figcaption>
								<h1>Easy to Use</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
									ipsum dolor sit amet.
								</p>
							</figcaption>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
