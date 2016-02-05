//Andy Fehrenbach - 2/5/16

$(document).ready(function() {
		//console.log("working");
	 $('#container').on('click', '#generate', generateButtons);
	 $('#container').on('click', '#delete', deleteDivButKeepTheButtons);
	 $('#container').on('click', '#change', changeColor);
});

var counter = 0;

function generateButtons () {
	counter++
	var $el = $('#container').append('<div id="buttonContainer" class="yellow">'+ '</div>');
	$el.children().last().append('<button id="delete">' + 'Delete' + '</button>');
	$el.children().last().append('<button id="change">' + 'Change' + '</button>');
	$el.children().last().append('<h1>' + counter + '</h1>');
}

function deleteDivButKeepTheButtons (){
	$(this).parent().remove();
	var $el = $('#container');
	$el.children().last().append('<button id="delete">' + 'Delete' + '</button>');
	$el.children().last().append('<button id="change">' + 'Change' + '</button>');
	$el.children().last().append('<h1>' + counter + '</h1>');
}

function changeColor(){

	$('#buttonContainer').toggleClass("red");
}

