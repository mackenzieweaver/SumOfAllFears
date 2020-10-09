const resultArea = document.getElementById('result');
const k = document.getElementById('kvalue');

let array = [10, 15, 3, 7];

function fear() {
    let myArray = [];
    for (let i = 0; i < array.length; i++) {
        myArray.push(array[i] - parseInt(k.value));
    }
    console.log(myArray);
}

function clear() {
    k.innerText = '';
    k.focus();
}