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
        /* search is the value we want to find in the array
         * equal to the sum "K" minus the current value in array
         */
        let search = kval - num[0];
        /* index is where the value is in the array
         * if it's not found it's equal to -1
         */
        let index = arr.indexOf(search);
        /* If the index is greater than or equal to zero
         * we've found the complement
         */
        if (index >= 0) {
            r.innerHTML = `<b>${num} and ${search}</b>`;
            // put the value back into the array
            arr.splice(i, 0, num);
            return;
        }
        // put the value back into the array
        arr.splice(i, 0, num[0]);
    }
    // we've gone through the whole array and havn't found any complements
    r.innerHTML = `<b>No Complement...</b>`;
    // highlight previous number in the input box
    k.select();
}

// clear input and output
function Clear() {
    k.value = '';
    r.innerHTML = `<div></div>`;
    k.focus();
}