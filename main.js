
// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu')
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})

//Projects
const navs = document.querySelectorAll('.projects-nav button');
const projects = document.querySelectorAll('.projects a');

navs.forEach(button => {
    const category = button.dataset.category;
    console.log(category);
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