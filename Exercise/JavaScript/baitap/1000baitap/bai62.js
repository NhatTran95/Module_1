let a = 7;
let b = 10;
while ( a != b)
    {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    console.log(`UCLN la ${a}`)