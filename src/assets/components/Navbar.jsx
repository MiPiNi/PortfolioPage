import ReactCountryFlag from "react-country-flag";

function Navbar(props) {
	return (
		<nav className="main__navbar">
			<ul className="navbar__list">
				<a className="navbar__item" href="#about">
					<li>O mnie</li>
				</a>
				<a className="navbar__item" href="#projects">
					<li>Projekty</li>
				</a>
				<a className="navbar__item" href="#contact">
					<li>Kontakt</li>
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
