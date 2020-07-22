var url = "https://picsum.photos/v2/list?page=2&limit=100";

//Extract and Put Images from JSON

$.getJSON(url,
    function (data) {
        console.log(data);
        for (var i = 60; i < 90; i++) {
             var linko = data[i].download_url;
             var auth = data[i].author;
             if(i%3==0)
            {
                $(".pictures").append("<div class='col-lg-12 col-md-12 col-sm-12'><img src='"+linko+"' onload='$(this).fadeIn(1000)'; class='img-fluid pic' data-wow-delay='0.3s' alt='"+auth+"'></div>");
            }     
            else if(i%3 == 1)
            {
                $(".pictures").append("<div class='col-lg-6 col-md-6 col-sm-12'><img src='"+linko+"' onload='$(this).fadeIn(1000)'; class='img-fluid pic' data-wow-delay='0.3s' alt='"+auth+"'></div>");
            }
            else
            {
                $(".pictures").append("<div class='col-lg-6 col-md-6 col-sm-12'><img src='"+linko+"' onload='$(this).fadeIn(1000)'; class='img-fluid pic' data-wow-delay='0.3s' alt='"+auth+"'></div>");
            }
        }
    }
);

$(".img-fluid").addClass("wow fadeIn z-depth-1-half");

//navigation bar scroll effect

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


