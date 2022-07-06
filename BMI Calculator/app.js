let mass = document.getElementById('input1');
let height = document.getElementById('input2');
let result = document.getElementById('result');





// BMI Formula

function calcBMI() {
    if(input1.value == '' || input2.value == ''){
        result.value = document.getElementById('result').style.color = 'RGB(255, 0, 17)';
        result.value = document.getElementById('result').style.borderColor = 'black';
        result.value = '⚠ Invalid Inputs ⚠';
    } else {
        
       result.value = document.getElementById('result').style.color = 'black';
       
       result.value = 'BMI: ' + (Number(mass.value) / Number(height.value)**2).toFixed(2);
    }
}

// Calculate BMI On Button Click
document.getElementById('calc').addEventListener('click', calcBMI);


// Clear inputs
document.getElementById('clear').addEventListener('click', () => {
    mass.value = '';
    height.value = '';
    result.value = '';
})




