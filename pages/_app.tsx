import NextApp, { Container } from "next/app";

import "../src/scss/common.module.scss"; // Makes certain stuff like section styles work globally

class App extends NextApp {
	public render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default App; // TODO: next-i18next translation
