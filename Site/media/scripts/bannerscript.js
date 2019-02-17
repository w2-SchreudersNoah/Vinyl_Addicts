
// deze code genereerd een random unmber om een van de verschillende banners te laten zien.


const imgsource = $('.banner');


changebanner();


function changebanner() {
//                Math.floor((Math.random() * NR1) + NR2) neem een getal tussen NR2 en NR1, het is belangrijk dat NR2 het laagste getal is.
        randint = Math.floor((Math.random() * 6) + 1);
    // most banner images are from 'http://www.peakpx.com' and are fair use,  License: Creative Commons CC0 (https://creativecommons.org/publicdomain/zero/1.0/)
    switch (randint) {
        case 1:
            imgsource.css('background-image', 'url("media/images/banners/banner_1.bmp")');
            break;
        case 2:
            imgsource.css('background-image', 'url("media/images/banners/banner_2.bmp")');
            break;
        case 3:
            imgsource.css('background-image', 'url("media/images/banners/banner_3.bmp")');
            break;
        case 4:
            imgsource.css('background-image', 'url("media/images/banners/banner_4.bmp")');
            break;
        case 5:
            imgsource.css('background-image', 'url("media/images/banners/banner_5.bmp")');
            break;
        case 6:
            imgsource.css('background-image', 'url("media/images/banners/banner_6.bmp")');
            imgsource.css('background-image', 'url("media/images/banners/banner_6.bmp")');
            break;
        default:
    }
}
