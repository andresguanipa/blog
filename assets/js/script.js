window.onload = () => {
    AOS.init();
}

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

var typed = new Typed('#typed', {
    strings: ['Full-Stack Developer | Software Engineer.', 'Desarrollador Full-Stack | Ingeniero en Informática.'],
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true,
    loopCount: Infinity,
    backDelay: 3000,
    typeSpeed: 100,
    backSpeed: 60,

});

var typedName = new Typed('#name-typed', {
    strings: ['Eng. Andres Guanipa.', 'Ing. Andres Guanipa.'],
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true,
    loopCount: Infinity,
    backDelay: 4000,
    typeSpeed: 210,
    backSpeed: 120,

});

var typedExp = new Typed('#experience-typed', {
    strings: ['Experience', 'Experiencia'],
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true,
    loopCount: Infinity,
    startDelay: 500,
    backDelay: 3000,
    typeSpeed: 100,
    backSpeed: 70,

});

var typedPer = new Typed('#skills-typed', {
    strings: ['Skills', 'Habilidades'],
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true,
    loopCount: Infinity,
    startDelay: 500,
    backDelay: 3000,
    typeSpeed: 100,
    backSpeed: 70,

});

var typedInt = new Typed('#interest-typed', {
    strings: ['Interest', 'Intereses'],
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    loop: true,
    loopCount: Infinity,
    startDelay: 500,
    backDelay: 3000,
    typeSpeed: 100,
    backSpeed: 70,

});


//////////////////////////////////////////////////////////////////////////////////////// Slide

$('.owl-carousel')
    .owlCarousel({
        loop: true,
        lazyLoad: true,
        autoplayHoverPause: true,
        smartSpeed: 750,
        nav: false,
        dots: false,          //false, si se quieren quitar los puntos en la parte de abajo
        autoplay: true,      //true, si se quiere que el slide pase automaticamente
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            }
        }
    })

window.addEventListener('load', function () {
    new Splide('#splideExperience', {
        type: 'loop',
        pauseOnFocus: false,
        perPage: 7,
        autoplay: true,
        interval: 3000,
        cover: true,
        lazyLoad: "sequential",
        height: 230,
        with: 250,
        breakpoints: {

            520: {
                height: 300,
            },

            580: {
                height: 390,
            },

            645: {
                perPage: 1,
                height: 440,
            },

            860: {
                perPage: 2,
                height: 340,
            },

            1000: {
                perPage: 3,
                height: 270,
            },

            1180: {
                perPage: 4
            },

            1470: {
                perPage: 5
            },

            1635: {
                perPage: 6
            },

        }

    }).mount();
});

//////////////////////////////////////////////////////////////////////////////////////// Card


const cards = document.querySelectorAll('.card');

function transition() {
    if (this.classList.contains('activo')) {
        this.classList.remove('activo')
    } else {
        this.classList.add('activo');
    }
}

cards.forEach(card => card.addEventListener('click', transition));

//////////////////////////////////////////////////////////////////////////////////////// 

function traducirClick(number) {
    let content = document.getElementById(`${number}`).innerHTML;
    let newContent = traducciones[number];

    document.getElementById(`${number}`).innerHTML = newContent;
    traducciones[number] = content;

    //Title
    let newTitle = document.getElementById(`${number}`).title;
    document.getElementById(`${number}`).title = traducciones[traducciones.length - 1];
    traducciones[traducciones.length - 1] = newTitle;
}

function traducirOver(number) {
    let content = document.getElementById(`${number}`).innerHTML;
    let newContent = traducciones[number];

    document.getElementById(`${number}`).innerHTML = newContent;
    traducciones[number] = content;

}


