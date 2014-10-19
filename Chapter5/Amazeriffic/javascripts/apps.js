var main = function(toDoObjects){
	"use strict";
	//alert("hello wrold");
	//var toDos = ["Finish Writing the book","Take Gracie to the park","Answer emails","Prep for Monday's Class","Make up some new ToDos","Get Grocerries"];	
	var toDos = toDoObjects.map(function(toDo){
		return toDo.description;
	});
	//console.log(toDos);
	$(".tabs a span").toArray().forEach(function(element){

		$(element).on("click",function(){
			var $element = $(element);
			var $content;
			var $input;
			var $button;
			$("tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if($element.parent().is(":nth-child(1)"))
			{
				$content = $("<ul>");
				for(var i=toDos.length-1;i>=0;i--)
				{
					$content.append($("<li>").text(toDos[i]));
				}
				$("main .content").append($content);
			}
			else
					if($element.parent().is(":nth-child(2)"))
					{
						//alert("clicked")
						var organizedByTag = [
									 {
 										"name": "shopping",
 										"toDos": ["Get groceries"]
 									},
 									{
										 "name": "chores",
										 "toDos": ["Get groceries", "Take Gracie to the park"]
									 },
									 {
									 	"name":"work",
									 	"toDos":["Answer Emails","Finish Writing this book","Make up some new ToDos"]
									 }
									 ];
							//alert(organizedByTag.length);
							organizedByTag.forEach(function(tag){
									//alert('clicked2')
									//alert(tag.name);
									//console.log("Tab 2 clicked"+organizedByTag);
									var $tagName = $("<h3>").text(tag.name);
									
									$content = $("<ul>");

									tag.toDos.forEach(function(description){
									 var $li = $("<li>").text(description);
									 //alert(description);
									 $content.append($li);
									});
									$("main .content").append($tagName);
									$("main .content").append($content);
							});		

					}
				else
				if($element.parent().is(":nth-child(3)"))
				{
					$content = $("<ul>");
					toDos.forEach(function(todo){
							$content.append($("<li>").text(todo));
					});
					$("main .content").append($content);
				}
				else
				if($element.parent().is(":nth-child(4)")){
					$input = $("<input>");
					$button = $("<button>").text("+");
					$button.on("click",function(){
						if($input.text !==""){
							toDos.push($input.val());
							$input.val("");
						}
					});

					$content = $("<div>").append($input).append($button);
					
					$("main .content").append($content);
				}

			return false;
		});
	});
}

$(document).ready(function(){

	$.getJSON("todos.json",function(toDoObjects){
		main(toDoObjects);
	})
});