import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import css from '../sass/main.scss';
import formCss from '../sass/Form.scss'
import { Footer, Navigation } from '../src/components/structure/HeaderFooter';
import { Content } from '../src/components/structure/Content';

class SwitchToRiot extends App {
	render() {
		return (
			<div>
				<Header title={'Switch to Riot'} />
				{ /*this.props.location.search != undefined*/ true ?	
				<main>
				<header style={{ background: "transparent" }}>
				<Navigation fixed={true} />
				<div style={{ textAlign: 'center', paddingTop: '100px' }}>
					<h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{translate`switch.title`}</h1>
					<img src="/static/svg/switch-to-riot.svg" height="98px" style={{ margin: "50px 0" }}></img>
					<p style={{ marginBottom: '40px' }} >{translate`switch.subtitle`}</p>
					<a href="#step1" className={css.buttonGradient}>{translate`switch.button`}</a>
				</div>
				</header>
					<section id="step1">
						<Content>
						<div className={css['content-image']}>
							<img className={css.image} src="/static/images/security.png" />
						</div>
						<div className={css.hook}>
							<span className={css.step}>1</span>
							<h2>{translate`switch.step1.title`}</h2>
							<p>{translate`switch.step1.text`}</p>
							<a href="discord-login" className={css.buttonGradient}>{translate`switch.step1.button`}</a>
						</div>
						</Content>
					</section>
					<section id="step2">
						<Content>
						<div className={css.hook}>
							<span className={css.step}>2</span>
							<h2>{translate`switch.step2.title`}</h2>
							<p>{translate`switch.step2.text`}</p>
						</div>
						<div className={css['content-image']}>
							<img className={css.image} style={{ padding: "0 50px" }} src="/static/images/security.png" />
						</div>
						</Content>
					</section>
				</main>
				:
				<div style={{ width: "100%", minHeight: "100%", background: "linear-gradient(#D468EE, #7B68EE)" }}>
					<Navigation fixed={false} />
					<div style={{ textAlign: 'center', paddingTop: '100px' }}>
						<h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{translate`switch.completion.title`}</h1>
						<p style={{ marginBottom: '40px' }}>{translate`switch.completion.subtitle`}</p>
					</div>
					<div style={{ maxWidth: "800px", margin: "0 auto" }}>
						<div className={formCss.form} style={{ margin: "0 auto" }}>
							<form action="/action_page.php">
								<div className="discord-import">
									<div className="picture">

									</div>
									<div className={formCss.user}>
										<div className={formCss.profilePicture}>
											<div className={formCss.edit}>
												<i className={`${formCss.icon} bx bxs-pencil`} style={{color: '#FFFFFF'}}></i>
											</div>
											<img className={formCss.picture} src="/static/images/header.png" />
										</div>
										<div>
											<input className={formCss.nickname} type="text" name="username" placeholder={translate`string.username`} required /><br />
											<span className={formCss.welcome}>{translate`string.welcome`}</span>
										</div>
									</div>
								</div>
								<div className={`${formCss.input} ${formCss.email}`} style={{ marginTop: '30px' }}>
									<input className={formCss.inputField} type="email" name="email" autoComplete="email" placeholder={translate`string.email`} required />
								</div>
								<div className={`${formCss.input} ${formCss.pass}`}>
									<input className={formCss.inputField} type="password" name="password" autoComplete="current-password" placeholder={translate`string.password`} required />
								</div>
								<div className={formCss.tos}>
									<div className={formCss.checkbox}>
										<input type="checkbox" id="tosCheckbox" />
										<label htmlFor="tosCheckbox"></label>
									</div>
									<p className={formCss.tos}>I agree to the Terms of Service and the community guidelines.</p>
								</div>
								<input type="submit" value="Create account" />
							</form>
						</div>
					</div>
				</div>
				}
				<Footer />
			</div>
		)
	}
}

export default withTranslation(SwitchToRiot);