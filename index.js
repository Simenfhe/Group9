const section = document.querySelector('#s_mario');

const options = {
    threshold:.5
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        let sCheck = console.log(entry.isIntersecting)
        if(entry.isIntersecting){
            console.log("if")
            section.style.animationDelay ="2s"
            section.style.animationIterationCount = "1"
        }
        else{
            console.log("else")
        }
})
} ,options);

observer.observe(section)

function resetAnimationSimen(){
    window.location.reload()
}

