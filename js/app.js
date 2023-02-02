document.addEventListener("DOMContentLoaded", function () {
    iniciarApp();
});

function iniciarApp() {
    botonResponsivo();
    scrollNav();
    galeriaCarousel();
    carousel();
    evolucion();
}

function botonResponsivo() {
    const botones = document.querySelectorAll('.contenedor__boton'),
        links = document.querySelectorAll('.navegacion__contenedor a'),
        navegacion = document.querySelector('.navegacion'); 
    
    botones.forEach(entry => entry.addEventListener('click', () => navegacion.classList.toggle('d-none')));
    if (innerWidth < 992) {
        links.forEach(entry => entry.addEventListener('click', () => navegacion.classList.add('d-none')));
        navegacion.classList.add('d-none')
    }else{
        navegacion.classList.remove('d-none')
    }
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion__contenedor a')
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){

            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value
            const seccion = document.querySelector(seccionScroll)
                seccion.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
        })
    })
}

function galeriaCarousel() {

    const nombres = ['Mark Zuckerberg', 'Elon Musk', 'Jeff Bezos', 'Sundar Pichai','Tim Cook', 'Susan Wojcicki', 'Satya Nadella']

    for (let i = 0; i < 6; i++) {
        const contenedor = document.querySelector('.carousel__lista');

        const div = document.createElement('DIV');
        div.classList.add('carousel__elemento');

        const img = document.createElement('IMG');
        img.setAttribute('src', `img/influencers/influencer${i+1}.jpg`)

        const p = document.createElement('P');
        let nombre = nombres[i];
        p.append(nombre);

        div.appendChild(img)
        div.appendChild(p)

        contenedor.appendChild(div)

    }
}

function carousel() {
   new Glider(document.querySelector('.carousel__lista'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    dots: '.carousel__indicadores',
    arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
    },
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
   });
   
}

import { evo } from "./evolucion.js";
 function evolucion() {
    const contenedor = document.querySelector('.about__contenedor');


    evo.forEach( entry => {
        contenedor.innerHTML += `
            <div class="about__target">
                <h3>${entry.titulo}</h3>
                <img src="${entry.imagen}">
                <p>${entry.texto}</p>
            </div>
        `;

    });

    

}