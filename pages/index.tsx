import * as React from 'react';

import App from '../src/components/App';
import { PageType } from '../src/Page';
import { withTranslation } from '../src/i18n';

class Home extends React.Component<PageType> {
	render() {
		const translate = this.props.t;
    	return (
			<App t={translate}>
				<div onClick={() => alert('test')}>{translate`string.welcome`}</div>
			</App>
    	)
  	}
}

export default withTranslation('common')(Home)