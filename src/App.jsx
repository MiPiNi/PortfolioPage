import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import "./App.scss";

import Navbar from "./assets/components/Navbar";
import Header from "./assets/components/Header";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

function App() {
	const [language, setlanguage] = useState("en");

	useEffect(() => {
		console.log("language changed to", language);
		AOS.init();
	}, [language]);

	const langHandler = (e) => {
		setlanguage(e);
	};
	return (
		<div className="main">
			<Navbar langHandler={langHandler} />
			<Header />
			<main className="main__content">
				<About />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
