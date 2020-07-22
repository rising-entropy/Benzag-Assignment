var url = "https://picsum.photos/v2/list";


var urlLst = [];
$.getJSON(url,
    function (data) {
        for (var i = 0; i < 30; i++) {
            urlLst.push(data[i].download_url);
             var linko = data[i].download_url;
             var auth = data[i].author;
                 $(".pictures").append("<div class='col-lg-6 col-md-6 col-sm-12'><img src='"+linko+"' onload='$(this).fadeIn(1000)'; class='img-fluid pic' data-wow-delay='0.3s' alt='"+auth+"'></div>");
        }
    }
);



onload='$(this).fadeIn()';


$(".img-fluid").addClass("wow fadeIn z-depth-1-half");







