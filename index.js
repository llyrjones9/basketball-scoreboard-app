// Initialise score variables
let homeScore = 0
let awayScore = 0

//  Retrieve score variables from DOM
let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")

// Function for refreshing the scores
function update_score(){    
    homeScoreEl.textContent = homeScore    
    awayScoreEl.textContent = awayScore
}

// Run function to set scores to zero on start
update_score()

// Function which run when the appropraite buttons are
// activated in the DOM (self-explanatory)
function add_one_home(){
    homeScore += 1
    update_score()
}

function add_two_home(){
    homeScore += 2
    update_score()
}

function add_three_home(){
    homeScore += 3
    update_score()
}

function add_one_away(){
    awayScore += 1
    update_score()
}

function add_two_away(){
    awayScore += 2
    update_score()
}

function add_three_away(){
    awayScore += 3
    update_score()
}

function reset_scores(){
    homeScore = 0
    awayScore = 0
    update_score()
}
