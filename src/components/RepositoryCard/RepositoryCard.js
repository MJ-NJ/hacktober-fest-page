import React from "react";
import '../cards/cards.css'
function RepositoryCard(props) {
    return (
        <>
            <a target={"_blank"} href={props.link} style={{"textDecoration":"none"}}>
            <div className="card">
            <div className='git-logo'><img src={require("./github.png")} /></div>
            <div className="repo-heading"> {props.title}</div> 
            <br></br>
            <div className="repo-description">{props.description}</div>
            <div className="repo-description">Tech Stack : {props.techStack}</div>
            </div>
            </a>  
        </>

    )
}
export default RepositoryCard;