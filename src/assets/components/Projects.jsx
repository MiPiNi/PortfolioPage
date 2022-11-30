import SingleProject from "./SingleProject";
import { useState, useEffect } from "react";
function Projects(props) {
	let language = props.language;
	const [isMobile, setisMobile] = useState(false);
	useEffect(() => {
		if (window.innerWidth < 768) {
			setisMobile(true);
		}
	}, []);
	if (isMobile) {
		var SlideShow = {
			plusSlides: (n) => {
				SlideShow.showSlides((slideIndex += n));
				console.log(slideIndex);
			},
			currentSlide: (n) => {
				SlideShow.showSlides((slideIndex = n));
			},
			showSlides: (n) => {
				let i;
				let slides = document.getElementsByClassName(
					"projects__projectsList__project"
				);
				if (n > slides.length) {
					slideIndex = 1;
				}
				if (n < 1) {
					slideIndex = slides.length;
				}
				for (i = 0; i < slides.length; i++) {
					slides[i].style.display = "none";
				}
				slides[slideIndex - 1].style.display = "grid";
			},
		};

		let slideIndex = 1;
		SlideShow.showSlides(slideIndex);
	}

	return (
		<section className="main__content__projects fullPage" id="projects">
			<h2 className="projects__title">
				{language == "pl" ? "Moje Projekty" : "My projects"}
			</h2>
			<div className={"projects__projectsList"}>
				{isMobile ? (
					<>
						<a
							className="projects__projectsList__prev"
							onClick={() => {
								SlideShow.plusSlides(-1);
							}}>
							&#10094;
						</a>
						<a
							className="projects__projectsList__next"
							onClick={() => {
								SlideShow.plusSlides(1);
							}}>
							&#10095;
						</a>
					</>
				) : null}
				<SingleProject
					title={"Portfolio"}
					description={
						language == "pl"
							? "Strona zawierająca moje portfolio"
							: "Website containing my portfolio"
					}
					tech={"react, sass"}
					link={"https://github.com/MiPiNi/PortfolioPage"}
					linkText={
						language == "pl" ? "Zobacz projekt" : "View Project"
					}
				/>
				<SingleProject
					title={"Melange"}
					description={
						language == "pl"
							? "Alkoholowa gra karciana tworzona w ramach nauki Reacta"
							: "Drinking card game created as a React learning project"
					}
					tech={"react, css3"}
					link={"https://github.com/MiPiNi/Melange"}
					linkText={
						language == "pl" ? "Zobacz projekt" : "View Project"
					}
				/>
				<SingleProject
					title={"Blackjack"}
					description={
						language == "pl"
							? "Gra karciana stworzona w czystym JS"
							: "Card game created in vanilla JS"
					}
					tech={"javascript, html5, css3"}
					link={"https://mipini.github.io/Blackjack-JS/"}
					linkText={
						language == "pl" ? "Zobacz projekt" : "View Project"
					}
				/>
				<SingleProject
					title={"ZiomaleTheGame"}
					description={
						language == "pl"
							? "Prosta gra 2D stworzona w Unity w ramach konkursu"
							: "Simple 2D game created in Unity as a contest project"
					}
					tech={"unity"}
					link={"https://github.com/MiPiNi/ZiomaleTheGame"}
					linkText={
						language == "pl" ? "Zobacz projekt" : "View Project"
					}
				/>
				<SingleProject
					title={"DiscordCOVID-19"}
					description={
						language == "pl"
							? "Bot do Discorda stworzony w discord.py. Informuje o COVID-19. Stworzony w ramach nauki pracy z API"
							: "Discord bot created in discord.py. Informing about COVID-19. Created as a API learning project"
					}
					tech={"python"}
					link={"https://github.com/MiPiNi/DiscordCOVID-19"}
					linkText={
						language == "pl" ? "Zobacz projekt" : "View Project"
					}
				/>
			</div>
		</section>
	);
}

export default Projects;
