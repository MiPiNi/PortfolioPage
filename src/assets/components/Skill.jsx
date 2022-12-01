import "./Skill.scss";

function Skill(props) {
	const levelEmoji = (level) => {
		let emoji = "";
		for (let i = 0; i < level; i++) {
			emoji += "🟢";
		}
		if (level < 5) {
			for (let i = level; i < 5; i++) {
				emoji += "⚫";
			}
		}
		return emoji;
	};
	return (
		<div className="skill">
			<p>{props.name}</p>
			<p>{levelEmoji(props.level)}</p>
		</div>
	);
}
export default Skill;
