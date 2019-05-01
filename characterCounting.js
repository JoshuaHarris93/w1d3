var word = "lighthouse in the house";
word = word.split("");
// console.log(word);

var obj = {};

word.forEach(function(el) {
    var check = obj.hasOwnProperty(el);
    if (check) {
        obj[el] += 1;
    } else {
        obj[el] = 1
    }
})

delete obj[" "];

console.log(obj);
