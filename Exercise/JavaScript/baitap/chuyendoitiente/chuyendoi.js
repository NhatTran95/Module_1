function convert(){
    let money = document.getElementById('amount').value;
    let value1 = document.getElementById('from').value;
    let value2 = document.getElementById('to').value;
    let result;
    if( value1 == "VND" && value2 == "USD"){
        let result = money / 23000;
        document.getElementById('result').innerText='Result: '+ result.toFixed(2) + 'USD'
    }else{if(value1=="USD" && value2=="VND"){
        let result = money * 23000;
        document.getElementById('result').innerText='Result: '+ result.toFixed(0) + 'VND'
        }else{if(value1=="VND"){
            let result = money;
            document.getElementById('result').innerText='Result:'+ result+ 'VND'
            }else{
                let result = money;
                document.getElementById('result').innerText='Result:'+ result+ 'USD'
                }
            }
        }
}