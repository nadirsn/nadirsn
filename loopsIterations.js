// level {1/2/3}
//level 1
/*function generatePyramid(n) {
    var totalNumbersofRows = 5,
    arr;
    for (var i=1; i<=totalNumbersofRows ; i++);{
        arr = [];
        for (var j=i; j<=i;j++){
            arr.push(j)
        }
        console.log(arr.join(" ") + "\n");

    }
}*/

//level 2

const number = parseInt(prompt('enter a positive number: 6'));
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series: ');
console.log(n1);
console.log(n2);
nextTerm = n1 + n2;
while (nextTerm <= number){
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
