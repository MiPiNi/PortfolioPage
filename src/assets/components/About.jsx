function About(props) {
	let language = props.language;
	return (
		<section className="main__content__about fullPage" id="about">
			<div className="about__left">
				<h3 className="about__title">
					{language === "pl" ? "Kim jestem?" : "Who am I?"}
				</h3>
				<p className="about__text">
					{language == "pl"
						? "Polski tekst o mnie"
						: "English text about me"}
				</p>
			</div>
			<div className="about__right">
				<h3 className="about__title">
					{language === "pl" ? "Co umiem?" : "What can I do?"}
				</h3>
				<ul className="about__list">
					<li className="about__item">
						Python <span>🔹🔹🔹🔹◼️</span>
					</li>
					<li className="about__item">
						HTML
						<span className="about__item__progress">
							🔹🔹🔹🔹◼️
						</span>
					</li>
					<li className="about__item">
						CSS
						<span className="about__item__progress">
							🔹🔹🔹🔹◼️
						</span>
					</li>
					<li className="about__item">
						SASS
						<span className="about__item__progress">
							🔹🔹🔹🔹◼️
						</span>
					</li>
					<li className="about__item">
						JavaScript
						<span className="about__item__progress">
							🔹🔹🔹◼️◼️
						</span>
					</li>
					<li className="about__item">
						Unity
						<span className="about__item__progress">
							🔹🔹🔹◼️◼️
						</span>
					</li>
					<li className="about__item">
						Git
						<span className="about__item__progress">
							🔹🔹🔹◼️◼️
						</span>
					</li>
					<li className="about__item">
						SQL
						<span className="about__item__progress">
							🔹🔹🔹◼️◼️
						</span>
					</li>
					<li className="about__item">
						React.js
						<span className="about__item__progress">
							🔹◼️◼️◼️◼️
						</span>
					</li>
					<li className="about__item">
						PHP
						<span className="about__item__progress">
							🔹◼️◼️◼️◼️
						</span>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default About;
