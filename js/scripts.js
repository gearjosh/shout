console.log("Hi");

$(function() {
  $("#quiet").submit(function(event) {
    var quietInput = $("#user-input").val();
    console.log(quietInput);

    quietInput = quietInput.toUpperCase();
    console.log(quietInput);

    $("h1#cpu-output").text(quietInput + "!!!");

    console.log(document.getElementById('cpu-output'));

    event.preventDefault();
  });
});
