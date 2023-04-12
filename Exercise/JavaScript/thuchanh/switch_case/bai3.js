let a =  parseInt(prompt('Enter number:'));
// if (a>0){
//     alert(1);
// }else{
//     if (a<0){
//         alert(-1);
//     }else alert(0);
// }
switch (true) {
    case (a > 0):
        alert(1);
        break;
    case (a < 0):
        alert(-1);
        break;
    case (a = 0):
        alert(0);
        break;

    default:
        alert('Let enter a number')
        break;
}