function btn() {
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let BMI = (weight / (height * height));
    if (BMI > 0 && BMI < 18.5) {
        document.getElementById('result').innerHTML = 'Result: Underweight'
    }
    else if (BMI >= 18.5 && BMI < 25) {
        document.getElementById('result').innerHTML = 'Result: Normal'
    }
    else if (BMI >= 25 && BMI <= 30) {
        document.getElementById('result').innerHTML = 'Result: Overweight'
    }
    else if (BMI >= 30) {
        document.getElementById('result').innerHTML = 'Result: Obese'
    }
    else document.getElementById('result').innerHTML = 'Please check input again!'
}
