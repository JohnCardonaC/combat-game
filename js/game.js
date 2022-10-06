let playerAttack
let enemyAttack 


function startGame(){
    let buttonWarriorPlayer = document.getElementById('button-warrior')
    buttonWarriorPlayer.addEventListener('click', selectWarriorPlayer)

    let buttonAttackFire = document.getElementById('button-fire')
    buttonAttackFire.addEventListener('click', playerAttackFire)

    let buttonAttackWater = document.getElementById('button-water')
    buttonAttackWater.addEventListener('click', playerAttackWater)

    let buttonAttackMagic = document.getElementById('button-magic')
    buttonAttackMagic.addEventListener('click', playerAttackMagic)

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
}

window.addEventListener('load', startGame)