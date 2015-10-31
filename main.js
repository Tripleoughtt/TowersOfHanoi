$(document).ready(init)

function init(){
	$('.tower').on('click', function(){
		var currentDiv =  event.target
		if (!pieceSelected || ($(currentDiv).find(">:first-child").hasClass('clicked'))){
			select(currentDiv);
		} else if (pieceSelected === true){
			moveToTower(currentDiv);
		}
	})

	// $('.tower').on('click')

	
		

		
}

var winner = false
var moves = 0
var weight1 = ""
var weight2 = ""
var pieceSelected = false
function select(div){
	var firstKid = ($(div).find(">:first-child"))
	weight1 = parseInt(firstKid.text())
	console.log(($('.t3').children().length))
	if ($(".t3").children().length === 5){
		winner = true
		console.log("Winner:", winner)
		return;
	}

	if (firstKid.hasClass('clicked')) {

		firstKid.removeClass('clicked')
		pieceSelected = false

	} else if (pieceSelected === false){

		$(".gamePiece").removeClass('clicked')
		firstKid.addClass('clicked')
		pieceSelected = true

	}
}

function moveToTower(div){

	var thisTower = $(event.target)
		console.log(thisTower)
	var opposingChild = ($(event.target).find(">:first-child"))
	weight2 = parseInt(opposingChild.text()) 

	var elements = ($(event.target).find('div').size())
	if (elements === 0){
		$('.clicked').appendTo(event.target)
	} else if (weight1 > weight2){
		return;
	} else if (weight2 > weight1){
		thisTower.prepend($('.clicked'))
	}
	
}