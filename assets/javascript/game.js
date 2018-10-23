var crystalCollector = {
	wins: 0,
	losses: 0,
	currentScore: 0,
	crystalValue: 0,
	scoreToReach: 0,
	generateRandomScoretoReach: function () {
		do {
			crystalCollector.scoreToReach = Math.floor(Math.random() * 118) + 1;
		}
		while (crystalCollector.scoreToReach < 20)

		return crystalCollector.scoreToReach;
	},
	generateCrystalValue: function () {
		do {
			crystalCollector.crystalValue = Math.floor(Math.random() * 10) + 1;
		}
		while (crystalCollector.crystalValue < 2)
		return crystalCollector.crystalValue;
	},
	startNewGame: function (crystal) {
				// Reset currentScore to 0
				crystalCollector.currentScore = 0;
				// Display on webpage new current score (set to 0)
				$('#currentScore').text(crystalCollector.currentScore);
				// Generate new Score to Reach
				crystalCollector.scoreToReach = crystalCollector.generateRandomScoretoReach;
				// Display new Score to Reach on webpage
				$('#scoreToReach').text(crystalCollector.scoreToReach);
				// Generate new crystal value
				crystal.attr("data-crystalvalue",crystalCollector.generateCrystalValue)
	}
}

$(document).ready(function () {
	// Initialize at beginning when page is first loaded
	
	// Set value of Score to Reach
	crystalCollector.scoreToReach = crystalCollector.generateRandomScoretoReach;	
	// Display Score to Reach, wins, and losses on webpage
	$('#scoreToReach').text(crystalCollector.scoreToReach);
	$('#wins').text(crystalCollector.wins);
	$('#losses').text(crystalCollector.losses);
	
	// Set current score to 0 and display on webpage
	$('#currentScore').text(crystalCollector.currentScore);
	
	// Set value of crystals
	$('#redCrystal').attr("data-crystalvalue",crystalCollector.generateCrystalValue);
	$('#tealCrystal').attr("data-crystalvalue",crystalCollector.generateCrystalValue);
	$('#purpleCrystal').attr("data-crystalvalue",crystalCollector.generateCrystalValue);
	$('#yellowCrystal').attr("data-crystalvalue",crystalCollector.generateCrystalValue);
	
	// onClick jQuery functions for crystals
	// Rest of game will flow thru here
	$('#redCrystal').on("click", function () {
		// Add value of crystal to current score
		crystalCollector.currentScore = crystalCollector.currentScore + parseInt($('#redCrystal').attr("data-crystalvalue"));
		// Display on webpage new Current Score
		$('#currentScore').text(crystalCollector.currentScore);
		
			if (crystalCollector.scoreToReach == crystalCollector.currentScore) {
				// Add one to wins
				// Display new win value on webpage
				crystalCollector.wins++;
				$('#wins').text(crystalCollector.wins);
				crystalCollector.startNewGame($('#redCrystal'));
			} else if (crystalCollector.scoreToReach > crystalCollector.currentScore) {
				console.log("Still playing. Using red crystal this time");
			} else if (crystalCollector.scoreToReach < crystalCollector.currentScore) {
				// Add one to losses
				// Display on webpage new losses value
				crystalCollector.losses++;
				$('#losses').text(crystalCollector.losses);
				crystalCollector.startNewGame($('#redCrystal'));
		}
	});
	$('#tealCrystal').on("click", function () {
		// Add value of crystal to current score
		crystalCollector.currentScore = crystalCollector.currentScore + parseInt($('#tealCrystal').attr("data-crystalvalue"));
		// Display on webpage new Current Score
		$('#currentScore').text(crystalCollector.currentScore);
		
					if (crystalCollector.scoreToReach == crystalCollector.currentScore) {
				// Add one to wins
				// Display new win value on webpage
				crystalCollector.wins++;
				$('#wins').text(crystalCollector.wins);
				crystalCollector.startNewGame($('#tealCrystal'));
			} else if (crystalCollector.scoreToReach > crystalCollector.currentScore) {
				console.log("Still playing. Using teal crystal this time");
			} else if (crystalCollector.scoreToReach < crystalCollector.currentScore) {
				// Add one to losses
				// Display on webpage new losses value
				crystalCollector.losses++;
				$('#losses').text(crystalCollector.losses);
				crystalCollector.startNewGame($('#tealCrystal'));
		}
	});
	$('#purpleCrystal').on("click", function () {
		// Add value of crystal to current score
		crystalCollector.currentScore = crystalCollector.currentScore + parseInt($('#purpleCrystal').attr("data-crystalvalue"));
		// Display on webpage new Current Score
		$('#currentScore').text(crystalCollector.currentScore);
		
					if (crystalCollector.scoreToReach == crystalCollector.currentScore) {
				// Add one to wins
				// Display new win value on webpage
				crystalCollector.wins++;
				$('#wins').text(crystalCollector.wins);
				crystalCollector.startNewGame($('#purpleCrystal'));
			} else if (crystalCollector.scoreToReach > crystalCollector.currentScore) {
				console.log("Still playing. Using purple crystal this time");
			} else if (crystalCollector.scoreToReach < crystalCollector.currentScore) {
				// Add one to losses
				// Display on webpage new losses value
				crystalCollector.losses++;
				$('#losses').text(crystalCollector.losses);
				crystalCollector.startNewGame($('#purpleCrystal'));
		}
	});
	$('#yellowCrystal').on("click", function () {
		// Add value of crystal to current score
		crystalCollector.currentScore = crystalCollector.currentScore + parseInt($('#yellowCrystal').attr("data-crystalvalue"));
		// Display on webpage new Current Score
		$('#currentScore').text(crystalCollector.currentScore);
		
					if (crystalCollector.scoreToReach == crystalCollector.currentScore) {
				// Add one to wins
				// Display new win value on webpage
				crystalCollector.wins++;
				$('#wins').text(crystalCollector.wins);
				crystalCollector.startNewGame($('#yellowCrystal'));
			} else if (crystalCollector.scoreToReach > crystalCollector.currentScore) {
				console.log("Still playing. Using purple crystal this time");
			} else if (crystalCollector.scoreToReach < crystalCollector.currentScore) {
				// Add one to losses
				// Display on webpage new losses value
				crystalCollector.losses++;
				$('#losses').text(crystalCollector.losses);
				crystalCollector.startNewGame($('#yellowCrystal'));
		}

	});
});