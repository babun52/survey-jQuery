$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var selectFood = $("#favoriteFood").val();
    var radioButtonMusic = $("input:radio[name=favoriteMusic]:checked").val();
    var todayDate = $("input#date").val();

    $(".outputName").text(inputName);
    $(".outputFood").text(selectFood);
    $(".outputMusic").text(radioButtonMusic);
    $(".outputDate").text(todayDate);

    $("#output").show();
  });
});
