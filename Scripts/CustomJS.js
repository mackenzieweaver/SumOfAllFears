// user input element
const k = document.getElementById('kValue');
// algo output element
const r = document.getElementById('result');
const o = document.getElementById('the-array');

// start with hard-coded array
let arr = [10, 15, 3, 7];

// core algo
function Fear() {
    /* START USER INPUT ARRAY */
    let userArr = document.getElementById("user-array").value.split(",");
    // if user input an array replace hard-coded array
    if (userArr[0] != "") {
        // turn user array of strings into array of integers
        for (let i = 0; i < userArr.length; i++) {
            userArr[i] = parseInt(userArr[i]);
        }
        arr = userArr;
    }
    document.getElementById("user-array").value = '';
    /* END USER INPUT ARRAY */

    /* START RANDOM ARRAY */
    let randomArrLength = parseInt(document.getElementById("random-array-length").value);
    // if user input random length array replace hard-coded array
    if (!isNaN(randomArrLength)) {
        arr = [];
        for (let i = 0; i < randomArrLength; i++) {
            // only numbers between 1-50
            arr.push(Math.ceil(Math.random() * 50));
        }
    }
    document.getElementById("random-array-length").value = '';
    /* END RANDOM ARRAY */

    console.log(arr, userArr, randomArrLength);
    document.getElementById("the-array").innerHTML = `[${arr}]`;
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
            // highlight previous number in the input box
            k.select();
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

function RandomK() {
    // only numbers between 50-100
    let num = Math.ceil(Math.random() * 100) + 1;
    k.value = num.toString();
    k.select();
}

function RandomL() {
    // only numbers between 50-100
    let num = Math.ceil(Math.random() * 30);
    document.getElementById("random-array-length").value = num.toString();
    k.select();
}

// clear input and output
function Clear() {
    arr = [10, 15, 3, 7];
    k.value = '';
    document.getElementById("random-array-length").value = '';
    r.innerHTML = `<div></div>`;
    o.innerHTML = `<div></div>`;
    k.focus();
}