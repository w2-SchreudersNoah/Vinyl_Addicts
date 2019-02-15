
// deze code genereerd een random unmber om een van de verschillende banners te laten zien.

var randint = Math.floor((Math.random() * 2) + 1); //Math.floor((Math.random() * NR1) + NR2) neem een getal tussen NR2 en NR1, het is belangrijk dat NR2 het laagste getal is.

var imgsource = $('.banner');
var vidsource = $('.banner video source');

console.log("Randint: " + randint);

switch(randint) {
    case 1:
        imgsource.css('background-image', 'url("media/images/banners/banner_1.jpg")');
        vidsource.attr('src', "media/videos/banners/banner_1.mp4");
        break;
    case 2:
        imgsource.css('background-image', 'url("media/images/banners/banner_2.jpg")');
        vidsource.attr('src', "media/videos/banners/banner_2.mov");
        break;
    default:
    // code block
}