import * as React from 'react';

import App from '../../src/components/App';
import Header from '../../src/components/Header';
import { withTranslation, translate } from '../../src/i18n';

import css from '../../sass/main.scss';
import { Footer, Navigation } from '../../src/components/structure/HeaderFooter';
import { Trans } from 'react-i18next';
import Link from 'next/link';
import { Content, ContentOpacityLayer } from '../../src/components/structure/Content';

class Documentation extends App {
	render() {
		return (
			<div>
				<Header title={'Documentation'} />
				yes
				<Footer />
			</div>
		)
	}
}

//export default withTranslation(Documentation);
import ComingSoon from '../../src/components/structure/comingsoon';
export default ComingSoon;