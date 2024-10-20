// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showCarouselItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function nextCarouselItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showCarouselItem(currentIndex);
}

setInterval(nextCarouselItem, 5000); // Change image every 5 seconds

// Language switch functionality
const languageSwitch = document.getElementById('language-switch');
const elementsToTranslate = {
    en: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        welcome: 'Welcome to EN Company',
        experience: 'We offer jobs, accommodation, and transportation for our workers.',
        learnMore: 'Learn More',
        ourServices: 'Our Services',
        privateCharter: 'Welding Specialist',
        privateCharterDesc: 'Forge your future with us!',
        groupCharter: 'Cargo Handler',
        groupCharterDesc: 'Move the world with your skills!',
        aircraftOwnership: 'Forklift Operator',
        aircraftOwnershipDesc: 'Lift your career to new heights!',
        masonry: 'Masonry',
        masonryDesc: 'Build a lasting legacy with us!',
        aboutUs: 'About Us',
        aboutUsDesc: 'Connecting You to Opportunities: Jobs, Housing, and Commutes to Work!',
        contactUs: 'Contact Us',
        name: 'Name:',
        email: 'Email:',
        message: 'Message:',
        send: 'Send',
        phone: 'Phone:',
        emailContact: 'Email:'
    },
    es: {
        home: 'Inicio',
        services: 'Servicios',
        about: 'Acerca de',
        contact: 'Contacto',
        welcome: 'Bienvenido a EN Company',
        experience: 'Ofrecemos trabajos, alojamiento y transporte para nuestros trabajadores.',
        learnMore: 'Aprende más',
        ourServices: 'Nuestros Servicios',
        privateCharter: 'Especialista en Soldadura',
        privateCharterDesc: '¡Forja tu futuro con nosotros!',
        groupCharter: 'Manipulador de Carga',
        groupCharterDesc: '¡Mueve el mundo con tus habilidades!',
        aircraftOwnership: 'Operador de Montacargas',
        aircraftOwnershipDesc: '¡Eleva tu carrera a nuevas alturas!',
        masonry: 'Albañilería',
        masonryDesc: '¡Construye un legado duradero con nosotros!',
        aboutUs: 'Sobre Nosotros',
        aboutUsDesc: '¡Conectándote con Oportunidades: Trabajo, Vivienda y Transporte al Trabajo!',
        contactUs: 'Contáctenos',
        name: 'Nombre:',
        email: 'Correo Electrónico:',
        message: 'Mensaje:',
        send: 'Enviar',
        phone: 'Teléfono:',
        emailContact: 'Correo Electrónico:'
    }
};

languageSwitch.addEventListener('click', () => {
    const currentLang = languageSwitch.textContent === 'ES' ? 'en' : 'es';
    languageSwitch.textContent = currentLang === 'en' ? 'ES' : 'EN';

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = elementsToTranslate[currentLang][key];
    });
});
