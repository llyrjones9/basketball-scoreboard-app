homeScore = 0
awayScore = 0

homeScoreEl = document.getElementById("home-score")
awayScoreEl = document.getElementById("away-score")

function update_score(){    
    homeScoreEl.textContent = homeScore    
    awayScoreEl.textContent = awayScore
}

update_score()

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




