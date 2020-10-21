const sr = ScrollReveal();

sr.reveal('h1', {
    origin: 'top',
    distance: '70px',
    duration: 3500,
    reset: true
});

sr.reveal('.pizzas', {
    distance: '70px',
    duration: 3500,
    reset: true
});

sr.reveal('.nosotros', {
    distance: '70px',
    duration: 3500,
    reset: true
});

let slider = document.querySelector(`.slider-contenedor`);
let sliderInd = document.querySelectorAll(`.slider-testimonio`);
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 4500;

setInterval(function tiempo() {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = `translate(` + (-tamañoWidth * contador) + `px)`;
    slider.style.transition = `transform 1s`;
    contador++;

    if (contador === sliderInd.length) {
        contador = 0;
        setTimeout(function () {
            slider.style.transform = `translate(0px)`;
            slider.style.transition = `transform 0s`;
        }, intervalo)
    }
}