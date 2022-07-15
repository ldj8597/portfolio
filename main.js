// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})

// Make Nav bar transparent & highligted on scroll
const navbar = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    // Make nav bar transparent or opaque
    const navbarHeight = navbar.getBoundingClientRect().height; 
    if (window.scrollY > navbarHeight) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-red-300');
        navbar.classList.remove('py-10');
        navbar.classList.add('py-3');
        hamburger.classList.remove('top-10');
        hamburger.classList.add('top-4');
    } else {
        navbar.classList.remove('bg-red-300');
        navbar.classList.add('bg-transparent');
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
        console.log(menu);
        if (window.scrollY > sectionTop && scrollY < sectionBottom) {
            menu.classList.add('nav-active')
        } else {
            menu.classList.remove('nav-active');
        }
    });
});


// Projects
const projectButtons = document.querySelectorAll('.projects-nav button');
const projects = document.querySelectorAll('.projects a');

projectButtons.forEach(button => {
    const category = button.dataset.category;
    button.addEventListener('click', event => {
        document.querySelector('.button-active').classList.remove('button-active');
        event.currentTarget.classList.add('button-active');
        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        })
    });
})
