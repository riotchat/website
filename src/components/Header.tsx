import * as React from 'react';
import Head from 'next/head';
import { PageType } from '../Page';

export default class Header extends React.Component<PageType> {
	render() {
		const translate = this.props.t;
    	return (
			<Head>
				<title>Riot - {translate`string.welcome`}</title>
			</Head>
    	)
  	}
}