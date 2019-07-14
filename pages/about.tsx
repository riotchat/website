import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import css from '../sass/main.module.scss';

import { Footer, Navigation } from '../src/components/structure/HeaderFooter';
import { Trans } from 'react-i18next';

class About extends App {
	render() {
    	return (
			<div>
				<Header title={translate`about.name`} />
				<main>
					<header style={{ backgroundImage: "url('/static/images/about-us.png')", height: "100vh" }}>
						<Navigation fixed={true} />
						<div className={css['header-opacity-layer']}/>
						<div className={css.header}>
							<div className={css['header-info']}>
								<img src="/static/downloads/branding/logo-gradient-r.svg" height="48px" />
								<p>{translate`about.subtitle`}</p>
							</div>
						</div>
					</header>
					<section id="stats" style={{ background: "linear-graident(black, white)", textAlign: 'center', padding: '100px 0' }}>
						<div className={css['content-download']}>
							<h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{translate`about.stats.title`}</h1>
							<p style={{ marginBottom: '40px' }} >{translate`about.stats.subtitle`}</p>
						</div>
						<div className={css.team}>

						</div>
					</section>
					<section id="team" style={{ background: "mediumslateblue", textAlign: 'center', padding: '100px 0' }}>
						<div className={css['content-download']}>
							<h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{translate`about.team.title`}</h1>
							<p style={{ marginBottom: '40px' }} >{translate`about.team.subtitle`}</p>
						</div>
						<div className={css.team}>
							<div className={css['team-wrap']}>
								<ProfileCard name="nizune" pfp="/static/images/nizune.png" position="Co-founder" roles={["Front-end Developer", "Graphics Designer"]}
									social={{ riot: "nizune", twitter: "nizune_", github: "nizune", site: "https://renevinter.gq" }}>
										Interested in modern web design, and web development. Also peanut butter rocks.
								</ProfileCard>
								<ProfileCard pfp="/static/images/fatalerrorcoded.png" name="FatalErrorCoded" position="Co-founder" roles={["Front-end Developer", "Back-end Developer"]}
									social={{ twitter: "FatalErrorCoded", github: "FatalErrorCoded", site: "https://fatalerrorcoded.eu" }}>
										something something
										Oops my system crashed!
								</ProfileCard>
								<ProfileCard pfp="/static/images/insert.png" name="insert" roles={["Fullstack Developer"]}
									social={{ twitter: "insertish", github: "insertish", site: "https://insrt.uk" }}>
										yes
								</ProfileCard>
							</div>
						</div>
					</section>
					<section id="contributors" style={{ background: "white", textAlign: 'center', padding: '100px 0' }}>
						<div className={css['section-wrap']}>
							<div className={css['content-download']}>
								<h1 style={{ color: "mediumslateblue", fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{translate`about.contributors.title`}</h1>
								<p style={{ color: "black", marginBottom: '40px' }}>{translate`about.contributors.subtitle`}</p>
							</div>
							<span style={{ color: "black" }}>
                                <Trans i18nKey="about.contributors.note">
                                    <a style={{ color: "mediumslateblue" }} href="https://allcontributors.org/" target="_blank"></a>
                                </Trans>
                            </span>
						</div>
					</section>
					{ false && (
                        <section id="jobs" style={{ background: "white", textAlign: 'center', padding: '100px 0' }}>
                            <div className={css['section-wrap']}>
                                <div className={css['content-download']}>
                                    <h1 style={{ color: "mediumslateblue", fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{translate`about.work.title`}</h1>
                                    <p style={{ color: "black", marginBottom: '40px' }}>{translate`about.work.subtitle`}</p>
                                </div>
                                <div className={css.workCardWrapper}>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>
                                        <div className={css.workCardBanner}>
                                            <span className={css.workCardTitle}>Social Media Manager</span>
                                        </div>
                                        <span className={css.workCardDesc}>Social Media</span>
                                    </div>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>yoohoo</div>
                                    <div className={css.workCard}>yoohoo</div>
                                </div>
                                <a style={{ color: "mediumslateblue" }} href="" target="_blank">{translate`about.work.note`}</a>
                            </div>
                        </section>
                    )}
				</main>
				<Footer />
			</div>
    	)
  	}
}

export default withTranslation(About);

export const ProfileCard: React.FunctionComponent<{
    name: string,
    pfp: string,
    position?: string,
    roles: string[],
    contributor?: boolean,
    social?: {
        riot?: string,
        github?: string,
        twitter?: string,
        site?: string
    }
}> = (props) => {
    return (
        <div className={css['team-card']}>
            {props.contributor && (
                <div className={css['profile-contributor']} style={{ textAlign: "left" }}>
                    <span style={{ fontSize: "12px" }}><i className={`${css.icon} bx bxl-github`} style={{ color: 'black', margin: "0", fontSize: "20px", verticalAlign: "bottom", marginRight: "5px" }}></i>GitHub Contributor</span>
                </div>
            )}
            <div className={css['profile-picture']}>
                <div className={css['profile-overlay']} />
                <img src={props.pfp} width="100px" />
            </div>
            <h2 className={css['team-name']}>{props.name}</h2>
            {props.position !== undefined && (
                <p>{props.position}</p>
            )}
            {props.roles && (
                <ul style={{ listStyle: "none", padding: "0", color: "grey", textAlign: "center", fontSize: "14px" }}>
                    {props.roles.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            )}
            {props.children && (
                <div className={css['profile-bio']}>
                    <p className={css['profile-description']}>{props.children}</p>
                </div>
            )}
            {props.social && (
                <ul className={css['profile-social-links']}>
                    {props.social.riot && (
                        <li>
                            <a target="_blank" href={`https://twitter.com/${props.social.riot}`}>
                                <img src="/static/downloads/branding/logo-gradient-r.svg" height="20px" style={{ margin: "4px 24px 0 14px"}}/>
                            </a>
                        </li>
                    )}
                    {props.social.twitter && (
                        <li>
                            <a target="_blank" href={`https://twitter.com/${props.social.twitter}`}>
                                <i className={`${css.icon} bx bxl-twitter`} style={{ color: 'mediumslateblue' }}></i>
                            </a>
                        </li>
                    )}
                    {props.social.github && (
                        <li>
                            <a target="_blank" href={`https://github.com/${props.social.github}`}>
                                <i className={`${css.icon} bx bxl-github`} style={{ color: 'mediumslateblue' }}></i>
                            </a>
                        </li>
                    )}
                    {props.social.site && (
                        <li>
                            <a target="_blank" href={props.social.site}>
                                <i className={`${css.icon} bx bx-globe`} style={{ color: 'mediumslateblue' }}></i>
                            </a>
                        </li>
                    )}
                </ul>
            )}
        </div>
    )
}