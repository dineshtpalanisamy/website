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
						<div className="col-sm-12 col-lg-4 card-one">
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
						<div className="col-sm-12 col-lg-4 card-two">
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
			<section className="gradient">
				<div className="container num">
					<div className="number">15+</div>
					<div className="desc">
						<h1>
							World Class <br /> Stunnig Demos
						</h1>
						<h2 style={{ color: "black" }}>
							<b>Best-in-class designs to get started</b>
						</h2>
						<h2 className="lite-txt">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
							ipsum dolor sit amet, consectetur adipiscing elit
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
							ipsum dolor sit amet.
						</p>
						<div className="arrow">
							<img
								src="/assets/arrow-down.png"
								alt="Arrow symbol"
								style={{ width: "50px", height: "50px", objectFit: "contain" }}
							></img>
						</div>
						<div className="round-box">
							<div className="round-box-1">Primary Details</div>
							<div className="round-box-2">Offer Details</div>
							<div className="round-box-3">Address Details</div>
						</div>
					</div>
				</div>
			</section>
			<section className="form-type">
				<div className="container form-sheet">
					<div className="row">
						<div className="col-sm-12 col-md-4 col-lg-4 user-content">
							<label className="user-dts">Name</label>
							<input
								type="text"
								placeholder="Enter Name"
								className="user-input"
							/>
						</div>
						<div className="col-sm-12 col-md-4 col-lg-4 user-content">
							<label className="user-dts">Email</label>
							<input
								type="email"
								placeholder="Enter Mail"
								className="user-input"
							/>
						</div>
						<div className="col-sm-12 col-md-4 col-lg-4 user-content">
							<label className="user-dts">Gender</label>
							<div className="gender-container">
								<label className="gender-box">
									<input type="radio" name="gender" value="male" />
									Male
								</label>
								<label className="gender-box">
									<input type="radio" name="gender" value="female" />
									Female
								</label>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-4 col-lg-4 user-content">
							<label className="user-dts">Mobile</label>
							<input
								type="number"
								placeholder="Enter Number"
								className="user-input"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Choose;
