var texto1 = window.document.getElementById('texto1');

//Código text-align texto1

var texto1IconeSetInitial = window.document.getElementsByClassName('set-initial')[0];

var texto1IconeAlignCenter = window.document.getElementsByClassName('fa-align-center')[0];

var texto1IconeAlignJustify = window.document.getElementsByClassName('fa-align-justify')[0];

var texto1IconeAlignLeft = window.document.getElementsByClassName('fa-align-left')[0];

var texto1IconeAlignRight = window.document.getElementsByClassName('fa-align-right')[0];

texto1IconeSetInitial.addEventListener('click', () => {
    texto1.style.textAlign = 'initial';
});

texto1IconeAlignCenter.addEventListener('click', () => {
    texto1.style.textAlign = 'center';
});

texto1IconeAlignJustify.addEventListener('click', () => {
    texto1.style.textAlign = 'justify';
});

texto1IconeAlignLeft.addEventListener('click', () => {
    texto1.style.textAlign = 'left';
})

texto1IconeAlignRight.addEventListener('click', () => {
    texto1.style.textAlign = 'right';
})

//Código text-color texto1

var texto1ColorBlue = window.document.getElementsByClassName('blue')[0];

var texto1ColorRed = window.document.getElementsByClassName('red')[0];

var texto1ColorYellow = window.document.getElementsByClassName('yellow')[0];

var texto1ColorGreen = window.document.getElementsByClassName('green')[0];

var texto1ColorBlack = window.document.getElementsByClassName('black')[0];

texto1ColorBlue.addEventListener('click', () => {
    texto1.style.color = 'blue';
})

texto1ColorRed.addEventListener('click', () => {
    texto1.style.color = 'red';
})

texto1ColorYellow.addEventListener('click', () => {
    texto1.style.color = 'yellow';
})

texto1ColorGreen.addEventListener('click', () => {
    texto1.style.color = 'green';
})

texto1ColorBlack.addEventListener('click', () => {
    texto1.style.color = 'black';
})

//Código background-color texto1

var texto1BackgroundColorBlue = window.document.getElementsByClassName('blue')[1];

var texto1BackgroundColorRed = window.document.getElementsByClassName('red')[1];

var texto1BackgroundColorYellow = window.document.getElementsByClassName('yellow')[1];

var texto1BackgroundColorGreen = window.document.getElementsByClassName('green')[1];

var texto1BackgroundColorWhite = window.document.getElementsByClassName('white')[0];

texto1BackgroundColorBlue.addEventListener('click', () => {
    texto1.style.background = 'blue';
})

texto1BackgroundColorRed.addEventListener('click', () => {
    texto1.style.background = 'red';
})

texto1BackgroundColorYellow.addEventListener('click', () => {
    texto1.style.background = 'yellow';
})

texto1BackgroundColorGreen.addEventListener('click', () => {
    texto1.style.background = 'green';
})
texto1BackgroundColorWhite.addEventListener('click', () => {
    texto1.style.background = 'white';
})