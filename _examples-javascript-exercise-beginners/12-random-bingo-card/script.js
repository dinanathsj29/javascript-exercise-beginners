console.log('12-random-bingo-card');

window.onload = createBingoCard;

function createBingoCard() {
  // console.log('in createBingoCard');

  for (var i = 1; i <= 24; i++) {
    var newRandomNum = Math.floor(Math.random() * 75);
    // console.log('newRandomNum', newRandomNum);
    document.getElementById('Square' + i).innerHTML = newRandomNum;
  }
}
