import * as React from "react";

import classNames from "classnames";
import { Discord, Github, Slack } from "styled-icons/boxicons-logos";
import { CodeAlt } from "styled-icons/boxicons-regular";
import { Conversation, Brush, Devices, Group, Joystick, Rocket } from "styled-icons/boxicons-solid";

import Navbar from "../src/components/structure/Navbar";

import commonCss from "../src/scss/common.module.scss";
import css from "./index.module.scss";

const index: React.FunctionComponent = () => (
	<div>
		<Navbar />
		<header>
			<div className={commonCss.wrapper}>
				<div className={commonCss.innerWrapper}>
					<h1>Let's riot together.</h1>
					<p>Let's riot together. The perfect voice & chat system for gamers is here.</p>
					<input type="email" />
				</div>
			</div>
		</header>
		<section id="lightweight">
			<div className={commonCss.container}>
				<div className={commonCss.text}>
					<Rocket className={commonCss.icon} size={45} fill="#34CDDC" />
					<h2>Fast & lightweight</h2>
					<p>Built on the latest technologies, with old hardware support in mind.
						Whether you game on an ultra-high powered computer that can shoot lazers,
						or an old Tefal toaster, Riot runs the same way on every computer.
					</p>
				</div>
				<div className={commonCss.media}>
					<img alt="Riot Client" src="/static/images/open-source.png"/>
				</div>
			</div>
		</section>
		<section id="friends">
			<div className={commonCss.container}>
				<div className={commonCss.media}>
					<img src="/static/default/1.png" />
				</div>
				<div className={commonCss.text}>
					<Group className={commonCss.icon} size={45} fill="#8374F2" />
					<h2>Get back to playing.</h2>
					<p>No fuss, sync your friends from all platforms and get back to chatting and playing together.
						Switching over to Riot takes less than a minute.
					</p>
				</div>
			</div>
		</section>
		<section id="customization">
			<div className={commonCss.container}>
				<div className={commonCss.media}>
					<img src="/static/default/1.png" />
				</div>
				<div className={commonCss.text}>
					<Brush className={commonCss.icon} size={45} fill="#8374F2" />
					<h2>Make it yours.</h2>
					<p>Customize Riot to your liking, change the default theme or the accent color and make it more personal.</p>
				</div>
			</div>
		</section>
		<section id="communities">
			<div className={commonCss.container}>
				<div className={commonCss.media}>
					<img src="/static/default/1.png" />
				</div>
				<div className={commonCss.text}>
					<Joystick className={commonCss.icon} size={45} fill="#EF9E23"/>
					<h2>The whole gang's here.</h2>
					<p>Riot Communities allow you to join a server based on your favorite game.
						Communities host their own events and giveaways.
						So be there or be square!
					</p>
					<a className={commonCss.link}>Discover Communities</a>
				</div>
			</div>
		</section>
		<section id="anywhere">
			<div className={commonCss.container}>
				<div className={commonCss.media}>
					<img src="/static/default/1.png" />
				</div>
				<div className={commonCss.text}>
					<Devices className={commonCss.icon} size={45} fill="#E10E56" />
					<h2>Available everywhere</h2>
					<p>From Desktop to Mobile, the Riot app is available wherever you are,
						so you can chat, call or get in a video call,
						even if you're not infront of your computer.
					</p>
					<p>Riot is now available for download on Windows, macOS and Linux.</p>
					<div className={css.row}>
						<img className={css.svg} src="/static/svg/pwa.svg" height="50px" draggable={false}/>
					</div>
				</div>
			</div>
		</section>
		<section id={css.opensource}>
			<div className={commonCss.container}>
				<div className={commonCss.text}>
					<CodeAlt className={commonCss.icon} size={45} fill="white" />
					<h2>Open Source</h2>
					<p>There's more to it than just code.
						By having Riot open source to the public,
						means that we can create a transparent layer between us and the user.
						Contribute, create your own bot or make your own version of the Riot client.
					</p>
					<a className={classNames(commonCss.button, commonCss.github)}>
						<Github size={32} className={commonCss.iconText} />View on GitHub
					</a>
				</div>
				<div className={commonCss.media}>
					<img src="/static/images/open-source.png"/>
				</div>
			</div>
		</section>
		<section id="pro">
			<div className={commonCss.container}>
				<div className={commonCss.text}>
					<div className={commonCss.pro}>Riot<span>Pro</span></div>
					<h2>Take your riot to the next level.</h2>
					<p>Want your server to stand out?
						Take your community to a whole another level,
						and get the latest cutting edge technology.
					</p>
					<a className={commonCss.link}>Learn more</a>
				</div>
				<div className={commonCss.media}>
					<img src="/static/default/1.png"/>
				</div>
			</div>
		</section>
		<section id="crosschat">
			<div className={commonCss.container}>
			<div className={commonCss.media}>
					<img src="/static/default/1.png"/>
				</div>
				<div className={commonCss.text}>
					<span className={commonCss.tag}>Coming Soon</span>
					<Conversation className={commonCss.icon} size={45} fill="#34CDDC" />
					<h2>Cross-chat through platforms.</h2>
					<p>Not entirely convinced yet? You can choose to chat with your friends,
						even if they use a different chat app altogether.
						Connect a channel from your server to create a bridge between you and your friends.
					</p>
					<p>Keep in touch, even if you're not on the same platform.</p>
					<div className={css.row}>
						<Discord aria-label="Discord" onClick={() => window.open("", "_blank")} size={48} fill="#7289DA" />
						<Slack aria-label="Slack" onClick={() => window.open("", "_blank")} size={48} fill="#4A154B" />
					</div>
				</div>
			</div>
		</section>
		<footer>
			<img src="/static/downloads/branding/logo-white-r.svg"/>
			<div className={commonCss.links}>
				
			</div>
			<div className={commonCss.social}>
				
			</div>
		</footer>
	</div>
);

export default index;
