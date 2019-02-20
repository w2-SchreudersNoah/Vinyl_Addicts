
const arrowUp = document.getElementById("scroll_up");
const arrowDown = document.getElementById("scroll_down");

arrowUp.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};
arrowDown.onclick = function() {
    window.scrollTo(pageXOffset, document.documentElement.clientHeight);
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};

const A_list = $('#A-List');
const A      = $('');
const B_list = $('#B-List');
const B      = $('');
const C_list = $('#C-List');
const C      = $('');
const D_list = $('#D-List');
const D      = $('');
const E_list = $('#E-List');
const E      = $('');
const F_list = $('#F-List');
const F      = $('');
const G_list = $('#G-List');
const G      = $('');


window.addEventListener('scroll', function() {
    arrowUp.hidden = (pageYOffset < ((document.documentElement.clientHeight)));

    // get current scroll position
    if (pageYOffset > A_list.offset().top && pageYOffset < B_list.offset().top) {
        console.log("Current focus A");
    }
    if (pageYOffset > B_list.offset().top && pageYOffset < C_list.offset().top) {
        console.log("Current focus B");
    }
    if (pageYOffset > C_list.offset().top && pageYOffset < D_list.offset().top) {
        console.log("Current focus C");
    }
});


