function SingleProject(props) {
	const tech = props.tech.split(", ");
	const image = props.image;
	return (
		<div className="main__content__projects__projectsList__project">
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<div className="main__content__projects__projectsList__project__description__tech">
				{tech.map((item, index) => (
					<box-icon
						type="logo"
						name={item}
						color="white"
						size="md"
						key={index}></box-icon>
				))}
			</div>
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				View Project
			</a>
		</div>
	);
}

export default SingleProject;
