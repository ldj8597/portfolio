// Mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})

//Projects
const navs = document.querySelectorAll('.projects-nav button');
const projects = document.querySelectorAll('.projects a');

navs.forEach(button => {
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

//Highlight nav on scroll
const sections = document.querySelectorAll('section');
const navMenus = document.querySelectorAll('nav ul li');
console.log(navMenus);
console.log(sections);
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const menu = document.querySelector(`nav ul li.${sectionId}`);
        console.log(menu);
        if (scrollY > sectionTop && scrollY < sectionBottom) {
            menu.classList.add('nav-active')
        } else {
            menu.classList.remove('nav-active');
        }
    });
});