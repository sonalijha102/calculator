function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }




 function result() {
    var num1 = document.getElementById('res').value;
    var change=document.getElementById('res');
    change.style.backgroundColor=' rgb(243, 195, 106)';
    
    try{
     
        var num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;


    }
    catch {
        document.getElementById('res').value = 'error';
     }
}



function clearr() {
    var inp = document.getElementById('res');
    inp.value = ' ';//blank ho jyega input
    var change=document.getElementById('res');
    change.style.backgroundColor='azure';


    
 }



 function back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);//input ki value ko restore krega
 }



 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';


    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       result();
    } else if (key === 'Backspace') {
       back();
    } else if (key.toLowerCase() === 'c') {
       clearr();
    }
 });