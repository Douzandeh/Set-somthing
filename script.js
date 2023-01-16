var x = 1;

let doSomthing = () => {
    let set =document.querySelector("#set")
    set.textContent = `My counter: ${x++} Secends`
}

let stopDoingSomThing =() => clearInterval(myInterval)
let myInterval = setInterval(
    doSomthing, 1000
)

setTimeout(
    stopDoingSomThing, 11000
)


// setTimeout(
//     () => alert("Welcome to my site!"), 3000
//     () => console.log("Welcome to my site"), 3000
// )