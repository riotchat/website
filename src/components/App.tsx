import * as React from 'react';
import { loadi18 } from '../i18n';

export default class App extends React.Component {
	static async getInitialProps({req}) {
		if (!req) return {};
		await loadi18();
		return {};
	}
}