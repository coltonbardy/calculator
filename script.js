//global variables
var number= [];
var numBefore= false;
var current= 0;
var operator= 0;
var opclick= false;

$(document).ready(function(){
    $('#total').html(number);
//in a .ready make a click handler for buttons with one function
    $('button').on('click', function () {
        var val = $(this).attr('this-value');
        // clicked = $(this).html();
        // console.log("clicked", clicked);
        $('#total').html();
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
        current = current + val;
        console.log("current 2+", current);
    } else {
        current = val;
        console.log("current", current);
        numBefore = true;
        console.log("numBefore", numBefore);
    }
    $('#total').text(current);
    console.log("array in numbers", number);
    opclick= false;
}


function operators(op){
    if(numBefore == true) {
        number.push(current);
        console.log("number array", number);
        operator = op.text();
        console.log("operator", operator);
    }
    else {
        number.pop();
        operator= op.text();
        alert("Your operator has been changed to last pressed value");
    }
    number.push(operator);
    console.log("operator chosen", number);
    numBefore= false;
    opclick= true;
}
function off(){
    $('#total').text("OFF");
    console.log("off ran");
    current= 0;
    number=[];
    numBefore= false;
    setTimeout(function(){off_clear();}, 1500);
}
function off_clear(){
    $('#total').text('');
}

function allClear(){
    console.log("allClear running");
    current= 0;
    numBefore= false;
    number=[];
    $('#total').text(current);
}
function clear(){
    console.log("clear running");
    current=0;
    $('#total').text(current);
}

function equals() {
    if (opclick == true){
        alert("You cannot end your entry with something besides a number");
    }
    else {
        number.push(current);
        console.log("number array", number);
        number = number.toString();
        console.log("number string", number);
        number= number.replace(/,/g , " ");
        parseInt(number);
        console.log('numbered number arr', number);
        console.log(typeof(number));
        $('#total').html(number);
    }
}

function display(){
    number = number.toString();
    console.log("number string", number);
    number= number.replace(/,/g , " ");
    parseFloat(number);
    console.log('numbered number arr', number);
    console.log(typeof(number));
    $('#total').html(number);
}
