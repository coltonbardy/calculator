//global variables
// var my_calculator = new calculator(callback);
var btnSelected = [''];
var Index = 0;
var display;

$(document).ready(function(){
// Click Handler that uses a switch case to determine the what-value of the button selected and call the appropriate function.
    display = $('.display');
    $('button').on('click', btnClicked);
});

//Function when a button is clicked
function btnClicked() {
    var type = $(this).attr('type');
    var value = $(this).text();
    switch (type) {
        case 'AC':
            //call an AC function
            allClear();
            break;
        case 'C':
            //call a C function
            clearLast();
            break;
        case 'number':
            //call a numberSelected function
            // numberSelected.value;
            numberSelected(value);
            break;
        case 'operator':
            //call an operatorSelected function
            operatorSelected(value);
            break;
        default:
            // call an equalSelected function
            equalSelected();
            break;
    }
    $('.display').html = display;
}

//Function for AC
//clears all the data in the array
function allClear () {
    $('.display').html('');
    btnSelected =[''];

}

//Function for C
//clears the last input that was placed
function clearLast () {
    btnSelected.pop(btnSelected[Index]);
    display = btnSelected;
    Index = (Index-1);
    refresh();
}

//Function that enters the number string into the array
//function should CONCAT if a number is selected after
function numberSelected (value) {
    if (typeof btnSelected[Index] == 'undefined') {
        btnSelected[Index] = value;
    }
    else {
        btnSelected[Index] += value;
        console.log(value);
    }
    refresh(value);
}

//Function that enters the operator into the array
function operatorSelected(value) {

    console.log(value);
    var n = btnSelected[btnSelected.length - 1];
    switch (n) {
        case '-':
        case '+':
        case '/':
        case 'x':
            console.log('op replace' + n);
            btnSelected[btnSelected.length - 1] = value;
            break;
        default:
            btnSelected.push(value);
            Index = btnSelected.length;
            refresh(' ' + value + ' ');
            console.log('num before' + n);
    }
}

//Function that makes the equals calculate the array
//using parseFloat for decimals
function equalSelected() {
    //logs the string 'array at start of equals' + the array name
    console.log("btnSelected", btnSelected);

    //Loop to check for 'x' and '/'
    for(var i = btnSelected.length; i > 0; i--) {
        //loops with an array through decrement form
        var total = null;
        //set a non global variable of to null to use later
        switch (btnSelected[i]) {
            //switch case for the current array spot
            case 'x':
                //case for multiplication button
                total = parseFloat(btnSelected[i - 1]) * parseFloat(btnSelected[i + 1]);
                //take the variable from before and make it equal to the stop point in the array-1 and multiplies it to the stop point +1 with parsing in this line
                break;
            //do the same as the multiplication but for division
            case '/':
                total = parseFloat(btnSelected[i - 1]) / parseFloat(btnSelected[i + 1]);
                if(parseFloat(btnSelected[i+1]) === 0){
                    total = "Error";
                }
                break;

        }
        //if the parsed index+1 is 0 make the non global var say ERROR

        //make and if statement to see if the above non global is != null and splice the targeted 3 array slots and replaces with the total
        if (total != null){
            btnSelected.splice(i-1, 3, total);
        }
    }

    //Loop to check for '+' and '-'
    //another for loop for addition and subtraction exactly like the above with switch and all minus the Error with / a 0

    for(var i = btnSelected.length; i > 0; i--) {
        switch (btnSelected[i]) {
            case '+':
                total = parseFloat(btnSelected[i-1]) + parseFloat(btnSelected[i+1]);
                break;
            case '-':
                total = parseFloat(btnSelected[i-1]) - parseFloat(btnSelected[i+1]);
                break;
        }
        //if statement to check if total is not null and splices out the section and replaces with the new total
        if(total != null){
            btnSelected.splice(i-1, 3, total);
        }
        // log the array with a string 'array after loop',
        console.log("array after loop", btnSelected);
        //display the html with the parameter of the array name
        display.html(btnSelected);
    }


}

function refresh (x) {
    var temp = display.html();
    temp += x;
    display.html(temp);
}