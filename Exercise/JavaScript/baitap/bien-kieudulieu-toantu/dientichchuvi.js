function dientich(){
    let R = parseFloat(document.getElementById('bankinh').value);
    const Pi = 3.14;
    let area = R * R * Pi;
    document.getElementById('dientich').innerText='Diện tích hình tròn là: ' + area.toFixed(2);
}
function chuvi(){
    let R = parseFloat(document.getElementById('bankinh').value);
    const Pi = 3.14;
    let chuvi = 2 * R * Pi;
    document.getElementById('chuvi').innerText='Chu vi hình tròn là: ' + chuvi.toFixed(2);
}