import * as React from 'react';

import { withTranslation, translate } from '../../i18n';

import css from './Invite.module.scss';

export interface InviteInfo {
    serverName: string,
    iconURL: string,
    bgURL?: string,
    verified?: boolean,
    status: {
        members: number,
        online?: number
    }
}

export const Invite: React.FunctionComponent<{
    inviteInfo: InviteInfo
}> = (props) => {
    let cardStyle: React.CSSProperties = {};
    if(props.inviteInfo.bgURL) cardStyle.backgroundImage = `url("${props.inviteInfo.bgURL}")`;

    return (
        <div className={css.card} style={cardStyle}>
            <div className={css.opacity} >
                <span className={css.invitation}>{translate`homepage.invite.note`}</span>
                <div className={css.flex}>
                    <div className={css.icon} style={{ backgroundImage: `url("${props.inviteInfo.iconURL}")` }}></div>
                    <div>
                        <span className={css.name}>
                            {props.inviteInfo.verified && <i className={`${css.verified} bx bxs-badge-check`} style={{ color: 'mediumslateblue' }} />}
                            {props.inviteInfo.serverName}
                        </span>
                        {props.inviteInfo.status !== undefined && (
                            <div className={css.info}>
                                {props.inviteInfo.status.online !== undefined && (
                                    <div className={css.status}>
                                        <span className={css.dotOnline} />
                                        <span>{props.inviteInfo.status.online} {translate`homepage.invite.online`}</span>
                                    </div>
                                )}
                                <div className={css.status}>
                                    <span className={css.dotMembers} />
                                    <span>{props.inviteInfo.status.members} {translate`homepage.invite.members`}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={css.join}>
                        <a className={css.button}><i className={`${css.plus} bx bx-plus`} style={{ color: 'white' }} />{translate`homepage.invite.join`}</a>
                    </div> 
                </div>
            </div>
        </div>
    )
}