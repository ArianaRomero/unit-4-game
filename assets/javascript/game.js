
var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = 
["./assets/images/Quartz-Crystal-PNG-Background-Image.png", 
"./assets/images/Quartz-Crystal-PNG-High-Quality-Image.png", 
"./assets/images/Quartz-Crystal-PNG-Picture.png", 
"./assets/images/Quartz-Crystal-Transparent-Background-PNG.png"];

// Functions

	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 100) + 1;
	}

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "75");
			$(".crystal-images").append(crystal);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".crystal-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

// Running Code

	// Inital Page Set Up
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

// Click Functions
	function crystalClick () {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};

	//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute crystalClick function
	$(document).on("click", ".crystal", crystalClick);