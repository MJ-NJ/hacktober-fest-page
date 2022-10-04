import './sponsors.css'
function Sponsors(){
    const jiostyle = {
        position: "relative", 
        top:"-2rem",
        padding: "0rem"
      };
    return(
<section id="sponsors">
    <div className="cards-heading">
        Our Past Sponsors
        </div>
    <div class="cards">
        <figure class="card2">
            <img src = {require("./sponsors/jio.png")} style={jiostyle}></img>
        </figure>
        <figure class="card2">

                <img src= {require("./sponsors/Git.png")}/>

        </figure>
        <figure class="card2">

                <img src= {require("./sponsors/MLH.png")}/>

        </figure>
        <figure class="card2">
                <img src= {require("./sponsors/Postman.png")}/>
        </figure>
        <figure class="card2">
                <img src= {require("./sponsors/IBM.png") }style = {jiostyle}/>
        </figure>
        <figure class="card2">
                <img src=  {require("./sponsors/redbull.png") } />
        </figure>
    </div>
</section>

    );
}
export default Sponsors;