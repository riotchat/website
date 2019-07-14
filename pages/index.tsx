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
import { Invite, InviteInfo } from '../src/components/structure/Invite';

const invites: InviteInfo[] = [
    { serverName: "Overwatch", iconURL: "/static/images/header.png", bgURL: "/static/images/communities.jpg", verified: true, status: { members: 7000, online: 4000 } },
    { serverName: "AutoChess", iconURL: "/static/images/autochess-icon.jpg", bgURL: "/static/images/autochess.png", verified: true, status: { members: 4500, online: 3100 } },
    { serverName: "Terraria", iconURL: "/static/images/terraria-icon.png", bgURL: "/static/images/terraria-background.jpg", verified: true, status: { members: 8200, online: 4500 } },
    { serverName: "Minecraft", iconURL: "/static/images/minecraft-icon.jpg", bgURL: "/static/images/minecraft.jpg", verified: true, status: { members: 15000, online: 6000 } }
]

class Home extends App {
	render() {
    	return (
			<div>
				<Header title={translate`homepage.name`} />
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

                                    <a href="#sign-up" className={css.btnPurple}>{translate`button.testSignup`}</a>
                                    <a href="#lightweight" className={css.button}>{translate`button.learnmore`}</a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section id="lightweight" style={{backgroundImage: "url('/static/images/lightweight.png')"}}>
                        <ContentOpacityLayer>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADLUlEQVRoQ+2YMVLbQBSG/2e5MU3MDfCMqKOJ3QMlVgGcIHCC+AaQEyQ5AXCCOIVNid1biVLbDM4NoIEUkl9mRTzRWFrtCmnlMINarVb/t+9/b98u4YU/9ML14xVg3RF8jUDeCDjXt03rd3hAzA5ADoBd6RzMPojuQDQKULv091vz1bGVRcAZ3DoWwg8ADonQzAsO5o8Td/tsLQCdq5tTMCd+ngeCgUuvax9XCiDsUn8Mv2baRJuCx5PudsJuxiwUiX8IrkGRzws/zLjzXHuzkgiULX4petK1EwteegRMiRcQxgF0xTNwT2CfQT4hKqc7Oh4zCqAtnvlnWKsfxmt652q6y0x9At5kgRgD0BYP3IcNa8vfa92tChUQYLquHEBXvBDGwBeva/dkItuDqU9Eb9PeM+OX59pbuavQ0w662AHYIUJiAjA3tUulZDddiuoMpyN5PuTcB9pXs/fEEDufvFfRybzYGFUEsgBk3ybKaNRsPYbnBBzm1KccLjajcMNqpeWAiHSdwh+ySRg48rp2X2mh9mDWJ8KBUs3zB4yChnUUh4jEIziXWVGUXa9rpzaA6RF4CEayZHq+7n9fikgA6FON5szsqKIta+TEjKk7cWQjwxC6CyFWPyTLSTsLSAHEi/8GQlG5MnuhdUNkWWcZQWUzty4IIT5sWL20ihW3nxJgHXZi0S9t1HdV4jNzYDXJqopEHvG5AKqIhK5tclso/oGpSOgkbFrp1coB03Z6rvjcFjIRiSLiCwGUkRPM+Oa5dqGmUWmh5d0OM+aea5+Ua6f0Hl+3zdCKQGc4E8e86EzAjItyIQwDvBve9GrgT/EVKRfCMEB7OLslJI+R5UEYBFDdEpQDYRJgMD0D0WlWQhWGULTKOsksrULZNwTRFck9gOO0c6puiV0wTr679oWOUNkYKYDM/08T8Tjges93W37Wz1VtR9CwNnU6zqx/ZERgxskPebxgusizanKI4v7P3Ac6QwHAYwbNxSXsgmp92blUZYFUCOK9yf72SPWt6r1yJ1ZNoPs+DlG0/ynUTusKThv399Lss85RUfc/lUVAV1Deca8AeVes7PEvPgJ/AHdn5ECFZMSTAAAAAElFTkSuQmCC" draggable={false}/>
                                <h2>{translate`homepage.lightweight.title`}</h2>
                                <p>{translate`homepage.lightweight.text`}</p>
                            </div>
                            <div className={css['content-image']}>
                                <img className={css.image} src="/static/images/lightweight.svg" width="800px"/>
                                <span className={css.note}>{translate`homepage.lightweight.note`}</span>
                            </div>
                        </ContentOpacityLayer>
                    </section>
                    <section id="friends" style={{backgroundImage: "url('/static/images/friends.png')"}}>
                        <ContentOpacityLayer>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHElEQVRoQ+1XzVXCQBCeATx4ILaAFagdUIJWoFYAnmWRl80dqECsQO3ADsQKoAXiwYPA+ILCQ0jYmfwQ89xcM3/f983s7CIU/MOC1w8WQN4KWgWsAgkZsC2UkMDE7v9PgU7no1aaTRtI8zogni4oJBoSll7m5Uq/0zkcJ6ZVEECkgKv8KwS43xWfAK7b2hkIakhkygbAKX5ZyT5BsAAEbVOefY4kVM3KB8f7aCcWAN167wFSQwIACPvKqzY3fbTySRRnw1hp51fNTACT19XAcrMTDZV3dPY3AMRkbZOtAEw+ChQdgKv8IQKccLtnsRoA3tra+d4TGX7MGUhviNPGwgJQ+GM0YK3Qi2wpOwcEdwvHPY1i7YH1vl2003TaJKT6crCDgUXCl1ml0uNu39wApDWEFsAPk6xTKLD1bv3LeQnqSHQaea1YvAtwSAhPd67znJZau+IYAeiWf05IXQSsSQoioDES3ijPeZL4SW13AnDVexeBtm6UkiQE2Gvr6o3ER2IbCSDWFToqc8TVWlJolG0ogKBtAOExjQSrGAQXYe0kPY1Ye8BVk5G0501gg5lo66PjpO8DIwDOtjUVG/k/RIXUFdAtfwAIl7GL3OVI8KA852rdJAMAMZ6PXLQRz0yue5jd1hBLGZEmD3tmSmOs21sAUvYyV0BaUN72xrtQ3gWa8lsAJoay/m8VyJphU3yrgImhrP9bBbJm2BT/C3BQ6zFjsmUdAAAAAElFTkSuQmCC" draggable={false}/>
                                <h2>{translate`homepage.friends.title`}</h2>
                                <p>{translate`homepage.friends.text`}</p>
                            </div>
                        </ContentOpacityLayer>
                    </section>
                    <CommunitiesCarousel invites={invites} />
                    <section id="open-source" style={{backgroundImage: "url('/static/images/open-source-section.png')"}}>
                        <ContentOpacityLayer>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADeUlEQVRoQ+1YPW/UQBCduYC4hIIUSJFoiH0FlIlAKN4rQFShu/wCLh1UJBI94RckVNDl6JGSDmhQKG4dIVBSQnHnS4OElCJIJByCeJB98sU+2+tdfySyFLf2zr4382berhFK/mDJ8cM5gbOu4HkFZCpAQJWuYTYrhB+0baMns0b2m1OpgMU+zRAe77igiPYA8I3OjaeyIEXfnQ6BuvmIAF4OgRC91zmbLw2Bbt1sAcBDDzARPK9xY6VEBPhXALzhAUabHmgme1cKAt9vfb7av/T3ByBUBj0AdvXPxalrX27vl4KAZfB5quDbE7D0TW+zm3mAd2IU3sQdZq4gwjMf4Nd622iWhkCXmVuAcHeof4DHWtt4deYELIM3NJNtioA4Bmax7V+AMD4kQGOzGr+z618nEytun1QS6tT5KgIuEUGrxo3FuOABA3P7F/b19twUAtremg4z1xGhSUBrtTZbVq2MEgFrZmeSLvc3AODeSUZhUeOGM+dDj5VgYBYzm4Sw7lu4hYfVBW139kCWiDQBN5twvAEI0/7gRPCzclSdjtpUZGBOMuyJfg8RrgTAEvQQxhZGZZZJQoNM0SoATgY3oz2EC424zbp1sYENkvJvExCvBwHSARIux1XW/21iBTy9hzJA8BGPqo24cssamCvLif6mf1J5e8n0RSyBKL0PAxO9qHG2JNKpqoF1GF9DxCcRMYV9EUlAqHeAJZnSpjEwR6o2wJpKX4QIODOZKs5kUNP7aObSGpiwL2xYHPWeEIEuM63RSQMJeh8FL2tgsf4R1xcEPZ0bmrCJu4z3wlMBlOazjIEJ+yfCb9zvifZ0zgJjPFJCNmJLRYejYJIMTAhe5DdEzUQJOcGzzue0N7A0fiMeoynnc5KBRVUgrd8kG5nifJY1MI9EVr9JJDCQlPx8VjGwPPxGikBiXxyOa96RQtbABpn/bWX1G2kCLomI+YwUPE6rGFjoOK3oNw4mJQKebn3nlsD9No2BeROLJM5XUc2fioBbjYgrZVoDO/UrZewRoMBfiJkuNCLn9L9La2Cy8XOVUFSwNAaWBXzqJo7aVNXAsgL31qdu4tABruBfiIX3gKyB5ZX53CugYmB5kshNQq65ATS8yxBG/ELME3juFRieLufMaRvpvm4aLf8vxCLA5zqFigKYFDc3CSVtVNT7cwJFZVY2bukr8B8VZGFPS7rxigAAAABJRU5ErkJggg==" draggable={false}/>
                                <h2>{translate`homepage.opensource.title`}</h2>
                                <p>{translate`homepage.opensource.text`}</p>
                                <br />
                                <a href="/developers" className={css.btnPurple}>{translate`button.devportal`}</a>
                                <a href="https://github.com/riotchat" className={css.button} target="_blank">{translate`button.github`}</a>
                            </div>
                            <div className={css['content-image']}>
                                <img className={css.image} src="/static/images/open-source.png" height="800px"/>
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
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB1ElEQVRoQ+1ZUU7CQBB9Q/nXG4g3wBvACfQIcgOJ1cSUDz8gfkCCR8Ab6EmsN4AbwLfAGCoSC7QD29namu0XCczMe/PebJddQskfKjl+OAJ/raBT4F8pwE/DGpaLIYA6gJoSuTGAEBWvTQ/t1efYo2ahCPxi8Q7CqRLweBrGFJ53sU1Cj0C3/wqiSyvgf5Iyv1Hn7up3DT0Cvf4UoBOrBIAxBf65JQIDjiUOfJXmcC89r0qRFXCpkKkyUl5HYDNfgtROgXUHaGu2nIUOtRB3ByPq+NfHWqkwQ/wNhEN8Vpv02J4eSiQ3AhKgDZDVloCWTQruQynmkOVZbQYkMNudBKhFwe3o2DhrQ3wskPXvRxT4rbTY4lloB236XGQmsCu91GuD71PmohwENpx358IRyMVC4BnAjX1La2YFDBy9NySxEYwPzL1G0sut2AQYL9L2osAESvsiS/b7Pu/lpoBUKPpe8HuxCZR9O226mknKqu1GpUKOgPtPLHjAWSihQVJjFIc4h8NdxoQ6fuzeQY9A6Y/Xo9uZeWjviJ1nqFTr1i44oiOQ6JZm/gxQHYQz07U/FseYROdJXvXG6hWTCliDJGozYFBbJcQRUGljhiROgQzNUwn9AjSlVkCDe2zVAAAAAElFTkSuQmCC" draggable={false}/>
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

export class CommunitiesCarousel extends React.Component<{
    invites: Array<InviteInfo>,
    defaultItem?: number
}, {
    currentItem: number
}> {
	timeout: any;

    constructor(props) {
        super(props);
        this.state = {
            currentItem: props.defaultItem !== undefined ? props.defaultItem : 0
        }

        this.setTimeout = this.setTimeout.bind(this);
    }

    setTimeout(ms: number) {
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if(this.state.currentItem === (this.props.invites.length - 1)) this.setState({
                currentItem: 0
            });
            else this.setState({
                currentItem: this.state.currentItem + 1
            });
            this.setTimeout(5000);
        }, ms);
    }

    componentDidMount() {
        this.setTimeout(5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <section id="communities" className={css.communitiesSection}>
                { this.props.invites.map((value, index, array) => {
                    return (
                        <div key={`cbg${index}`} style={{ backgroundColor: "gray", backgroundImage: `url("${value.bgURL}")` }}
                            className={`${css.communitiesBackground} ${this.state.currentItem === index ? css.active : ""}`} />
                    )
                }) }
                <Translation>
                    { (t, i18n) => (
                        <ContentOpacityLayer>
                            <div className={css['content-side']}>
                                <div className={css['content-side-size-fix']} />
                                { this.props.invites.map((value, index, array) => {
                                    let plus = (this.state.currentItem + 1 === array.length) ? 0 : this.state.currentItem + 1;
                                    let minus = (this.state.currentItem - 1 === -1) ? array.length - 1 : this.state.currentItem - 1;

                                    let position = this.state.currentItem === index ? "front" : (plus === index ? "below" : (minus === index ? "above" : "back"));
                                    return (
                                        <div key={`car${index}`} className={`${css.carouselItem} ${css[position]}`} onClick={
                                            (e) => {
                                                this.setTimeout(10000);
                                                if(position !== "front" && position !== "back") this.setState({
                                                    currentItem: index
                                                });
                                            }
                                        }>
                                            <Invite inviteInfo={value} />
                                        </div>
                                    )
                                }) }
                            </div>
                            <div className={css.hook}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADE0lEQVRoQ+1YXW7aQBD+xoWHSpi2J2hygpITND0A4EjBr6E3ICdoeoLSE4S8mkgxzgFKThBygtATtMFIfYDuVCZ1RMyu1z+hENW8oZmdnW/m2/HMEJ75j565/ygAbDqDRQaKDOSMQEGhnAHMffz/ycD0vHEkBO0TUAOhljt0MgOMEQMjw+Bh5dA7S3KHNgOT87oFYXwhwk4Sg0+lw4wxDHFcPbx042zGApg4zVMitJ/KqWx2uGu2vGPVWSWA7XD+r9vMX03b68hASAEEtCE2LrJFLOUp5iuCsXCOIbogei+3QB/MljuMyuQAnObtv+J8qUS7Lw/cceDYrwtrZz7nW+n7Zoyr9mBXC2Dq1NtMxqnCyJ0B0QFejO7lv2sCRpcIr1LG/UG9UqI3dOD+XGTgwno9nfMPlS0mcRB91CsZ8PsNF6Bm1Agz7swy7YSXhfLgUn/G46wgmNEzy7R4pP6Mg2qnLBoMPqu2vEfyVQBO81pW54nFx4p92ZNFJy5rK/o6zsfJGSPTHuwt25RkoMkyJ5e5GpXHcTeqq+O8Tm62Bo98Tgxgmasr9NJwd1lfx3mdPDMA2QMKHUtTdnWc18mzA2CMzTLtKR7xdeayq3sTkXRnBrAoc0F/QqJTbV0Ogv+Tfr0JXpTRzH2SjvNRuuYCkLXWx53TcX7rAeg4v/UA0mZ16yhUAIhGwO/Lv8RpI7Uu/bVTKGj6CNwjGL2K7S661qlj1RiizaB21qYvDMh6ATDflMqGFfb30p5pJlwQvcuaobUBYOC7WaJa9Est65v8OY8IeJsFxNoAAPKRT+ak37f2Af62HgBOY5Q6xcxXpu3tp3HIdxpD9fyrsMR8Y9reo52UbCI7AehTGmfSRD+0my0L/NlseSexA03aEVE25iUFP+k3egQ6SqKvGmmlW4mkI2LSh6tyME2wVPOIcrEVgIjbOATOG0xWWOuTRFGmE3wjBHio+j4EkQ82Iap5PHa1eL/mEB0wrIeHzXwDglspGV1dyUwKKs892uVuUic2pVcA2FTkw3uLDBQZyBmBgkI5A5j7+B9WbdFAEeO7LQAAAABJRU5ErkJggg==" />
                                <h2>{translate`homepage.communities.title`}</h2>
                                <p>{translate`homepage.communities.text`}</p>
                                <Link href="/discover"><a className={css.more}>{translate`homepage.communities.discover`}</a></Link><br />
                                <div style={{marginTop: "10px"}}>
                                <span className={css.disclaimer}>
                                    <Trans i18nKey={`homepage.communities.${this.props.invites[this.state.currentItem].serverName.toLowerCase()}-note`} />
                                </span>
                                </div>
                            </div>
                        </ContentOpacityLayer>
                    )}
                </Translation>
            </section>
        )
    }
}