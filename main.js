// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');

    nav.classList.toggle('hidden');
    nav.classList.toggle('bg-red-300');
})

// Make Nav bar transparent & highligted on scroll
// Make home section transparent on scroll
const navContainer = document.querySelector('.nav-container');
const navbar = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('nav ul li');
const home = document.querySelector('#home');

window.addEventListener('scroll', () => {
    // Make nav bar transparent or opaque
    const navbarHeight = navbar.getBoundingClientRect().height; 
    if (window.scrollY > navbarHeight) {
        navContainer.classList.remove('bg-transparent');
        navContainer.classList.add('bg-red-300');
        navbar.classList.remove('py-10');
        navbar.classList.add('py-3');
        hamburger.classList.remove('top-10');
        hamburger.classList.add('top-4');
    } else {
        navContainer.classList.remove('bg-red-300');
        navContainer.classList.add('bg-transparent');
        navbar.classList.remove('py-3');
        navbar.classList.add('py-10');
        hamburger.classList.remove('top-4');
        hamburger.classList.add('top-10');
    }

    // Highlight nav links on scroll
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const menu = document.querySelector(`nav ul li.${sectionId}`);
        if (window.scrollY > sectionTop && scrollY < sectionBottom) {
            menu.classList.add('nav-active')
        } else {
            menu.classList.remove('nav-active');
        }
    });

    // Make home section transparent on scroll
    if (window.scrollY > home.offsetTop && window.scrollY < (home.offsetTop + home.offsetHeight)) {
        document.querySelector('#home > div').style.opacity = 1 - window.scrollY / home.offsetHeight;
    }
});

// Arrow up button
const arrowup = document.querySelector('#arrow-up');

arrowup.addEventListener('click', () => {
    home.scrollIntoView();
})

window.addEventListener('scroll', () => {
    if (window.scrollY > home.offsetHeight / 2) {
        arrowup.classList.remove('opacity-0')
        arrowup.classList.add('opacity-100')
        arrowup.classList.remove('pointer-events-none')
        arrowup.classList.add('pointer-events-auto')
    } else {
        arrowup.classList.remove('opacity-100');
        arrowup.classList.add('opacity-0');
        arrowup.classList.remove('pointer-events-auto')
        arrowup.classList.add('pointer-events-none')
    }
});

// Projects
const projectContainer = document.querySelector('.projects');
const projectButtons = document.querySelectorAll('.projects-nav button');
const projects = document.querySelectorAll('.projects a');

projectButtons.forEach(button => {
    // const category = button.dataset.category;
    button.addEventListener('click', event => {
        const category = event.currentTarget.dataset.category;
        // fade out project container
        projectContainer.classList.add('animation-out');
        
        // activate clicked button
        document.querySelector('.button-active').classList.remove('button-active');
        event.currentTarget.classList.add('button-active');

        // filter projects & fade in project container
        setTimeout(() => {
            projects.forEach(project => {
                if (category === 'all' || project.classList.contains(category)) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            });
            projectContainer.classList.remove('animation-out');
        }, 300);
    });
})
