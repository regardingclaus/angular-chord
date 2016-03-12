(function(){
'use strict';

var app = angular.module('chordApp', []);

app.controller('ChordController', function(){
	this.chords = chords;

	this.guess = function(guess){
		this.guessNo++;
		this.guessIsCorrect = this.randomChord.name === guess;	
	};

	this.setRandomChord = function(){
		var randomNumber = Math.floor(Math.random() * (14 - 1)) + 1;
		this.randomChord = this.chords[randomNumber];
	};

	this.play = function(){
		this.guessNo = 0;
		this.guessIsCorrect = false;
		this.setRandomChord();
	};

	this.play();
	
});

app.directive('guessMessages', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/guess-messages.html'
	};
});

app.directive('guessButtons', function(){
	return {
		restrict: 'E', 
		templateUrl: 'partials/guess-buttons.html'
	};
});


var chords = [
	{
		name: "C", 
		img: "img/gtrC.png"
	}, 
	{
		name: "Cm",
		img: "img/gtrCm.png"
	},
	{
		name: "D", 
		img: "img/gtrD.png"
	}, 
	{
		name: "Dm",
		img: "img/gtrDm.png"
	},
	{
		name: "E", 
		img: "img/gtrE.png"
	}, 
	{
		name: "Em",
		img: "img/gtrEm.png"
	},
	{
		name: "F", 
		img: "img/gtrF.png"
	}, 
	{
		name: "Fm",
		img: "img/gtrFm.png"
	},
	{
		name: "G", 
		img: "img/gtrG.png"
	}, 
	{
		name: "Gm",
		img: "img/gtrGm.png"
	},
	{
		name: "A", 
		img: "img/gtrA.png"
	}, 
	{
		name: "Am",
		img: "img/gtrAm.png"
	},
	{
		name: "B", 
		img: "img/gtrB.png"
	}, 
	{
		name: "Bm",
		img: "img/gtrBm.png"
	},
];

})();
