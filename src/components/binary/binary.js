import './binary.css'
import $ from 'jquery';
// import i from 'jquery';
function Binary(){
    $(document).ready(function() {
        var lines = 15;
        var textLength = 40;
        var i;
        for (i = 0; i < lines - 1; i++) {
          $(".num").first().clone().insertAfter($(".num").first());
        }
      
      
        setInterval(function() {
          $(".num").each(function() {
            if ($(this).text().length < textLength) {
              $(this).text(($(this).text() + Math.round(Math.random())));
            } else {
              $(this).text(Math.round(Math.random()) + $(this).text().substring(0, $(this).text().length - 1))
            }
          });
      
        }, 95);
      
      });
    return(

<div className="container1">
<div className="num">01001010011000010010000001101010011000010010000001100100011001010110100101101110011001010010000001001101011101010111010001110100011001010111001000100001</div>
<div className="devider d00"></div>
<div className="devider d01"></div>
<div className="devider d02"></div>
<div className="devider d03"></div>
<div className="devider d04"></div>
</div>


    )
}
export default Binary;