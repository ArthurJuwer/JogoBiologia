document.addEventListener("DOMContentLoaded", function () {
  initializeTypeWriter();
});

let tela = 0;
let acertos = 0;

function initializeTypeWriter() {
  const textoElement = document.getElementById('texto');
  const texto = textoElement.textContent;
  textoElement.textContent = '';
  let i = 0;

  function typeWriter() {
      if (i < texto.length) {
          textoElement.textContent += texto.charAt(i);
          i++;
          setTimeout(typeWriter, 30);
      }
  }

  typeWriter();
}

function mudarContainer() {
  const painel = document.querySelector(".painel");
  tela += 1;

  if (tela === 1) {
      carregarTela1(painel);
  } else if (tela === 2) {
      verCerta();
      carregarTela2(painel);
  } else if (tela === 3) {
      verCerta();
      carregarTela3(painel);
  } else if (tela === 4) {
      verCerta();
      finalizarFase();
  }
}

function carregarTela1(painel) {
  painel.style.alignItems = "initial";
  painel.style.rowGap = "0px";

  painel.innerHTML = `
      <div class="painel-qst">
          <h1>Responda as Perguntas</h1>
          <section class="container">
              <div class="box-header">
                  <div class="box-textos">
                      <h4>Como o controle involuntário dos músculos lisos pode ser afetado em pacientes com disfunções autonômicas?</h4> 
                  </div>
              </div>
              <div class="box-resposta">
                  <input type="button" value="As disfunções autonômicas não afetam os músculos lisos.">
                  <input type="button" class="certa" value="Pode resultar em problemas como gastroparesia e hipotensão ortostática.">
                  <input type="button" value="Pacientes geralmente apresentam melhorias na função dos músculos lisos.">
                  <button onclick="mudarContainer()">ENVIAR</button>
                  <h1>ACERTOS: ${acertos}</h1>
              </div>
          </section>
      </div>
  `;

  selectBoxes();
}

function carregarTela2(painel) {
  painel.innerHTML = `
      <div class="painel-qst">
          <h1>Responda as Perguntas</h1>
          <section class="container">
              <div class="box-header">
                  <div class="box-textos">
                      <h4>Quais são os principais sinais e sintomas que indicam uma possível distrofia muscular em pacientes?</h4> 
                  </div>
              </div>
              <div class="box-resposta">
                  <input type="button" class="certa" value="Fraqueza muscular progressiva e quedas frequentes.">
                  <input type="button" value="Aumento rápido da massa muscular e resistência.">
                  <input type="button" value="Movimentos musculares involuntários e espasmos intensos.">
                  <button onclick="mudarContainer()">ENVIAR</button>
                  <h1>ACERTOS: ${acertos}</h1>
              </div>
          </section>
      </div>
  `;

  selectBoxes();
}

function carregarTela3(painel) {
  painel.innerHTML = `
      <div class="painel-qst">
          <h1>Responda as Perguntas</h1>
          <section class="container">
              <div class="box-header">
                  <div class="box-textos">
                      <h4>Qual é a abordagem de tratamento mais eficaz para lesões musculares graves em atletas?</h4> 
                  </div>
              </div>
              <div class="box-resposta">
                  <input type="button" value="Exercícios intensivos imediatos e suplementos proteicos.">
                  <input type="button" value="Apenas repouso absoluto sem intervenção adicional.">
                  <input type="button" class="certa" value="Repouso, gelo, compressão, elevação e fisioterapia.">
                  <button onclick="mudarContainer()">ENVIAR</button>
                  <h1>ACERTOS: ${acertos}</h1>
              </div>
          </section>
      </div>
  `;

  selectBoxes();
}

function finalizarFase() {
  if (acertos === 3) {
      localStorage.setItem('acertos3', "true");
  }
  localStorage.setItem('fase3Concluida', "true");
  location.href = '/JogoBiologia/pages/iniciar.html';
}

function selectBoxes() {
  const boxesResposta = document.querySelectorAll(".box-resposta input");

  boxesResposta.forEach(escolha => {
      escolha.addEventListener("click", () => {
          boxesResposta.forEach(escolha2 => {
              escolha2.style.background = 'transparent';
              escolha2.style.color = 'black';
          });
          escolha.style.background = '#4CAF50';
          escolha.style.color = 'white';
      });
  });
}

function verCerta() {
  const boxes = document.querySelectorAll(".box-resposta input");

  boxes.forEach(tes => {
      if (tes.style.background === 'rgb(76, 175, 80)' && tes.classList.contains("certa")) {
          acertos++;
      }
  });
}
