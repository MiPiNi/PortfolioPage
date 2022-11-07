import SingleProject from "./SingleProject";

function Projects() {
	return (
		<section className="main__content__projects fullPage" id="projects">
			<h2 className="main__content__projects__title">Moje Projekty</h2>
			<div className="main__content__projects__projectsList">
				<SingleProject
					title={"Strona Portfolio"}
					description={"Strona zawierająca moje portfolio"}
					tech={"react, sass"}
					image={"img"}
					link={"link"}
				/>
				<SingleProject
					title={"Melange"}
					description={
						"Alkoholowa gra karciana tworzona w ramach nauki Reacta"
					}
					tech={"react, css3"}
					image={"/src/assets/imgs/melange.png"}
					link={"https://github.com/MiPiNi/Melange"}
				/>
				<SingleProject
					title={"Blackjack"}
					description={"Gra karciana stworzona w czystym JS"}
					tech={"javascript, html5, css3"}
					image={"img"}
					link={"https://mipini.github.io/Blackjack-JS/"}
				/>
				<SingleProject
					title={"ZiomaleTheGame"}
					description={
						"Prosta gra 2D stworzona w Unity w ramach konkursu"
					}
					tech={"unity"}
					image={"img"}
					link={"https://github.com/MiPiNi/ZiomaleTheGame"}
				/>
				<SingleProject
					title={"DiscordCOVID-19"}
					description={
						"Bot do Discorda. Informuje o COVID-19. Stworzony w ramach nauki pracy z API"
					}
					tech={"python"}
					image={"img"}
					link={"https://github.com/MiPiNi/DiscordCOVID-19"}
				/>
			</div>
		</section>
	);
}

export default Projects;
