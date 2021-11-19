let token = 0;
let myButtonElement1 = document.getElementById('counter-1');
let displayElement1 = document.getElementById('display-1');
myButtonElement1.addEventListener('click', function () {
    token = token + 1;
    
    displayElement1.innerHTML = token;
});
