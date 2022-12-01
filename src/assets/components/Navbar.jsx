import ReactCountryFlag from "react-country-flag";
import "./Navbar.scss";

function Navbar(props) {
	let language = props.language;
	return (
		<nav className="main__navbar">
			<ul className="navbar__list">
				<a className="navbar__item" href="#about">
					<li>{language == "pl" ? "O mnie" : "About me"}</li>
				</a>
				<a className="navbar__item" href="#projects">
					<li>
						{language == "pl" ? "Moje projekty" : "My projects"}
					</li>
				</a>
				<a className="navbar__item" href="#contact">
					<li>{language == "pl" ? "Kontakt" : "Contact me"}</li>
				</a>
			</ul>
			<div className="navbar__languages">
				<button
					className="navbar__language"
					onClick={() => props.langHandler("en")}>
					{
						<ReactCountryFlag
							countryCode="US"
							svg
							style={{ fontSize: "4vh" }}
						/>
					}
				</button>

				<button
					className="navbar__language"
					onClick={() => props.langHandler("pl")}>
					{
						<ReactCountryFlag
							countryCode="PL"
							svg
							style={{ fontSize: "4vh" }}
						/>
					}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
