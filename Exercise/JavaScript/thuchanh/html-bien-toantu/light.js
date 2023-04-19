let onlight = false;
function turnlight(){
    if(onlight){
        document.getElementById('light').src="/thuchanh/image/pic_bulboff.gif";
        document.getElementById('turn').src="/thuchanh/image/turnoff.png";
        onlight = false;
    }else{
        document.getElementById('light').src="/thuchanh/image/pic_bulbon.gif";
        document.getElementById('turn').src="/thuchanh/image/turnon.png";
        onlight = true;
    }
}
function turnon(){
        document.getElementById('light').src="/thuchanh/image/pic_bulbon.gif";
}
function turnoff(){
        document.getElementById('light').src="/thuchanh/image/pic_bulboff.gif";
}