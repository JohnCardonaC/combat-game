function startGame(){
    let buttonWarriorPlayer = document.getElementById('button-warrior')
    buttonWarriorPlayer.addEventListener('click', selectWarrior)
}

function selectWarrior(){

    let shillingford = document.getElementById('shillingford')
    let clayton = document.getElementById('clayton')
    let frolova = document.getElementById('frolova')
    let spanWarriorPlayerName = document.getElementById('warrior-player-name')
    let spanWarriorEnemyName = document.getElementById('warrior-enemy-name')

    if (shillingford.checked){
        spanWarriorPlayerName.innerHTML = "Shillingford"
    } else if (clayton.checked){
        spanWarriorPlayerName.innerHTML = "Clayton"
    } else if (frolova.checked){
        spanWarriorPlayerName.innerHTML = "Frolova"
    } else {
        alert("Select one warrior")
    }

}

window.addEventListener('load', startGame)