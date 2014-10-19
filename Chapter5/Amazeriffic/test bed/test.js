var toDoObjects = [
{
"description" : "Get groceries",
"tags" : [ "shopping", "chores" ]
},
{
"description" : "Make up some new ToDos",
"tags" : [ "writing", "work" ]
},
/* etc */
];

var organizeByTags = function(toDoObjects){
	var tags = [];
	console.log("inside fn call");
	//iterate over all objects
	toDoObjects.forEach(function(toDoObject)
	{
		toDoObject.tags.forEach(function(tag) {
			if(tags.indexOf(tag) === -1)
			{
				tags.push(tag);
			}
		});
	});

	console.log(tags);
	//now get description(s) for each tag
	var tagObjects = tags.map(function(tag){
		//for each tag get the descriptions
		var toDosWithTag = [];
		toDoObjects.forEach(function(toDo){
			if(toDo.tags.indexOf(tag) !== -1){
				toDosWithTag.push(toDo.description);
			}

		});
		return { "name": tag, "toDos": toDosWithTag };
	});
	console.log(tagObjects);
};
var main = function()
{
	"use strict";
	/*
	(var organizeByTags = function(){
		console.log("organizeByTags called");
	}
	*/
	organizeByTags(toDoObjects);
	
}
$(document).ready(main);