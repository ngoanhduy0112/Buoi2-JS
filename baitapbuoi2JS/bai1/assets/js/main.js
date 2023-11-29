function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("fizzbuzz");
    } else if (number % 3 == 0) {
        console.log("fizz");
    } else if (number % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(number);
    }
}
let inputNumber = prompt("nhap so: ");
fizzBuzz(parseInt(inputNumber));
