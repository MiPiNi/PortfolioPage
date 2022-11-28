import { useEffect, useState } from "react";
import Skill from "./Skill";

function About(props) {
	let language = props.language;
	const [age, setAge] = useState(0);
	useEffect(() => {
		setAge(new Date().getFullYear() - 2002);
	}, []);
	return (
		<section className="main__content__about fullPage" id="about">
			<div className="about__top">
				<h3 className="about__title">
					{language === "pl" ? "Kim jestem?" : "Who am I?"}
				</h3>
				<h3 className="about__title">
					{language === "pl" ? "Co umiem?" : "What can I do?"}
				</h3>
			</div>
			<div className="about__main">
				<div className="about__text">
					<p className="about__text">
						{language == "pl"
							? `Polski tekst o mnie`
							: `English text about me`}
					</p>
				</div>
				<div className="about__skills">
					<Skill name="Python" level="4" />
					<Skill name="HTML" level="4" />
					<Skill name="CSS" level="4" />
					<Skill name="SASS" level="4" />
					<Skill name="JavaScript" level="3" />
					<Skill name="Unity" level="3" />
					<Skill name="Git" level="3" />
					<Skill name="SQL" level="3" />
					<Skill name="React.js" level="1" />
					<Skill name="PHP" level="1" />
				</div>
			</div>
		</section>
	);
}

export default About;
