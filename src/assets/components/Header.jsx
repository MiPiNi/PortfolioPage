import "./Header.scss";

function Header() {
	return (
		<header className="main__header fullPage">
			<h1
				className="header__title"
				data-sal="slide-down"
				data-sal-duration="1000">
				Daniel Grala
			</h1>
			<h2
				className="header__subtitle"
				data-sal="zoom-in"
				data-sal-duration="1000"
				data-sal-delay="150">
				Developer
			</h2>
		</header>
	);
}

export default Header;
