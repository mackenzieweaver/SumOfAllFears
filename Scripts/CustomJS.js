// user input element
const k = document.getElementById('kValue');
// algo output element
const r = document.getElementById('result');

// hard-coded array 
let arr = [10, 15, 3, 7, 10];

// core algo
function Fear() {
    // k value as a number
    let kval = parseInt(k.value);
    // loop through each value in arr
    for (let i = 0; i < arr.length; i++) {
        /* splice removes element from array and returns an array
         * so that when searching for the complement, self is not included
         */
        let num = arr.splice(i, 1);
        let search = kval - num[0];
        let index = arr.indexOf(search);
        if (index >= 0) {
            r.innerHTML = `<b>${num} and ${search}</b>`;
            arr.splice(i, 0, num);
            return;
        }
        arr.splice(i, 0, num[0]);
    }
    r.innerHTML = `<b>No Complement...</b>`;
    k.select();
}

// clear input and output
function Clear() {
    k.value = '';
    r.innerHTML = `<div></div>`;
    k.focus();
}