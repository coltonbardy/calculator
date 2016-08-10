/**
 * Created by coltonbardy on 7/15/16.
 */

/**
 * Created by coltonbardy on 8/9/16.
 */
var input_array = [];
var equals_sign = {};
var last_num_entered = null;
var last_operator_entered = null;
var decimal = false;


function display(text) {
    var display = '';
    var last_index = input_array[input_array.length-1];

    if (text) {
        display += text;
    }
    else {
        //if they haven't entered anything yet
        if (input_array.length == 0) {
            display = 0;
        }
        else {
            if (last_index.isResult) {
                last_index.value = last_index.value.substr(0, 14);
            }
            for (i = 0; i < input_array.length; i++) {
                if (last_index.isResult && i == last_index-1) {
                    display += (input_array[i].value + ' = ')
                }
                else {
                    display += (input_array[i].value + ' ');
                }
            }
        }
    }
    $('#display-text').text(display);
}

function calculate(operator_index) {
    var num1 = parseFloat(input_array[operator_index - 1].value);
    var num2 = parseFloat(input_array[operator_index + 1].value);

    var result = {
        type: 'number',
        value: null,
        isResult: true
    }

    switch (input_array[operator_index].value) {
        case '+':
            result.value = num1 + num2 + '';
            break;
        case '-':
            result.value = num1 - num2 + '';
            break;
        case 'x':
            result.value = num1 * num2 + '';
            break;
        case '/':
            if (num2 != 0) {
                result.value = num1 / num2 + '';
            }
            else {
                input_array = [];
                input_array.push({value: "ERROR"});
                return;
            }
            break;
    }

    input_array.splice(operator_index-1, 3, result);
}

function equals() {
    var last_index = input_array[input_array.length-1];

    if (input_array.length == 1 && last_index.type == 'number' && !last_index.isResult) {
        display();
        return;
    }

    if (last_index.isResult) {
        input_array.push(last_operator_entered, last_num_entered);
    }

    /* *** LOOPING THROUGH TO FIND ALL THE OPERATORS ****/
    var second_operator = false;

    for (i = 0; i < input_array.length; i++) {
        var current_object = input_array[i];

        if (current_object.type == 'operator') {
            if (current_object.order_of_op == 'second') {
                second_operator = true;
            }
            else {
                calculate(i);
                i = 0;
            }
        }
    }

    if (second_operator) {
        for (i = 0; i < input_array.length; i++) {
            var current_object = input_array[i];

            if (current_object.type == 'operator') {
                calculate(i);
                i = 0;
            }
        }
    }
}

function clear() {
    if (input_array.length == 0) {
        display('0');
    }
    else {
        if (input_array[input_array.length - 1].type == 'number') {
            input_array.pop(input_array[input_array.length - 1]);
            if (input_array.length == 0) {
                display();
            }
            else {
                display();
            }
            console.log(input_array);
        }
    }
}

function allClear() {
    input_array = [];
    last_num_entered = null;
    last_operator_entered = null;
    equals_last_entered = false;
    dont_change_last = false;
    isRollover = false;
    display();
}

function button_pressed() {

    var self = $(this);

    var last_index = input_array[input_array.length - 1];

    if (last_index && input_array[0].value == 'ERROR') {
        input_array = [];
    }

    /*    if (self.attr('class') != 'button equate') {
     equals_last_entered = false;
     }*/

    if (self.attr('class') == 'button clear'){ /*is it a clear/allClear button*/
        if (self.text() == 'C') {
            clear();
        }
        else {
            allClear();
        }
    }

    else {      //creating objects of numbers and operators to push to array
        var type = null;
        switch (self.attr('class')) {
            case 'button numeric':
                type = 'number';
                break;
            case 'button arithmetic':
                type = 'operator';
                break;
            case 'button equate':
                type = 'equals';
                break;
            case 'button numeric decimal':
                type = 'decimal';
                break;
        }

        var input = {       //creating each input into object to push to array
            type: type,
            value: self.text()
        }

        /* SWITCH TO CHECK THE INPUT TYPE */
        switch(input.type) {

            case 'decimal':
                if (!decimal) {
                    decimal = true;
                    input.type = 'number';
                    if (last_index && last_index.type == 'number') {
                        last_index.value += input.value;
                    }
                    else {
                        input_array.push(input);
                    }
                }
                break;

            case 'number':
                if (last_index && last_index.type == 'number' && !last_index.isResult) {//if there are items in the array and the last item is a number
                    last_index.value += input.value;
                }
                else {
                    if (last_index && last_index.isResult) {
                        input_array = [];
                    }

                    input.isResult = false;
                    input_array.push(input); //if the last index is not a number, push this object into array
                    last_num_entered = input; //storing the last number before equals for use in repeating operations
                }
                break;

            case 'operator':
                decimal = false;

                if (last_index && last_index.type == 'number') {
                    if (input.value == 'x' || input.value == '/') {
                        input.order_of_op = 'first';
                    }
                    else {
                        input.order_of_op = 'second';
                    }
                    input_array.push(input);
                    last_operator_entered = input; //storing the last operator before equals for use in repeating operations
                }

                else {
                    if (last_index && last_index.type == 'operator' && last_index.value != input.value) {
                        last_index.value = input.value;
                    }
                }
                break;

            case 'equals':
                decimal = false;

                if (last_index) {
                    if (last_index.type == 'operator') {
                        input_array[0].isResult = false;
                        input_array.pop();
                        equals();
                        var result = input_array[0];
                        result.isResult = false;
                        input_array.push(last_operator_entered, result);
                    }
                    equals_sign = input;
                    equals();
                }
                break;
        }
    }
    console.log(input_array);
    display();
}


$(document).ready(function() {
    $('.button').click(button_pressed);

});