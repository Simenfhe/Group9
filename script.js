console.log("kukost på player2")
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
let mouse = false
let j = 0
async function snurr(e){
    mouse = true
        for (let i = j; i < 360; i+=5) {
            await delay(50)
            e.style.background = `linear-gradient(${i}deg, var(--color-accents) 70%, blue 85%)`
            if (i == 355) {
                i = 0
            }
            if(!mouse){
                j = i
                e.style.background = `var(--color-accents)`
                break
            }        
    }    
}

function ikkesnurr(e){
    mouse = false 
}

function drop(e){
    const nav = document.querySelector("nav")
    const el = document.querySelector(".navelems")
    const btn = e.children[0]
    const close = document.querySelector(".close")

    e.style.display = "none"
    btn.style.display = "none"

    close.style.display = "block"
    el.style.display = "block"
    nav.classList.toggle("dropnav")
}

function closedrop(e){
    console.log("funkda")
    const nav = document.querySelector("nav")
    const el = document.querySelector(".navelems")
    const btn = document.querySelector(".dropdownwrapper")
    const close = document.querySelector(".close")

    btn.style.display = "block"
    btn.children[0].style.display = "block"

    close.style.display = "none"
    el.style.display = "none"
    nav.classList.toggle("dropnav")
}