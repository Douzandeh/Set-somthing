var x = 1;

let doSomthing = () => console.log(x++);


setInterval(
    doSomthing, 1000
)


// setTimeout(
//     () => alert("Welcome to my site!"), 3000
//     () => console.log("Welcome to my site"), 3000
// )