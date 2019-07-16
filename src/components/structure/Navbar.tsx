import * as React from "react";

// import Head from "next/head";
import css from "./Navbar.module.scss";

const Header: React.FunctionComponent = () => (
	<nav className={css.navbar}>
		<img src="/static/downloads/branding/logo-white-full.svg"/>
	</nav>
);

export default Header;
