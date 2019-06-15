import * as React from 'react';

import App from '../src/components/App';
import { withTranslation, translate } from '../src/i18n';

class Home extends App {
	render() {
    	return (
			<div onClick={() => alert('test')}>{translate`string.welcome`}</div>
    	)
  	}
}

export default withTranslation(Home);