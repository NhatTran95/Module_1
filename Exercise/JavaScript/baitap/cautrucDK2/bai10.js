function check() {   
    let kWh = Number(document.getElementById('kWh').value);
    if (kWh >= 0 && kWh <= 50) {
        let money = kWh * 1678;
        document.getElementById('level').innerHTML='Bậc thang 1';
        document.getElementById('money').innerHTML=money + ' vnd';
    }
    else if (kWh >= 51 && kWh <= 100) {
        let money = 50 * 1678 + (kWh - 50) * 1734;
        document.getElementById('level').innerHTML='Bậc thang 2';
        document.getElementById('money').innerHTML=money + ' vnd';
    }
    else if (kWh >= 101 && kWh <= 200) {
        let money = 50 * 1678 + 50 * 1734 + (kWh - 100) * 2014;
        document.getElementById('level').innerHTML='Bậc thang 3';
        document.getElementById('money').innerHTML=money + ' vnd';
    }
    else if (kWh > 201 && kWh <= 300) {
        let money = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kWh - 200) * 2536;
        document.getElementById('level').innerHTML='Bậc thang 4';
        document.getElementById('money').innerHTML=money + ' vnd';
    }
    else if (kWh > 301 && kWh <= 400) {
        let money = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kWh - 300) * 2834;
        document.getElementById('level').innerHTML='Bậc thang 5';
        document.getElementById('money').innerHTML=money + ' vnd';
    }
    else if (kWh > 400) {
        let money = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (kWh - 400) * 2927;
        document.getElementById('level').innerHTML='Bậc thang 6';
        document.getElementById('money').innerHTML=money + ' vnd';
    }
    else alert('Hãy nhập lại ngay và luôn đi bạn ơi!');
}