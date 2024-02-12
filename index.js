const caixa = document.getElementById("caixa")
const btn = document.getElementById("btn")


btn.addEventListener("click", ()=> {
    if( caixa.style.background == "red"){
        caixa.style.background = "black"
    } else{
        caixa.style.background = "#eee2"
    }
})