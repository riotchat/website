import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import css from '../sass/main.scss';
import brandingCss from './branding.scss';
import { Footer, Navigation } from '../src/components/structure/HeaderFooter';
import { ContentOpacityLayer } from '../src/components/structure/Content';
import { Trans } from 'react-i18next';

class Branding extends App {
	render() {
		return (
			<div>
				<Header title={'Branding'} />
				<main>
					<header>
						<Navigation fixed={true} />
						<div className={css.header}>
							<div className={css['header-info']}>
								<div className={css.text}>
									<h1 className={css.headerTitle}>{translate`branding.title`}</h1>
									<p style={{ marginBottom: "20px" }}>{translate`branding.subtitle`}</p>
									<p>{translate`branding.disclaimer`}</p>
								</div>
								<div className={css.buttons}>
									<a href="#download" className={css.btnPurple}>{translate`button.presskit`}</a>
								</div>
							</div>
						</div>
					</header>
					<section id="logo" style={{ backgroundImage: 'url(login/developer.jpg)' }}>
						<ContentOpacityLayer>
							<div className={css.hook}>
								<h2>{translate`branding.logo.title`}</h2>
								<p>{translate`branding.logo.text1`}</p>
								<p>{translate`branding.logo.text2`}</p>
								<p>{translate`branding.logo.recommendation`}</p>
							</div>
							<div className={css.contentImage}>
								<div className={css.logoGrid}>
									<div className={css.logoBig}>
										<div className={css.logoSmall}>
											<div className={css.logoSmall}>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ContentOpacityLayer>
					</section>
					<section className={css.test} id="font" style={{ backgroundColor: "#FF7EC7", backgroundImage: "url('/static/images/pattern/pattern.png')", backgroundSize: "contain" }}>
						<ContentOpacityLayer>
							<style>
								@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
							</style>
							<div className={css.hook}>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACe0lEQVRoQ+2XTVLbQBCFX4sNO+AG5gSxN6mSVs4JgBOEnADYI0WR2UNOQHIC4AQkG09VNvgGkBPEWSWbqFMuCtuSRvOnkW2qpKXk8czX3fNeN+GVP/TKz48OYN0Z7DLQZaBhBLoSegkgJyIF8LEYUP5MWXQqCzIngl2CT1lYCLqXDHD6sIv8zyNAuyWAKWXR3uYDxOIYhGtpRHM+oovotvxtszKQiEcAPXlJ8B1l0eHGAvC5GCLAvbKeg+09SgdTl5rXrWl8BzgW9yAMlzb6CkYfhDfzd8xnNIqudIdx+d4IgFPRQ45Z+SyeHO9A3AfR5eIlTyiLBi4H1K1pBpCILwDeLyKN7zQKh8+q9PdXYfNga0Dp24nuQLbfnQGk0sn4QKNwBgVOxrcAHSxlQeoJtmrkzQcqxsX8k0bRXIn4fHyIgG6WAKSesE6AsnR+oiycufGiomIxBWFn/kLiCWsB4LJxMX5ja7tXlkpOxlcAnSwhVTxhXQAV6aQsPK6YVfqjj/zfQ/Ey+/UE60ssNa4A+5SGTzIF4VhM2vQEe4Aa6ayTP47Hp216ghVAnXHRRfitFqBlT7ADKPf8JemshTD0hGf/UM8Jzj6gMy6Vg5p6QrsAqp7f1v9nv3ecE9wzoOz5XQjc5gQnAKOe34XBw5xgdIklPb/LcatrPMwJWgAX6VylJ+gBLI1LqUYteIISoIl0+vAEkzpVAzgaly9P8AGg7flNNql0qQZzgun/1mbAtOc33agw6BjMCab/qwIw6vlNNyoAeJwTpAC2Pb8ThKc5QQ7gUTrb9oQKgE/jWoUnaI3MpTxWuaYDWGW0ZXt1Gegy0DACXQk1DGDj5f8BwICKQHiWcEgAAAAASUVORK5CYII=" />
								<h2>{translate`branding.fonts.title`}</h2>
								<p>{translate`branding.fonts.subtitle`}</p>
							</div>
							<div className={`${css.hook} ${brandingCss.fontContainer}`}>
								<Font fontFamily="VX Rocket" fontWeight={400} link="https://www.dafont.com/vx-rocket.font" />
								<Font fontFamily="Poppins" description={translate`branding.fonts.promo`} link="https://fonts.google.com/specimen/Poppins" />
								<Font fontFamily="Open Sans" link="https://fonts.google.com/specimen/Open+Sans" />
							</div>
						</ContentOpacityLayer>
					</section>
					<section id="colors">
						<div className={css.content}>
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADmElEQVRoQ+2ZUU7bQBCG/1lQpEpt7JV5b7hBeoLSE8ANCCcgnIBwAugJCCcgR4ATQE8AvMeyTStVQsJTrYmR4+zGu7aTKhJ+TGZn55uZnRmvCRv+0Ibbjw+A/x3B1iLwN4p6LyLdZ+Y9AD5APgH9HJCBe4AfiehmKxW3n6W8bwO+EQBHkf8s0mNmDAjouRjEwCMRxp1UXH2S8tFlbVG2FkDB8CFl3m74EEbdVPwkKWNXTc4Az9H0ICW6bMXwgrUMxIL5qCt3Ji4QTgBJEp6CMXLZwFmWMPK84Mx2nRXALGXOwRjYKm4kRxh7XnBko8MKII6n1wQ6qFTIOOlAZCnwgnQAwmnlGpOAJUQlQJKEl1aeZ5x4Mrgo2pNE4agRBOPMk8HSlF0KoA4sE13beLHLQparSNYbKH1YWO8QKcHixxcpb8yBMvyj8j6h9MG22lgDOEZKVSePxa6pxBojkEThBQjHNt7PZDTh1qWQNWhx4yWppAUwhr6KhjBSnTU7xCI91JXcOgDLoqAFaHz4loFaRkp3bspFQsloAeI4VLnvNNtUBWfuf4tIlfWp2cn3g93y7wsAf6Ko/0rpndYgxlkHYtxKnXcifhPeYvGtPMUuABjTp27oaxhqXKKpYBqA6QRE+2UlHRa75bG39mGvC8W48mQwN84sAMRxeFd8Ecn3qlM96tppWsfMt77cUS9M789iBOKQDfmvGxWGIJy3bagRAIh9P5C1AFQtprcXj6zOP7/V+bnZZx0gnh/MOd0+AuuwzmKPjQZgxi9fBu8XBdpGFkfTGyL6buGM9YtoSrl1GV2/tfM7MuPJg+iXp1JdI6uuLC12ZJUW6h6JCF/N5RPJNsSe7i7JbZRQO7TVkRlXXYhh7tFshEGqnHeYgzAjIWBSlCtD6oe5KFSXTlqPtNKRNR21aJiC2QJimwsv53G6jY6s01H3jLm/0OhfCavPzcxCXSmsa7y2jObKTFNp046s1pfHgZUAZC/1SNVZ8JpsoFurm+vr7tHatYqTARWH2EVX9cVW08spjTVtplElgNo/icJxsT67eMgk21YaWQGsAmLtADOIZnedhXCUx+K6UbWOQL7B7yjae0U6aVSd1nmIdZ7JvhcgHTIwdAVR840H0avzOUlni3MEikpmIIMZiHGaLAxnT9sQB219oVzaiV1zcjZNqhuDPoN7APXz6KjxYTZVXrTl+dy+RhFwhVyF/AfAKrzqonPjI/APzgDnQCNJcuAAAAAASUVORK5CYII=" />
							<h2>{translate`branding.colors.title`}</h2>
							<p>{translate`branding.colors.subtitle`}</p>
							<div className={brandingCss.colorWrapper}>
								<ColorBox name={translate`branding.colors.color1`} red={123} green={104} blue={238} />
								<ColorBox name={translate`branding.colors.color2`} red={255} green={187} blue={0} />
								<ColorBox name={translate`branding.colors.color3`} red={239} green={239} blue={239} />
								<ColorBox name={translate`branding.colors.color4`} red={255} green={255} blue={255} />
								<ColorBox name={translate`branding.colors.color5`} red={51} green={50} blue={52} />
							</div>
						</div>
					</section>
					<section id="icons" style={{ backgroundImage: "url('/static/images/iconography.png')" }}>
						<ContentOpacityLayer>
							<div className={css.hook}>
								<h2>{translate`branding.iconography.title`}</h2>
								<p><Trans i18nKey="branding.iconography.subtitle">
									<a href="https://creativecommons.org/licenses/by/4.0/"></a>
								</Trans></p>
								<a className={css.btnPurple} href="https://github.com/atisawd/boxicons" target="_blank">{translate`button.github`}</a>
							</div>
						</ContentOpacityLayer>
					</section>
					<section id="download" style={{ backgroundColor: "#7B68EE", backgroundImage: "url('/static/images/pattern/pattern.png')", backgroundSize: "contain" }}>
					<ContentOpacityLayer>
						<div className={css.content}>
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABcElEQVRoQ+2ZQW7CQAxF7UpVlzRwkPYI3KRhgZQzwIYNnCFSFw034QjtQSCwREi4ygKaRdOxx55UILNCwuP5/7+JRwoIN/7BG9cPbuC/CTqBuyEwL3YkMbMshyb0TZo0wt2ABF+r1glcwvAj5EcoMgE/QsrgfAr5EerrCM2LbQWAb8r9mMtpvSxHOadY9Az0Y4IvvjEoMrDI6+fTE20A4YWTjriG4OvxiONFle25a0UGmqbJTESIFxO4pDKb1q/wQBtEGHCT+quOCA5wxvHqPfuU9hMTsDahER9N4GqiqHME+pCm1q4nwMmqzKrYHtEELExoxasJ/NzCMXeEbFx2EVITiDNhI96MgGi8Ro7L5ARYJozFmxIIjVftuOyFQJeJVOKTEPhtvFqMy14JtE003zUXVeiCMxujoY1S/e4GUiXL7Xv/BKTvPLnJcetC/yMECbgBbtQddU5AGWDy5cFnILkC5QZuQBmgerkTUEeobPANQYjBMbmRM/QAAAAASUVORK5CYII=" />
							<h2>{translate`branding.download.title`}</h2>
							<p>{translate`branding.download.subtitle`}</p>
							{/*<div className={css.contentImage}>*/}
								<a className={css.btnPurple} href="/static/downloads/branding/branding.zip" download="RiotBranding.zip">{translate`button.presskit`}</a>
							{/*</div>*/}
						</div>
					</ContentOpacityLayer>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}

export default withTranslation(Branding);

function componentToHex(c: number): string {
    let hex = c.toString(16).toUpperCase();
    return hex.length == 1 ? "0" + hex : hex;
}

// http://www.javascripter.net/faq/rgb2cmyk.htm
function toCmyk(r: number, g: number, b: number): { c: number, m: number, y: number, k: number } {
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;

    // BLACK
    if (r == 0 && g == 0 && b == 0)
        return {c: 0, m: 0, y: 0, k: 100};

    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);

    var minCMY = Math.min(computedC, Math.min(computedM, computedY));
    computedC = (computedC - minCMY) / (1 - minCMY);
    computedM = (computedM - minCMY) / (1 - minCMY);
    computedY = (computedY - minCMY) / (1 - minCMY);
    computedK = minCMY;

    return { c: Math.round(computedC * 100), m: Math.round(computedM * 100),
        y: Math.round(computedY * 100), k: Math.round(computedK * 100) };
}

// https://awik.io/determine-color-bright-dark-using-javascript/
function isLight(r: number, g: number, b: number): boolean {
    let hsp;

    // HSP equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    return hsp > 140;
}

const Font: React.FunctionComponent<{ fontFamily: string, fontWeight?: number, description?: string, link?: string }> = (props) => {
    let fontFamily: string | React.ReactNode = props.fontFamily;
    if(props.link !== undefined) fontFamily = <a href={props.link} style={{color: "white"}}>{props.fontFamily}</a>
    return <div>
        <h2 style={{fontFamily: `"${props.fontFamily}", sans-serif`, fontWeight: props.fontWeight}}>
            The quick brown fox jumps over the lazy dog.
        </h2>
        {props.description ?
            <p><b>{fontFamily}</b> | {props.description}</p>
        :
            <p><b>{fontFamily}</b></p>
        }
    </div>
}

const ColorBox: React.FunctionComponent<{name: string, red: number, green: number, blue: number, isLight?: boolean}> = (props) => {
    let hex = "#" + componentToHex(props.red) + componentToHex(props.green) + componentToHex(props.blue);
    let cmyk = toCmyk(props.red, props.green, props.blue);
    let light = props.isLight !== undefined ? props.isLight : isLight(props.red, props.green, props.blue)

    return <div className={brandingCss.colorBox}>
        <div className={`${brandingCss.colorBoxInner} ${light ? brandingCss.light : brandingCss.dark}`}
            style={{backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`}}
        >
            <div className={brandingCss.colorCodesMobile}>
                <div><span className={brandingCss.colorCode}>HEX</span>{hex}</div>
                <div><span className={brandingCss.colorCode}>RGB</span>{props.red}, {props.green}, {props.blue}</div>
                <div><span className={brandingCss.colorCode}>CMYK</span>{cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%</div>
            </div>
            <div className={brandingCss.colorCodeOverlay}>
                <div className={brandingCss.colorCodes}>
                    <div><span className={brandingCss.colorCode}>HEX</span>{hex}</div>
                    <div><span className={brandingCss.colorCode}>RGB</span>{props.red}, {props.green}, {props.blue}</div>
                    <div><span className={brandingCss.colorCode}>CMYK</span>{cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%</div>
                </div>
            </div>
            <span className={brandingCss.colorLabel}>{props.name}</span>
        </div>
    </div>;
}