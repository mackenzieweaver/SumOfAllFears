const r = document.getElementById('result');
const k = document.getElementById('kValue');
const s = document.getElementById('sumValue');

let array = [10, 15, 3, 7];

function Fear() {
    let kval = parseInt(k.value);
    let sval = parseInt(s.value);
    for (let i = 0; i < array.length; i++) {
        if (sval - array[i] == kval) {
            r.innerHTML = `<b>True</b> complement <b>${array[i]}</b> at index <b>${i}</b>`;
            return;
        }      
    }
    r.innerHTML = `<b>False</b> array does not contain complement...`;
}

function Clear() {
    k.value = '';
    s.value = '';
    r.innerHTML = `<div></div>`;
    k.focus();
}