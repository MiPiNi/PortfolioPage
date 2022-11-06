function Navbar(props) {
	return (
		<nav className="main__navbar">
			<ul className="main__navbar__list">
				<a className="main__navbar__list__item" href="#about">
					<li>O mnie</li>
				</a>
				<a className="main__navbar__list__item" href="#projects">
					<li>Projekty</li>
				</a>
				<a className="main__navbar__list__item" href="#contact">
					<li>Kontakt</li>
				</a>
			</ul>
			<div className="main__navbar__languages">
				<button
					className="main__navbar__languages__language"
					style={{
						backgroundImage: "url(/src/assets/imgs/en-US.png)",
						backgroundSize: "100% auto",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
					onClick={() => props.langHandler("en")}></button>

				<button
					className="main__navbar__languages__language"
					style={{
						backgroundImage: "url(/src/assets/imgs/pl-PL.png)",
						backgroundSize: "100% auto",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
					onClick={() => props.langHandler("pl")}></button>
			</div>
		</nav>
	);
}

export default Navbar;
