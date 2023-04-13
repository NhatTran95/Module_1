let view = document.getElementById('screen');
function inputvalue(value) {
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
}
function reset() {
    view.value = "";
}