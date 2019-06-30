import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import css from '../sass/main.module.scss';

import { Footer, Navigation } from '../src/components/structure/HeaderFooter';
import { ContentOpacityLayer } from '../src/components/structure/Content';

import ComingSoon from '../src/components/structure/comingsoon';

class Pro extends App {
	render() {
		return (
			<div>
				<Header title={translate`pro.name`} />
				<main>
					<header style={{ background: 'linear-gradient(#9987F5, #EA86F3)' }}>
						<Navigation fixed={true} />
						<div className={css.header}>
							<div className={css['header-info']}>
								<div className={css.text}>
									<h2 className={css['riot-pro']}>RIOT<span className={css['riot-pro-text']}>PRO</span></h2>
									<h1 className={css.headerTitle}>Go PRO</h1>
									<p style={{ marginBottom: "20px" }}>Take your riot to the next level.</p>
								</div>
								<div className={css.buttons}>
									<a href="#download" className={css['btn-purple']}>Buy Now</a>
									<div>
										<a href="#download" className={css['btn-purple']}>Buy Now</a>
										<div style={{ textAlign: "center" }}>Get 2 months free!</div>
									</div>
								</div>
							</div>
						</div>
					</header>
					<section id="features">
						<ContentOpacityLayer>
							<div className={css.hook}>
								<h2>Get access to cool features</h2>
								<p>Riot PRO allows you to get the best features of Riot, right for your community.</p>
							</div>
							<div className={css.perks}>
								<div className={css.perk}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAETklEQVRoQ+1ZXVLUQBDuzuKD5WbVEwgnEE8gnkB8tkjgAiZ7AuEE2XgBNqF8Vk8gnAA8gcsJBLJVVimbtgZ3MRt6MjPZYStI9okiPT39zdd/04Nwz354z/BCC/h/Z7xluGW4gSfwMRqv/4JHo50+npmad+dcWoC9xPwrAh56ofvmvwZ8DRbxiQBKALEfuKEJ6DvDcBnsDCTm9Gar3/usC/rOAE6j8TY4tF8GRkRnOblruvF8ZwALoEmc7SLA+xuggRI/6G3rsGwNcPohe1nc0HvnHukYYCqTxplw39fldZN8ZW2n/3Ck0rcQ4P3o52oHLyNA2GQ3IhpO6MGejiHl9UI3t24/oicOZiNEfFxcQ5os1wZ8EGfvCWBXdaJ/symGftCNdWSFzCxBAWLCZWGZa0/y7lNVLNcCnMTZAAECXQAmJaScjbksLGMZctzx+t1hlV3GgA+ii01y8JMJWN0SwpUeIhr5YW+tvF8SXwwR0C/9/4sXuHx4TQWNASeDi++IuFoHsMz4ma70wzgEouiGboY57uBFifLD3lNrDC/C7j+W4dVW3z2UGcVlYSI48UP3RXlNGmdkmq2NGJYlCxO2CWDPD1xpsrvK/M7ldx0gaZyJg5srh5hXH6gRYG4DE7BT2SMvcDeq1qVxdgIAz4syHBDWHsS+9647kOlvJGC2CjBAODmVB5kCZrscQ5aVmZQLHQ6Irtycp5gYayOGQeFywp7GMCzq5MShY5NDKst2cnzxtt8VMSr9NSaGhYULJi5lwmpUlhaAp93QYbl5V7FOROcr5GxosMvliW9e4K4X9xDtZccZ/9ApX7Vj+LojklzGK0Fr9LmySz7XI0s6rXM/7F2Nf6yUpaKSgyjbIIeGAPisml067eTOpopZuffQqRf0brSyS+uly+Cm/a9o2Oc6HgA4AsTPVU0Ad1DlkKm4LYmefp5NDS8yqsOqOLX1fQYaEAdcG7r0+7AtYFV65BOPn6sO/j4us3vrE4+r8tG5fEaE6w4QmyhywDNEOplMVk7rjHm4A0kH2SdupHRrM60kHgdAtI0Ic2VCxbq44v110W6ikpV9X+rUUpSBHCGqe/mfgRBDAIegbzI8v2p45HPp85zcVdUsa7a/VtJKB5mYTBo9aahYRIDdrcDdU8nNvk8bDXH/LV0bLb88pIOLfUDUGnLrGn8tRzT0wt6O7royaOtvS9IZk66FOnIatbOopgB6pBrYcdtLXVrWxOtgMJXRzbBF9xZ/68Zt0R4pYFn6NwWjI69bQ3V0qWRYwMtkd2agKcsqYLLvLOClxG7ZIo1JSF2QSpde8JJf1y7lcKCuYiXgZJAdm3ZSixojG7YvqveGI3EKuYm+7Y05fV7gajVCi9jCxzDzhLHIJrprW8C6J2UgxzIsbiUGOqyJVr052drk1mPGlqG29LSAbZ1kU/W0DDeVGVt2tQzbOsmm6mkZbioztuxqGbZ1kk3Vc+8Y/gPXCFxbyMvrwQAAAABJRU5ErkJggg==" />
									<h5>High quality voice channels</h5>
									<p>Be heard, loud and clear, with PROs cutting edge <b>256kbps voice channels</b>.</p>
								</div>
								<div className={css.perk}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADnUlEQVRoQ+3aTVYTQRAA4KqJC5UNR4g7XliIBzA/JxBPgJ5AOIF4g3AC4w3gBEn0AMSFgZ14A1yYlUz5esIEkumu/pnqBiRs53VPf13VPdUdEB7ZHz4yL6zB/3vE1xFeR1h4BmjY2gGEj0W3jfwIX5+PhF/Bdpc0pelr6x0Qfl4aEdJ7bE8HqdDJwFpsqUyITgJmsYnR0cFO2IToqGAvbCJ0NHAQNgE6CrgWNjJaHCyCjYgWBYtiI6HFwFGwEdAi4KhYYXRtcBKsILoWOCm2ROdXL7B3fhFaeweD7wQrUHMHgR8qVmWFN/ghY73B9G2rC3ljGLp+gtoxaVxMvoqax3naOcI03GoCNk4BYTNo4CGNbNjyMsFjbbuDx9vqVmKvMm6C74Aw0T4LQTp8gurcnPiASYulP13sXVySaUJC0K6RXe3bIdJOYO3aJfoNNGsqbPleMbRh4E4bpgUdDgYaY2faXZ3kWGgnbDmY7Kpnug0NBxNNsDt9pctYabQXthgQnWBnuqsbmxtY7dBZ42elA8wPsH3Wj4omGgBi8fnx+PuCnR/aNk7gYs5G2xNAeFlFm++VxSLtIYVib4Eu9qbqy1EdrmtfbNHB7aqSu7dtsBZsUaTY+rj9nI3YXaMdsN7gIrW5iDG7Y9T0dsQGgefo1jEAvqlmB33CzvTQlDVR0B7YIPD81z8camtqZtcuJ0EU7Yn1BrNYVVNfl5m2fUEEHYD1AkthRSIdiHUGS2NroWtgncChWBo2NyF7tgeQNSG7OjHVtl7pXRNrBbOHfmbNFlh8PgTEncV6rvudFsDawaNttRtXTkTgiy3VoWghLAs2lpKhWAatzYjFQudrY9sXYfW5sbTUri2iX0CznduH/sW4dGlsHE2+j52zo6KI4doJRnYx3+aqqDUCwM7Sc8zfYvvseLUNO2jjC2gCgOq2RP0bU/ViMAKWT2ndcVBTK1sjhKAmTlOGMskYCcuDx9oILx34rdjrc2nqTw+3rpk13OoD4IelxgSXgPkhIE2AGk0g6LumI401/VXWhuwGpYObweqQkOGp7y7I3TjMd/5sv5LiKoUR+pDP+roN0XsMTAP2AsArFYst1y1CxVJ48nRelPzNLk3XMZJQ6y5988nYGGnvsu4gHSUmwHrFM6+JN9TNZPVnlsUIaAz5bDd2OiYB3xQW6qpWrT+4qY8BJpDDIGVK1kVbI1z3Bfet/Rp83yIiPZ51hKVn9L719+gi/A+cUqRbVgLpZgAAAABJRU5ErkJggg==" />
									<h5>Customization</h5>
									<p>Make your server truly stand out. From changing Riot's default accent color to having a custom login screen.</p>
								</div>
								<div className={css.perk}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB+UlEQVRoQ+1ZPVLCQBT+HlpJww3EjgkNlCoM3ES9gTcQj+AJ5ChhiFpqY4aOeAMLpVKeEwbGkARYZjPMW3ips8n3t2+yXwgHdtGB8YUS3nfH1WF1eM8U2Bjp2jN3SoyuC7ynBH90QYN1WFcS9p64AcYjAQ0XyCYw+r9HuBmdU5SHO5dw9ZUr5S+MQag4RnYGl4FoUkYzatJnGn8u4XrAfQBXLpJdYGbCQ3hJt0aEvYDHBFSdJgxEYYvOjAjXA+b0jcy4lywAEe7S+N5blEnwqkhnCOctliRAnklKGMg/PJiqVbTD697rDbmXjm28zcI29WIcpphFRVoJA1jsQ3U4/sDQSC9PFZ3S0qa0zdQvfEozYTb+pV7EWXzGkfYCjgg4lUrOBBcDH2GLMueB/T0tJSZ4UqCV5+GTb7y56nLs7qSMhvF5OFak9sLV0g/6ROiYREjKPcwYTI9xvVXjkQRfG3K3BEc6LcAftclfJ/7GEk+Kc0XhUMJFKSn1Oepw2hkt4qVm9R+XFvEbv7S0iJcf4wzC+HeLFvFaAMyDYdoeSEq6KWbtpbdp8Yt2WIt4LeKXf4lqEZ/aY8atpenEK3oP2zzPFLOoKS2KsBbxNnbsYK0W8XORtYhfpE2L+B3sO9tXTLWIz0qoNa1trKSvV4elO2SLTx22VVD6+j9ri65MrbxzPgAAAABJRU5ErkJggg==" />
									<h5>Custom Domain</h5>
									<p>Give your server a name with a custom domain! Example: <a href="x">riot.chat/server</a></p>
								</div>
								<div className={css.perk}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADvklEQVRoQ+2azU7bQBDHZxwHjqXHSm3tXCuRhGNVNYEnaHgC6BMUnqDwBKRPADwB9AlILFUcG6dVr9ioEscm1yb2VOsSKSS21/vhtAnOCWm94/9vZndmdg3CI/vhI+OFAnjVI15EuIjwinmgWNIrFtA5nCLCRYRXzAMLW9L1u2s7GI8sDKkOYGwwPxJSDxAGJbPs95699hbh21yBX/38UjeDYA+JWoBopwIReYR4GRr4+fuLt5284HMBZqDlcXACCNtSwgk6QQmP8wDXDlz1nRMEOJACnZ90hmFw2KvsDDTZ03daqt9cbRAaV4BY1yUuskPkjUxz98fzNz0ddrVEODfYCSHRYGSaOzqglYFzh9UMrQxc85wLQGjpWG5cG0QeUrilsqeVgDdvnZZBcMEVqvEBAvrUt5rSSVEJuOZ1b7j1VSPsxFRg4I5syZIG3rx19g2CUykeomE0D/GJ3HzouHZjR2auMHDV7+4hwYFK+RmVSltMbDkIvsqIjny1Vq7ItKOZgf92T+NTFVAmNER4/+1l44z9rbJKCOC8bzX2RR2WCVhF2LSgOJFV3zlDgD1R4awhce1mRXQeF1gXLBC4rt2I7cJqnsNOTTVh8WHwVLREpQJrKztEQ6TQThJ337x4oklsentkdVYi8L0IVnais6vKjyUpXlsY5QiZJBYdK+GobzXPs2hMBJbeWzNvFYmC0vYh6uH62i4vc8cCR9E1Sr+yeCztGZlMquToDIeMWOCq7xwgwIkScEqS4tmVTWKRXaIBUlhJyhdJwJcI8I4nLHGck6R4dmWT2MRu2sqKBVbtkbMkKR60dBK7N5zUicUD+w7xBCWNiyQp3jtUkhgBHfet5tHsO7QDpyexeRFVv3uEgB958KLjRNDt2425S8SEJS3X+fBExXk9L2CmxbUac3zxSctzOojQ5AGIjv+/wDrKUow3FgpMNHTt5lyXGN943F3b9Ht0IxpB3vOLBBbaw0x41XfUavE/jjABHPatRjtTlmYPsY9fuqO8yAgL1eGJV7S0mNMuJugQ4oMPZUi0Lf0NKmEPCXda03aUmnneps5jnMBHCupCvfSsjqrfbSPghzz0abVJNByZ5nba2Zt7xTMRFN1+hNAGBEurSF3GCFxcL7ekzsNpGqL+NmTXtOJ3ULrYHtghcEMD2pObUN47Mkd41hDL4uPx2Daif2Eg5WsgntDZcULslcrlHi+imcuSqIBleV46wssCWER4WSMlq7tY0rKeW5Z5RYSXJVKyOosIy3puWeYVEV6WSMnq/ANo2r5MqQGnTgAAAABJRU5ErkJggg==" />
									<h5>Unlimited Upload</h5>
									<p>Upload limits are for plebs, what is this, 2009?! With PRO, get unlimited upload with fast speeds. <i>Whoosh.</i></p>
								</div>
								<div className={css.perk}>
									<img src="data:image/png;base64,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" />
									<h5>Animated Icon</h5>
									<p>Make that icon dance. With PRO, make your server unique with an animated icon.</p>
									<p></p>
								</div>
								<div className={css.perk}>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADHUlEQVRoQ+2Z31HbQBCHvwuWJ2+hBPKSRH4JdEAqgA4CFUAqCOmAVBCnAuwKCBVAXtAkL9BByBuDTJY5Y2c0RpbupLuTbOwZv+39+e63u7faUzyzn3pmvKyAl13xlcJNKSwkGylqRyHrwPZ0HwLXavxXFx3eDevur1GFhav1EbcHAnsKNgxhvkTER4a2T8waAZ6CghyC0ooa/QR+RrzcVry+MRqQYxQc+NF15UShNm027QJWrxcUWPi9OWJ0aqOq3qQr2KDAbYANBqzdeIScN6nsNHyCuHRKcpq9akxi16UbZ9fzDjwi2RP4ZgKZuXtrZ+N563kHviO5srhjnSaoPGivwLbqunLjEb92O7wdBAdOuRyA2jF1Z4F+l3jf1D7PbnrIHda2FG8uZm28Kpxy+adCZq4MPeNRuSWoN+CURH8A6Oxs/aui9NPwkWFEbzeYwjqOhH8n1rSTATbQeblCkIsuva1gwCmJ/qL5XBV4UlKWundRYoyIn3iwT5euDVwGXXYLLCTwPOgyWD0uKHDdGJ4NhWxMm8ACZxHx/86J91r68evo/rxODOdBv4Azs1I1cJbWm01JdGfilUto07kE+dSldxwsS+uF7kj6Cj6abtKlXSOVlmGsueQcz6Vr8i5xbgvJ27VUtcPhgl7Bfoe4nzeXF+AmYYvU1QfgHLhJ2ImiHyLiH/M8xSlwC2BLm/TOgJuGFfjeJd4rywFOgJuGBfka0Tssg3USw03DFmVk51m6SVjtwhEcKeJrE2Vr19LuYGUoqA0F7w02/ldgELF2nNevMhhf7VpyBZtNNPpF8Z7bXRk/m+o3Yv3YJjegxo24DmuDqpDZg7BOWj5gTZRxZWMFvOiwVll6GWCNgZcF1gh4mWBLgau+6+a0ZozKPleJqWiewqSVcnkM6qDORkxr3Dpr2IwtBK7bomkbbKlL13wfao0bWxUeVfpSbVTWqpa2gW4zbKlLZ13BBLrtsFbA2rgIehFgrYHnQS8KbCVgPWiSvY8E1kH6eU8aNndjSFurr6WQG/O11grY18m2Zd6Vwm1Rwtc+Vgr7Otm2zPsARgp1TIob99kAAAAASUVORK5CYII=" />
									<h5>PRO Support</h5>
									<p>Get help from one of our trusty developers if something messes up.</p>
								</div>
							</div>
						</ContentOpacityLayer>
					</section>
					<section id="get-pro" style={{ background: "linear-graident(black, white)", textAlign: 'center', padding: '100px 0' }}>
						<div className={css['content-download']}>
							<h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>Ready?</h1>
							<p style={{ marginBottom: '40px' }} >Support our development and get to lead your own riot.</p>
						</div>
						<div className={css.buttons}>
                                    <a href="#sign-up" className={css.btnPurple} style={{ }}>$5 / month</a>
                                    <a href="#lightweight" className={css.button}>$49.99 / year</a>
                                </div>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}

//export default withTranslation(Pro);
export default ComingSoon;