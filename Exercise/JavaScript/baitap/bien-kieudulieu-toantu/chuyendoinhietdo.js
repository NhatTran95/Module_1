function chang(){
    let C = parseFloat(document.getElementById('do_C').value);
    let F = ( C * 9 / 5) + 32;
    document.getElementById('do_F').innerText= C + ' oC bằng: '+ F + ' oF';
}