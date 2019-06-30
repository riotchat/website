import * as React from 'react';

import Head from 'next/head';

export default class Header extends React.Component<{title: string, includeBeginning?: boolean}> {
	render() {
    	return (
			<Head>
				<title>
					{this.props.includeBeginning !== false ? "Riot | " : ""}{this.props.title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link key="icon" rel="icon" href="/static/favicon.ico" />
			</Head>
    	)
  	}
}