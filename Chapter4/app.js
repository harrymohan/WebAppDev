var main = function()
{
	"use strict";

 $(".comment-input button").on("click",function(event){
 	//append the comment
 	var $new_comment = $("<p>");
 	//$new_comment.text($(".comment-input input").val());
 	//$(".comments").append($new_comment);
 	if($(".comment-input input").val() !== "")
 	{
 		$new_comment = $("<p>").text($(".comment-input input").val());
 		$(".comments").append($new_comment);
 	}
 });
};

$(document).ready(main);