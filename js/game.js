const sectionAttck = document.getElementById('select-attack')
const sectionLives = document.getElementById('attacks-lives-secction')
const sectionRestart = document.getElementById('restart')
const buttonWarriorPlayer = document.getElementById('button-warrior')
const buttonAttackFire = document.getElementById('button-fire')
const buttonAttackWater = document.getElementById('button-water')
const buttonAttackMagic = document.getElementById('button-magic')
const buttonRestart = document.getElementById('button-restart')
const spanWarriorPlayerName = document.getElementById('warrior-player-name')
const sectionWarrior = document.getElementById('slect-warrior')
const spanWarriorEnemyName = document.getElementById('warrior-enemy-name')
const sectionMessagesResult = document.getElementById('message-result')
const sectionMessagesPlayerAttack = document.getElementById('message-player-attack')
const sectionMessagesEnemyAttack = document.getElementById('message-enemy-attack')
const sectionMessages = document.getElementById('message-result')
const spanPlayerLives = document.getElementById('player-lives')
const spanEnemyLives = document.getElementById('enemy-lives')
const cardsContainer = document.getElementById('cards-container')

let warriors = []
let warriorsHTMLConstruction 
let shillingfordInput
let claytonInput
let frolovaInput
let playerAttack
let enemyAttack
let resultCombat 
let playerLives = 3
let enemyLives = 3
let playerAttackResultEmoji
let enemyAttackResultEmoji
let counterAttacks = 0

class Warriors {
    constructor(name, imagen, power, lives) {
        this.name = name
        this.imagen = imagen
        this.power = power
        this.lives = lives
        this.attacks = []
    }
}

let shillingford = new Warriors('Shillingford', 'https://i.ibb.co/NrW5VXd/shillingford.png', 'Fire', 5)
let clayton = new Warriors('Clayton', 'https://i.ibb.co/GsZJs22/clayton.png', 'Water', 5)
let frolova = new Warriors('Frolova', 'https://i.ibb.co/LC47gCC/Ffolova.png', 'Magic', 5)

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
    {name: 'Fire 🔥', id: 'button-fire'},
    {name: 'Water 💧', id: 'button-water'},
    {name: 'Magic 🪄', id: 'button-magic'},
    {name: 'Magic 🪄', id: 'button-magic'},
    {name: 'Magic 🪄', id: 'button-magic'}
)
warriors.push(shillingford, clayton, frolova)

function startGame(){
    sectionAttck.style = "display: none"
    sectionLives.style = "display: none"
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
    buttonAttackFire.addEventListener('click', playerAttackFire)
    buttonAttackWater.addEventListener('click', playerAttackWater)
    buttonAttackMagic.addEventListener('click', playerAttackMagic)
    buttonRestart.addEventListener('click', restartGame)
}
function selectWarriorPlayer(){
    if (shillingfordInput.checked){
        spanWarriorPlayerName.innerHTML = shillingfordInput.id
    } else if (claytonInput.checked){
        spanWarriorPlayerName.innerHTML = claytonInput.id
    } else if (frolovaInput.checked){
        spanWarriorPlayerName.innerHTML = frolovaInput.id
    } else {
        alert("Select one warrior")
    }
    selectWarriorEnemy()
    sectionWarrior.style = "display: none"
    sectionAttck.style = "display: flex"
    sectionLives.style = "display: grid"
}
function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}
function selectWarriorEnemy(){
    let ramdonEnemy = random(0, warriors.length - 1)
    spanWarriorEnemyName.innerHTML = warriors[ramdonEnemy].name
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
    let textMessagePlayerAttack = document.createElement('p')
    let textMessageEnemyAttack = document.createElement('p')

    sectionMessagesResult.innerHTML = resultCombat
    textMessagePlayerAttack.innerHTML = "<span class=counter-attacks>" + counterAttacks + ".</span>" + playerAttack + " " + playerAttackResultEmoji
    textMessageEnemyAttack.innerHTML = "<span class=counter-attacks>" + counterAttacks + ".</span>" +  enemyAttack + " " + enemyAttackResultEmoji

    sectionMessagesPlayerAttack.appendChild(textMessagePlayerAttack)
    sectionMessagesEnemyAttack.appendChild(textMessageEnemyAttack)
}
function addMessageEndGame(finalMessage){
    sectionMessages.innerHTML = "<span class=message-result>" +  finalMessage + "</span>"
    buttonAttackFire.disabled = true
    buttonAttackWater.disabled = true
    buttonAttackMagic.disabled = true
    sectionRestart.style = "display: block"
}
function combat(){
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