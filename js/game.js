const sectionAttck = document.getElementById('select-attack')
const sectionVictories = document.getElementById('attacks-victories-secction')
const sectionRestart = document.getElementById('restart')
const buttonWarriorPlayer = document.getElementById('button-warrior')
const buttonRestart = document.getElementById('button-restart')
const spanWarriorPlayerName = document.getElementById('warrior-player-name')
const sectionWarrior = document.getElementById('slect-warrior')
const spanWarriorEnemyName = document.getElementById('warrior-enemy-name')
const sectionMessagesResult = document.getElementById('message-result')
const sectionMessagesPlayerAttack = document.getElementById('message-player-attack')
const sectionMessagesEnemyAttack = document.getElementById('message-enemy-attack')
const sectionMessages = document.getElementById('message-result')
const spanPlayerVictories = document.getElementById('player-victories')
const spanEnemyVictories = document.getElementById('enemy-victories')
const cardsContainer = document.getElementById('cards-container')
const attacksContainer = document.getElementById('attacks-container')

let warriors = []
let warriorsHTMLConstruction 
let shillingfordInput
let claytonInput
let frolovaInput
let playerAttacks = []
let enemyAttacks = []
let resultCombat 
let warriorPlayerSelected
let attacksHTMLConstruction
let buttonAttackFire
let buttonAttackWater
let buttonAttackMagic
let getAllAttackButtons = []
let playerVictories = 3
let VenemyVictories = 3
let playerAttackResultEmoji
let enemyAttackResultEmoji
let counterPayerWins = 0
let counterEnemyWins = 0
let tiedGames = 0
let counterAttacks = 0
let spanTieGames = []

class Warriors {
    constructor(name, imagen, power) {
        this.name = name
        this.imagen = imagen
        this.power = power
        this.attacks = []
    }
}

let shillingford = new Warriors('Shillingford', 'https://i.ibb.co/NrW5VXd/shillingford.png', 'Fire')
let clayton = new Warriors('Clayton', 'https://i.ibb.co/GsZJs22/clayton.png', 'Water')
let frolova = new Warriors('Frolova', 'https://i.ibb.co/LC47gCC/Ffolova.png', 'Magic')

warriors.push(shillingford, clayton, frolova)

shillingford.attacks.push(
    {name: 'Fire 🔥', id: 'button-fire'},
    {name: 'Fire 🔥', id: 'button-fire'},
    {name: 'Fire 🔥', id: 'button-fire'},
    {name: 'Water 💧', id: 'button-water'},
    {name: 'Magic 🪄', id: 'button-magic'}
)
clayton.attacks.push(
    {name: 'Water 💧', id: 'button-water'},
    {name: 'Water 💧', id: 'button-water'},
    {name: 'Water 💧', id: 'button-water'},
    {name: 'Fire 🔥', id: 'button-fire'},
    {name: 'Magic 🪄', id: 'button-magic'}
)
frolova.attacks.push(
    {name: 'Magic 🪄', id: 'button-magic'},
    {name: 'Magic 🪄', id: 'button-magic'},
    {name: 'Magic 🪄', id: 'button-magic'},
    {name: 'Fire 🔥', id: 'button-fire'},
    {name: 'Water 💧', id: 'button-water'}
)
function startGame(){
    sectionAttck.style = "display: none"
    sectionVictories.style = "display: none"
    sectionRestart.style = "display: none"
    warriors.forEach((warrior) => {
        warriorsHTMLConstruction = `
            <input type="radio" name="warrior" id=${warrior.name}>
            <label class="warrior-card" for=${warrior.name}>
                <p class="warrior-name-text">${warrior.name}</p>
                <img src=${warrior.imagen} alt=${warrior.name} border="0">
                <p class="power-text">${warrior.power}</p>
            </label>
        `
        cardsContainer.innerHTML += warriorsHTMLConstruction
        shillingfordInput = document.getElementById('Shillingford')
        claytonInput = document.getElementById('Clayton')
        frolovaInput = document.getElementById('Frolova')
    })
    buttonWarriorPlayer.addEventListener('click', selectWarriorPlayer)
    buttonRestart.addEventListener('click', restartGame)
}
function selectWarriorPlayer(){
    if (shillingfordInput.checked){
        spanWarriorPlayerName.innerHTML = shillingfordInput.id
        warriorPlayerSelected = shillingford
    } else if (claytonInput.checked){
        spanWarriorPlayerName.innerHTML = claytonInput.id
        warriorPlayerSelected = clayton
    } else if (frolovaInput.checked){
        spanWarriorPlayerName.innerHTML = frolovaInput.id
        warriorPlayerSelected = frolova
    } else {
        alert("Select one warrior")
    }
    getPlayerWarriorAttacks(warriorPlayerSelected)
    selectWarriorEnemy()
    sequencePlayerAttack()
    sectionWarrior.style = "display: none"
    sectionAttck.style = "display: flex"
    sectionVictories.style = "display: grid"
}
function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}
function selectWarriorEnemy(){
    let ramdonEnemy = random(0, warriors.length - 1)
    spanWarriorEnemyName.innerHTML = warriors[ramdonEnemy].name
    enemyAttacks = warriors[ramdonEnemy].attacks
}
function getPlayerWarriorAttacks(warriorPlayerSelected){
    warriorPlayerSelected.attacks.forEach((attack) =>{
        attacksHTMLConstruction = `
            <button class="button-attack attack-buttons" id=${attack.id}>${attack.name}</button>
        `
        attacksContainer.innerHTML += attacksHTMLConstruction
    }) 
    buttonAttackFire = document.getElementById('button-fire')
    buttonAttackWater = document.getElementById('button-water')
    buttonAttackMagic = document.getElementById('button-magic')
    getAllAttackButtons = document.querySelectorAll('.attack-buttons')
}
function sequencePlayerAttack() {
    let count = 0
    getAllAttackButtons.forEach((button) => {
        button.addEventListener('click', (e) =>{  
            if (e.target.textContent === 'Fire 🔥'){
                playerAttacks.push('Fire 🔥')
                button.style = 'background-color: #112f58'
                button.disabled = true
            } else if (e.target.textContent === 'Water 💧'){
                playerAttacks.push('Water 💧')
                button.style = 'background-color: #112f58'
                button.disabled = true
            } else {
                playerAttacks.push('Magic 🪄')
                button.style = 'background-color: #112f58'
                button.disabled = true
            }
            count++
            if(count === getAllAttackButtons.length){
                ramdomEnemyAttack(enemyAttacks)
            }
        })
    })
}
function ramdomEnemyAttack(enemyAttacks) {
    for (var i = enemyAttacks.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = enemyAttacks[i];
        enemyAttacks[i] = enemyAttacks[j];
        enemyAttacks[j] = temp;
    }
    combat()
}
function combat(){
 
    let playerAttack
    let enemyAttack
    for (let i = 0; i < playerAttacks.length; i++) {
       if(playerAttacks[i] == enemyAttacks[i].name ){
            tiedGames++
            resultCombat = "Tied game 🤝"
            playerAttackResultEmoji = "🤝"
            enemyAttackResultEmoji = "🤝"
        }else if (playerAttacks[i] == "Fire 🔥" && enemyAttacks[i].name == "Magic 🪄"){
            counterPayerWins++
            resultCombat = "You Win 🎉"
            playerAttackResultEmoji = "✅"
            enemyAttackResultEmoji = "☠️"
        }else if (playerAttacks[i] == "Water 💧" && enemyAttacks[i].name == "Fire 🔥"){
            counterPayerWins++
            resultCombat = "You Win 🎉"
            playerAttackResultEmoji = "✅"
            enemyAttackResultEmoji = "☠️"
        }else if (playerAttacks[i] == "Magic 🪄" && enemyAttacks[i].name == "Water 💧"){
            counterPayerWins++
            resultCombat = "You Win 🎉"
            playerAttackResultEmoji = "✅"
            enemyAttackResultEmoji = "☠️"
        }else {
            counterEnemyWins++
            resultCombat = "You lose 👾"
            playerAttackResultEmoji = "☠️"
            enemyAttackResultEmoji = "✅"
        }
        counterAttacks++
        playerAttack = playerAttacks[i]
        enemyAttack = enemyAttacks[i].name
        addMessage(playerAttack, enemyAttack, counterAttacks, playerAttackResultEmoji )
    }
    spanPlayerVictories.innerHTML = counterPayerWins
    spanEnemyVictories.innerHTML = counterEnemyWins
    spanTieGames = document.querySelectorAll('.game-ties')
    spanTieGames.forEach((span) =>{
        span.innerHTML = tiedGames
    })
    winsChecker()
}
function addMessage(playerAttack, enemyAttack, counterAttacks, playerAttackResultEmoji){
    let textMessagePlayerAttack = document.createElement('p')
    let textMessageEnemyAttack = document.createElement('p')

    textMessagePlayerAttack.innerHTML = "<span class=counter-attacks>" + counterAttacks + ".</span>" + playerAttack + " " + playerAttackResultEmoji
    textMessageEnemyAttack.innerHTML = "<span class=counter-attacks>" + counterAttacks + ".</span>" +  enemyAttack + " " + enemyAttackResultEmoji
    sectionMessagesPlayerAttack.appendChild(textMessagePlayerAttack)
    sectionMessagesEnemyAttack.appendChild(textMessageEnemyAttack)
}
function addMessageEndGame(finalMessage){
    sectionMessages.innerHTML = "<span class=message-result>" +  finalMessage + "</span>"
    sectionRestart.style = "display: block"
}
function winsChecker() {
    if (tiedGames === playerAttacks.length || counterPayerWins === counterEnemyWins){
        addMessageEndGame("Tied game, boooring!!! 😕")
    } else if (counterPayerWins > counterEnemyWins){
        addMessageEndGame("Flawless Victory!")
    } else {
        addMessageEndGame("You lose, Pathetic Fool!")
    }
}
function restartGame(){
    location.reload()
}
window.addEventListener('load', startGame)