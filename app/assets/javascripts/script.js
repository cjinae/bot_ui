$(document).ready(function(){

  var url = "http://localhost:8071/motion-control/update";
  
  $(document).keyup(function(){
  	console.log("moving forward...")
  	$.ajax(url, {dataType: "jsonp", data: {forward: +1}, success: function(){
  	}});
  })

  $(".move-backward").on("click",function(){
  	console.log("moving backward...")
  	$.ajax(url, {dataType: "jsonp", data: {forward: -1}, success: function(){
  	}});
  })

  $(".turn-left").on("click",function(){
  	console.log("turing left...");
  	$.ajax(url, {dataType: "jsonp", data: {turn: -1}, success: function(){
  	}});
  })

  $(".turn-right").on("click",function(){
  	console.log("turing right...")
  	$.ajax(url, {dataType: "jsonp", data: {turn: +1}, success: function(){
  	}});
  })

  $(".strafe-right").on("click",function(){
  	console.log("strafing right...")
  	$.ajax(url, {dataType: "jsonp", data: {strafe: +1}, success: function(){
  	}});
  })

  $(".strafe-left").on("click",function(){
  	console.log("strafing left...")
  	$.ajax(url, {dataType: "jsonp", data: {strafe: -1}, success: function(){
  	}});
  })


  $(".stop").on("click",function(){
  	$.ajax(url, {dataType: "jsonp", data: {turn: 0}, success: function(){
  	console.log("stopping...")
  }});
	});







})

