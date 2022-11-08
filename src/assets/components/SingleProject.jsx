function SingleProject(props) {
	const tech = props.tech.split(", ");
	const image = props.image;
	return (
		<div className="projects__projectsList__project">
			<h3 className="project__title">{props.title}</h3>
			<p className="project__description">{props.description}</p>
			<div className="project__tech">
				{tech.map((item, index) => (
					<box-icon
						type="logo"
						name={item}
						color="white"
						size="md"
						key={index}></box-icon>
				))}
			</div>
			<a
				className="project__link"
				href={props.link}
				target="_blank"
				rel="noopener noreferrer">
				View Project
			</a>
		</div>
	);
}

export default SingleProject;
