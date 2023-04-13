function cong(){
    let X = parseFloat(document.getElementById('nb1').value);
    let Y = parseFloat(document.getElementById('nb2').value);
    let sum = X + Y;
    document.getElementById('result').innerText= sum;
}
function tru(){
    let X = parseFloat(document.getElementById('nb1').value);
    let Y = parseFloat(document.getElementById('nb2').value);
    let sub = X - Y;
    document.getElementById('result').innerText= sub;
}
function nhan(){
    let X = parseFloat(document.getElementById('nb1').value);
    let Y = parseFloat(document.getElementById('nb2').value);
    let mul = X * Y;
    document.getElementById('result').innerText= mul;
}
function chia(){
    let X = parseFloat(document.getElementById('nb1').value);
    let Y = parseFloat(document.getElementById('nb2').value);
    let div = X / Y;
    document.getElementById('result').innerText= div.toFixed(2);
}