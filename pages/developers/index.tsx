import * as React from 'react';

import App from '../../src/components/App';
import Header from '../../src/components/Header';
import { withTranslation, translate } from '../../src/i18n';

import css from '../../sass/main.scss';
import { Footer, Navigation } from '../../src/components/structure/HeaderFooter';
import { Trans } from 'react-i18next';
import Link from 'next/link';
import { Content, ContentOpacityLayer } from '../../src/components/structure/Content';

class Developers extends App {
	render() {
		return (
			<div>
				<Header title={'Developers'} />
				<main>
					<header style={{ backgroundImage: 'url("/static/images/developer-portal.png")', backgroundColor: '#160C58' }}>
						<Navigation fixed={true} />
						<div className={css.header}>
							<div className={css['header-info']}>
								<div className={css.text}>
									<Trans i18nKey="developers.welcome">
										<h2 style={{ fontSize: "16px", margin: "0" }}>Welcome to the</h2>
										<h1 style={{ fontSize: "40px", marginBottom: "7px", fontFamily: "'Source Code Pro', monospace" }}>Developer Portal</h1>
									</Trans>
									<p style={{ marginBottom: "20px" }}>{translate`developers.subtitle`}</p>
								</div>
								<div className={css.buttons}>
									<Link href="/developers/applications"><a className={css.btnPurple}>{translate`developers.button`}</a></Link>
									<Link href="/developers/documentation"><a className={css.button}>{translate`button.documentation`}</a></Link>
								</div>
							</div>
						</div>
					</header>
					<section id="blog" style={{ background: "linear-gradient(120deg, #ff9a9e, #fad0c4 )" }}>
						<Content>
							<div className={css.hook}>
								<h2 style={{ fontSize: "40px", fontFamily: "'Source Code Pro', monospace" }}>{translate`developers.blog.title`}</h2>
								<p>June 4th, 2019 (add current date and time)</p>
								<p>Add blog post cards</p>
								<Link href="/pro"><a className={css.more}>{translate`developers.blog.button`}</a></Link>
							</div>
						</Content>
					</section>
					<section id="github" style={{ color: "black", background: "linear-gradient(120deg, #fdfbfb, #ebedee )" }}>
						<Content>
							<div className={css.hook}>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEh0lEQVRoQ+1ZXXLTSBDuVqTkcUVZch4xJ1hzAsIJSE6w4QSQEyScAHOCmBNgToA4AeYEJI+2xrXiMZasplqxgjKaGY0Uebeoih6tmVZ//fP1jxH+8Af/cP3hEcD/7cHePBCG4dgBeEFER4A4QoBxFRwBzJEoIYAoB4iEEF/7AP8gAL7v+/uu+wYRTwFg1FKhq5xolmbZhyRJrlrevTveCQAr7rnuuYP4tuuHJe9M12l6liRJ0lZeawDDweAYEC8R0W/7MdN54vAiOotXq2kbua0AhEHwvi+r65QkgOkyjl/bgrAGMAzDSwTgWN/9QxTdZNmJTUhZAfhPlS/NQxQthHjZZK1GAMMguEDE8yZBu3hvE05GAEEQHO0hfpGVI4CPOdHUATgqwgrxaRcARPQTiaYbxNke0TE4zhtZTp7nr02JrQXAVHnged9U/L4heimEiMqPhYPBKSJOEPEv/o0AvnPRukeViD4C/F28Z8UBLhZCTMozvu+PDjzvR81YRMk6y57p8kELwBQ6iziu3WPAruuOq8BUXmGvZlk2Vyl0GIakusMeX8axkkCUALYV9oeO61UAuoSQfEcHgM/dpCl7oVaxlQAOg+AtIL7XKXWTpk9sKK4tKBMAyPMPi9WqVvmVAIZh+E1uxqrKyDnQVlHV+W0zyDmne64WcfxMfqmKZWUy/aZn+rwU4rgPpWshNBhMVExUnlMZrgaAGcVxnEtD+ChjsQ9A29y7KtlMwUjvlkJcVH+vATg0WIFod9YvlRqG4RQB/lGykeL7dQBBEAHiC42AmgX6sHxVBne76DifNHQ6X8bxc7MHTADy/GS5Ws36VroqT1f9yzMyhdc9EIZcDZXTVVNZ7wPYgwEMw3BelnybJOpDadsQ4nPNHjCEkK6Y9AnC2P0SXS+EuBcd7ZIYoJZEfSrPsoZBMEPEV0q5RF8XQhx1plG+qOtJ+gCy7YD/1clS0XjNAyYaY8GmzvChIBqHJ6KzagvO31O2xQeep7UCX9pVL4REX0zbjhzgeRzHc2MI8ctDUyLfDiRJDnDS1PvbeoSp0wH4ZFzVKBJY6QH+sdYPEV0TYiLTK8+s6zR913WzxlPYvuedW207FOGjBbBlg+RuRCSaLYU4KZLMdWdyq8F7TyKKgGiebjafdbNCsdHb23sFiGNE5Hn63v7UkLw/11k2UsnVjpTyUMNKrtO0WHPse16kKnY8Cy/j2KhUU3gqeyAibQ9m3ErIVblkIB4+kCiS216bVqOJ5WoAiK5vsmzceqgvcuF2ZX5vSirrwBYE9+YcCgkhRus0vbDJB+PoKCFoYrzGxZac0LTNB1uGUZ2zBqBJ3EYalT8qDzk50SQW4qwrCBsAtgWz0QOlkopJjVcckw1RUViQaBSvVh9tQDUBsFXeSKMqRZrmZdt9kRGARdi0DqHqhSJ5AXhuLdaE1edBAIiuNwCnbau7dQjV8oKXXwC8ALtb7HYBwHtSDkV522ATiq1DSBtWt3/ygdyr65TgYkaIPuX5pO1fSrLMzh6wtdCuzz0C2LWFm+Q/eqDJQrt+/wt19G5PCqGzHwAAAABJRU5ErkJggg==" />
								<h2 style={{ fontSize: "28px", fontFamily: "'Source Code Pro', monospace" }}>GitHub</h2>
								<p>{translate`developers.github.text1`}</p>
								<p>{translate`developers.github.text2`}</p>
								<a href="https://github.com/riotchat" className={css.button}>{translate`button.github`}</a>
							</div>
						</Content>
					</section>
					<section id="docs" style={{ background: "linear-gradient(120deg, #0A0056, #160D58)" }}>
						<Content>
							<div className={css.hook}>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABXElEQVRoQ+2Z7U0DMQyGn26AJwAmKGxQNmADGKFMAN0EJihMABvACN3A3aDIUioFdB9KArlc5Ugn9ccleb9yteIFMx+LmePHCUzt4KgDqnoG3AH3wFVFwDvgC3gQEfvdOQYJqKoB3gIXFYH/3moPXPeR6CUQlP+cGPyRzJuI3HaJOETgCXicUPl4652IXKYSMPX/LfMiMhbfQwy47/0hB34s8NdOOIGgqDuQGy2PkEcoNzthnkfII+QROpFSQlVXUdG4EZEPM1dV266FgJsA3AjEwwhsgPemi7nUI9RcNeoEpv4fcAfcgdQMFL7vX6FCAYunuwPFEhYu4A4UClg83R0AXoC1iNh1dzMj5WZOWgNvKp40AWvvLKOsPId2z2wi1FKDg5yvkDX3zIXzFk5sMoFwM2AdmtcWSGQRCCTMCWux2hOfiarGZBOoijJjs9FGd8aaVac4gapyd2z2DaYt6TEzBOYiAAAAAElFTkSuQmCC"/>
								<h2 style={{ fontSize: "28px", fontFamily: "'Source Code Pro', monospace" }}>{translate`developers.documentation.title`}</h2>
								<p>{translate`developers.documentation.text1`}</p>
								<p>{translate`developers.documentation.text2`}</p>
								<Link href="/developers/documentation"><a className={css.btnPurple}>{translate`button.documentation`}</a></Link>
							</div>
							<div className={css.contentImage}>
								<img src="/static/images/documentation.png" width="300px" />
							</div>
						</Content>
					</section>
					<section id="integrations" style={{ backgroundImage: 'url(/static/images/lol-background.jpg)', backgroundColor: "white" }}>
						<ContentOpacityLayer>
							<div className={css.hook}>
								<span className={css['coming-soon']}>Coming Soon</span>
								<img style={{ display: "block" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACVElEQVRoQ+1ZQXLaQBDswWXCzaAPxPkB/oH9AvsHdi6B3MgtBRddROUGN4tT7B/YL/ATgB/ABxC52U6ZcS0lqlIgLaPVAnJldZ7d6Z6eZXcawgf/6IPjhyNwaAWtKtD5Hl3zgltEqCtizBhRifrBbe1+V0StEPBvourrJ35aAV8Hq4iUX+jCv6vNbROxQqDdmA3TwK8AKxLdgXdWOAKdb1ELJe5JgDHoazes3UlipTG5FZBUf5cq5CbQac5YWi0VF4Re7pz/5tNu9rMZnZaYeyDUCTjNAjRrLAMTMEYLoh+/wtpEuj6VgAJ/xDwEoSrdzEocY/5GdCYlkUqg05g9gHBpBVTWTRiPwcC7kizTEYj2Xv0YsWqnbuh9yUcg4+GUJMsSIz3s6Qo4AlnqvRnrFMh6QeWrt1NgswKHVkA6T6T+CrUbszkRTmy3hsl+unlC+xZqN6MbAvsAPpsktrkmbZ7Y+jJU09bfCo8KQSJhnthKQFUxVuK3zYqa7JWkgohArEJkktT2mvUL7v8gUJQWAmMcDLylZbP6tiqwtEwqPNz1RCZptSRTQEtgaVQx+0UAn1R9RbqQA82GGozx8QudJxljhZ0HliQYYybq67ykwhJw88ChX6NOAaeA5GbSxORuIcOBZsogv/yMB4XttYIrw3liGoSeyIu1aS1Oj5+pvn7ZGM0TNqzF2JkeScdK3Z8XWR6DzPizIKrnNndVC8QOdV/Z67qJTCXtDjytiy1oyamy19+IWlLw2rdQzjO4t+Vbn9N7Q2KYyBEwLJy1ZU4Ba6U03OgdpkcdQNTLFsYAAAAASUVORK5CYII="/>
								<h2 style={{ fontSize: "28px", fontFamily: "'Source Code Pro', monospace" }}>{translate`developers.integrations.title`}</h2>
								<h4>{translate`developers.integrations.subtitle`}</h4>
								<p>{translate`developers.integrations.text`}</p>
							</div>
							<div className={css.contentImage}>
								<img src="/static/images/lol-logo.png" width="200px" />
							</div>
						</ContentOpacityLayer>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}

export default withTranslation(Developers);