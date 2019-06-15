import * as React from 'react';

import Head from 'next/head';

export default class Header extends React.Component<{title: string}> {
	render() {
    	return (
			<Head>
				<title>Riot | {this.props.title}</title>
			</Head>
    	)
  	}
}