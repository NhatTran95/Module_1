function tinhthue(){
    let money = Number(document.getElementById('tienthunhap').value);
    if (money>=0 && money<=5e6){
        let tmoney = money*0.05;
        document.getElementById('tiennop').innerHTML=tmoney+ ' vnd';
    }
    else if (money>5e6 && money<=10e6){
        let tmoney = 0.25e6 + (money-5e6)*0.1;
        document.getElementById('tiennop').innerHTML=tmoney+ ' vnd';
    }
    else if (money>10e6 && money<=18e6){
        let tmoney = 0.75e6 + (money-10e6)*0.15;
        document.getElementById('tiennop').innerHTML=tmoney+ ' vnd';
    }
    else if (money>18e6 && money<=32e6){
        let tmoney = 1.95e6 + (money-18e6)*0.2;
        document.getElementById('tiennop').innerHTML=tmoney+ ' vnd';
    }
    else if (money>32e6 && money<=52e6){
        let tmoney = 4.75e6 + (money-32e6)*0.25;
        document.getElementById('tiennop').innerHTML=tmoney+ ' vnd';
    }
    else if (money>52e6 && money<=80e6){
        let tmoney = 9.75e6 + (money-52e6)*0.1;
        document.getElementById('tiennop').innerHTML=tmoney+ ' vnd';
    }
    else if (money>=80e6){
        let tmoney = 18.15e6 + (money-80e6)*0.35;
        document.getElementById('tiennop').innerHTML=tmoney+ ' vnd';
    }
    else alert('Bạn đang âm nợ vui lòng nhập giá trị khác!')
}