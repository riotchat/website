import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import { ContentOpacityLayer, Content } from '../src/components/structure/Content';
import { Trans, Translation } from 'react-i18next';
import { Navigation, Footer } from '../src/components/structure/HeaderFooter';
import { PriceTable } from '../src/components/structure/PriceTable';
import Link from 'next/link';

import css from '../sass/main.module.scss';
import cssInvite from './invite.module.scss';
import { Invite, InviteInfo } from '../src/components/structure/Invite';

class InvitePage extends App {
    render() {
        return (
            <div style={{ position: "relative" }}>
                <div className={cssInvite.bg} style={{ backgroundImage: "url('/static/images/autochess.png')" }} />
                <Header title="AutoChess on Riot" includeBeginning={false} />
                <main style={{ position: "relative", zIndex: 2 }}>
                    <div className={cssInvite.wrapper}>
                        <div className={cssInvite.info}>
                            <div className={cssInvite.container}>
                                <div className={cssInvite.logo}>
                                </div>
                                <div className={cssInvite.server}>
                                    <span className={cssInvite.invite}>You have been invited by Username to join</span>
                                    <div>
                                        <img className={cssInvite.verified} src="/static/icons/verified.svg"/>
                                        <span className={cssInvite.title}>AutoChess</span>
                                    </div>
                                    <div className={cssInvite.statusWrap}>
                                        <div className={cssInvite.status}>
                                            <span className={cssInvite.dotOnline} />
                                            <span className={cssInvite.statusText}>4 {translate`homepage.invite.online`}</span>
                                        </div>
                                        <div className={cssInvite.status}>
                                            <span className={cssInvite.dotMembers} />
                                            <span className={cssInvite.statusText}>8 {translate`homepage.invite.members`}</span>
                                        </div>
                                    </div>
                                    <a className={cssInvite.btnJoin}>Join</a>
                                </div>
                            </div>
                        </div>
                        <div className={cssInvite.rules}>
                            <div className={cssInvite.container}>
                                <h2>SERVER RULES</h2>
                                <ul>
                                    <li>Be kind to each other.</li>
                                    <li>Create a welcoming community for everyone. We don't tolerate bullying or doxing people</li>
                                    <li>Create a welcoming community for everyone. We don't tolerate bullying or doxing people</li>
                                    <li>Create a welcoming community for everyone. We don't tolerate bullying or doxing people</li>
                                    <li>Create a welcoming community for everyone. We don't tolerate bullying or doxing people</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default withTranslation(InvitePage);