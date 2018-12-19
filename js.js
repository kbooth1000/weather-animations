let container = document.querySelector('.container');
let buttonSunny = document.querySelector('.btn-sunny');
let buttonCloudy = document.querySelector('.btn-cloudy');
let buttonRainy = document.querySelector('.btn-rainy');

buttonSunny.addEventListener('click', ()=>{
    container.classList.remove(...container.classList);
    container.classList.add('container', 'sunny');
});

buttonCloudy.addEventListener('click', ()=>{
    container.classList.remove(...container.classList);
    container.classList.add('container', 'cloudy');
});

buttonRainy.addEventListener('click', ()=>{
    container.classList.remove(...container.classList);
    container.classList.add('container', 'rainy', 'cloudy');
});