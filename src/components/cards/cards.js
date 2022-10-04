import './cards.css'
import RepositoryCard from '../RepositoryCard/RepositoryCard';
function Card(){
    return(
        <>
    <div className="cards-heading">
    OUR OPEN SOURCE PROJECTS
    </div>
        <div className="card-wrapper">
        <RepositoryCard title = {"To-Do Tasks"} description = {"WebDev-Tasks Is An Easy Portal to practice frontend components."} techStack = {"React.js | Tailwind"} link = {"https://github.com/OWASP-STUDENT-CHAPTER/WebDev-Tasks"}/>
        <RepositoryCard title = {"Tech Think Tank"} description = {"This year we at Owasp are encouraging contributions not only in Technical domain but also in non or low code domain."} techStack = {"Low Code | No Code Track "} link={"https://github.com/OWASP-STUDENT-CHAPTER/LowCode_Owasp"}/>
        </div>
        <div className="card-wrapper">
        <RepositoryCard title = {"Algorithm Visualizer"} description = {"Algorithm Visualiser is a web app that will help you in understanding the working of algorithms that are widely used in software development."} techStack = {"React.js"} link={"https://github.com/OWASP-STUDENT-CHAPTER/Algorithm-Visualizer"}/>
        <RepositoryCard title = {"Tab Saver Extension"} description = {"WebDev-Tasks Is An Easy Portal to practice frontend components. Make Your Commits And Enjoy The Information That Goes Along With It."} techStack = {"Javascript"} link={"https://github.com/OWASP-STUDENT-CHAPTER/TabSaverExtension"}/>
        </div>
        <div className="card-wrapper">
        <RepositoryCard title = {"Backend-Automation NPM"} description = {"WebDev-Tasks Is An Easy Portal to practice frontend components. Make Your Commits And Enjoy The Information That Goes Along With It."} techStack = {"Express.js | NPM | Typescript | Node.js "} link = {"https://github.com/OWASP-STUDENT-CHAPTER/backend-automation"}/>
        <RepositoryCard title = {"Hacktober-Fest Page"} description = {"Contribute To This Very Page. Found Any Bugs, Behavior That Is Not Normal ? Make Your Contribution And Help The Open Source !"} techStack = {"React.js | CSS"} link = {"https://github.com/OWASP-STUDENT-CHAPTER/hacktober-fest-page"}/>
        </div>
        </>
    )
}
export default Card;