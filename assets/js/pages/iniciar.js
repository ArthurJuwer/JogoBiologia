// Recuperando variável
// Recupera o valor do localStorage para fase01Concluida
let fase01Concluida = localStorage.getItem('faseConcluida');

console.log(fase01Concluida); // Saída: "true" (ou qualquer outro valor que tenha sido armazenado)

// Verifica se fase01Concluida é igual a "true" (como string)
if(fase01Concluida === "true"){
    // Se for verdadeiro, libera a fase 2
    let liberarFase2 = document.querySelector(".fase2");
    liberarFase2.classList.remove("locked");
    liberarFase2.innerHTML = `<a href="/pages/fases/fase01.html">
    <span class="fase-title">Fase 1</span></a>`
} 

