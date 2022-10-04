import './cards.css'
import RepositoryCard from '../RepositoryCard/RepositoryCard';
function Card(){
    return(
        <>
    <div className="cards-heading">
    OUR OPEN SOURCE PROJECTS
    </div>
        <div className="card-wrapper">
        <RepositoryCard title = {"Web-Dev Tasks"} description = {"This web-app is aimed at frontend developers who wish to improve their skills by practicing coding UI elements like buttons, forms, etc., and figuring out the different ways these elements can be created by using various libraries and frameworks."} techStack = {"React.js | Tailwind"} link = {"https://github.com/OWASP-STUDENT-CHAPTER/WebDev-Tasks"}/>
        <RepositoryCard title = {"Tech Think Tank"} description = {"This year we at Owasp are encouraging contributions not only in Technical domain but also in non or low code domain."} techStack = {"Low Code | No Code Track "} link={"https://github.com/OWASP-STUDENT-CHAPTER/LowCode_Owasp"}/>
        </div>
        <div className="card-wrapper">
        <RepositoryCard title = {"Algorithm Visualizer"} description = {"Algorithm Visualiser is a web app that will help you in understanding the working of algorithms that are widely used in software development."} techStack = {"React.js"} link={"https://github.com/OWASP-STUDENT-CHAPTER/Algorithm-Visualizer"}/>
        <RepositoryCard title = {"Tab Saver Extension"} description = {"A chrome Extension to save your opened tabs to which you can get back to even if you clossed them accidentally."} techStack = {"Javascript"} link={"https://github.com/OWASP-STUDENT-CHAPTER/TabSaverExtension"}/>
        </div>
        <div className="card-wrapper">
        <RepositoryCard title = {"Backend-Automation NPM"} description = {"A NPM package that takes care of the all the hassle in setting a basic Express.js backend server. Just install the package on your terminal and run the command to setup a basic Express server on Node.js with MongoDB as the database of choice. "} techStack = {"Express.js | NPM | Typescript | Node.js "} link = {"https://github.com/OWASP-STUDENT-CHAPTER/backend-automation"}/>
        {/* <RepositoryCard title = {"Hacktober-Fest Page"} description = {"Contribute To This Very Page. Found Any Bugs, Behavior That Is Not Normal ? Make Your Contribution And Help The Open Source !"} techStack = {"React.js | CSS"} link = {"https://github.com/OWASP-STUDENT-CHAPTER/hacktober-fest-page"}/> */}
        </div>
        </>
    )
}
export default Card;