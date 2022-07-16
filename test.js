const boxes = document.querySelectorAll('.box');

const option = {
    root: null, //viewport
    rootMargin: '0px',
    threshold: 1,
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        const id = `#link${entry.target.textContent}`;
        const link = document.querySelector(id);
        if(entry.isIntersecting) {
            link.classList.add('border')
            link.classList.add('border-black')
            entry.target.classList.remove('bg-purple-400')
            entry.target.classList.add('bg-purple-600')
        } else {
            link.classList.remove('border')
            link.classList.remove('border-black')
            entry.target.classList.remove('bg-purple-600')
            entry.target.classList.add('bg-purple-400')
        }
    })
};

const observer = new IntersectionObserver(callback, option);

boxes.forEach(box => {
    observer.observe(box);
});