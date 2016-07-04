var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  

var evenNumbers = function(n) {
    return n % 2 == 0;
};

var filtered = numbers.filter(evenNumbers);

console.log(filtered);
