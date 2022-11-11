import { useState } from "react";
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
	return (
		<div className="main">
			<Navbar langHandler={langHandler} language={language} />

			<main className="main__content">
				<Header />
				<About language={language} />
				<Projects language={language} />
				<Contact />
			</main>
		</div>
	);
}

export default App;
