//global variables
var number = [''];
var numberIndex= 0;
var numBefore = false;
var current = 0;
var operator = 0;
var opclick = false;
var firstclick = true;

$(document).ready(function(){
    $('#display').html('');
//in a .ready make a click handler for buttons with one function
    $('button').on('click', function () {
        var val = $(this).attr('this-value');
        switch (val) {
            case 'number':
                numbers($(this));
                break;
            case 'operator':
                operators($(this));
                break;
            case 'OFF':
                off();
                break;
            case 'AC':
                allClear();
                break;
            case 'C':
                clear();
                break;
            case 'equals':
                equals();
                break;
        }
    });
});


function numbers(num){

    var val = num.text();
    if(numBefore == true) {
        current += val;
        console.log("current 2+", current);
        $('#display').html(current);
    }
    else {
        $('#display').html(number);
        current = val;
        console.log("current", current);
        numBefore = true;
        console.log("numBefore", numBefore);
    }
    $('#display').text(current);
    console.log("array in numbers", number);
    opclick = false;
}

function numbers2(num){
    if (typeof number[numberIndex] == 'undefined'){
        number[numberIndex] = num;
    }
    else {
        number[numberIndex] +=num;
    }
}


function operators(op){
    if(numBefore == true) {
        number.push(current);
        console.log("number array", number);
        operator = op.text();
        console.log("operator", operator);
    }
    else if(firstclick == true){
        alert("You cannot begin with an operator");
    }
    else {
        number.pop();
        operator = op.text();
        alert("Your operator has been changed to last pressed value");
    }
    number.push(operator);
    console.log("operator chosen", number);
    numBefore = false;
    opclick = true;
    $('#display').html(number);
}
function off(){
    $('#display').text("OFF");
    console.log("off ran");
    current = 0;
    number = [];
    numBefore = false;
    setTimeout(function(){off_clear();}, 1500);
}
function off_clear(){
    $('#display').text('');
}

function allClear(){
    console.log("allClear running");
    current = 0;
    numBefore = false;
    number=[];
    $('#display').text(current);
}
function clear(){
    console.log("clear running");
    current=0;
    $('#display').text(current);
}

function equals() {
    // **************** LF Start
    number.push(current); //push current value to number array - was going to be moved elsewhere in the numbers function
    console.log("number array", number);  //console.log number array

    if (opclick == true){  //if operator clicked is true
        alert("You cannot end your entry with something besides a number");  //alert cant end with operator
    }
    else {  //else

        for (var i = 0; i < number.length; i++) {  //for loop of number array
            var total = null;  // set var = null;
            switch (number[i]) {  //switch case
                case 'x':  //case for multiply
                    total= parseFloat(number[i-1]) * parseFloat(number[i+1]);  // parse float before and after index
                    break;  // break
                case '/':
                    total= parseFloat(number[i-1]) / parseFloat(number[i+1]);  //same for division
                    break;  //break
            }
            if (total != null){  //if not equal to null
                number.splice(i-1, 3, total); //splice number from before index, remove 3 and replace with result
            }
        }

        for (var i=0; i < number.length; i++) {  // for loop of number array
            var total = null;  //set var = null;
            switch (number[i]) {  //switch case
                case '+': //addition case
                    total = parseFloat(number[i-1]) + parseFloat(number[i+1]); //var is parsefloat num before and after doing math
                    break; //break
                case '-': //subtraction case
                    total = parseFloat(number[i-1]) - parseFloat(number[i+1]); //var is parsefloat num before and after doing math
                    break;
            }
                if (total != null){  //if result not equal to null
                    number.splice(i-1, 3, total); //splice before index and replace 3 values with result
                }
        }

        $('#display').html(number); //display html of array
    }
    // ************ LF End
}

// function refresh(x){
//     var temp = display.html();
//         temp += x;
//         display.html(temp);
// }