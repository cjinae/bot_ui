$(document).ready(function(){

  var url = "http://localhost:8071/motion-control/update";
  
  // $("li").click(function(e){
  //   e.preventDefault();
  //   $("li").removeClass("action");
  //   $(this).addClass("controls");
  // });

// switch 
// case
$(".test").click(function(){
	console.log("testing")
	$(".test").animate({marginLeft: "+=250px"}, 1000);
})


// JQ for Key Down
$(document).keydown(function(e) {
    if (e.keyCode == 38) {
    $('.move-forward').closest('div').addClass('active');
    $(".move-forward").closest('direction').animate({marginLeft: "+=250px"}, 1000);
    $.ajax(url, {dataType: "jsonp", data: {forward: +1}});
  };

    if (e.keyCode == 40) {
    $('.move-backward').closest('div').addClass('active');
    console.log("backward..");
    $.ajax(url, {dataType: "jsonp", data: {forward: -1}});
  };

    if (e.keyCode == 39) {
    $('.turn-right').closest('div').addClass('active');
    console.log("turning right...");
    $.ajax(url, {dataType: "jsonp", data: {turn: +1}});
  };

    if (e.keyCode == 37) {
    $('.turn-left').closest('div').addClass('active');
    console.log("turning left...");
    $.ajax(url, {dataType: "jsonp", data: {turn: -1}});
  };

    if (e.keyCode ==  83) {
    $('.strafe-right').closest('div').addClass('active');
    console.log("strafing right...");
    $.ajax(url, {dataType: "jsonp", data: {strafe: +1}});
  };

    if (e.keyCode ==  65) {
    $('.strafe-left').closest('div').addClass('active');
    console.log("strafing left...");
    $.ajax(url, {dataType: "jsonp", data: {strafe: -1}});
  };

    if (e.keyCode ==  32) {
    $('.stop').closest('div').addClass('active');
    console.log("stopping...");
    $.ajax(url, {dataType: "jsonp", data: {turn: 0}});
  };
  });

// JQ for KeyUP
$(document).keyup(function(e) {
    if (e.keyCode == 38) {
    $('.move-forward').closest('div').removeClass('active');
  };

    if (e.keyCode == 40) {
    $('.move-backward').closest('div').removeClass('active');
  };

    if (e.keyCode == 39) {
    $('.turn-right').closest('div').removeClass('active');
  };

    if (e.keyCode == 37) {
    $('.turn-left').closest('div').removeClass('active');
  };

    if (e.keyCode == 83) {
    $('.strafe-right').closest('div').removeClass('active');
  };

    if (e.keyCode == 65) {
    $('.strafe-left').closest('div').removeClass('active');
  };

    if (e.keyCode == 32) {
    $('.stop').closest('div').removeClass('active');
  };
});





})
