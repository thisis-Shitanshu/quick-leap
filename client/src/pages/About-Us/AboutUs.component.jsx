import React from 'react';

import './AboutUs.styles.scss';

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-nav">
                <div className="title">
                    <div className="nav-item">about us</div>
                </div>
                <div className="menu">
                    <div className="nav-item"><a href="#journey-so-far">journey so far</a></div>
                    <div className="nav-item"><a href="#how-do-we-work">how do we work</a></div>
                    <div className="nav-item"><a href="#veteran-hire">veteran hire</a></div>
                </div>
            </div>
            <div className="about-list">
                <div className="list-item" id='journey-so-far'>
                    <div className="title">journey so far</div>
                    <div className="context">
                        <p> 
                            The founder has garnered an experience of over 10 years in the industry and has successfully placed candidates in many MNCs in NCR region, Hyderabad, Pune and Bangalore with clients like Fedex, PepeJeans, Pernod Ricard,Colorbar, iGate, Deloitte, HCL Technologies, Extraaedge Technologies to name a few.
                        </p><br/>
                        <p>
                            She has been instrumental in providing work force for various positions in sectors like FMCG, Wine, Retail, Cosmetics, Logistics, Transportation and Education.
                        </p><br/>
                        <p>
                            Our team has expertise in placing candidates across functions like Sales and Marketing, Finance, HR, Technology, AI and Data Science, Training and Development, Research, and Operations in various MNCs.
                        </p><br/>
                    </div>
                </div>
                <div className="list-item" id='how-do-we-work'>
                    <div className="title">how do we work</div>
                    <div className="context">
                        <p>
                            Our speciality lies in the effort to understand company requirements by personally liaising with the Reporting head of the recruit. After having established clear requirements of the functional skills and personality traits from the Reporting head we begin by screening candidates for the new role. It is a tedious one on one interviewing process first with the Reporting head and then with the desirable candidates and this is what makes the difference to the new team.
                        </p><br/>
                        <p>
                            QuickLeap knows the importance of matching the right people with the right role, be it in established companies or start-ups. While our focus is on mid to senior level searches in various verticals, we also pride ourselves in having successfully placed talented junior profiles as well.
                        </p><br/>
                        <p>
                            QuickLeap has two placement wings. The first wing places people in the industry who have prior industry experience or are freshers. While the other wing places people who have prior military experience, either as officers or otherwise, from the Navy, Army and Airforce.
                        </p><br/>
                    </div>
                </div>
                <div className="list-item" id='veteran-hire'>
                    <div className="title">veteran hire</div>
                    <div className="context">
                        <p>
                            Learn, change, adapt, grow, persevere, strive… are the mantras for the survival and growth of an organization in a dynamic and unpredictable environment with diverse global parameters in the realms of socio-political-economic matrix compounded by factors like ethics, environment, military tensions. Amidst the mayhem and the chaos, some men emerge with a sparkle of an idea, attitude, value system, character, and integrity to steer the organization towards victory, redefining the aims and goals. Ever dreamt of getting the right leaders out of a pool with a proven track record, trained by the armed forces and hardened with experience and circumstances. Well, that is exactly what ‘Quickleap Consultants’ are offering. We have tie-ups with the Indian Navy, Army, and Air Force and are willing to collaborate with the corporates to provide leaders in various operational roles thereby acting as a stepping stone to the ones in uniform onto the civvy street.
                        </p><br/>
                        <p>
                            The management schools would have taught theories of leadership and motivation, military officers practice them each day. They work well in a team as well as individually. It hasn’t come easy to them as they undergo a five day SSB selection process followed by a 5 day medical before being absorbed in the military, followed by rigorous training. The life in the services itself is full of challenges offering an excellent learning ground in terms of knowledge, skill, talent and managerial practices. No wonder, most of them are self-actualizes.
                        </p><br/>
                        <p>
                            These are men with mettle who have loved and lived each of these quotes through every breath while serving the military. To quote a few lines, ‘when the going gets tough, the tough get going; when the going gets tougher, the tough get rough’ or ‘the difficult we will do now, the impossible will take some time’.
                        </p><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;