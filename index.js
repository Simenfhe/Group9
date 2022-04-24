const section = document.querySelector('#s_mario');
const section2 = document.querySelector('#s_fogwrap');

const options = {
    threshold:.5
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry.target)
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
observer.observe(section2)

function resetAnimationSimen(){
    window.location.reload()
}

