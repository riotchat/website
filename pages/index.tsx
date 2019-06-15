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
import { Invite } from '../src/components/structure/Invite';

class Home extends App {
	render() {
    	return (
			<div>
				<Header title={'home'} />
				{ this.state.mounted && !(process as any).browser ? <h3>You may not have access to all features as scripts are disabled or you are using an unsupported browser.</h3> : null }
				<main>
                    <header>
                        <Navigation fixed={true} />
                        <div className={css.header}>
                            <div className={css['header-info']}>
                                <div className={css.text}>
                                    <h1 className={css.headerTitle} style={{fontSize: "55px"}}>
                                        <Trans i18nKey="homepage.title">
                                            Let's riot <span className={css.gradient}>together</span>.
                                        </Trans>
                                    </h1>
                                    <p>{translate`homepage.subtitle`}</p>
                                </div>
                                <div className={css.buttons}>
                                    {/* <a id="download" href="riot.html" class="button" style="background-color: mediumslateblue"><i class='bx bxl-windows'></i> Download</a> */}

                                    <a href="#sign-up" className={css['btn-purple']}>{translate`button.testSignup`}</a>
                                    <a href="#lightweight" className={css.button}>{translate`button.learnmore`}</a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section id="lightweight" style={{backgroundImage: "url('/static/images/lightweight.png')"}}>
                        <ContentOpacityLayer>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEZklEQVRoQ+1ZTXLTSBR+r1uzJjeIXSg7CivYezInIDkBzgkwJ8A5QTwniDkB4gQke5tIzOxsyuEEeNaj7jfVsgSS3JK6JbmoVKGVXWq9/r7X778RHvmDjxw//Cbwq0+wsxPw7jc9zuQrJDpXpAighwi9+DfBAwI8xL8RfSHZx+C0H/9v+7Qi4N1vjhwm3xDROAVrCigmheRH0rkKTvtb0++K6xoRyACfIMJR082T09ki4iyS7K8mRKwJDL+sz0HCTVvgRdJEsCUGbz8/d+c2CrEiMAq/vgOgqckGi4Gbkz0K12TyHQBOF4OnV2ZrwSyMKpPhKK4RYWwquDmB2Ol9QfzSxKSMTmAYrJXJGINXJNsQSHzDX3ruRZ3Cagm8CL9OGNB1VhARfAOEAAFelW3QlsBOLl0tBieVJltJQDksEnzIg6dQkHOmjncYrucI8LpOSybvJeBbJDlGxEFuP4SL5XPXL5NRSiCx+0022ijNC+Je1jbbkiCCf4XDz4Jn/WC3Z3SbJaGikyDeL/OHUgKjcDUFwHcF09mzyxdf1mNGcGOi5f3QSaFwnLECn77z/tl4PBK3iPDk5/pyU9IS0Gk/FUYE86XnXqr/rcEnppgllhD4VDj50lPQEtBpv3ASc2Jw11jzAO+XA3cvqo3+Xp2RwA/6JKk/BT2BYHUPiF4Ts6j/Rg+k7jRV7bT03H5R/h4BVVU6TGzqgdivkAiXulLBNMNHMnbmXBW7R0AX9+2h5r/IRpqiLJskqULt58HTWVbGHoFhuParEpQJGQWYGEyk4LcAoErlo6Lm4ooWo082pkoAH5cDN+430mePwChc3QLgSxOgujWxton3quoYFWmcKLqxAb/bi+4Wg5MzKwJFu6urKsvsvBDnc2EyC6iyBCEKFt7JaQ2BfNlrW9PoHC27YZ0C6vYrvteY0OEImES4DgjkfaBLE9IVh0U/yhLYta7i+88qgMKld5LLT4dwYm3arypPzAOGgRN3FEa3gDARkt8pcJyJl0Awa9tHG4XRQyQycw1XrzRKZCaO1hUgWzlGpYQSOgxWQbEzst2s6/WqmVp6bjzpq8wD6mVdOd01ODN5FuV0EjEe8l2R2TaHWFVVnli1lIcAZybTsqVUQnWnoJoKQfzUZOBkBiy/Sleh1hWH1mMVIAoici66Go//KPJKymtqOlZJBZcMtrbC4X9mpwlNNP4D/G4SoalQWw620g3KZz84bToWT81U3S/oBsZU0vgbhdHiotgfmJjppnBq8JSUDerWxfiiYhiuXwPBVHcxosALyScm8mpno1kydflBTZUBwWfIH/4T8C31E5Xd/+BwLEn0gOAcEXJtYV5h9WZTm8iq7Dm54Jh3nSPSPvqgFxy5iMGiCRGqK6bMCNDelRVwRJpF0pmZmEwjHyiDtWs4YiLqku/YBn4yoveF5NMmwNO9rHygCqCyc8bkOQO5u2YlVNesMSkFFpHigZQE5kvJ/K7ySGcEbLTf5drfBLrUZhNZj/4E/gfnjZtPo/oD9wAAAABJRU5ErkJggg=="/>
                                <h2>{translate`homepage.lightweight.title`}</h2>
                                <p>{translate`homepage.lightweight.text`}</p>
                            </div>
                            <div className={css['content-image']}>
                                <img className={css.image} src="/static/images/security.png" />
                            </div>
                        </ContentOpacityLayer>
                    </section>
                    <section id="friends" style={{backgroundImage: "url('/static/images/friends.png')"}}>
                        <ContentOpacityLayer>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHElEQVRoQ+1XzVXCQBCeATx4ILaAFagdUIJWoFYAnmWRl80dqECsQO3ADsQKoAXiwYPA+ILCQ0jYmfwQ89xcM3/f983s7CIU/MOC1w8WQN4KWgWsAgkZsC2UkMDE7v9PgU7no1aaTRtI8zogni4oJBoSll7m5Uq/0zkcJ6ZVEECkgKv8KwS43xWfAK7b2hkIakhkygbAKX5ZyT5BsAAEbVOefY4kVM3KB8f7aCcWAN167wFSQwIACPvKqzY3fbTySRRnw1hp51fNTACT19XAcrMTDZV3dPY3AMRkbZOtAEw+ChQdgKv8IQKccLtnsRoA3tra+d4TGX7MGUhviNPGwgJQ+GM0YK3Qi2wpOwcEdwvHPY1i7YH1vl2003TaJKT6crCDgUXCl1ml0uNu39wApDWEFsAPk6xTKLD1bv3LeQnqSHQaea1YvAtwSAhPd67znJZau+IYAeiWf05IXQSsSQoioDES3ijPeZL4SW13AnDVexeBtm6UkiQE2Gvr6o3ER2IbCSDWFToqc8TVWlJolG0ogKBtAOExjQSrGAQXYe0kPY1Ye8BVk5G0501gg5lo66PjpO8DIwDOtjUVG/k/RIXUFdAtfwAIl7GL3OVI8KA852rdJAMAMZ6PXLQRz0yue5jd1hBLGZEmD3tmSmOs21sAUvYyV0BaUN72xrtQ3gWa8lsAJoay/m8VyJphU3yrgImhrP9bBbJm2BT/C3BQ6zFjsmUdAAAAAElFTkSuQmCC" />
                                <h2>{translate`homepage.friends.title`}</h2>
                                <p>{translate`homepage.friends.text`}</p>
                            </div>
                        </ContentOpacityLayer>
                    </section>
                    <section id="communities" style={{backgroundImage: "url('/static/images/communities.jpg')"}}>
                        <ContentOpacityLayer>
                            <div className={css['content-image']}>
                                <img className={css.image} src="/static/images/invites.png" />
                            </div>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADE0lEQVRoQ+1YXW7aQBD+xoWHSpi2J2hygpITND0A4EjBr6E3ICdoeoLSE4S8mkgxzgFKThBygtATtMFIfYDuVCZ1RMyu1z+hENW8oZmdnW/m2/HMEJ75j565/ygAbDqDRQaKDOSMQEGhnAHMffz/ycD0vHEkBO0TUAOhljt0MgOMEQMjw+Bh5dA7S3KHNgOT87oFYXwhwk4Sg0+lw4wxDHFcPbx042zGApg4zVMitJ/KqWx2uGu2vGPVWSWA7XD+r9vMX03b68hASAEEtCE2LrJFLOUp5iuCsXCOIbogei+3QB/MljuMyuQAnObtv+J8qUS7Lw/cceDYrwtrZz7nW+n7Zoyr9mBXC2Dq1NtMxqnCyJ0B0QFejO7lv2sCRpcIr1LG/UG9UqI3dOD+XGTgwno9nfMPlS0mcRB91CsZ8PsNF6Bm1Agz7swy7YSXhfLgUn/G46wgmNEzy7R4pP6Mg2qnLBoMPqu2vEfyVQBO81pW54nFx4p92ZNFJy5rK/o6zsfJGSPTHuwt25RkoMkyJ5e5GpXHcTeqq+O8Tm62Bo98Tgxgmasr9NJwd1lfx3mdPDMA2QMKHUtTdnWc18mzA2CMzTLtKR7xdeayq3sTkXRnBrAoc0F/QqJTbV0Ogv+Tfr0JXpTRzH2SjvNRuuYCkLXWx53TcX7rAeg4v/UA0mZ16yhUAIhGwO/Lv8RpI7Uu/bVTKGj6CNwjGL2K7S661qlj1RiizaB21qYvDMh6ATDflMqGFfb30p5pJlwQvcuaobUBYOC7WaJa9Est65v8OY8IeJsFxNoAAPKRT+ak37f2Af62HgBOY5Q6xcxXpu3tp3HIdxpD9fyrsMR8Y9reo52UbCI7AehTGmfSRD+0my0L/NlseSexA03aEVE25iUFP+k3egQ6SqKvGmmlW4mkI2LSh6tyME2wVPOIcrEVgIjbOATOG0xWWOuTRFGmE3wjBHio+j4EkQ82Iap5PHa1eL/mEB0wrIeHzXwDglspGV1dyUwKKs892uVuUic2pVcA2FTkw3uLDBQZyBmBgkI5A5j7+B9WbdFAEeO7LQAAAABJRU5ErkJggg==" />
                                <h2>{translate`homepage.communities.title`}</h2>
                                <p>{translate`homepage.communities.text`}</p>
                                <span className={css.disclaimer}>{translate`homepage.communities.note`}</span>
                            </div>
                        </ContentOpacityLayer>
                    </section>
                    <CommunitiesCarousel />
                    <section id="open-source" style={{backgroundImage: "url('/static/images/open-source-section.png')"}}>
                        <ContentOpacityLayer>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADeUlEQVRoQ+1YPW/UQBCduYC4hIIUSJFoiH0FlIlAKN4rQFShu/wCLh1UJBI94RckVNDl6JGSDmhQKG4dIVBSQnHnS4OElCJIJByCeJB98sU+2+tdfySyFLf2zr4382berhFK/mDJ8cM5gbOu4HkFZCpAQJWuYTYrhB+0baMns0b2m1OpgMU+zRAe77igiPYA8I3OjaeyIEXfnQ6BuvmIAF4OgRC91zmbLw2Bbt1sAcBDDzARPK9xY6VEBPhXALzhAUabHmgme1cKAt9vfb7av/T3ByBUBj0AdvXPxalrX27vl4KAZfB5quDbE7D0TW+zm3mAd2IU3sQdZq4gwjMf4Nd622iWhkCXmVuAcHeof4DHWtt4deYELIM3NJNtioA4Bmax7V+AMD4kQGOzGr+z618nEytun1QS6tT5KgIuEUGrxo3FuOABA3P7F/b19twUAtremg4z1xGhSUBrtTZbVq2MEgFrZmeSLvc3AODeSUZhUeOGM+dDj5VgYBYzm4Sw7lu4hYfVBW139kCWiDQBN5twvAEI0/7gRPCzclSdjtpUZGBOMuyJfg8RrgTAEvQQxhZGZZZJQoNM0SoATgY3oz2EC424zbp1sYENkvJvExCvBwHSARIux1XW/21iBTy9hzJA8BGPqo24cssamCvLif6mf1J5e8n0RSyBKL0PAxO9qHG2JNKpqoF1GF9DxCcRMYV9EUlAqHeAJZnSpjEwR6o2wJpKX4QIODOZKs5kUNP7aObSGpiwL2xYHPWeEIEuM63RSQMJeh8FL2tgsf4R1xcEPZ0bmrCJu4z3wlMBlOazjIEJ+yfCb9zvifZ0zgJjPFJCNmJLRYejYJIMTAhe5DdEzUQJOcGzzue0N7A0fiMeoynnc5KBRVUgrd8kG5nifJY1MI9EVr9JJDCQlPx8VjGwPPxGikBiXxyOa96RQtbABpn/bWX1G2kCLomI+YwUPE6rGFjoOK3oNw4mJQKebn3nlsD9No2BeROLJM5XUc2fioBbjYgrZVoDO/UrZewRoMBfiJkuNCLn9L9La2Cy8XOVUFSwNAaWBXzqJo7aVNXAsgL31qdu4tABruBfiIX3gKyB5ZX53CugYmB5kshNQq65ATS8yxBG/ELME3juFRieLufMaRvpvm4aLf8vxCLA5zqFigKYFDc3CSVtVNT7cwJFZVY2bukr8B8VZGFPS7rxigAAAABJRU5ErkJggg=="/>
                                <h2>{translate`homepage.opensource.title`}</h2>
                                <p>{translate`homepage.opensource.text`}</p>
                                <br />
                                <a href="/developers" className={css['btn-purple']}>{translate`button.devportal`}</a>
                                <a href="https://github.com/riotchat" className={css.button} target="_blank">{translate`button.github`}</a>
                            </div>
                            <div className={css['content-image']}>
                                <img className={css.image} src="/static/images/open-source.png" />
                            </div>
                        </ContentOpacityLayer>
                    </section>
                    <section id="cross-chat" style={{background: 'linear-gradient(#667eea, #764ba2)'}}>
                        <ContentOpacityLayer>
                            <div className={css['content-image']}>
                                <img className={css.image} src="/static/images/open-source.png" />
                            </div>
                            <div className={css.hook}>
                                <span className={css['coming-soon']}>{translate`string.comingsoon`}</span>
                                <h2>{translate`homepage.crosschat.title`}</h2>
                                <p>{translate`homepage.crosschat.text`}</p>
                            </div>
                        </ContentOpacityLayer>
                    </section>
                    <section id="pro" style={{background: 'linear-gradient(#9987F5, #EA86F3)'}}>
                        <Content>
                            <div className={css.hook}>
                                <h2 className={css['pro-title']}>Riot<span className={css.pro}>PRO</span></h2>
                                <h3>{translate`homepage.pro.title`}</h3>
                                <p>{translate`homepage.pro.text`}</p>
                                <Link href="/pro"><a className={css.more}>{translate`button.learnmore`}</a></Link>
                            </div>
                            <PriceTable />
                        </Content>
                    </section>
                    <section id="sign-up" style={{backgroundImage: "url('/static/images/signup.png')"}}>
                        <ContentOpacityLayer>
                            <div className={css.hook}>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB1ElEQVRoQ+1ZUU7CQBB9Q/nXG4g3wBvACfQIcgOJ1cSUDz8gfkCCR8Ab6EmsN4AbwLfAGCoSC7QD29namu0XCczMe/PebJddQskfKjl+OAJ/raBT4F8pwE/DGpaLIYA6gJoSuTGAEBWvTQ/t1efYo2ahCPxi8Q7CqRLweBrGFJ53sU1Cj0C3/wqiSyvgf5Iyv1Hn7up3DT0Cvf4UoBOrBIAxBf65JQIDjiUOfJXmcC89r0qRFXCpkKkyUl5HYDNfgtROgXUHaGu2nIUOtRB3ByPq+NfHWqkwQ/wNhEN8Vpv02J4eSiQ3AhKgDZDVloCWTQruQynmkOVZbQYkMNudBKhFwe3o2DhrQ3wskPXvRxT4rbTY4lloB236XGQmsCu91GuD71PmohwENpx358IRyMVC4BnAjX1La2YFDBy9NySxEYwPzL1G0sut2AQYL9L2osAESvsiS/b7Pu/lpoBUKPpe8HuxCZR9O226mknKqu1GpUKOgPtPLHjAWSihQVJjFIc4h8NdxoQ6fuzeQY9A6Y/Xo9uZeWjviJ1nqFTr1i44oiOQ6JZm/gxQHYQz07U/FseYROdJXvXG6hWTCliDJGozYFBbJcQRUGljhiROgQzNUwn9AjSlVkCDe2zVAAAAAElFTkSuQmCC" />
                                <h2>{translate`homepage.signup.title`}</h2>
                                <p>{translate`homepage.signup.text`}</p>
                                <TestingSignUpForm url="https://docs.google.com/forms/d/e/1FAIpQLSejUcWSxFS8vDsQbKjp1-BPOgmOSGkznimy6CysmrHa6oY_Uw/formResponse" emailName="emailAddress" />
                            </div>
                        </ContentOpacityLayer>
                    </section>
                </main>
                <Footer />
			</div>
    	)
  	}
}

export default withTranslation(Home);

class TestingSignUpForm extends React.Component<{url: string, emailName: string}, {email: string, submission: 0 | 1 | 2}> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            submission: 0
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e: React.FormEvent) {
        e.preventDefault();
        let email = this.state.email;
        this.setState({
            email: this.state.email,
            submission: 1
        });

        try {
            let form = new FormData();
            form.append(this.props.emailName, this.state.email)

            /*let response = await axios(this.props.url, {
                method: 'POST',
                data: form
			})*/
			//alert('"sent"')

            this.setState({
                email: this.state.email,
                submission: 2
            });
        } catch(e) {
            console.error(e);
            this.setState({
                email: this.state.email,
                submission: 2
            });
        }
    }

    render() {
        if(this.state.submission !== 2) {
            return <form className={css.testingSignUpForm} onSubmit={this.onSubmit}>
                <input type="email" disabled={this.state.submission !== 0} required placeholder="yourmail@mail.com" onChange={
                    (e) => this.setState({email: e.target.value, submission: this.state.submission})
                } />
                <input type="submit" disabled={this.state.submission !== 0} value={translate`button.testSignup`} />
            </form>;
        } else {
            return <h4>{translate`homepage.signup.success`}</h4>;
        }
    }
}

export class CommunitiesCarousel extends React.Component {
    render() {
        return (
            <section id="communities-test" style={{ backgroundImage: "url('/static/images/communities.jpg')" }}>
                <Translation>
                    { (t, i18n) => (
                        <ContentOpacityLayer>
                            <div className={css['content-side']}>
                                <Invite serverName="Terraria" iconURL="/static/images/minecraft-icon.jpg" bgURL="/static/images/minecraft.jpg" verified={true} status={{ members: 8200, online: 4500 }} />
                                <Invite serverName="Minecraft" iconURL="/static/images/minecraft-icon.jpg" bgURL="/static/images/minecraft.jpg" verified={true} status={{ members: 15000, online: 6000 }} />
                                <Invite serverName="Overwatch" iconURL="/static/images/header.png" bgURL="/static/images/communities.jpg" verified={true} status={{ members: 7000, online: 4000 }} />
                                <Invite serverName="AutoChess" iconURL="/static/images/autochess-icon.jpg" bgURL="/static/images/autochess.png" verified={true} status={{ members: 4500, online: 3100 }} />
                            </div>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADE0lEQVRoQ+1YXW7aQBD+xoWHSpi2J2hygpITND0A4EjBr6E3ICdoeoLSE4S8mkgxzgFKThBygtATtMFIfYDuVCZ1RMyu1z+hENW8oZmdnW/m2/HMEJ75j565/ygAbDqDRQaKDOSMQEGhnAHMffz/ycD0vHEkBO0TUAOhljt0MgOMEQMjw+Bh5dA7S3KHNgOT87oFYXwhwk4Sg0+lw4wxDHFcPbx042zGApg4zVMitJ/KqWx2uGu2vGPVWSWA7XD+r9vMX03b68hASAEEtCE2LrJFLOUp5iuCsXCOIbogei+3QB/MljuMyuQAnObtv+J8qUS7Lw/cceDYrwtrZz7nW+n7Zoyr9mBXC2Dq1NtMxqnCyJ0B0QFejO7lv2sCRpcIr1LG/UG9UqI3dOD+XGTgwno9nfMPlS0mcRB91CsZ8PsNF6Bm1Agz7swy7YSXhfLgUn/G46wgmNEzy7R4pP6Mg2qnLBoMPqu2vEfyVQBO81pW54nFx4p92ZNFJy5rK/o6zsfJGSPTHuwt25RkoMkyJ5e5GpXHcTeqq+O8Tm62Bo98Tgxgmasr9NJwd1lfx3mdPDMA2QMKHUtTdnWc18mzA2CMzTLtKR7xdeayq3sTkXRnBrAoc0F/QqJTbV0Ogv+Tfr0JXpTRzH2SjvNRuuYCkLXWx53TcX7rAeg4v/UA0mZ16yhUAIhGwO/Lv8RpI7Uu/bVTKGj6CNwjGL2K7S661qlj1RiizaB21qYvDMh6ATDflMqGFfb30p5pJlwQvcuaobUBYOC7WaJa9Est65v8OY8IeJsFxNoAAPKRT+ak37f2Af62HgBOY5Q6xcxXpu3tp3HIdxpD9fyrsMR8Y9reo52UbCI7AehTGmfSRD+0my0L/NlseSexA03aEVE25iUFP+k3egQ6SqKvGmmlW4mkI2LSh6tyME2wVPOIcrEVgIjbOATOG0xWWOuTRFGmE3wjBHio+j4EkQ82Iap5PHa1eL/mEB0wrIeHzXwDglspGV1dyUwKKs892uVuUic2pVcA2FTkw3uLDBQZyBmBgkI5A5j7+B9WbdFAEeO7LQAAAABJRU5ErkJggg==" />
                                <h2>{translate`homepage.communities.title`}</h2>
                                <p>{translate`homepage.communities.text`}</p>
                                <Link href="/pro"><a className={css.more}>Discover Servers</a></Link>
                                <span className={css.disclaimer}>{translate`homepage.communities.note`}</span>
                            </div>
                        </ContentOpacityLayer>
                    )}
                </Translation>
            </section>
        )
    }
}