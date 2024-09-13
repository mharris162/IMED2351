const name = "MacKenzie Harris";// can be used later in code (global scope)

function adder (num1, num2) { //() are the paramater 
console.log (num1 + num2); //block scope; can only be used within function

}


adder (5,20); //function 1 end 


function toUpper (text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);

}

toUpper (name); // function 2 end 


const toUpper = function () {


}

toUpper (name); // function 3 end 


const toUpper =  () => {


}

toUpper (name); // function 4 end 




