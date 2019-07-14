import * as React from "react";

import commonCss from "../src/scss/common.module.scss";

const index: React.FunctionComponent = () => (
    <div>
        <section id="lightweight">
            <div className={commonCss.container}>
                <div className={commonCss.text}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCA
                    YAAADhAJiYAAAChElEQVRYR+WXX1IaQRDGv8bCmKewcAFyguAJgjfAE0geovumjwmk
                    KmtV2OSNytuSPIg38AaQE4g30APA6ptYYTs1oNYyO7N/xyqqMo9DD/3b7q+7Zwgbtm
                    jDePB/ATltvzJ/jXdyFugv7tzf1kSVHeMR+mT79S0OjpmoRUA9XhJ83vNq7bCNMSAR
                    jYedoE+gNQdJGu151TUGI0Cdj34DJT4jQiMJQP69fE+WM7Run/YLAwkYKvEIhEpWGG
                    FPoL1vnjU2AlQUxihQMgyfM3ANRoWIjnXRMxKhJJggoP3vv6yLJ4il/RZfqsu8YMqW
                    1fSKRzoBM/DH9apN2XnXng4BOpD3eUG74Z6kFPXKKQ5AQYNAa72EgXpcf2Hmn+6gdi
                    I77thTh0Bf5f3Esu8eTfsQvSRn1TBj4g6qu9EIzUYA1iKniuZahDr2bEzA+zzlGz7D
                    IMf1rNNnDdl+m8BnkXSBT12v5mg79WODGxPhTWEohphV1xAp1jTMBejtD88SNs8roi
                    GTUHEfpdOaUtQvDsW46g2qyjGjHR0vBsW4Ks+pGZ5fqae9cagEmNUoSVjGoFLApAIS
                    RoWhUsKkBioElQEmE1BOqJvyPTV0AlYPW42GPh/6LSpxHwvaDw+/LOnTDdo42SpFvb
                    qo8+VynjFuOaC9PFDGgCJXhZxQ5oCOZn5k2ueAMgL0xfabDBZXhchSOYjXVPTdldT3
                    IhrqHvonEGKWlhiG2/OSo6oYHRSDPrieNUyCiJ/2oZsdM+6I+GKBkiNfE2QnMpQ4uz
                    2nepaSV/YhkbJAPIEXmOje37ovDkOx4vKVJlKJsyzNn4RtHl8kTm9QbWU9m7lT53GQ
                    9YzxCGUFkO03DugftxFVNKWqngwAAAAASUVORK5CYII=" draggable={false}/>
                    <h2>Fast & lightweight</h2>
                    <p>Built on the latest technologies, with old hardware support in mind.
                        Whether you game on an ultra-high powered computer that can shoot lazers,
                        or an old Tefal toaster, Riot runs the same way on every computer.
                    </p>
                </div>
                <div className={commonCss.media}>
                    <img src="/static/images/open-source.png"/>
                </div>
            </div>
        </section>
        <section id="friends">
            <div className={commonCss.container}>
                <div className={commonCss.media}>
                    <img src="/static/default/1.png" />
                </div>
                <div className={commonCss.text}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABoUlEQVRoQ+1Zy1HDQAyVoADADRA6CJVAF8kRbgw5m+EGR9MFVEJKSBpwQgGJGM8YJtm1vatI8cYzytX6vKenVdYywsB/OHD8YARSK2gKDEqBp+lqdEb0BghjBBj1AZ4AFkAw3yI+vhZXCzdndAtV4M+JvgHhsg/gXg6C9Qbx1iURTWA2KT8B4S4J+L+kBF/5R3a/i4FDYJWs+jXiqp1eiuzmMALTknYd8yKLJs9RbebkcX3dvNEg3MBGoEUWU6AqjGTeh+Z26DyIFVCb9y1z++gEVOd9w9zug4DavG+a28cnIJz30nErPgPaALj/F0bAFFA+Q+y7kClgCuxf262FpHNc6m8KSCso9TcFpBWU+psC0gpK/ZMrEHqBYT5f5kW2t5P19kLadyEmwG7zmNVi6IVCFRAjGBH8bBHHweXuCRJYVuv1DeJD1Hr9eVKuEeGCUZwuU69nleL+h/HPgOYa/YC1CpegR6Deys2lKrT1LBdgyL5xO11v596rT0kAcB0K4jzv7FlmrKB59Ho9GCmRgRFIVPj2KZQaEDe/tRC3Ytr2v/2uekAwnVuPAAAAAElFTkSuQmCC" draggable={false}/>
                    <h2>Get back to playing.</h2>
                    <p>No fuss, sync your friends from all platforms and get back to chatting and playing together.
                        Switching over to Riot takes just one minute.
                    </p>
                    <p>Riot is now available for download on Windows, macOS and Linux.</p>
                </div>
            </div>
        </section>
        <section id="communities">
            <div className={commonCss.container}>
                <div className={commonCss.media}>
                    <img src="/static/default/1.png" />
                </div>
                <div className={commonCss.text}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC9klEQVRoQ+1Y4XnTMBB9pwxANQFuPADpBJQJGiZo4jBAOwFlgob/JE4noExAOwHpAEnNBIYBouOT0+TDrmTZckLbD+uvpNO9e3enuyO88EUvXH+0AJ6awZaBloGGFmhdqKEBG1//fxhIp+EpmI9B6AHUa2w6owCegzEH0Y2MFldV3nAykH4J+xB8CVBQReDuznACRefyw+K6TGYpgHTSjUE02J1SHpKYx3K0PLfdtAJ4FspvtebPMlqemUAYAazdBl897OVz5Ra0WivHnTGAt0YhtHonh8lNcc8MYNq9/2c+T6tDOUwSrVgaBwG4c2+2AicyWh46AaSTcABCbBLCzL8JdAaxmmf7qtNj8JiIXvmYPrtDKymHya8HAAfgTmqVpfC+GNSPGEinoY76k6KQTHmhgs1jm/00Dg5YicQbBPMMQq2DVIlLR9K4ktEil1QMALo/jHmeMZSjxcxknTLWDOddPl+yz3MZLY/+lmligC1BtPXV4n657xZOu3zesS+jRU7nOgC2vmoAUO67OZM5fN4RE/4ADAG0jYM6adfl8459fwDgBKSOTEEMFjpufEsNV0zkCG8AIPtpEkCdySj5lqW9aXACiHED5XUarfgPrHE0BOCd7e0X6/wDzxKAKyYK0J8fAzVJbQHUNNjOj7cMuEyaFX2EGUjN5DDJqtY0DnpgMWDGwLvoe3h4vwww30Go/qa+N9ZMSlyD6I3LELb9/QFg/gmhesWf2lg3KaEnD699QOwPgKXlM5bfcXAM7nzfD4BJV1unLsW3Mloc11EonYa6vzX3vzZBzHdytMzNpB6X05PuBYg+1lEGNay/rWB9WGD+JEfLi1x1bvLRmi3iozavKvh0GuoO77TKeVtLa55KlDT2uccqBq5NwVr9tKUfKRlshYPSicNaeZ0y1xMKz6X/CFbixvY/bCYhtn68fLQYBwdQQg+d+tvA1rkeuIZQY1fKrIpJM+H7jnO4W1WJpzrXAngqy2/ebRloGWhogdaFGhqw8fU/NuqsQJhXm98AAAAASUVORK5CYII="/>
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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABoUlEQVRoQ+1Zy1HDQAyVoADADRA6CJVAF8kRbgw5m+EGR9MFVEJKSBpwQgGJGM8YJtm1vatI8cYzytX6vKenVdYywsB/OHD8YARSK2gKDEqBp+lqdEb0BghjBBj1AZ4AFkAw3yI+vhZXCzdndAtV4M+JvgHhsg/gXg6C9Qbx1iURTWA2KT8B4S4J+L+kBF/5R3a/i4FDYJWs+jXiqp1eiuzmMALTknYd8yKLJs9RbebkcX3dvNEg3MBGoEUWU6AqjGTeh+Z26DyIFVCb9y1z++gEVOd9w9zug4DavG+a28cnIJz30nErPgPaALj/F0bAFFA+Q+y7kClgCuxf262FpHNc6m8KSCso9TcFpBWU+psC0gpK/ZMrEHqBYT5f5kW2t5P19kLadyEmwG7zmNVi6IVCFRAjGBH8bBHHweXuCRJYVuv1DeJD1Hr9eVKuEeGCUZwuU69nleL+h/HPgOYa/YC1CpegR6Deys2lKrT1LBdgyL5xO11v596rT0kAcB0K4jzv7FlmrKB59Ho9GCmRgRFIVPj2KZQaEDe/tRC3Ytr2v/2uekAwnVuPAAAAAElFTkSuQmCC" draggable={false}/>
                    <h2>Available everywhere</h2>
                    <p>From Desktop to mobile, the Riot app is available wherever you are,
                        so you can chat, call or get in a video call,
                        even if you're not infront of your computer.
                    </p>
                    <p>Riot is now available for download on Windows, macOS and Linux.</p>
                </div>
            </div>
        </section>
        <section id="opensource">
            <div className={commonCss.container}>
                <div className={commonCss.text}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADAElEQVRoQ+1YPZMNQRQ9RyYiUCVkI0J+ASUi4xfYzYjsVsmXX2BFZFauigyJ4hcQEtkNVQmoEjvqqh7VM6+/Z+apqXodvtdz+56+59zT3cTCBxeePzYA/ncFNxUoqYCkEwC2AbwjeVTyTemctVRA0iUAH11SxwBekLxfmmRq3roA3AHwxEvkLcnrSwJwCOC2l/BDkg+WBOAzgAtewjdIvlkEAElnAHwDYEK28RvAWZLflwLAuP7aS/YLyYtTJG8xZhexJOP6vpfwc5LWUicZ6wDwHsAVL9u7JJ9Okv2YCki6SfJVKhFnYL8AnPTmXSb5yf+uJFZsnaYKSHoEYBfAIcmdWPCBgdk0E64J2IT8d0h65lz6gORebWWqAEg6DeAlgKveQjskrc+vDElJA5NkWjAA3TC63SL5oxRIMQC3m5b8+UHwn/ZbaFFJUQNzm2HnolODePabgejRbBSF3E4ZbawC/rBzjWkhuJikpIG5TTEdnRvEtQrsxSrrz81WwOP7cBM+uOSD5S41MFcJA+F3qm6trC6iACJ87wI/Jmkijg5JVQYm6QDAvUDApC6CADJ83y0pbYuBOaoakGJdrACwnuw6QxXfhzsnqcnAMrqwjtfznhCAr4FOk+R7IHk7uGUNLMa/hC6OSG4lRSzJ2tiwK1T15xIDy+gn5Df2yTHJXhuPUcj6dzEPAxVovoFl9LedpZAlM7Y/pwwss/PmzFV+k2ujTf05Z2AhEK1+U2JkVf251MA6EGP9JgvAUcpKW9SfawxsCr8pAlCgi63uMFdqYG7nrWWP8ptiAA6ELTbURe84XWNggeN0ld9YTlUAPN52uujdb0tvYL6IvY6VPV+FxN8EwFVj5UrZamBrv1ImjgDNBpbyh9R/zRWI9PLZnhBjIKYGMNsT4uwAag2slTLD7yarQI2BTZV8cxuN8H/WJ8R1UKjpBja2GlNSyMzNrqPdZWjlCXFsspMaWcIL7MZ0zT07/ntCnCP5STUwV4K5uJNRKLfQXP9vAMy1s6VxF1+BPxWSokDSvlDHAAAAAElFTkSuQmCC" draggable={false}/>
                    <h2>Open-source</h2>
                    <p>There's more to it than just code.
                        By having Riot open source to the public,
                        means that we can create a transparent layer between us and the user.
                        Contribute, create your own bot or make your own version of the Riot client.
                    </p>
                    <a className={commonCss.button}>View on GitHub</a>
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
                <div className={commonCss.text}>
                    <span className={commonCss.tag}>Coming Soon</span>
                    <h2>Integration made simple.</h2>
                    <p>Developers will have the power to integrate things like a spectate button or game statistics,
                        straight into Riot.
                    </p>
                </div>
                <div className={commonCss.media}>
                    <img src="/static/default/1.png"/>
                </div>
            </div>
        </section>
        <section id="crosschat">
            <div className={commonCss.container}>
                <div className={commonCss.text}>
                    {/*<span className={commonCss.tag}>Coming Soon</span>*/}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABj0lEQVRoQ+2ZwU6DQBCGZ5qYeFPoC+gT6Jv4CHIx9mbPeKEHOHPcxMv2jfQN7AO01JuJScdwaKKEBXZY2t1kuDIzmW//fwcWEAK/MPD+QQDOraAo4LUC6fO2BMQHBLiZolEC+ARAXahoxa1vtFDdPCK+cAvb5BHQqlDzzCbnGNsBsNsjwhWnqG1OrUSh4lvbvDreCPC62BGnIDcnVzFroAgAd8WbeaJAc0VkD1h6Syzkm4WaFjYp5O0YFYBzTyFRQBQY+RwIzUKbXMX/Dk1BAbQdaEIB2BCQbjuNnQaA4IMOmBRv0bul5XvDTwBA64vv2TLT0b63G0bAZABE8AWIy0JFmtHX4JRpACa0TN/LpIOXuWGWmeoByAawtYxfAAzLeASw1Zwp4w3A4HExIjB9qu5xRhoQ7vrKWO+BvoKu7mdJdf1zeSgB8LGrprcAx6bTRZUAUWn6Hus9QA3SZakgAGoIk6WCATBZKjiApqWCBPhrqVzNk7Ypxfqp4GqEuqgjAC5WcUwNUWDM6rnIDV6BXxozFkCfkh1PAAAAAElFTkSuQmCC"/>
                    <h2>Cross-chat through platforms.</h2>
                    <p>Not entirely convinced yet? You can choose to chat with your friends,
                        even if they use a different chat app altogether.
                        Connect a channel from your server to create a bridge between you and your friends.
                        Keep in touch, even if you're not on the same platform.
                    </p>
                </div>
                <div className={commonCss.media}>
                    <img src="/static/default/1.png"/>
                </div>
            </div>
        </section>
        <footer>

        </footer>
    </div>
);

export default index;
