document.getElementById('calculate').addEventListener('click', function() {
    const selectop = document.getElementById('selectop').value;
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const result = document.getElementById('result');
    if(selectop === 'add') {
        result.innerHTML = input1 + input2;
    } else if(selectop === 'subtract') {
        result.innerHTML = input1 - input2;
    } else if(selectop === 'multiply') {
        result.innerHTML = input1 * input2;
    } else if(selectop === 'divide') {
        result.innerHTML = input1 / input2;
    }
});