document.addEventListener("DOMContentLoaded", function() {
    verificarProgresso();
});

function verificarProgresso() {
    let fase01Concluida = localStorage.getItem('fase1Concluida');
    let fase02Concluida = localStorage.getItem('fase2Concluida');
    let fase03Concluida = localStorage.getItem('fase3Concluida');
    let acertos3 = localStorage.getItem('acertos3');

    if (fase01Concluida === "true") {
        liberarFase(2);
        atualizarMissao(1);
    }

    if (fase02Concluida === "true") {
        liberarFase(3);
        atualizarMissao(2);
    }

    if (fase03Concluida === "true") {
        atualizarMissao(3);
    }

    if (acertos3 === "true") {
        atualizarMissao(4);
    }
}

function liberarFase(fase) {
    const faseElement = document.querySelector(`.fase${fase}`);
    const faseLink = document.querySelector(`.fase${fase}A`);
    faseLink.href = `/JogoBiologia/pages/fases/fase0${fase}.html`;
    faseElement.classList.remove("locked");
    faseElement.innerHTML = `
        <a href="/JogoBiologia/pages/fases/fase0${fase}.html">
            <span class="fase-title">Fase ${fase}</span>
        </a>
    `;
}

function atualizarMissao(missao) {
    const missaoElement = document.querySelector(`.missao${missao}`);
    missaoElement.innerHTML = `<p style="font-size: 30px">✔</p>`;
}
