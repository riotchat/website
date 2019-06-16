import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import css from '../sass/main.scss';
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
					<section id="friends">
						<Content>
							<div className={css.hook}>
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHElEQVRoQ+1XzVXCQBCeATx4ILaAFagdUIJWoFYAnmWRl80dqECsQO3ADsQKoAXiwYPA+ILCQ0jYmfwQ89xcM3/f983s7CIU/MOC1w8WQN4KWgWsAgkZsC2UkMDE7v9PgU7no1aaTRtI8zogni4oJBoSll7m5Uq/0zkcJ6ZVEECkgKv8KwS43xWfAK7b2hkIakhkygbAKX5ZyT5BsAAEbVOefY4kVM3KB8f7aCcWAN167wFSQwIACPvKqzY3fbTySRRnw1hp51fNTACT19XAcrMTDZV3dPY3AMRkbZOtAEw+ChQdgKv8IQKccLtnsRoA3tra+d4TGX7MGUhviNPGwgJQ+GM0YK3Qi2wpOwcEdwvHPY1i7YH1vl2003TaJKT6crCDgUXCl1ml0uNu39wApDWEFsAPk6xTKLD1bv3LeQnqSHQaea1YvAtwSAhPd67znJZau+IYAeiWf05IXQSsSQoioDES3ijPeZL4SW13AnDVexeBtm6UkiQE2Gvr6o3ER2IbCSDWFToqc8TVWlJolG0ogKBtAOExjQSrGAQXYe0kPY1Ye8BVk5G0501gg5lo66PjpO8DIwDOtjUVG/k/RIXUFdAtfwAIl7GL3OVI8KA852rdJAMAMZ6PXLQRz0yue5jd1hBLGZEmD3tmSmOs21sAUvYyV0BaUN72xrtQ3gWa8lsAJoay/m8VyJphU3yrgImhrP9bBbJm2BT/C3BQ6zFjsmUdAAAAAElFTkSuQmCC" />
								<h1>Find your friends easily.</h1>
								<p>You probably know your friends name in real life, maybe even their nickname. On Riot, you
									just need to type in your friends name, and you're good to go, so you don't have to deal
									with some random number tags.</p>
							</div>
						</Content>
					</section>
					<section id="contribute">
						<Content>
							<div className={css['content-image']}>
								<img className={css.image} src="/static/images/invites.png" />
							</div>
							<div className={css.hook}>
								<img
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADE0lEQVRoQ+1YXW7aQBD+xoWHSpi2J2hygpITND0A4EjBr6E3ICdoeoLSE4S8mkgxzgFKThBygtATtMFIfYDuVCZ1RMyu1z+hENW8oZmdnW/m2/HMEJ75j565/ygAbDqDRQaKDOSMQEGhnAHMffz/ycD0vHEkBO0TUAOhljt0MgOMEQMjw+Bh5dA7S3KHNgOT87oFYXwhwk4Sg0+lw4wxDHFcPbx042zGApg4zVMitJ/KqWx2uGu2vGPVWSWA7XD+r9vMX03b68hASAEEtCE2LrJFLOUp5iuCsXCOIbogei+3QB/MljuMyuQAnObtv+J8qUS7Lw/cceDYrwtrZz7nW+n7Zoyr9mBXC2Dq1NtMxqnCyJ0B0QFejO7lv2sCRpcIr1LG/UG9UqI3dOD+XGTgwno9nfMPlS0mcRB91CsZ8PsNF6Bm1Agz7swy7YSXhfLgUn/G46wgmNEzy7R4pP6Mg2qnLBoMPqu2vEfyVQBO81pW54nFx4p92ZNFJy5rK/o6zsfJGSPTHuwt25RkoMkyJ5e5GpXHcTeqq+O8Tm62Bo98Tgxgmasr9NJwd1lfx3mdPDMA2QMKHUtTdnWc18mzA2CMzTLtKR7xdeayq3sTkXRnBrAoc0F/QqJTbV0Ogv+Tfr0JXpTRzH2SjvNRuuYCkLXWx53TcX7rAeg4v/UA0mZ16yhUAIhGwO/Lv8RpI7Uu/bVTKGj6CNwjGL2K7S661qlj1RiizaB21qYvDMh6ATDflMqGFfb30p5pJlwQvcuaobUBYOC7WaJa9Est65v8OY8IeJsFxNoAAPKRT+ak37f2Af62HgBOY5Q6xcxXpu3tp3HIdxpD9fyrsMR8Y9reo52UbCI7AehTGmfSRD+0my0L/NlseSexA03aEVE25iUFP+k3egQ6SqKvGmmlW4mkI2LSh6tyME2wVPOIcrEVgIjbOATOG0xWWOuTRFGmE3wjBHio+j4EkQ82Iap5PHa1eL/mEB0wrIeHzXwDglspGV1dyUwKKs892uVuUic2pVcA2FTkw3uLDBQZyBmBgkI5A5j7+B9WbdFAEeO7LQAAAABJRU5ErkJggg==" />
								<h1>The whole gang is here.</h1>
								<p>With Riot Communities, you can join a server based on your favorite game. Communities
									have their own events and even giveaways. It's a match made in heaven. So be there or be
									square.</p>
								<span className={css.disclaimer}>Overwatch and the Overwatch logo are trademarks of Blizzard Entertainment.</span>
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