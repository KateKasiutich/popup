/*Triggering Popup*/
$(".popup-trigger").click(function(e){
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).css({"display":"block"});
 });

/*Close Icon Click*/
$("#close, .popup-sandbox").click(function(){
  $(".popup").css({"display":"none"});
});

/*Cancel Button Click*/
$("#cancel, .popup-sandbox").click(function() {
  $(".popup").css({"display":"none"});
});

/*Uninstall Button Click*/
$("#uninstall, .popup-sandbox").click(function() {
  $(".popup").css({"display":"none"});
  setTimeout(function() {
    alert("DONE");
  }, 100)
});

