import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap for styling

const Header = () => {
	const location = useLocation(); // Get current location
	const [menuOpen, setMenuOpen] = useState(false);

	// Define the navigation links
	const navLinks = [
		{ name: "Pre-BuiltHome", to: "/pre-builtHome" },
		{ name: "Courses", to: "/courses" },
		{ name: "Pages", to: "/pages" },
		{ name: "Elements", to: "/elements" },
		{ name: "Blog", to: "/blog" },
		{ name: "Help", to: "/help" },
	];

	// Get the active link index based on the current URL, defaulting to "Services" (index 0)
	const activeIndex = navLinks.findIndex(
		(link) => link.to === location.pathname
	);
	const defaultActiveIndex = activeIndex !== -1 ? activeIndex : 0;

	// Close the menu when clicking a link (for mobile view)
	const handleLinkClick = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<div className="container">
				<header className="header">
					<nav className="logo-nav-container">
						<div className="logo">
							<Link to="/" aria-label="Go to Home Page">
								<img src="/assets/logo.png" alt="Study Logo" loading="lazy" />
							</Link>
						</div>
						<div
							className="menu-icon"
							onClick={() => setMenuOpen(!menuOpen)}
							aria-label="Toggle navigation menu"
						>
							<img
								className="img-fluid"
								src="/assets/hamburger.png"
								alt="Navigation Menu"
								width="22"
								height="22"
							/>
						</div>

						<ul
							className={`nav-links ${menuOpen ? "open" : "close"}`}
							role="menu"
						>
							{navLinks.map((link, index) => (
								<li
									key={index}
									className={defaultActiveIndex === index ? "active" : ""}
									role="menuitem"
								>
									<Link
										to={link.to}
										style={{ textDecoration: "none", color: "inherit" }}
										onClick={handleLinkClick}
										aria-label={`Go to ${link.name}`}
									>
										{link.name}
									</Link>
									{activeIndex === index && (
										<span className="arrow">{"\u276F"}</span>
									)}
								</li>
							))}
						</ul>
					</nav>
					<div className="get-purchase-container">
						<button
							className="get-purchase"
							role="button"
							aria-label="Purchase Now"
						>
							Purchase Now
						</button>
					</div>
				</header>
			</div>
		</>
	);
};

export default Header;
