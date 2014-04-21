var main= function(){

	"use strict";
	var $newparagraphElement = $("<p>");
	$newparagraphElement.text("Dynamically generated text");

	

	var $ul = $("<ul>");
	var $liele1 = $("<li>");
	var $liele2 = $("<li>");
	var $liele3 = $("<li>");
	var $liele4 = $("<li>");
	$liele1.text("How to grow money");
	$liele2.text("Love is happiness");
	$liele3.text("What is Project euler?");
	$liele4.text("If there are plenty of fishes then why people are hungry?");

	$ul.append($liele1);
	$ul.append($liele2);
	$ul.append($liele3);
	$ul.append($liele4);

	$("main").append($ul);

	$("footer").append($newparagraphElement);
}
var main1= function(){
	"use strict";
	alert("main1 called");
	var $content = $("<div>Hello World</div>").hide();
	$("body").append($content);
	$content.slideDown(2000);
};


$(document).ready(main1));