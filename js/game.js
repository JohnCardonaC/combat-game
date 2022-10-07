let playerAttack
let enemyAttack
let resultCombat 
let playerLives = 3
let enemyLives = 3
let playerAttackResultEmoji
let enemyAttackResultEmoji
let counterAttacks = 0


function startGame(){
    let sectionAttck = document.getElementById('select-attack')
    sectionAttck.style = "display: none"

    let sectionLives = document.getElementById('attacks-lives-secction')
    sectionLives.style = "display: none"

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style = "display: none"

    let buttonWarriorPlayer = document.getElementById('button-warrior')
    buttonWarriorPlayer.addEventListener('click', selectWarriorPlayer)

    let buttonAttackFire = document.getElementById('button-fire')
    buttonAttackFire.addEventListener('click', playerAttackFire)

    let buttonAttackWater = document.getElementById('button-water')
    buttonAttackWater.addEventListener('click', playerAttackWater)

    let buttonAttackMagic = document.getElementById('button-magic')
    buttonAttackMagic.addEventListener('click', playerAttackMagic)

    let buttonRestart = document.getElementById('button-restart')
    buttonRestart.addEventListener('click', restartGame)

}
function selectWarriorPlayer(){

    let shillingford = document.getElementById('shillingford')
    let clayton = document.getElementById('clayton')
    let frolova = document.getElementById('frolova')
    let spanWarriorPlayerName = document.getElementById('warrior-player-name')
    

    if (shillingford.checked){
        spanWarriorPlayerName.innerHTML = "Shillingford"
    } else if (clayton.checked){
        spanWarriorPlayerName.innerHTML = "Clayton"
    } else if (frolova.checked){
        spanWarriorPlayerName.innerHTML = "Frolova"
    } else {
        alert("Select one warrior")
    }
    selectWarriorEnemy()

    let sectionWarrior = document.getElementById('slect-warrior')
    sectionWarrior.style = "display: none"

    let sectionAttck = document.getElementById('select-attack')
    sectionAttck.style = "display: flex"

    let sectionLives = document.getElementById('attacks-lives-secction')
    sectionLives.style = "display: grid"


}
function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}
function selectWarriorEnemy(){
    let ramdonEnemy = random(1,3)
    let spanWarriorEnemyName = document.getElementById('warrior-enemy-name')

    if (ramdonEnemy == 1){
        spanWarriorEnemyName.innerHTML = "Shillingford"
    } else if (ramdonEnemy == 2){
        spanWarriorEnemyName.innerHTML = "Clayton"
    } else {
        spanWarriorEnemyName.innerHTML = "Frolova"
    }
}
function playerAttackFire(){
    playerAttack = "Fire"
    ramdomEnemyAttack()

}
function playerAttackWater(){
    playerAttack = "Water"
    ramdomEnemyAttack()

}
function playerAttackMagic(){
    playerAttack = "Magic"
    ramdomEnemyAttack()

}
function ramdomEnemyAttack(){
    enemyAttack = random(1,3)
    if (enemyAttack == 1){
        enemyAttack = "Fire"
    }else if (enemyAttack == 2) {
        enemyAttack = "Water"
    } else {
        enemyAttack = "Magic"
    }
    combat()
    
}
function addMessage(){
    let sectionMessagesResult = document.getElementById('message-result')
    let sectionMessagesPlayerAttack = document.getElementById('message-player-attack')
    let sectionMessagesEnemyAttack = document.getElementById('message-enemy-attack')

  
    let textMessagePlayerAttack = document.createElement('p')
    let textMessageEnemyAttack = document.createElement('p')

    sectionMessagesResult.innerHTML = resultCombat
    textMessagePlayerAttack.innerHTML = "<span class=counter-attacks>" + counterAttacks + ".</span>" + playerAttack + " " + playerAttackResultEmoji
    textMessageEnemyAttack.innerHTML = "<span class=counter-attacks>" + counterAttacks + ".</span>" +  enemyAttack + " " + enemyAttackResultEmoji

   
    sectionMessagesPlayerAttack.appendChild(textMessagePlayerAttack)
    sectionMessagesEnemyAttack.appendChild(textMessageEnemyAttack)


    //let textMessage = document.createElement('p')
    //textMessage.innerHTML = "Your warrior attacked with " + playerAttack + ", your enemy attacked with " + enemyAttack + " : " + resultCombat
    //sectionMessages.appendChild(textMessage)
}
function addMessageEndGame(finalMessage){
    let sectionMessages = document.getElementById('message-result')

    sectionMessages.innerHTML = finalMessage
   
    let buttonAttackFire = document.getElementById('button-fire')
    buttonAttackFire.disabled = true

    let buttonAttackWater = document.getElementById('button-water')
    buttonAttackWater.disabled = true

    let buttonAttackMagic = document.getElementById('button-magic')
    buttonAttackMagic.disabled = true

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style = "display: block"


}
function combat(){

    let spanPlayerLives = document.getElementById('player-lives')
    let spanEnemyLives = document.getElementById('enemy-lives')

    if (playerAttack == enemyAttack) {
        resultCombat = "Tied game 🤝"
        playerAttackResultEmoji = "🤝"
        enemyAttackResultEmoji = "🤝"

    } else if (playerAttack == "Fire" && enemyAttack == "Magic") {
        resultCombat = "You Win 🎉"
        playerAttackResultEmoji = "✅"
        enemyAttackResultEmoji = "☠️"
        enemyLives -= 1
        spanEnemyLives.innerHTML = enemyLives
    } else if (playerAttack == "Water" && enemyAttack == "Fire") {
        resultCombat = "You Win 🎉"
        playerAttackResultEmoji = "✅"
        enemyAttackResultEmoji = "☠️"
        enemyLives -= 1
        spanEnemyLives.innerHTML = enemyLives
    } else if (playerAttack == "Magic" && enemyAttack == "Water") {
        resultCombat = "You Win 🎉"
        playerAttackResultEmoji = "✅"
        enemyAttackResultEmoji = "☠️"
        enemyLives -= 1
        spanEnemyLives.innerHTML = enemyLives
    } else {
        resultCombat = "You lose 👾"
        playerAttackResultEmoji = "☠️"
        enemyAttackResultEmoji = "✅"
        playerLives -= 1
        spanPlayerLives.innerHTML = playerLives
    }
    counterAttacks++
    addMessage()
    livesChecker()
}
function livesChecker() {
    if (enemyLives == 0){
        addMessageEndGame("Flawless Victory!")
    } else if (playerLives == 0){
        addMessageEndGame("You lose, Pathetic Fool!")
    }
}
function restartGame(){
    location.reload()
}

window.addEventListener('load', startGame)