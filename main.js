var gameData = {
    days: 0,
    daysPerClick: 1,
    daysPerClickCost: 10
}

function daySurvive() {
    gameData.days += gameData.daysPerClick
    document.getElementById("daysSurvived").innerHTML = gameData.days + " Days Survived"
}

function buyDaysPerClick() {
    if (gameData.days >= gameData.daysPerClickCost) {
        gameData.days -= gameData.daysPerClickCost
        gameData.daysPerClick += 1
        gameData.daysPerClickCost *= 2
        document.getElementById("daysSurvived").innerHTML = gameData.days + " Days Survived"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Time Wasting (Currently Level " + gameData.daysPerClick + ") Cost: " + gameData.daysPerClickCost + " Days"
    }
}

var mainGameLoop = window.setInterval(function() {
    daySurvive()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("IsekaidleSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("IsekaidleSave"))
if (savegame !== null) {
    gameData = savegame
}