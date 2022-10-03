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
        <span>About the company</span>
        Thapar Institute of Engineering and Technology (TIET) has been a steady source of highly skilled talent to the nation as well as overseas. A pioneer in engineering education, research and innovation.
    </p>

</div>

</footer>
)
}
export default Footer;