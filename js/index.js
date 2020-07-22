var url = "https://picsum.photos/v2/list";


var urlLst = [];
$.getJSON(url,
    function (data) {
        for (var i = 0; i < 30; i=i+2) {
            urlLst.push(data[i].download_url);
             var linko = data[i].download_url;
             var linko2 = data[i+1].download_url;
             var auth = data[i].author;
             var auth2 = data[i+1].author;
                 $(".pictures").append("<div class='col col-lg-4 col-md-6 col-sm-12'><img src='"+linko+"' class='img-fluid pic' data-wow-delay='0.3s' alt='"+auth+"'><img src='"+linko2+"' class='img-fluid pic' data-wow-delay='0.3s' alt='"+auth2+"'></div>");
        }
    }
);






$(".img-fluid").addClass("wow fadeIn z-depth-1-half");







