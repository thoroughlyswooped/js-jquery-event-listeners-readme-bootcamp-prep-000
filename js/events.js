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

$(document).ready(function(){

// call functions here

});
