

var carouselJson = [
    {
        title: "新年快乐",
        url: 'image/test.jpg',
        open: '',
    },
    {
        title: "扫码关注",
        url: 'image/IMG_0490.JPG',
        open: '',
    },
];

for (var i = 0;i < carouselJson.length;i++) {

    if (i == 0) {
        $("#carOl").append("<li data-target=\"#myCarousel\" data-slide-to=\""+ i +"\" class=\"active\"></li>");
        $("#carItem").append("<div class=\"item active\">\n" +
            "                            <img src=\""+ carouselJson[i].url +"\" width=\"100%\" height=\"100%\">\n" +
            "                            <div class=\"carousel-caption\">"+ carouselJson[i].title +"</div>\n" +
            "                        </div>");
    } else {
        $("#carOl").append("<li data-target=\"#myCarousel\" data-slide-to=\""+ i +"\"></li>");
        $("#carItem").append("<div class=\"item\">\n" +
            "                            <img src=\""+ carouselJson[i].url +"\" width=\"100%\" height=\"100%\">\n" +
            "                            <div class=\"carousel-caption\">"+ carouselJson[i].title +"</div>\n" +
            "                        </div>");
    }

}
