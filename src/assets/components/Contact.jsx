function Contact(props) {
	let language = props.language;
	const handleClick = () => {
		navigator.clipboard.writeText("d4niel.grala@gmail.com");
		props.alertHandler(
			language == "pl"
				? "E-mail skopiowany do schowka"
				: "E-mail copied to clipboard"
		);
	};
	return (
		<section className="main__content__contact fullPage" id="contact">
			<h2 className="contact__title">
				{language == "pl" ? "Kontakt" : "Contact"}
			</h2>
			<p className="contact__subtitle">
				{language == "pl"
					? "Znajdziesz mnie tutaj:"
					: "You can find me here:"}
			</p>
			<div className="contact__elements">
				<div className="contact__links">
					<div className="contact__link-wrapper">
						<a
							className="contact__link"
							href=" https://discord.com/users/379552759319625728"
							target="_blank">
							<div className="contact__link__content">
								<box-icon
									type="logo"
									name="discord-alt"
									color="white"
								/>
								<span>MiPiNi#2187</span>
							</div>
						</a>
					</div>

					<div className="contact__link-wrapper">
						<a
							className="contact__link"
							href="https://github.com/MiPiNi"
							target="_blank">
							<div className="contact__link__content">
								<box-icon
									name="github"
									type="logo"
									color="white"
								/>
								<span>GitHub</span>
							</div>
						</a>
					</div>

					<div className="contact__link-wrapper">
						<a
							className="contact__link"
							href="mailto:d4niel.grala@gmail.com">
							<div className="contact__link__content">
								<box-icon name="mail-send" color="white" />
								<span>E-Mail</span>
							</div>
						</a>
					</div>
				</div>
				<br />
				<button className="contact__link" onClick={handleClick}>
					<div className="contact__link__content">
						<span>d4niel.grala@gmail.com</span>
					</div>
				</button>
				<p className="contact__handleText">
					{language == "pl"
						? "W innych nie wymienionych tutaj miejscach możesz mnie znaleźć jako "
						: "In places I didn't mentioned here you can find me as "}
					<span className="contact__span">@MiPiNi</span>
				</p>
			</div>
		</section>
	);
}

export default Contact;
