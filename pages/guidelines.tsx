import * as React from 'react';

import App from '../src/components/App';
import Header from '../src/components/Header';
import { withTranslation, translate } from '../src/i18n';

import css from '../sass/main.scss';
import { Footer, Navigation } from '../src/components/structure/HeaderFooter';
import { Content } from '../src/components/structure/Content';

class Guidelines extends App {
	render() {
		return (
			<div>
				<Header title={'Guidelines'} />
				<main>
                	<Navigation fixed={true} />
                    <section style={{ padding: '100px 0' }}>
                        <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
                            <div style={{ margin: "20px" }}>
                                <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '42px' }}>{translate`guidelines.title`}</h1>
                                <p style={{ marginBottom: '40px' }} >{translate`guidelines.lastupdated`}</p>
                            </div>
                        </div>
                    </section>
                    <section id="guidelines" style={{ background: "white" }}>
                        <Content>
                            <div className={css.guidelines} style={{ color: "black", background: "white", margin: "0 auto", maxWidth: "800px" }}>
                            <div style={{ margin: "20px" }}>
                                <div>
                                    <h2>Acceptable Usage</h2>
                                    <p>Riot can cater to your community, guild, game server or your top-secret gamer group. We encourage you to:</p>
                                    <ul>
                                        <li>Take advantage of RIOT's powerful community tools.</li>
                                        <li>Be kind and make friends with others on our platform.</li>
                                        <li>Have fun using and sharing content on the platform.</li>
                                        <li>Encourage others to better themselves instead of being against them.</li>
                                    </ul>
                                    <p>Online communities have the potential to change people's lives and drastically improve someone's life - strive to help lift others from dark places and improve their situation.</p>
                                </div>
                                <div>
                                    <h2>What we don't allow</h2>
                                    <p>Engaging in any of the following actions will result in a strike being applied to your account and a warning, and may lead to an account suspension if repeated.</p>
                                    <ul>
                                        <li>Creating accounts to or using your account to spam other people on the platform for the sake of annoying them or otherwise harassing them. Likewise using tools or otherwise software to attack or harass users.</li>
                                        <li>Sharing any kind of copyrighted content, or any type of content that violates another person's personal, intellectual property or other rights. This includes any content that would violate the Digital Millennium Copyright Act (DMCA). We respond to DMCA requests as described in our Terms of Service.</li>
                                        <li>Sharing NSFW content in the wrong places, you must only share NSFW content in properly marked channels and servers. This will allow us to age gate content to prevent those under 18 from being able to view the content you are posting.</li>
                                        <li>Using RIOT for illegal operation, such as, but not limited to, hacking, cracking or distribution of pirated software, cheats, exploits or hacks for our or another company or person's service.</li>
                                        <li>Sharing any type of imagery that depicts violence, gore or animal cruelty. Nobody wants to see this and neither should you. Only exception is violence potrayed in media such as movies, games, books, and so forth.</li>
                                    </ul>
                                    <p>To report any of the above activity, contact us at report@riotchat.gq</p>
                                    <p>Please note we are <b>committed to resolving every single report</b>, please be patient and <b>do not spam our support team</b>>, we appreciate your concerns and will act upon them.</p>
                                </div>
                                <div>
                                    <h2>What we can't allow</h2>
                                    <p>Engaging in any of the following will result in <b>immediate account termination</b> as well as content removal. You may also be <b>blacklisted</b> from using our services indefinitely.</p>
                                    <ul>
                                        <li>Sharing any content or imagery illegal within the European Union, we don't want you or us to get into any legal trouble, stay in line by not engaging in illegal activity content such as, but not limited to, sharing pornography depicting minors, sharing revenge pornography, selling or facilitating the usage of drugs, extortion or blackmail.</li>
                                        <li>Sharing any content promoting, encouraging or glorifying self-harm or suicide. This includes any content that pushes people to: cut or injure themselves; embrace eating disorders such as anorexia or bulimia; or commit suicide as opposed to referring people to the correct treatment and help. If you notice someone in need of urgent help, contact your local authorities.</li>
                                        <li>Attempts to hack or otherwise gain unauthorised access to our service. For example, accessing another person's account without permission, or attempting to steal another person's account. This also includes attempts in order to gain access to our backend networks.</li>
                                        <li>Distributing malware such as viruses, trojans, worms, etc. Any software designed with malicious intent to attack another person or to steal their data is not tolerated.</li>
                                        <li>Sharing content that is designed to harass or degrade another person, any content that can directly threaten someone's physical, mental or financial state, this includes death threats, doxxing (sharing personal information), or ignoring one's privacy.</li>
                                    </ul>
                                    <p>If you have any serious concerns, please contact us at report+urgent@riotchat.gq</p>
                                    <p>Please <b>do not abuse this address</b> by using it for anything that does not require our immediate attention, we may temporarily or permanently <b>block you from contacting us</b> this way. It is vital we are able to respond to serious concerns in a timely manner.</p>
                                </div>
                                </div>
                            </div>
                        </Content>
                    </section>
                </main>
				<Footer />
			</div>
		)
	}
}

export default withTranslation(Guidelines);