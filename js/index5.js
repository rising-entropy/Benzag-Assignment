var url = "https://picsum.photos/v2/list?page=2&limit=100";


$.getJSON(url,
    function (data) {
        console.log(data);
        for (var i = 90; i < 100; i++) {
             var linko = data[i].download_url;
             var auth = data[i].author;
             $(".pictures").append("<div class='col-lg-6 col-md-6 col-sm-12'><img src='"+linko+"' class='img-fluid pic' data-wow-delay='0.3s' alt='"+auth+"'></div>");
        }
    }
);






$(".img-fluid").addClass("wow fadeIn z-depth-1-half");







