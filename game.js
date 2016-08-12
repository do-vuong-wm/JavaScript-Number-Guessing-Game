/**
 * Created by session2 on 8/10/16.
 */
var num;
var finish;
var numtyp;
finish = true;

var tries = 0;

num = Math.floor(Math.random() * 101);

while(finish){

  numtyp = prompt("Guess the correct number from 1 - 100");

    if(numtyp == num){

        ++tries;
        alert("You win with " + tries + " tries.");
        if(confirm("You want to play again")){

            location.reload();

        }else{

            finish = false;

        }

    }else if(numtyp > num){

        var highClose = Math.abs(numtyp - num);

        if(highClose > 10) {

            alert('Too High try again :)');


        }else{

            alert('You are ' + highClose + ' numbers away.' );


        }

    }else if(numtyp < num){

        var lowClose = Math.abs(numtyp - num);

        if(lowClose > 10){

        alert('Too Low try again :)');

            }else{

            alert('You are ' + lowClose + ' number away.' );

        }

    }

    ++tries

}