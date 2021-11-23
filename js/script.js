const btnNavEl = document.querySelector('.btn-mobie-nav');
const headerEl = document.querySelector('header');

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
})


const alllinks = document.querySelectorAll('a:link');
alllinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        let href = link.getAttribute('href');
        e.preventDefault();

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            // sectionEl = document.querySelector('#id');
            sectionEl.scrollIntoView({ behavior: 'smooth' });
        }

        if (link.classList.contains('main-nav-link')) {
            headerEl.classList.remove('nav-open');
        }
    })
})

const heroEl = document.querySelector('.section-hero');
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-80px"
}
const obs = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) {
        headerEl.classList.add('sticky');
    }

    if (entries[0].isIntersecting) {
        headerEl.classList.remove('sticky');
    }
}, options)

obs.observe(heroEl);



// Get HeroEl 
// Check intersecting; => if === false => set sticky to header