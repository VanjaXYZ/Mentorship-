let input1 = document.getElementById('num1');
let input2 = document.getElementById('num2');
let result = document.getElementById('result');

document.getElementById('add').addEventListener('click', () => {
    result.value = +input1.value + +input2.value;
});

document.getElementById('sub').addEventListener('click', () => {
    result.value = +input1.value - +input2.value;
});

document.getElementById('mult').addEventListener('click', () => {
    result.value = +input1.value * +input2.value;
});

document.getElementById('div').addEventListener('click', () => {
    result.value = +input1.value / +input2.value;
});

document.getElementById('clear').addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
    result.value = '';
});

