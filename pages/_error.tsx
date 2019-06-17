import * as React from 'react';
import { translate, withTranslation } from '../src/i18n';

import Header from '../src/components/Header';
import { Footer, Navigation } from '../src/components/structure/HeaderFooter';
import { Trans } from 'react-i18next';

class ErrorPage extends React.Component<{statusCode: number}> {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null
		return { statusCode }
	}

	render() {
		return (
			<div>
				<Header title={'Pro'} />
				{
					this.props.statusCode === 404 ?
						<main>
							<Navigation />
							<div style={{ textAlign: "center" }}>
								<img src="/static/images/404.png" width="100%" style={{ maxWidth: "600px" }} />
								<h2>{translate`error.404`}</h2>
								<p><Trans i18nKey='error.goback'>
									<a href="/"></a>
								</Trans></p>
							</div>
						</main>
					:
						<main>
							<div>Caught error: {this.props.statusCode}</div>
						</main>
				}
				<Footer />
			</div>
		);
  	}
}

export default withTranslation(ErrorPage)