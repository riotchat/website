import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import css from '../sass/main.module.scss';
import { Footer } from '../src/components/structure/HeaderFooter';

class PAGENAME extends App {
	render() {
		return (
			<div>
				<Header title={'Pro'} />
				<main></main>
				<Footer />
			</div>
		)
	}
}

export default withTranslation(PAGENAME);