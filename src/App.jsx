import { useState } from "react";
import "./App.scss";

function App() {
	const [language, setlanguage] = useState("en");

	return (
		<div className="main">
			<nav className="main__navbar">
				<ul className="main__navbar__list">
					<li>O mnie</li>
					<li>Projekty</li>
					<li>Kontakt</li>
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
						onClick={console.log("en")}></button>
					<button
						className="main__navbar__languages__language"
						style={{
							backgroundImage: "url(/src/assets/imgs/pl-PL.png)",
							backgroundSize: "100% auto",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
						}}
						onClick={console.log("pl")}></button>
				</div>
			</nav>
			<header className="main__header">
				<h1 className="main__header__title">Daniel Grala</h1>
				<h2 className="main__header__subtitle">Developer</h2>
			</header>
			<main className="main__content">
				<section className="main__content__about">
					<h3 className="main__content__about__title">Kim jestem?</h3>
					<p className="main__content__about__text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam voluptates, quod, quia, voluptatibus quae
						voluptatem quibusdam voluptatum quos quidem natus quas.
						Quisquam, quae. Quisquam, quae. Quisquam, quae.
						Quisquam, quae.
					</p>
					<h3 className="main__content__about__title">Co umiem?</h3>
					<ul className="main__content__about__list">
						<li className="main__content__about__list__item">
							Python <span>🔹🔹🔹🔹◼️</span>
						</li>
						<li className="main__content__about__list__item">
							HTML
							<span className="main__content__about__list__item__progress">
								🔹🔹🔹🔹◼️
							</span>
						</li>
						<li className="main__content__about__list__item">
							CSS
							<span className="main__content__about__list__item__progress">
								🔹🔹🔹🔹◼️
							</span>
						</li>
						<li className="main__content__about__list__item">
							SASS
							<span className="main__content__about__list__item__progress">
								🔹🔹🔹🔹◼️
							</span>
						</li>
						<li className="main__content__about__list__item">
							JavaScript
							<span className="main__content__about__list__item__progress">
								🔹🔹🔹◼️◼️
							</span>
						</li>
						<li className="main__content__about__list__item">
							Unity
							<span className="main__content__about__list__item__progress">
								🔹🔹🔹◼️◼️
							</span>
						</li>
						<li className="main__content__about__list__item">
							Git
							<span className="main__content__about__list__item__progress">
								🔹🔹🔹◼️◼️
							</span>
						</li>
						<li className="main__content__about__list__item">
							SQL
							<span className="main__content__about__list__item__progress">
								🔹🔹🔹◼️◼️
							</span>
						</li>
						<li className="main__content__about__list__item">
							React.js
							<span className="main__content__about__list__item__progress">
								🔹◼️◼️◼️◼️
							</span>
						</li>
						<li className="main__content__about__list__item">
							PHP
							<span className="main__content__about__list__item__progress">
								🔹◼️◼️◼️◼️
							</span>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
