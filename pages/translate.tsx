import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import css from '../sass/main.module.scss';
import { Footer, Navigation } from '../src/components/structure/HeaderFooter';
import { Content } from '../src/components/structure/Content';

class Translate extends App {
	render() {
		return (
			<div>
				<Header title={'Translate'} />
				<main>
					{/*<header style={{background: '#A1C652'}}>*/}
					<header style={{background: 'transparent'}}>
						<Navigation fixed={true} />
						<div className={css.header}>
							<div className={css['header-info']}>
								<div className={css.text}>
									<h1 className={css.headerTitle} style={{fontFamily: "Open Sans, sans-serif"}}>{translate`translate.title`}</h1>
									<p style={{ marginBottom: "20px" }}>{translate`translate.subtitle`}</p>
								</div>
								<div className={css.buttons}>
									<a href="#download" className={css['btn-purple']}>{translate`translate.button`}</a>
								</div>
							</div>
							<div className={css['content-image']}>
								<img className={css.image} src="/static/images/translate.png" />
							</div>
						</div>
					</header>
					<section id="goal">
						<Content>
						<div className={css['content-image']}>
							<img className={css.image} src="/static/images/security.png" />
						</div>
						<div className={css.hook}>
							<h2>{translate`switch.step1.title`}</h2>
							<p>{translate`switch.step1.text`}</p>
							<a href="discord-login" className={css.buttonGradient}>{translate`switch.step1.button`}</a>
						</div>
						</Content>
					</section>
					<section id="contribute">
						<Content>
						<div className={css.hook}>
							<h2>{translate`switch.step2.title`}</h2>
							<p>{translate`switch.step2.text`}</p>
						</div>
						<div className={css['content-image']}>
							<img className={css.image} style={{ padding: "0 50px" }} src="/static/images/security.png" />
						</div>
						</Content>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}

export default withTranslation(Translate);