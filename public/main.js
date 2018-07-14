document.getElementById('go').onclick = startGame
document.getElementById('bet10').onclick = count10
document.getElementById('bet20').onclick = count20
document.getElementById('bet50').onclick = count50
document.getElementById('bet100').onclick = count100
let count = 0
let pot = 0

document.getElementById('pot').innerText = pot
document.getElementById('bet').innerText = count

alert('Let The Games Begin!!!!!')

let player = {
  cards : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
}
let winnings = 0
let userWinnings = 0

function startGame(){
  // CPU Card
  if(document.getElementById('pot').innerText == 0){
    alert("You must put in a bet! Bum Ass Nig...")
  }
  else{
    function dealCards(){
      let shuffle = player.cards[Math.floor(Math.random() * player.cards.length)];
      document.getElementsByClassName('cpucard')[0].innerText = shuffle
      // User Card
      let shuffle2 = player.cards[Math.floor(Math.random() * player.cards.length)];
      document.getElementsByClassName('usercard')[0].innerText = shuffle2

      checkWinner()
    }
    function checkWinner(){
      if (shuffle === 'A' && shuffle2 === 'K' || shuffle === 'A' && shuffle2 === 'Q' || shuffle === 'A' && shuffle2 === 'J' || shuffle === 'A' && shuffle2 === '10' || shuffle === 'A' && shuffle2 === '9' || shuffle === 'A' && shuffle2 === '8' ||
      shuffle === 'A' && shuffle2 === '7' || shuffle ===  'A' && shuffle2 === '6' || shuffle === 'A' && shuffle2 === '5' || shuffle === 'A' && shuffle2 === '4' || shuffle === 'A' && shuffle2 === '3' || shuffle === 'A' && shuffle2 === '2' ||
      shuffle === 'K' && shuffle2 === 'Q' || shuffle === 'K' && shuffle2 === 'J' || shuffle === 'K' && shuffle2 === '10' || shuffle === 'K' && shuffle2 === '9' || shuffle === 'K' && shuffle2 === '8' || shuffle === 'K' && shuffle2 === '7' ||
      shuffle === 'K' && shuffle2 === '6' || shuffle === 'K' && shuffle2 === '5' || shuffle === 'K' && shuffle2 === '4' || shuffle === 'K' && shuffle2 === '3' || shuffle === 'K' && shuffle2 === '2' ||
      shuffle === 'Q' && shuffle2 === 'J' || shuffle === 'Q' && shuffle2 === '10' || shuffle === 'Q' && shuffle2 === '9' ||shuffle ===  'Q' && shuffle2 === '8' || shuffle === 'Q' && shuffle2 === '7' || shuffle === 'Q' && shuffle2 === '6' ||
      shuffle === 'Q' && shuffle2 === '5' || shuffle === 'Q' && shuffle2 === '4' || shuffle === 'Q' && shuffle2 === '3' || shuffle === 'Q' && shuffle2 === '2' ||
      shuffle === 'J' && shuffle2 === '10' || shuffle === 'J' && shuffle2 === '9' || shuffle === 'J' && shuffle2 === '8' || shuffle === 'J' && shuffle2 === '7' || shuffle === 'J' && shuffle2 === '6' ||
      shuffle === 'J' && shuffle2 === '5' || shuffle === 'J' && shuffle2 === '4' || shuffle === 'J' && shuffle2 === '3' || shuffle === 'J' && shuffle2 === '2' ||
      shuffle === '10' && shuffle2 === '9' || shuffle === '10' && shuffle2 === '8' || shuffle === '10' && shuffle2 === '7' || shuffle === '10' && shuffle2 === '6' ||
      shuffle === '10' && shuffle2 === '5' || shuffle === '10' && shuffle2 === '4' || shuffle === '10' && shuffle2 === '3' || shuffle === '10' && shuffle2 === '2' ||
      shuffle === '9' && shuffle2 === '8' ||  shuffle === '9' && shuffle2 === '7' || shuffle === '9' && shuffle2 === '6' ||
      shuffle === '9' && shuffle2 === '5' || shuffle === '9' && shuffle2 === '4' || shuffle === '9' && shuffle2 === '3' || shuffle === '9' && shuffle2 === '2' ||
      shuffle === '8' && shuffle2 === '7' || shuffle === '8' && shuffle2 === '7' || shuffle === '8' && shuffle2 === '6' ||
      shuffle === '8' && shuffle2 === '5' || shuffle === '8' && shuffle2 === '4' || shuffle === '8' && shuffle2 === '3' || shuffle === '8' && shuffle2 === '2' ||
      shuffle === '7' && shuffle2 === '6'|| shuffle === '7' && shuffle2 === '6' ||
      shuffle === '7' && shuffle2 === '5' || shuffle === '7' && shuffle2 === '4' || shuffle === '7' && shuffle2 === '3' || shuffle === '7' && shuffle2 === '2' ||
      shuffle === '6' && shuffle2 === '5' || shuffle === '6' && shuffle2 === '4' || shuffle === '6' && shuffle2 === '3' || shuffle === '6' && shuffle2 === '2' ||
      shuffle === '5' && shuffle2 === '4' || shuffle === '5' && shuffle2 === '3' || shuffle === '5' && shuffle2 === '2' ||
      shuffle === '4' && shuffle2 === '3' || shuffle === '4' && shuffle2 === '2' ||
      shuffle === '3' && shuffle2 === '2')
      {
        document.getElementById('winner').innerText = 'DEALER WINS!!!'
        count = pot
        fetch('bankAccount', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'bank': count
          })
        })
        .then(response => {
          if(response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
        count=0
        pot=0
      }
      else if (shuffle === shuffle2){
        prompt('War or Surrender?')
        document.getElementById('winner').innerText = 'MAKE YOUR DECLARATION!!!!'
        if (answer == 'war' || 'WAR' || 'War'){
          dealCards()
        }
        else {
          document.getElementById('winner').innerText = 'DEALER WINS!!!'
          count = pot
          fetch('bankAccount', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'bank': count
            })
          })
          .then(response => {
            if(response.ok) return response.json()
          })
          .then(data => {
            console.log(data)
            window.location.reload(true)
          })
          count=0
          pot=0
        }
      }
    }
  }
}

function count10(){
  count = count +=10
  document.getElementById('bet').innerText = count
  pot = count * 2
  document.getElementById('pot').innerText = pot
}

function count20(){
  count = count +=20
  document.getElementById('bet').innerText = count
  pot = count * 2
  document.getElementById('pot').innerText = pot
}

function count50(){
  count = count +=50
  document.getElementById('bet').innerText = count
  pot = count  * 2
  document.getElementById('pot').innerText = pot
}

function count100(){
  count = count +=100
  document.getElementById('bet').innerText = count
  pot = count * 2
  document.getElementById('pot').innerText = pot
}
