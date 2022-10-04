import './footer.css';
function Footer(){
return(
    
<footer class="footer-distributed">

<div class="footer-left">

    <span><img src = {require("./owasp.png")}></img></span>
</div>

<div class="footer-center">

    <div>
        <p><span>Contact-Us</span>owasp_sc@thapar.edu</p>
        <p><span>Our-Website</span><a href='https://owasp.co.in/'>owasp.co.in</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About the organization</span>
        The team of OWASP Student Chapter, one of the gilt-edged coding society, involves ingenious mind solvers who are eager to make the world a better place to live in with their innovative techniques and discoveries.
    </p>

</div>

</footer>
)
}
export default Footer;