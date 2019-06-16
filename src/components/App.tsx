import * as React from 'react';
import { loadi18 } from '../i18n';

export default class App extends React.Component/*<{}, { mounted: boolean }>*/ {
	static async getInitialProps({req}) {
		if (!req) return {};
		await loadi18();
		return {};
	}

	/*constructor(props) {
		super(props);
		this.state = { mounted: false };
	}

	componentWillMount() {
		this.setState({
			mounted: true
		})
	}*/
}