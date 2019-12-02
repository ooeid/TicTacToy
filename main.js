// calling our var 

let btn = $('.btn button');
let count = 0
let player1 = 0
let countP1 = $('aside .p1') // to count player1 wins
let player2 = 0
let countP2 = $('aside .p2') // to count player2 wins




// Our alerting funcations 

let winAlert = function () {
    alert('YOU ARE THE WINNER!')
}
let loseAlert = function () {
    alert('YOOU ARE THE LOOSER!')
}
let drawAlert = function () {
    alert('DRAW!')
}


// check winner funcation for player X

function checkWinnerX() {
    if ($('.btn1').text() === 'X' && $('.btn2').text() === 'X' && $('.btn3').text() === 'X') { // 1
        setTimeout(winAlert, 250)
         countP1.text(player1 +=1) 
    } else if ($('.btn4 ').text() === 'X' && $('.btn5').text() === 'X' && $('.btn6').text() === 'X') { // 2
        setTimeout(winAlert, 250)
        countP1.text(player1 +=1)
    } else if ($('.btn7').text() === 'X' && $('.btn8').text() === 'X' && $('.btn9').text() === 'X') { // 3
        setTimeout(winAlert, 250)
        countP1.text(player1 +=1)
    } else if ($('.btn2').text() === 'X' && $('.btn5').text() === 'X' && $('.btn8').text() === 'X') { //4 
        setTimeout(winAlert, 250)
        countP1.text(player1 +=1)
    } else if ($('.btn1').text() === 'X' && $('.btn4').text() === 'X' && $('.btn7').text() === 'X') { //5 
        setTimeout(winAlert, 250)
        countP1.text(player1 +=1)
    } else if ($('.btn3').text() === 'X' && $('.btn6').text() === 'X' && $('.btn9').text() === 'X') {  //6 
        setTimeout(winAlert, 250)
        countP1.text(player1 +=1)
    } else if ($('.btn1').text() === 'X' && $('.btn5').text() === 'X' && $('.btn9').text() === 'X') { //7 
        setTimeout(winAlert, 250)
        countP1.text(player1 +=1)
    } else if ($('.btn3').text() === 'X' && $('.btn5').text() === 'X' && $('.btn7').text() === 'X') { // 8 
        setTimeout(winAlert, 250)
        countP1.text(player1 +=1)
    }
}

// check winner funcation for player O

function checkWinnerO() {
    if ($('.btn1').text() === 'O' && $('.btn2').text() === 'O' && $('.btn3').text() === 'O') { // 1
        setTimeout(loseAlert, 250)
        countP2.text(player2 +=1)
    } else if ($('.btn4 ').text() === 'O' && $('.btn5').text() === 'O' && $('.btn6').text() === 'O') { // 2
        setTimeout(loseAlert, 250)
        countP2.text(player2 +=1)
    } else if ($('.btn7').text() === 'O' && $('.btn8').text() === 'O' && $('.btn9').text() === 'O') { // 3
        setTimeout(loseAlert, 250)
        countP2.text(player2 +=1)
    } else if ($('.btn2').text() === 'O' && $('.btn5').text() === 'O' && $('.btn8').text() === 'O') { //4 
        setTimeout(loseAlert, 250)
        countP2.text(player2 +=1)
    } else if ($('.btn1').text() === 'O' && $('.btn4').text() === 'O' && $('.btn7').text() === 'O') { //5 
        setTimeout(loseAlert, 250)
        countP2.text(player2 +=1)
    } else if ($('.btn3').text() === 'O' && $('.btn6').text() === 'O' && $('.btn9').text() === 'O') { //6 
        setTimeout(loseAlert, 250)
        countP2.text(player2 +=1)
    } else if ($('.btn1').text() === 'O' && $('.btn5').text() === 'O' && $('.btn9').text() === 'O') { //7 
        setTimeout(loseAlert, 250)
        countP2.text(player2 +=1)
    } else if ($('.btn3').text() === 'O' && $('.btn5').text() === 'O' && $('.btn7').text() === 'O') { // 8 
        setTimeout(loseAlert, 250)
        countP2.text(player2 +=1)
    }

}
//our playing funcation 

function turn(event) {

    if (count % 2 == 0) {
        $(event.target).text('X');
        $(event.target).off();
        
    } else { 
        $(event.target).text('O');
        $(event.target).off();

    }
    checkWinnerX()
    checkWinnerO()
    count += 1

}
// resting our game 

function restGame() { 

    count = 0
    btn.text('')
    btn.off();
    btn.click(turn);
}

// calling our funcation 

btn.click(turn);
$('#rest').click(restGame);