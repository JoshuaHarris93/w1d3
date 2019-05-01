/* 

Return indices instead
Instead of having your function countLetters return just the count of each letter, the requirement has changed to return all the indices (zero-based positions) in the string where each character is found. So for each letter, we're no longer returning just one number to represent its number of occurrences, but rather (potentially) multiple numbers to represent all the places in the string that it shows up.

Step 1
First, ask yourself: What would the resulting object (key-value mapping) look like with the same example string ("lighthouse in the house")?

Write it out in a new JS file and run it by a mentor so as to confirm that you're feeling good about the solution that you are going to work toward.

Step 2
Either copy your code from the Character Counting or start afresh. Either way, consider this a new new project/folder and don't modify your solution for the previous problem.

*/

var word = "lighthouse in the house";
word = word.split("");
// console.log(word);

var obj = {};

word.forEach(function(el, i) {
    var check = obj.hasOwnProperty(el);
    if (check) {
        obj[el].push(word.indexOf(el, i));

    } else {
        obj[el] = [word.indexOf(el)];
    }
})

delete obj[" "];

console.log(obj);


