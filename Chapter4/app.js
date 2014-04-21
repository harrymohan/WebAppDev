var main = function()
{
	"use strict";

$(".comment-input input").on("keypress",function(event){
	if(event.keyCode==13){
		var $new_comment = $("<p>");
 	//$new_comment.text($(".comment-input input").val());
 	//$(".comments").append($new_comment);
 	if($(".comment-input input").val() !== "")
 	{
 		$new_comment = $("<p>").text($(".comment-input input").val());
 		$new_comment.hide();
 		$(".comments").append($new_comment);
 		$new_comment.fadeIn();
 		$(".comment-input input").val("");
 	}
	}
});

 $(".comment-input button").on("click",function(event){
 	//append the comment
 	var $new_comment = $("<p>");
 	//$new_comment.text($(".comment-input input").val());
 	//$(".comments").append($new_comment);
 	if($(".comment-input input").val() !== "")
 	{
 		$new_comment = $("<p>").text($(".comment-input input").val());
 		$(".comments").append($new_comment);
 		$(".comment-input input").val("");
 	}
 });

};

$(document).ready(main);