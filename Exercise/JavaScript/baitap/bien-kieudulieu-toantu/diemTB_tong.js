function diemtb(){
    let toan = parseFloat(document.getElementById('diemtoan').value);
    let hoa = parseFloat(document.getElementById('diemhoa').value);
    let sinh = parseFloat(document.getElementById('diemsinh').value);
    let dtb = ( toan + hoa + sinh)/3;
    document.getElementById('dtb').innerText="Điểm trung bình là: "+ dtb.toFixed(2);
}
function diemtong(){
    let toan = parseFloat(document.getElementById('diemtoan').value);
    let hoa = parseFloat(document.getElementById('diemhoa').value);
    let sinh = parseFloat(document.getElementById('diemsinh').value);
    let sum = toan + hoa +sinh;
    document.getElementById('sum').innerText="Tổng điểm là: "+ sum.toFixed(2);
}