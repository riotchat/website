import * as React from 'react';

import Head from 'next/head';
import { translate } from '../i18n';

export default class Header extends React.Component {
	render() {
    	return (
			<Head>
				<title>Riot - {translate`string.welcome`}</title>
			</Head>
    	)
  	}
}