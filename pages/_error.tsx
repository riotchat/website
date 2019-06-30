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
			<div style={{background: "linear-gradient(-20deg, #00D1D8, #009FA8)"}}>
				{
					this.props.statusCode === 404 ?
						<main style={{ height: "100vh" }}>
							<Header title={'Not Found'} />
							<Navigation />
							<div style={{ textAlign: "center" }}>
								<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
									<img src="/static/images/404.png" width="100%" style={{ maxWidth: "600px" }} />
								</div>
								<h2>{translate`error.404`}</h2>
								<p><Trans i18nKey='error.goback'>
									<a href="/"></a>
								</Trans></p>
							</div>
						</main>
					:
						<main>
							<Header title={this.props.statusCode.toString()} />
							<div>Caught error: {this.props.statusCode}</div>
						</main>
				}
			</div>
		);
  	}
}

export default withTranslation(ErrorPage)