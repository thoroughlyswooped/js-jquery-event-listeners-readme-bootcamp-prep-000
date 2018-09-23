function getIt() {
  $("p").on("click", function(e) {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    this.prepend('<img class = "tasty">');
  })
}

function pressIt() {
  $('')
}

$(document).ready(function(){

// call functions here

});
