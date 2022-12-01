import { useState, useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import "./App.scss";

import Navbar from "./assets/components/Navbar";
import Header from "./assets/components/Header";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Alert from "./assets/components/Alert";

function App() {
	const [language, setlanguage] = useState("pl");
	const [alertText, setalertText] = useState("");

	const langHandler = (e) => {
		setlanguage(e);
	};
	const alertHandler = (e) => {
		setalertText(e);
		document.querySelector(".alert").style.opacity = "1";
		setTimeout(() => {
			document.querySelector(".alert").style.opacity = "0";
		}, 1500);
	};
	useEffect(() => {
		sal({ once: true });
	}, []);
	return (
		<div className="main">
			<Navbar langHandler={langHandler} language={language} />
			<Alert alertText={alertText} />
			<main className="main__content">
				<Header />
				<About language={language} />
				<Projects language={language} />
				<Contact language={language} alertHandler={alertHandler} />
			</main>
		</div>
	);
}

export default App;
