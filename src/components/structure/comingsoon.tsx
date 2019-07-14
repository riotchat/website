import * as React from 'react';
import { translate, withTranslation } from '../../../src/i18n';

import Header from '../../../src/components/Header';
import { Navigation } from '../../../src/components/structure/HeaderFooter';

class ComingSoon extends React.Component<{random: number}> {
	static getInitialProps({ res, err }) {
		const random = Math.floor(Math.random() * 2) + 1;
		return { random }
	}

	render() {
		return (
			<div>
				<Header title={translate`comingsoon.title`} />
				<main style={{ position: "relative", height: "100vh" }}>
					<Navigation fixed={true} />
					<div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
						<img src="/static/images/comingsoon.png" style={{ height: "400px" }} draggable={false}/>
						<h2>{translate`comingsoon.title`}</h2>
						<p>{translate(`comingsoon.subtitle1-` + this.props.random.toString())}</p>
						<p>{translate`comingsoon.subtitle2`}</p>
					</div>
				</main>
			</div>
		);
  	}
}

export default withTranslation(ComingSoon)