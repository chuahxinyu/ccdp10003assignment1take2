import React from 'react'
import { FaGithub } from 'react-icons/fa'
import Typical from 'react-typical'

export default function References() {
    return (
        <div className="container">
            <div className="backkground"></div>
            <h2>The Most Amazing</h2>
            <h3>REFERENCE LIST</h3>
            <h2>That Has Ever Existed</h2>
            <div className="divider"></div>
            <div className="narration-light">
                <p>You are lead here regardless of what you have chosen beause I put too much work into this for no one to see it and you should always fact-check information you get from a sketchy website pitch.</p>
            </div>
            <div className="divider"></div>
            <h2><u>Games References</u></h2>
            <br></br>
            <p>The Last of Us (2013) by Naughty Dog</p>
            <br></br>
            <p>The Walking Dead (2012-2014) by Telltale Games</p>
            <br></br>
            <p>Life Is Strange (2015) by Dontnod Entertainment, Deck Nine</p>
            <br></br>
            <p>Detroit: Become Human (2018) by Quantic Dream</p>
            <br></br>
            <p>Beyond: Two Souls (2013) by Quantic Dream</p>
            <br></br>

            <h2><u>First Aid References</u></h2>
            <br></br>
            <p>Arbon, P., Hayes, J. and Woodman, R. (2011). <i>First Aid and Harm Minimization for Victims of Road Trauma: A Population Study. Prehospital and disaster medicine.</i> http://dx.doi.org/10.1017/S1049023X11006522</p>
            <br></br>
            <p>Becker, T. K., Gul, S. S., Cohen, S. A., Marciel, B. C., Baron-Lee, J., Murphy, W. T., Youn, S. T., Tyndall, A. J., Gibbons, C. and Hart, L. (2018). <i>Public perception towards bystander cardiopulmonary resuscitation.</i> Emegency Medicine Journal Volume 36, Issue 11. http://dx.doi.org/10.1136/emermed-2018-208234</p>
            <br></br>
            <p>Hasselqvist-Ax, I., Riva, G., Herlitz, J. and Rosenqvist, M. (2015). <i>Early Cardiopulmonary Resuscitation in Out-of-Hospital Cardiac Arrest.</i> The New England Journal of Medicine. DOI: 10.1056/NEJMoa1405796</p>
            <br></br>
            <p>Ong, M. E., Quah, J. L., Ho, A. F., Yap, S., Edwin, N., Ng, Y. Y., Goh, E. S., Leong, B. S., Gan, H. N., and Foo, D. C. (2013). <i>National population based survey on the prevalence of first aid, cardiopulmonary resuscitation and automated external defibrillator skills in Singapore.</i> Resuscitation, 84(11), 1633–1636. https://doi.org/10.1016/j.resuscitation.2013.05.008</p>
            <br></br>
            <p>Perman, S. M., Shelton, S. K., Knoepke, C., Rappaport, K., Matlock, D. D., Adelgais, K., Havranek, E. P. and Daugherty, S. L. (2019). <i>Public Perceptions on Why Women Receive Less Bystander Cardiopulmonary Resuscitation Than Men in Out-of-Hospital Cardiac Arrest.</i> American Heart Association, Circulation, Volume 139, Issue 8, Pages 1060-1068. https://doi.org/10.1161/CIRCULATIONAHA.118.037692</p>
            <br></br>
            <p>St John Ambulance Australia Inc. <i>Emergency First Aid.</i> (n.d.) https://www.stjohnvic.com.au/media/1932/pfa1d.pdf</p>
            <br></br>
            <p>The Guardian. <i>Lack of first aid skills endangers up to 150,000 lives</i>. (12 Apr 2010).</p>
            <br></br>
            <p>The American College of Emergency Physicians. <i>First Aid Manual</i>. (2014). 5th Edition. ISBN: 978-1-4654-1950-7</p>
            

            <div className="divider"></div>
            <div className="narration-light">
                <Typical 
                    steps={["You're still here?", 3000, "It's over.", 3000, "Go home.", 3000]}
                    loop={Infinity}
                    wrapper="p" 
                />
            </div>
            <div style={{paddingTop: "20px"}}></div>
            <div className="footer">
                <p>CCDP10003 Assignment 1</p>
                <br></br>
                <a href="https://github.com/chuahxinyu/ccdp10003assignment1take2" target="_blank" rel="noreferrer"><FaGithub style={{transform: "scale(2)"}} /></a>
            </div>
            
        </div>
    )
}
