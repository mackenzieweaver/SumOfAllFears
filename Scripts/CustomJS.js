const r = document.getElementById('result');
const k = document.getElementById('kValue');

let arr = [10, 15, 3, 7];

function Fear() {
    let kval = parseInt(k.value);
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let search = kval - num;
        let index = arr.indexOf(search);

        if (index >= 0) {
            console.log(num, search);
            return;
        }            
    }
    console.log("No complement");
}

function Clear() {
    k.value = '';
    r.innerHTML = `<div></div>`;
    k.focus();
}