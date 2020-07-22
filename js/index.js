var url = "https://picsum.photos/v2/list";


$(".pictures").append("<div class='row'>");


var urlLst = [];
$.getJSON(url,
    function (data) {
        for (var i = 0; i < 30; i++) {
            urlLst.push(data[i].download_url);
             var linko = data[i].download_url;
             
             if(i%4 == 0)
             {
                 $(".pictures").append("<div class='col-lg-4 col-md-6 col-sm-12'");
                 $(".pictures").append("<img src='"+linko+"' class='img-fluid pic mb-3' data-wow-delay='0.3s'>");
             }
             else if(i%4 == 1)
             {
                $(".pictures").append("<img src='"+linko+"' class='img-fluid pic mb-3' data-wow-delay='0.3s'>");
                 $(".pictures").append("</div>");
             }
             else if(i%4 == 2)
             {
                 $(".pictures").append("<div class='col-lg-4 col-md-12 col-sm-12'");
                 $(".pictures").append("<img src='"+linko+"' class='img-fluid pic mb-3' data-wow-delay='0.3s'>");
             }
             else
             {
                $(".pictures").append("<img src='"+linko+"' class='img-fluid pic mb-3' data-wow-delay='0.3s'>");
                 $(".pictures").append("</div>");
             }

        }
    }
);


$(".pictures").append("</div>");






$(".img-fluid").addClass("wow fadeIn z-depth-1-half");







