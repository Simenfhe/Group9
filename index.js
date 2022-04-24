const nPadContainer = document.querySelector(".n-pad-container");
const nKnobContainer = document.querySelector(".n-s2-knob-container");
const nPadUpperChildren = document.querySelector(".n-pad-upper").children;
const nPadLowerChildren = document.querySelector(".n-pad-lower").children;
let timeBeforeAction = 0;

const nObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log("N: Pad colors change..")
            for (let i = 0; i < 4; i++) { 
                let LowerTo = 4 + i;

                let waitAmount = 750;
                timeBeforeAction += waitAmount;
                let that = 2000 + waitAmount;
                let timeBeforeAction2 = timeBeforeAction + that;

                setTimeout(function(){
                    nPadUpperChildren.item(i).classList.toggle("n-pad-"+i+"-lit");
                }, timeBeforeAction);
                setTimeout(function(){
                    nPadLowerChildren.item(i).classList.toggle("n-pad-"+LowerTo+"-lit");
                },timeBeforeAction2);

            }
            nKnobContainer.classList.add("n-s2-knob-container-anim");
            nPadContainer.classList.add("n-pad-container-anim");
        }   
    });
});

nObserver.observe(nPadContainer);

const section = document.querySelector('#s_mario');

const options = {
    threshold:.5
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry.target)
        let sCheck = console.log(entry.isIntersecting)
        if(entry.isIntersecting){
            document.classlist.add("s_animjs")
            section.log("funker")
        }
})
} ,options);

observer.observe(section)

function resetAnimationSimen(){
    window.location.reload()
}

