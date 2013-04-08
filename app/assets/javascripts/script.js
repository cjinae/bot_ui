$(document).ready(function(){

  var url = "http://localhost:8071/motion-control/update";
  
  // $("li").click(function(e){
  //   e.preventDefault();
  //   $("li").removeClass("action");
  //   $(this).addClass("controls");
  // });

// switch 
// case

// JQ for Key Down
$(document).keydown(function(e) {
// 	$('.turn-left').click(function(){
//     // $('.turn-left').closest('div').effect("bounce", {times:3}, 300);
//     $('.turn-left').closes('div').effect("bounce", {times:3}, 300);
// });


    if (e.keyCode == 38) {
    $('.move-forward').closest('div').addClass('active');
    $('.move-forward').closest('div').animate({"top": "-=30px"}, 1000);
    $('.move-forward').closest('div').addClass('ht head');
    $.ajax(url, {dataType: "jsonp", data: {forward: +1}});
  };

    if (e.keyCode == 40) {
    $('.move-backward').closest('div').addClass('active');
    $('.move-backward').closest('div').animate({"top": "+=30px"}, 1000);
    $('.move-backward').closest('div').addClass('ht feet');
    console.log("backward..");
    $.ajax(url, {dataType: "jsonp", data: {forward: -1}});
  };

    if (e.keyCode == 83) {	
    $('.turn-right').closest('div').addClass('active');
    console.log("turning right...");
    $.ajax(url, {dataType: "jsonp", data: {turn: +1}});
  };

    if (e.keyCode == 65) {
    $('.turn-left').closest('div').addClass('active');
    $('.turn-left').closest('div').effect("bounce, {times:3}, 300");
    console.log("turning left...");
    $.ajax(url, {dataType: "jsonp", data: {turn: -1}});
  };

    if (e.keyCode ==  39) {
    $('.strafe-right').closest('div').addClass('active');
    $('.strafe-right').closest('div').animate({"marginLeft": "+=30px"}, 1000);
    $('.strafe-right').closest('div').addClass('ht right');
    console.log("strafing right...");
    $.ajax(url, {dataType: "jsonp", data: {strafe: +1}});
  };

    if (e.keyCode ==  37) {
    $('.strafe-left').closest('div').addClass('active')
    $('.strafe-left').closest('div').animate({"marginLeft": "-=30px"}, 1000);
    $('.strafe-left').closest('div').addClass('ht left');
    console.log("strafing left...")
    $.ajax(url, {dataType: "jsonp", data: {strafe: -1}});
  };

    if (e.keyCode ==  32) {
    $('.stop').closest('div').addClass('ht');
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

    if (e.keyCode == 83) {
    $('.turn-right').closest('div').removeClass('active');
  };

    if (e.keyCode == 65) {
    $('.turn-left').closest('div').removeClass('active');
  };

    if (e.keyCode == 39) {
    $('.strafe-right').closest('div').removeClass('active');
  };

    if (e.keyCode == 37) {
    $('.strafe-left').closest('div').removeClass('active');
  };

    if (e.keyCode == 32) {
    $('.stop').closest('div').removeClass('active');
  };
});





})
