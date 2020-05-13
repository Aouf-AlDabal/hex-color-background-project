const button = document.querySelector('#btn');
const valueHex = document.querySelector('#hex-value');
const colorHex = [1,2,3,4,5,6,8,9,'A','B','C','D','F','G','R'];
const body = document.querySelector('body');

button.addEventListener('click', ()=>{
    let hex = '#';
    for (let index = 0; index < 6; index++) {
        const colorIndex =  Math.floor (Math.random()*colorHex.length);
            hex +=  colorHex[colorIndex];
        
    }
    valueHex.textContent = hex;
    body.style.backgroundColor = hex;


})
  

