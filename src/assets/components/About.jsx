import { useEffect, useState } from "react";
import Skill from "./Skill";
import "./About.scss";

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
							? `Jestem Daniel, mam ${age} lat i programowaniem interesuję się od 2012 roku.
Zaczeło się chęcią stworzenia gry w stylu Minecrafta, nigdy jednak tego nie zrealizowałem.
Na przełomie roku 2014/2015 zacząłem uczyć się języka C++ jednak po poznaniu podstaw przerzuciłem się na C#
 i zacząłem uczyć się tworzenia gier w silniku Unity.
Następnie rozpocząłem naukę Pythona, w międzyczasie poznając podstawy HTMLa na lekcjach w gimnazjum.
Dopiero od 2019 roku - w technikum - zacząłem uczyć się więcej o Web Developmencie,
poznałem CSS, JavaScript, PHP i MySQL, od tamtego czasu zacząłem również publikować swoje projekty na GitHubie.
Pomimo tego że szkołę już skończyłem, nadal staram się rozwijać swoje umiejętności i zdobywać nowe.
Obecnie uczę się Reacta. Dobrze się czuję pisząc kod, jednak UI Design nie jest moją mocną stroną.
Nie mam problemu z używaniem nowych technologii, są to tylko narzędzia do osiągnięcia celu.
W wolnym czasie lubię grać w gry komputerowe, oglądać filmy i seriale, a także spędzać czas z przyjaciółmi.`
							: `My name is Daniel, I'm ${age} years old and I've been interested in programming since 2012.
It all started with a desire to create a Minecraft like game, but I never realized it.
At the turn of 2014/2015 I started learning C++, but after learning the basics I switched to C# and started learning
how to create games in the Unity engine. Then I started learning Python, in the meantime I learned the basics of
HTML at middle school. From 2019 - at high school - I started learning more about Web Development,
I learned CSS, JavaScript, PHP and MySQL, from that time I also started publishing my projects on GitHub.
Despite the fact that I have already graduated, I still try to develop my skills and gain new ones.
Currently I'm learning React. I feel good with writing code, but UI Design is not my strong point.
I have no problem using new technologies, they are just tools to achieve the goal.
In my free time I like to play computer games, watch movies and series, and spend time with friends.`}
					</p>
				</div>
				<div className="about__skills">
					<Skill name="Angular" level="4" />
					<Skill name="JavaScript" level="4" />
					<Skill name="HTML" level="4" />
					<Skill name="SASS" level="4" />
					<Skill name="CSS" level="4" />
					<Skill name="Python" level="3" />
					<Skill name="Unity" level="3" />
					<Skill name="Git" level="3" />
					<Skill name="SQL" level="3" />
					<Skill name="React.js" level="1" />
				</div>
			</div>
		</section>
	);
}

export default About;
