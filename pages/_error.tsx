import * as React from 'react';

import { PageType } from '../src/Page';
import { withTranslation } from '../src/i18n'

interface ErrorTypes extends PageType {
	statusCode: number
};

class ErrorPage extends React.Component<ErrorTypes> {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null
		return { statusCode }
	}

	render() {
		const translate = this.props.t;
		if (this.props.statusCode === 404) {
    		return (
				<div>404: {translate`error.404`}</div>
			)
		} else {
			return (
				<div>Caught error: {this.props.statusCode}</div>
			);
		}
  	}
}

export default withTranslation('common')(ErrorPage)