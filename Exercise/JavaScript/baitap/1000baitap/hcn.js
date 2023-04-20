let widthHcn = 20;
let heightHcn = 5;
for (let i = 1; i <= heightHcn; i++) {
    for (let j = 1; j <= widthHcn; j++) {
         document.write("*")
    }
    document.write("<br>")
}
document.write("<br>")
for (let i = 1; i <= heightHcn; i++) {
    for (let j = 1; j <= widthHcn; j++) {
        if (i == 1 || i == heightHcn || j == 1 || j == widthHcn) {
                document.write("*")
            }
            else document.write("&nbsp;&nbsp;")      
    }
    document.write("<br>")
}

