import * as React from 'react';

import Header from './Header';
import { PageType } from '../Page';

export default class App extends React.Component<PageType> {
	render() {
		const translate = this.props.t;
		return (
			<div>
				<Header t={translate} />
				{this.props.children}
			</div>
		)
	}
}