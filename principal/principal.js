let scrollInicial = window.pageXOffset; //Devuelve los pixeles iniciales del scroll
window.onscroll = () => { //Creamos la funcion
    let scrollFinal = window.pageYOffset; //Devuelve los pixeles que vamos bajando o subiendo
    if (scrollInicial > scrollFinal) {
        document.getElementById("navbar").style.top = "0"; //Si scrollinicial es mayor al final la barra se queda quieta
    } else {
        document.getElementById("navbar").style.top = "-80px"; //Si scrollFinal es mayor al inicial la barra se oculta
    }
    scrollInicial = scrollFinal;
}
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    var sectionOffset = $('.titulo-historia').offset().top;
    if (scrollPos > sectionOffset) {
        $('.titulo-historia header').removeClass('rollIn').addClass('animated rollOut');
    } else {
        $('.titulo-historia header').removeClass('rollOut').addClass('animated rollIn');
    }
});

$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    var sectionOffset = $('.titulo-fotos').offset().top;
    if (scrollPos > sectionOffset) {
        $('.titulo-fotos header').removeClass('rollIn').addClass('animated rollOut');
    } else {
        $('.titulo-fotos header').removeClass('rollOut').addClass('animated rollIn');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = ['../imagenes/img1.jpeg', '../imagenes/img2.jpeg', '../imagenes/img3.jpeg','../imagenes/img4.jpeg', '../imagenes/img5.jpeg', '../imagenes/img6.jpeg','../imagenes/img7.jpeg', '../imagenes/img8.jpeg', '../imagenes/img9.jpeg','../imagenes/img10.jpeg', '../imagenes/img11.jpeg', '../imagenes/img12.jpeg','../imagenes/img13.jpeg', '../imagenes/img14.jpeg', '../imagenes/img15.jpeg','../imagenes/img16.jpeg', '../imagenes/img17.jpeg', '../imagenes/img18.jpeg'];
    let currentImageIndex = 0;
    const imageElement = document.querySelector('.contenedor-foto img');

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = images[currentImageIndex];
    }, 1000); // 
});



