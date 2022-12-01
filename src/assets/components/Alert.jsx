import "./Alert.scss";
function Alert(props) {
	let alertText = props.alertText;
	return (
		<div className="alert">
			<h2>{alertText}</h2>
		</div>
	);
}
export default Alert;
