import react from "react";
import "../style/Choose.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling

const Choose = () => {
	return (
		<>
			<section className="choose">
				<div className="container ">
					<h1 className="all">ALL IN ONE THERE</h1>
					<h2 className="why">Why Choose Histudy.</h2>
				</div>
				<div className="container">
					<div className="row" style={{ gap: "10px" }}>
						<div className="col card-one">
							<div>
								<h1>FOR ONLINE COURSE</h1>
								<h2>
									Create Your Online
									<br />
									Courses Website.
								</h2>
							</div>
							<div>
								<img
									src="/assets/01.png"
									alt="Create your own websites"
									loading="lazy"
									style={{
										width: "100%",
										maxHeight: "200px",
										objectFit: "contain",
									}}
								></img>
							</div>
							<div className="list-item">
								<div className="list-tag">Individual instructor</div>
								<div className="list-tag">Multiple instructor</div>
								<div className="list-tag">Market place</div>
								<div className="list-tag">Single course</div>
								<div className="list-tag">Like Udemy</div>
								<div className="list-tag">& More</div>
							</div>
						</div>
						<div className="col card-two">
							<div>
								<h1>FOR ONLINE COURSE</h1>
								<h2>
									Create Your Online
									<br />
									Courses Website.
								</h2>
							</div>
							<div>
								<img
									src="/assets/02.png"
									alt="Create your own websites"
									loading="lazy"
									style={{
										width: "100%",
										maxHeight: "200px",
										objectFit: "contain",
									}}
								></img>
							</div>
							<div className="list-item">
								<div className="list-tag">Individual instructor</div>
								<div className="list-tag">Multiple instructor</div>
								<div className="list-tag">Market place</div>
								<div className="list-tag">Single course</div>
								<div className="list-tag">Like Udemy</div>
								<div className="list-tag">& More</div>
							</div>
						</div>
						<div className="col card-three">
							<div>
								<h1>FOR ONLINE COURSE</h1>
								<h2>
									Create Your Online
									<br />
									Courses Website.
								</h2>
							</div>
							<div>
								<img
									src="/assets/03.png"
									alt="Create your own websites"
									loading="lazy"
									style={{
										width: "100%",
										maxHeight: "200px",
										objectFit: "contain",
									}}
								></img>
							</div>
							<div className="list-item">
								<div className="list-tag">Individual instructor</div>
								<div className="list-tag">Multiple instructor</div>
								<div className="list-tag">Market place</div>
								<div className="list-tag">Single course</div>
								<div className="list-tag">Like Udemy</div>
								<div className="list-tag">& More</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="n"></section>
		</>
	);
};

export default Choose;
