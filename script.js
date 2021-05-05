let cents = document.getElementById(`cents`)
let button = document.getElementById(`button`)
let box = document.getElementById(`box`)

let coins = [1, 5, 10, 25]

button.addEventListener(`click`, showCoins)

function showCoins() {

  if (cents.value != `` && !isNaN(cents.value)) {
    if (cents.value > 99) {
      box.innerHTML = `Number of cents cannot be more than 99.`
    }
    else {
      box.innerHTML = ``

      while (cents.value >= 1) {
        let selectedCoin
        
        for (let coin of coins) {
          if (cents.value >= coin) {
            selectedCoin = coin
          }
        }

        let image = document.createElement(`img`)
        image.src = `${selectedCoin}.png`
        box.appendChild(image)

        cents.value = cents.value - selectedCoin
      }
    }
  }
}
