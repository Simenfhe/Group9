let options = {
    root: document.querySelectior('#scrollArea'), //mulig null
    rootMargin: '0px',
    threshold: 1.0
}

function simenAnimation(){

}

let observer = new IntersectionObserver(simenAnimation, options)

let target = document.querySelector('mario');
observer.observe(target);

