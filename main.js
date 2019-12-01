// calling our var 
let x = "X"
let btn = $('.btn button');
let count = 0


//nextTrun 

function turn(event){

    count += 1
    $(event.target).text(x)
    $(event.target).off();
    
    if (x ==='X') {
        x = 'O'
    }
    else if (x ==='O') {
        x = 'X'
        
    }
    checkWinnerX()
    checkWinnerO()
    checkDraw()
    
}

// check winner funcation for player X
function checkWinnerX() {
if ( $('.btn1').text()==='X' && $('.btn2').text()==='X' && $('.btn3').text()==='X'){  // 1
    alert('YOU ARE THE WINNER'); 
    
}
else if($('.btn4 ').text()==='X' && $('.btn5').text()==='X' && $('.btn6').text()==='X') { // 2
    alert('YOU ARE THE WINNER')
}   else if ($('.btn7').text()==='X' && $('.btn8').text()==='X' && $('.btn9').text()==='X' ){ // 3
    alert('YOU ARE THE WINNER')
}       else if ($('.btn2').text()==='X' && $('.btn5').text()==='X' && $('.btn8').text()==='X'){ //4 
    alert('YOU ARE THE WINNER')
}           else  if ($('.btn1').text()==='X' && $('.btn4').text()==='X' && $('.btn7').text()==='X') { //5 
    alert('YOU ARE THE WINNER')
}               else if ($('.btn3').text()==='X' && $('.btn6').text()==='X' && $('.btn9').text()==='X'){ //6 
    alert('YOU ARE THE WINNER')
}                   else if ($('.btn1').text()==='X' && $('.btn5').text()==='X' && $('.btn9').text()==='X'){ //7 
    alert('YOU ARE THE WINNER')
     
}  else if ($('.btn3').text()==='X' && $('.btn5').text()==='X' && $('.btn7').text()==='X'){ // 8 
    alert('YOU ARE THE WINNER')
} else {
    
}

}

// check winner funcation for player X

function checkWinnerO() {
    if ( $('.btn1').text()==='O' && $('.btn2').text()==='O' && $('.btn3').text()==='O'){  // 1
        alert('YOU ARE THE LOOSER')
    $() }
    else if($('.btn4 ').text()==='O' && $('.btn5').text()==='O' && $('.btn6').text()==='O') { // 2
        alert('YOU ARE THE LOOSER')
    }   else if ($('.btn7').text()==='O' && $('.btn8').text()==='O' && $('.btn9').text()==='O' ){ // 3
        alert('YOU ARE THE LOOSER')
    }       else if ($('.btn2').text()==='O' && $('.btn5').text()==='O' && $('.btn8').text()==='O'){ //4 
        alert('YOU ARE THE LOOSER')
    }           else  if ($('.btn1').text()==='O' && $('.btn4').text()==='O' && $('.btn7').text()==='O') { //5 
        alert('YOU ARE THE LOOSER')
    }               else if ($('.btn3').text()==='O' && $('.btn6').text()==='O' && $('.btn9').text()==='O'){ //6 
        alert('YOU ARE THE LOOSER')
    }                   else if ($('.btn1').text()==='O' && $('.btn5').text()==='O' && $('.btn9').text()==='O'){ //7 
        alert('YOU ARE THE LOOSER')
         
    }  else if ($('.btn3').text()==='O' && $('.btn5').text()==='O' && $('.btn7').text()==='O'){ // 8 
        alert('YOU ARE THE LOOSER')

    }
    
    }
    
// DRAW! 

function checkDraw (){
 if (count === 9) {
     alert('DARW!')

 }

}

btn.click(turn);