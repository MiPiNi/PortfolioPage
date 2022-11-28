import { useState, useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import "./App.scss";

import Navbar from "./assets/components/Navbar";
import Header from "./assets/components/Header";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

function App() {
	const [language, setlanguage] = useState("pl");

	const langHandler = (e) => {
		setlanguage(e);
	};
	useEffect(() => {
		sal({ once: false });
	}, []);
	return (
		<div className="main">
			<Navbar langHandler={langHandler} language={language} />

			<main className="main__content">
				<Header />
				<About language={language} />
				<Projects language={language} />
				<Contact language={language} />
			</main>
		</div>
	);
}

export default App;
