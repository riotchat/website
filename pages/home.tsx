import * as React from 'react';

import { PageType } from '../src/Page';
import { withTranslation } from '../src/i18n'

class Home extends React.Component<PageType> {
	render() {
		const translate = this.props.t;
    	return (
			<div onClick={() => alert('test')}>{translate`string.welcome`}</div>
    	)
  	}
}

export default withTranslation('common')(Home)