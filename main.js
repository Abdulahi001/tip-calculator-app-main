const bill = document.getElementById('bill');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const custum = document.getElementById('custum');
const numberOfPeaple = document.getElementById('number-of-peaple');
const numberOfPeapleDiv = document.querySelector('.people-box');
const errorSpan = document.getElementById('error');
errorSpan.style.display = 'none'



// output part

const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total-amount');
const btn6 = document.getElementById('btn-6');



    btn1.addEventListener('click', () => {

        if(numberOfPeaple.value === '') {
            errorSpan.style.display = 'block';
            numberOfPeapleDiv.style.border = '1px solid red'
            numberOfPeapleDiv.style.borderRadius = '5px'
            
        } else {
            let percent = 5 / numberOfPeaple.value;
            tipAmount.innerHTML = percent.toFixed(2);
            let result = bill.value / numberOfPeaple.value + percent;
            total.innerHTML = result.toFixed(2)
        }
       

    })
    btn2.addEventListener('click', () => {
        if(numberOfPeaple.value === '') {
            errorSpan.style.display = 'block';
            numberOfPeapleDiv.style.border = '1px solid red'
            numberOfPeapleDiv.style.borderRadius = '5px'
            
        } else {
            let percent = 10 / numberOfPeaple.value;
            tipAmount.innerHTML = percent.toFixed(2);
            let result = bill.value / numberOfPeaple.value + percent;
            total.innerHTML = result.toFixed(2)
        }
    })
    btn3.addEventListener('click', () => {
        if(numberOfPeaple.value === '') {
            errorSpan.style.display = 'block';
            numberOfPeapleDiv.style.border = '1px solid red'
            numberOfPeapleDiv.style.borderRadius = '5px'
            
        } else {
            let percent = 15 / numberOfPeaple.value;
            tipAmount.innerHTML = percent.toFixed(2);
            let result = bill.value / numberOfPeaple.value + percent;
            total.innerHTML = result.toFixed(2)
        }
       
    })
    btn4.addEventListener('click', () => {
        if(numberOfPeaple.value === '') {
            errorSpan.style.display = 'block';
            numberOfPeapleDiv.style.border = '1px solid red'
            numberOfPeapleDiv.style.borderRadius = '5px'
            
        } else {
            let percent = 25 / numberOfPeaple.value;
            tipAmount.innerHTML = percent.toFixed(2);
            let result = bill.value / numberOfPeaple.value + percent;
            total.innerHTML = result.toFixed(2)
        }
    })
    btn5.addEventListener('click', () => {
        if(numberOfPeaple.value === '') {
            errorSpan.style.display = 'block';
            numberOfPeapleDiv.style.border = '1px solid red'
            numberOfPeapleDiv.style.borderRadius = '5px'
            
        } else {
            let percent = 50 / numberOfPeaple.value;
            tipAmount.innerHTML = percent.toFixed(2);
            let result = bill.value / numberOfPeaple.value + percent;
            total.innerHTML = result.toFixed(2)
        }
    })

    custum.addEventListener('keyup',() => {
        if(numberOfPeaple.value === '') {
            errorSpan.style.display = 'block';
            numberOfPeapleDiv.style.border = '1px solid red'
            numberOfPeapleDiv.style.borderRadius = '5px'
            
        } else {
        let percent = custum.value / numberOfPeaple.value
        tipAmount.innerHTML = percent.toFixed(2);
        let result = bill.value / numberOfPeaple.value + percent;
        total.innerHTML = result.toFixed(2)
        }
    })

    btn6.addEventListener('click', () => {
        total.innerHTML = '0.00';
        tipAmount.innerHTML = '0.00';
        bill.value = '';
        numberOfPeaple.value = '';
        custum.value = ''
    })