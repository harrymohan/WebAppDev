var main = function(){
	"use strict";

	$.getJSON("cards/aceOfSpades.json",function(card){
		//create a variable
		var $para = $("<p>");
		$para.text("Card Rank:"+card.rank+", Card Suit:"+card.suit);
		$("main").append($para);
		
	});
};

$(document).ready(main);