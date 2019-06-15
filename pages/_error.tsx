import * as React from 'react';
import { translate, withTranslation } from '../src/i18n';

class ErrorPage extends React.Component<{statusCode: number}> {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null
		return { statusCode }
	}

	render() {
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

export default withTranslation(ErrorPage)