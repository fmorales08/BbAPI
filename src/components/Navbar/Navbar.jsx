import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nabvar__links">
				<Link to="/home">Home</Link>
				<Link to="/characters">Personajes</Link>
			</div>
		</nav>
	);
};

export default Navbar;
