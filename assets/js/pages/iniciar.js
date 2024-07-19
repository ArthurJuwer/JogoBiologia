
let fase01Concluida = localStorage.getItem('fase1Concluida');
let fase02Concluida = localStorage.getItem('fase2Concluida');
let fase03Concluida = localStorage.getItem('fase3Concluida');

let acertos3 = localStorage.getItem('acertos3')

if(fase01Concluida === "true"){

    let liberarFase2 = document.querySelector(".fase2");
    let liberarFase2Link = document.querySelector(".fase2A");
    let missao1 = document.querySelector(".missao1")

    missao1.innerHTML = `<p style="font-size: 30px">✔</p>`


    liberarFase2Link.href="../pages/fases/fase02.html"
    liberarFase2.classList.remove("locked");
    liberarFase2.innerHTML = `<span class="fase-title">Fase 2</span>`
} 
if(fase02Concluida === "true"){

    let liberarFase3Link = document.querySelector(".fase3A");
    liberarFase3Link.href="pages/fases/fase03.html"

    let missao2 = document.querySelector(".missao2")
    missao2.innerHTML = `<p style="font-size: 30px">✔</p>`

    

    let liberarFase3 = document.querySelector(".fase3");
    liberarFase3.classList.remove("locked");
    liberarFase3.innerHTML = `<a href="../pages/fases/fase03.html">
    <span class="fase-title">Fase 3</span></a>`
} 
if(fase03Concluida === "true"){
    let missao3 = document.querySelector(".missao3")
    missao3.innerHTML = `<p style="font-size: 30px">✔</p>`
}
if(acertos3 === "true"){
    let missao4 = document.querySelector(".missao4")
    missao4.innerHTML = `<p style="font-size: 30px">✔</p>`
}


