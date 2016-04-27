function calculate (type, value, item) {
    // take value and display in #total
    switch (value) {
        case undefined:
            $('#total').html("");
            break;
        default:
            $('#total').html(value);
            break;
    }
}

//global variables
var my_calculator = new calculator(calculate);

$(document).ready(function(){
//in a .ready make a click handler for buttons with one function
    $('button').on('click', function () {
        var val = $(this).text();
        switch (val) {
            case 'AC':
                my_calculator.allClear();
                break;
            case 'C':
                my_calculator.clear();
                break;
            default:
                my_calculator.addItem($(this).text());
                break;
        }
    });
});

