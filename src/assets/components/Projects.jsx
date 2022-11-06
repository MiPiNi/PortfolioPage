import SingleProject from "./SingleProject";

function Projects() {
	return (
		<section className="main__content__projects fullPage" id="projects">
			<h2 className="main__content__projects__title">Moje Projekty</h2>
			<div className="main__content__projects__projectsList">
				<SingleProject
					title={"title"}
					description={"desc"}
					image={"img"}
					link={"link"}
				/>
				<SingleProject
					title={"title"}
					description={"desc"}
					image={"img"}
					link={"link"}
				/>
				<SingleProject
					title={"title"}
					description={"desc"}
					image={"img"}
					link={"link"}
				/>
			</div>
		</section>
	);
}

export default Projects;
