$(document).ready(function(){
  $("#searchNews").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".news-item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});