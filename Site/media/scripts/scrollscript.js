
const arrowUp = document.getElementById("scroll_up");
const arrowDown = document.getElementById("scroll_down");


arrowUp.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};
// test if scroll_down div exists
if($("#scroll_down").length){
    arrowDown.onclick = function() {
        window.scrollTo(pageXOffset, document.documentElement.clientHeight);
        // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
    };
}
const DDLFilter = $('#ddlFilter');
DDLFilter.on('change',function () {
    var url = window.location;
    window.location.replace(url.origin + url.pathname + '#' + DDLFilter[0].value + "-List");
});









// DDL op Overzicht pagina, Current Product Alphabet.
const A_list = $('#A-List');
const B_list = $('#B-List');
const C_list = $('#C-List');
const D_list = $('#D-List');
const E_list = $('#E-List');
const F_list = $('#F-List');
const G_list = $('#G-List');
const H_list = $('#H-List');
const I_list = $('#I-List');
const J_list = $('#J-List');
const K_list = $('#K-List');
const L_list = $('#L-List');
const M_list = $('#M-List');
const N_list = $('#N-List');
const O_list = $('#O-List');
const P_list = $('#P-List');
const Q_list = $('#Q-List');
const R_list = $('#R-List');
const S_list = $('#S-List');
const T_list = $('#T-List');
const U_list = $('#U-List');
const V_list = $('#V-List');
const W_list = $('#W-List');
const X_list = $('#X-List');
const Y_list = $('#Y-List');
const Z_list = $('#Z-List');
window.addEventListener('scroll', function() {
    // arrowUp.hidden = (pageYOffset < ((document.documentElement.clientHeight)));

    if (pageYOffset > ((document.documentElement.clientHeight) - 5)){
        document.getElementById("scroll_up").style.visibility = "";
        document.getElementById("branding").style.visibility = "";

    }else{
        document.getElementById("scroll_up").style.visibility = "hidden";
        document.getElementById("branding").style.visibility = "hidden";
    }



    // Product alphabet NavDDL updater
    const DDLFilter = $('#ddlFilter')[0];

    // get current scroll position
    if (pageYOffset > A_list.offset().top && pageYOffset < B_list.offset().top) {DDLFilter.selectedIndex = 0;}
    if (pageYOffset > B_list.offset().top && pageYOffset < C_list.offset().top) {DDLFilter.selectedIndex = 1;}
    if (pageYOffset > C_list.offset().top && pageYOffset < D_list.offset().top) {DDLFilter.selectedIndex = 2;}
    if (pageYOffset > D_list.offset().top && pageYOffset < E_list.offset().top) {DDLFilter.selectedIndex = 3;}
    if (pageYOffset > E_list.offset().top && pageYOffset < F_list.offset().top) {DDLFilter.selectedIndex = 4;}
    if (pageYOffset > F_list.offset().top && pageYOffset < G_list.offset().top) {DDLFilter.selectedIndex = 5;}
    if (pageYOffset > G_list.offset().top && pageYOffset < H_list.offset().top) {DDLFilter.selectedIndex = 6;}
    if (pageYOffset > H_list.offset().top && pageYOffset < I_list.offset().top) {DDLFilter.selectedIndex = 7;}
    if (pageYOffset > I_list.offset().top && pageYOffset < J_list.offset().top) {DDLFilter.selectedIndex = 8;}
    if (pageYOffset > J_list.offset().top && pageYOffset < K_list.offset().top) {DDLFilter.selectedIndex = 9;}
    if (pageYOffset > K_list.offset().top && pageYOffset < L_list.offset().top) {DDLFilter.selectedIndex = 10;}
    if (pageYOffset > L_list.offset().top && pageYOffset < M_list.offset().top) {DDLFilter.selectedIndex = 11;}
    if (pageYOffset > M_list.offset().top && pageYOffset < N_list.offset().top) {DDLFilter.selectedIndex = 12;}
    if (pageYOffset > N_list.offset().top && pageYOffset < O_list.offset().top) {DDLFilter.selectedIndex = 13;}
    if (pageYOffset > O_list.offset().top && pageYOffset < P_list.offset().top) {DDLFilter.selectedIndex = 14;}
    if (pageYOffset > P_list.offset().top && pageYOffset < Q_list.offset().top) {DDLFilter.selectedIndex = 15;}
    if (pageYOffset > Q_list.offset().top && pageYOffset < R_list.offset().top) {DDLFilter.selectedIndex = 16;}
    if (pageYOffset > R_list.offset().top && pageYOffset < S_list.offset().top) {DDLFilter.selectedIndex = 17;}
    if (pageYOffset > S_list.offset().top && pageYOffset < T_list.offset().top) {DDLFilter.selectedIndex = 18;}
    if (pageYOffset > T_list.offset().top && pageYOffset < U_list.offset().top) {DDLFilter.selectedIndex = 19}
    if (pageYOffset > U_list.offset().top && pageYOffset < V_list.offset().top) {DDLFilter.selectedIndex = 20;}
    if (pageYOffset > V_list.offset().top && pageYOffset < W_list.offset().top) {DDLFilter.selectedIndex = 21;}
    if (pageYOffset > W_list.offset().top && pageYOffset < X_list.offset().top) {DDLFilter.selectedIndex = 22;}
    if (pageYOffset > X_list.offset().top && pageYOffset < Y_list.offset().top) {DDLFilter.selectedIndex = 23;}
    if (pageYOffset > Y_list.offset().top && pageYOffset < Z_list.offset().top) {DDLFilter.selectedIndex = 24;}
    if (pageYOffset > Z_list.offset().top) {DDLFilter.selectedIndex = 25;}
});