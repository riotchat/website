import * as React from 'react'
import { useTranslation, Translation } from 'react-i18next';

import css from './HeaderFooter.module.scss';
import homeCss from '../../../sass/main.module.scss';
import Link from 'next/link';
import { translate } from '../../i18n';

type FooterMenuProps = {
    header: string,
    children?: React.ReactNode
}

const Language: React.FunctionComponent<{code: string}> = (props) => {
    let { i18n } = useTranslation();
    let countryCode = props.code.split(/-|_/)[1].toLowerCase();
    let active = i18n.language === props.code;
	if (!(process as any).browser) active = false;
    return (
        <div onClick={(e) => {
            i18n.loadLanguages(props.code).then(() => {
                i18n.changeLanguage(props.code);
            });
        }} className={`${css.language} ${active ? css.active : ""}`}>
            <img src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/flags/4x3/${countryCode}.svg`} height="16px" style={{marginRight: "10px", borderRadius: "2px"}}/>
            <span>{props.children}</span>
        </div>
    )
}

export class Navigation extends React.Component<{ fixed?: boolean }, { openMenu: boolean, openLanguageMenu: boolean }> {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            openLanguageMenu: false
        }
        
        this.onMenuChange = this.onMenuChange.bind(this);
        this.onLanguageMenuChange = this.onLanguageMenuChange.bind(this);

        (this as any).languageCheckbox = React.createRef();
    }

    onMenuChange(e: React.ChangeEvent) {
        this.setState({
            openMenu: (e.target as any).checked,
            openLanguageMenu: false
        });
        (this as any).languageCheckbox.current.isSelected = false;
    }

    onLanguageMenuChange(e: React.ChangeEvent) {
        if(!this.state.openMenu) {
            (this as any).languageCheckbox.current.isSelected = false;
            return;
        }
        this.setState({
            openMenu: this.state.openMenu,
            openLanguageMenu: (e.target as any).checked
        });
    }

    render() {
        //let { t, i18n } = useTranslation();
        return (
            <Translation>
                { (t, { i18n }) =>
                    <nav className={`${css.navigation} ${this.props.fixed ? css.fixed : ""} ${this.state.openMenu ? css.active : ""}`}>
                        <div className={`${css.bkg} ${this.state.openMenu ? css.active : ""}`} />
                        <Link href="/"><a className={css.logo}>RIOT</a></Link>
                        <input className={css['menu-btn']} type="checkbox" id="menu-btn" onChange={this.onMenuChange} />
                        <input className={css['language-menu-btn']} type="checkbox" id="languagemenu-btn" onChange={this.onLanguageMenuChange} ref={(this as any).languageCheckbox} />
                        <label className={css['menu-icon']} htmlFor="menu-btn">
                            <span className={css.navicon}></span>
                        </label>
                        <label className={`${css['menu-icon']} ${css.languageButton}`} htmlFor="languagemenu-btn"></label>
                        <ul className={css.menu}>
                            <li><Link href="/"><a>{translate`navigation.home`}</a></Link></li>
                            <li><Link href="/blog"><a>{translate`navigation.blog`}</a></Link></li>
                            <li><Link href="/developers"><a>{translate`navigation.developers`}</a></Link></li>
                            {/* <ul>
                                    <li><a href="x">Get Started</a></li>
                                    <li><a href="x">Developer Portal</a></li>
                                    <li><a href="x">Open Source</a></li>
                                </ul> */}
                            <li><Link href="/download"><a>{t('navigation.download')}</a></Link></li>
                            <li>
                                <div className={`${css.languageSelector} ${this.state.openLanguageMenu ? css.active : ""}`}>
                                    <a className={`${css.languageButton} ${css.mobileHide}`}></a>
                                    <div className={css.dropdown}>
                                        <div className={css.dropdownArrow} />
                                        <div className={css.languageList}>
                                            <Language code="cs-CZ">Čeština</Language>
                                            <Language code="en-GB">English (GB)</Language>
                                            <Language code="en-US">English (US)</Language>
                                        </div>
                                        <Link href="/translate">
                                            <a className={css.translate}>
                                                <i className={`${css.icon} bx bx-globe-alt`} style={{color: '#7abf7c', fontSize: "24px"}}></i>
                                                <span>{t('navigation.helptranslate')}</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                }
            </Translation>
        )
    }
}

export const Overlay: React.FunctionComponent<FooterMenuProps> = (props) => (
    <div className={css.opacity} />
);

export const FooterMenu: React.FunctionComponent<FooterMenuProps> = (props) => (
    <div className={css['footer-menu']}>
        <h5>{props.header}</h5>
        <ul>
            {props.children && React.Children.map(props.children, (child, index) =>
                <li key={index}>{child}</li>)}
        </ul>
    </div>
);

export const Footer: React.FunctionComponent = (props) => {
    let { t, i18n } = useTranslation();

    let year = "2019";
    if(new Date().getFullYear().toString() !== year) year = `${year} - ${new Date().getFullYear()}`;
    return <footer>
        <div id="footer" className={css.wrapper}>
            <div className={css.logoWrapper}>
                <h1 className={css.logo}>RIOT</h1>
                {/*<span className={css.copyright}>&copy;{year} Riot Communications</span>*/}
            </div>
            <div className={css.social}>
                <a href="https://facebook.com" target="_blank"><img src="/static/images/social/facebook.svg" title="Facebook" height="25px" /></a>
                <a href="https://twitter.com/riotchat_" target="_blank"><img src="/static/images/social/twitter.svg" title="Twitter" height="25px" /></a>
                <a href="https://instagram.com/riotchat" target="_blank"><img src="/static/images/social/instagram.svg" title="Instagram" height="25px" /></a>
            </div>
            <FooterMenu header="Riot">
                <Link href="/download"><a>{translate`navigation.download`}</a></Link>
                <Link href="/#lightweight"><a>{translate`navigation.features`}</a></Link>
                <Link href="/branding"><a>{translate`navigation.branding`}</a></Link>
                <Link href="/pro"><a>Riot Pro<span className={homeCss.new}>{translate`string.new`}</span></a></Link>
            </FooterMenu>
            <FooterMenu header={translate`navigation.resources`}>
                <Link href="/guidelines"><a>{translate`navigation.guidelines`}</a></Link>
                <Link href="/tos"><a>{translate`navigation.terms`}</a></Link>
                <Link href="/support"><a>{translate`navigation.support`}</a></Link>
            </FooterMenu>
            <FooterMenu header={translate`navigation.developers`}>
                <Link href="/developers"><a>{translate`navigation.devportal`}</a></Link>
                <Link href="/developers/documentation"><a>{translate`navigation.documentation`}</a></Link>
                <Link href="/developers/applications"><a>{translate`navigation.applications`}</a></Link>
                <a href="/#open-source">{translate`navigation.opensource`}</a>
            </FooterMenu>
            <FooterMenu header={t('navigation.company')}>
                <Link href="/about"><a>{translate`navigation.about`}</a></Link>
                <Link href="/blog"><a>{translate`navigation.blog`}</a></Link>
                <Link href="/jobs"><a>{translate`navigation.jobs`}</a></Link>
            </FooterMenu>
        </div>
    </footer>
}