import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import { ContentOpacityLayer, Content } from '../src/components/structure/Content';
import { Trans, Translation } from 'react-i18next';
import { Navigation, Footer } from '../src/components/structure/HeaderFooter';
import { PriceTable } from '../src/components/structure/PriceTable';
import Link from 'next/link';

import css from '../sass/main.scss';
import cssAuth from '../sass/Authorize.scss';
import { Invite, InviteInfo } from '../src/components/structure/Invite';

class Authorize extends App {
	render() {
    	return (
			<div>
				<Header title={translate`homepage.name`} />
				<main>
                    <div style={{background: "darkred"}}>
                        <Navigation fixed={true} />
                        <div className={css.header}>
                            <div className={css['header-info']}>
                                <div className={css.text}>
                                    <p>Connect your YouTube account</p>
                                    <span style={{ fontSize: "40px", fontWeight: "bold" }}>Username</span>
                                    <p>Integrate YouTube with Riot to get access to features like video sharing, a "Now Playing" status and synced video playback.</p>
                                </div>
                                <div className={css.buttons}>
                                    {/* <a id="download" href="riot.html" class="button" style="background-color: mediumslateblue"><i class='bx bxl-windows'></i> Download</a> */}

                                    <a href="#sign-up" className={cssAuth.btnAuth}><i className={`${css.icon} bx bxl-youtube`} style={{color: 'red'}}></i>Authorize YouTube</a>
                                    <a href="#lightweight" className={cssAuth.btnAuthCancel}>Cancel Authorization</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
			</div>
    	)
  	}
}

export default withTranslation(Authorize);