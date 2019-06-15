import * as React from 'react';

import css from './Invite.scss';

export const Invite: React.FunctionComponent<{
    serverName: string,
    iconURL: string,
    bgURL?: string,
    verified?: boolean,
    status: {
        members: number,
        online?: number
    }
}> = (props) => {
    let cardStyle: React.CSSProperties = {};
    if(props.bgURL) cardStyle.backgroundImage = `url("${props.bgURL}")`;

    return (
        <div className={css.card} style={cardStyle}>
            <div className={css.opacity} >
                <span className={css.invitation}>You have been invited to join</span>
                <div className={css.flex}>
                    <div className={css.icon} style={{ backgroundImage: `url("${props.iconURL}")` }}></div>
                    <div>
                        <span className={css.name}>
                            {props.verified && <i className={`${css.verified} bx bxs-badge-check`} style={{ color: 'mediumslateblue' }} />}
                            {props.serverName}
                        </span>
                        <div className={css.info}>
                            {props.status.online !== undefined && (
                                <div className={css.status}>
                                    <span className={css.dotOnline} />
                                    <span>{props.status.online} online</span>
                                </div>
                            )}
                            <div className={css.status}>
                                <span className={css.dotMembers} />
                                <span>{props.status.members} members</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.join}>
                        <a className={css.button}><i className={`${css.plus} bx bx-plus`} style={{ color: 'white' }} />Join</a>
                    </div> 
                </div>
            </div>
        </div>
    )
}