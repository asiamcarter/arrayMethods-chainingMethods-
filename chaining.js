let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
let x = 1.5;
let y = 1;
let newInteger=
    integers
        .sort(function(a, b){return b - a})
        .filter(integer => integer < 19)
        .map(num => (num * 1.5) - 1)
        .reduce((currentTotal, nextValue) => currentTotal += nextValue, 0 )

console.log(newInteger)
let div = document.querySelector(".final-num");
div.innerHTML = `
${newInteger}
`