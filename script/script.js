var texto1 = window.document.getElementById('texto1');

var texto1IconeSetInitial = window.document.getElementsByClassName('set-initial')[0];

var texto1IconeAlignCenter = window.document.getElementsByClassName('fa-align-center')[0];

var texto1IconeAlignJustify = window.document.getElementsByClassName('fa-align-justify')[0];

var texto1IconeAlignLeft = window.document.getElementsByClassName('fa-align-left')[0];

var texto1IconeAlignRight = window.document.getElementsByClassName('fa-align-right')[0];

texto1IconeAlignCenter.addEventListener('click', () => {
    texto1.style.textAlign = 'center';
})