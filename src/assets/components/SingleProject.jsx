import "./SingleProject.scss";

function SingleProject(props) {
	const tech = props.tech.split(", ");
	return (
		<div
			className="projects__projectsList__project"
			data-sal="slide-right"
			data-sal-duration="1000">
			<h3 className="project__title">{props.title}</h3>
			<p className="project__description">{props.description}</p>
			<div className="project__tech">
				{tech.map((item, index) => (
					<box-icon
						class="tech__icon"
						type="logo"
						name={item}
						color="white"
						size="md"
						title={item}
						key={index}></box-icon>
				))}
			</div>
			<a
				className="project__link"
				href={props.link}
				target="_blank"
				rel="noopener noreferrer">
				{props.linkText}
			</a>
		</div>
	);
}

export default SingleProject;
