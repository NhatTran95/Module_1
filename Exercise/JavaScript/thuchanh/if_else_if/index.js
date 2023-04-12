let yourName = prompt('Enter the name:');
if ( yourName == 'Admin'){
    let yourPassword = prompt('Enter password:');
    if (yourPassword == 'TheMaster'){
        alert('Welcome');
    }else{
        if (yourPassword == null){
            alert('Canceled')
        }else{
            alert('Wrong password')
        }
    }
}else{
    if (yourName == null){
        alert('canceld')
    }else{
        alert("I don't know you")
    }
}