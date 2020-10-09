const resultArea = document.getElementById('result');
const k = document.getElementById('kValue');
const s = document.getElementById('sumValue');

let array = [10, 15, 3, 7];

function Fear() {
    let kval = parseInt(k.value);
    let sval = parseInt(s.value);
    console.log(kval, sval);
    //for (let i = 0; i < array.length; i++) {  
    //    if (0) {
    //        resultArea.innerHTML = `<b>${"true"}</b>`;
    //    } else {
    //        resultArea.innerHTML = `<b>${"false"}</b>`;
    //    }
    //}
}

function Clear() {
    k.value = '';
    s.value = '';
    k.focus();
}