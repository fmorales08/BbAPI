import React from "react";
import { Link } from "react-router-dom";
import icon_bb from "../../media/black_icon.png";

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<Link to="/home">
					<img className="footer__logo" src={icon_bb} alt="logo" />
				</Link>
			</div>
			<div className="footer__createdBy">Desarrollado por Fabián Morales</div>
		</div>
	);
};

export default Footer;
