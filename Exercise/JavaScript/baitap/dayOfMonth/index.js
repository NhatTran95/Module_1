function btn1(){
    let m1 = Number(document.getElementById('month1').value);
    switch (m1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('result1').innerHTML='Tháng ' + m1 + ' có 31 ngày'
            break;
        case 2:
            document.getElementById('result1').innerHTML='Tháng ' + m1 + ' có 28 hoặc 29 ngày'
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('result1').innerHTML='Tháng ' + m1 + ' có 30 ngày'
            break;
        default:
            document.getElementById('result1').innerHTML='please enter again!'
            break;
    }
}
function btn2(){
    let m2 = Number(document.getElementById('month2').value);
    switch (m2) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('result2').innerHTML='Tháng ' + m2 + ' có 31 ngày'
            break;
        case 2:
            document.getElementById('result2').innerHTML='Tháng ' + m2 + ' có 28 hoặc 29 ngày'
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('result2').innerHTML='Tháng ' + m2 + ' có 30 ngày'
            break;
        default:
            document.getElementById('result2').innerHTML='please enter again!'
            break;
    }
}

