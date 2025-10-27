const prevB = document.getElementById('prevB');
const nextB = document.getElementById('nextB');
const item = document.querySelectorAll('.item');
const botao = document.querySelectorAll('.botao');
const numbers = document.querySelector('.numbers');
const ponto = document.querySelectorAll('.ponto');

let active = 0;
const totalItems = item.length;

function update(direction) {
    
      ponto[active].classList.remove('active');
    if (ponto[active]) ponto[active].classList.remove('active');
   
    item[active].classList.remove('active');
    if (botao[active]) botao[active].classList.remove('active');
  
    active += direction;

   
    if (active >= totalItems) {
        active = 0;
    } else if (active < 0) {
        active = totalItems - 1;
    }

     ponto[active].classList.add('active');
    if (ponto[active]) ponto[active].classList.add('active');

    item[active].classList.add('active');
    if (botao[active]) botao[active].classList.add('active');

   
    if (numbers) {
        numbers.textContent = (active + 1).toString().padStart(2, '0');
    }

  
}


prevB.addEventListener('click', () => {
    update(-1);
});

nextB.addEventListener('click', () => {
    update(1);
});


item[active].classList.add('active');
if (botao[active]) botao[active].classList.add('active');
if (numbers) numbers.textContent = (active + 1).toString().padStart(2, '0');


