
// deze code genereerd een random unmber om een van de verschillende banners te laten zien.


window.onload = function(){
    background_resolution()
};
window.onresize = function() {
    background_resolution();
};


const imgsource = $('.banner');


changebanner();


function changebanner() {
//                Math.floor((Math.random() * NR1) + NR2) neem een getal tussen NR2 en NR1, het is belangrijk dat NR2 het laagste getal is.
        randint = Math.floor((Math.random() * 6) + 1);
    // most banner images are from 'http://www.peakpx.com' and are fair use,  License: Creative Commons CC0 (https://creativecommons.org/publicdomain/zero/1.0/)
    switch (randint) {
        case 1:
            imgsource.css('background-image', 'url("media/images/banners/banner_1.jpg")');
            break;
        case 2:
            imgsource.css('background-image', 'url("media/images/banners/banner_2.jpg")');
            break;
        case 3:
            imgsource.css('background-image', 'url("media/images/banners/banner_3.jpg")');
            break;
        case 4:
            imgsource.css('background-image', 'url("media/images/banners/banner_4.jpg")');
            break;
        case 5:
            imgsource.css('background-image', 'url("media/images/banners/banner_5.jpg")');
            break;
        case 6:
            imgsource.css('background-image', 'url("media/images/banners/banner_6.jpg")');
            break;
        default:
    }

}

function background_resolution(){

    console.log("function background_resolution started");

    var imageSrc = document
        .getElementById('Overzicht')
        .style
        .backgroundImage
        .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
        .split(',')[0];

// I just broke it up on newlines for readability

    var image = new Image();
    image.src = imageSrc;

    var Iwidth  = image.width,
        Iheight = image.height;
    Wwidth  = window.innerWidth;
    Wheight = window.innerHeight;

    const bannerstyle = $('.banner');

    if (Wheight > Iheight){
        bannerstyle.css('background-size', 'auto 100vh');
    }
    else if (Wwidth > Iwidth){
        bannerstyle.css('background-size', '100vw');
    }

    console.log("image: Height: " + Iheight + ", Width: " + Iwidth + ".");
    console.log("Widow: Height: " + Wheight + ", Width: " + Wwidth + ".");

}
