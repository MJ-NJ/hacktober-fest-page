import './about.css'
function About(){
    return(
        <>
    <div className='wrap-abt'>
    <div className="about-heading animate__animated animate__fadeInUp">
        About Hacktoberfest
    </div>
    </div>
    <div className="card1">

    <p className='p1'>
    Hacktoberfest'22  marks the 8th edition of Hacktoberfest, organized by DigitalOcean, a month-long celebration of open-source coding and software  Team OWASP provides five open source projects to which you can display and contribute - Web-Dev Tasks, Tech Think Tank, Algorithm Visualiser, Tab Saver Extension and Backend-automation NPM. These projects are widely available for contribution by people from various tech stacks. 
Hack out four pristine pull/merge requests and win exciting goodies and swags!
    </p>
    </div>

    <a href='https://hacktoberfest.com/auth/'  className='btn-special animate__animated animate__fadeInUp'>
         REGISTER FOR HACKTOBERFEST</a>
    </>
    )
}
export default About;