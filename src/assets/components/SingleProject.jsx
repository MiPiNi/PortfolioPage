function SingleProject(props) {
	return (
		<div className="main__content__projects__project">
			<div className="main__content__projects__project__image">
				<img src={props.image} alt={props.title} />
			</div>
			<div className="main__content__projects__project__description">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<a href={props.link} target="_blank" rel="noopener noreferrer">
					View Project
				</a>
			</div>
		</div>
	);
}

export default SingleProject;
