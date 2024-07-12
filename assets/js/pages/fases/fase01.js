const painel = document.querySelector(".painel")
let tela = 0

document.addEventListener("DOMContentLoaded", function () {
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
});
  
  function avançar(){
    tela += 1
    painel.innerHTML = ""

    if(tela == 1){      
    painel.innerHTML =  `
    <div class="game-container">
        <h1>Criar Tecido Muscular Cardíaco</h1>
        <p>O paciente está com <abbr title="A miocardiopatia dilatada é um conjunto de alterações no músculo cardíaco na qual os ventrículos (as duas câmaras inferiores do coração) aumentam de tamanho (dilatam), mas não são capazes de bombear sangue suficiente para satisfazer as necessidades do corpo, resultando em insuficiência cardíaca." id="miocardiopatia">miocardiopatia dilatada</abbr>. <br>Crie um tecido muscular cardíaco artificial para ajudá-lo.</p>
        <div class="dropzone" id="assembly-zone">Área de Montagem</div>
        <div class="components">
            <div class="component" draggable="true" id="cell1"><abbr title="Fibra Muscular Cardíaca" id="fibra1">Cardiomiócito</abbr> </div>
            <div class="component" draggable="true" id="cell2"><abbr title="Célula responsável pela produção de fibras de colágeno, elastina e outras substâncias da matriz extracelular." id="fibra1">Fibroblasto</abbr></div>
            <div class="component" draggable="true" id="cell3"><abbr title="Célula achatada de espessura variável que recobre o interior dos vasos sanguíneos" id="fibra1">Célula Endotelial</abbr></div>
            <div class="component" draggable="true" id="cell4"><abbr title="Malha complexa que preenche o espaço entre as células em todos os tecidos vivos." id="fibra1">Matriz Extracelular</abbr></div>
        </div>
        <button id="check-assembly">Verificar</button>
        <div id="message-assembly"></div>
    </div>
    
    `
    const components = document.querySelectorAll('.component');
    const assemblyZone = document.getElementById('assembly-zone');
    const checkAssemblyButton = document.getElementById('check-assembly');
    const messageAssembly = document.getElementById('message-assembly');

    components.forEach(component => {
        component.addEventListener('dragstart', dragStart);
    });

    assemblyZone.addEventListener('dragover', dragOver);
    assemblyZone.addEventListener('drop', dropInAssembly);

    checkAssemblyButton.addEventListener('click', checkAssembly);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dropInAssembly(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        if (!assemblyZone.contains(element)) {
            assemblyZone.appendChild(element);
        }
    }

    function checkAssembly() {
        const items = assemblyZone.querySelectorAll('.component');
        if (items.length === 4) {
            messageAssembly.textContent = 'Parabéns! Você criou um tecido muscular cardíaco artificial de alta qualidade.';
            messageAssembly.style.color = 'green';
            setTimeout(() => {
                avançar()
            }, 2000);
        } else {
            messageAssembly.textContent = 'Por favor, adicione todas as células necessárias para criar o tecido muscular.';
            messageAssembly.style.color = 'red';
        }
    }

    } else if(tela == 2){
        painel.innerHTML = `
        <div class="game-container">
        <h1>Implantar Tecido no Coração</h1>
        <p>Mova o tecido muscular cardíaco criado para o coração do paciente.</p>
        <div class="components">
            <div class="component" draggable="true" id="tissue">Miocárdio</div>
        </div>
        <div class="dropzone2" id="heart-zone">
            <img src="/assets/images/heart.png" alt="" id="imgheart">
        </div>
        <button id="check-heart">Verificar</button>
        <div id="message-heart"></div>
    </div>
    `
    
    const tissue = document.getElementById('tissue');
    const heartZone = document.getElementById('heart-zone');
    const checkHeartButton = document.getElementById('check-heart');
    const messageHeart = document.getElementById('message-heart');

    tissue.addEventListener('dragstart', dragStart);
    heartZone.addEventListener('dragover', dragOver);
    heartZone.addEventListener('drop', dropInHeart);

    checkHeartButton.addEventListener('click', checkHeart);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dropInHeart(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        if (!heartZone.contains(element)) {
            heartZone.appendChild(element);
        }
    }

    function checkHeart() {
        const items = heartZone.querySelectorAll('.component');
        if (items.length === 1) {
            messageHeart.textContent = 'Ótimo! Você implantou o tecido no coração com sucesso.';
            messageHeart.style.color = 'green';

            setTimeout(() => {
                localStorage.setItem('faseConcluida', "true");
                location.href = '/pages/iniciar.html';
            }, 2000)
        } else {
            messageHeart.textContent = 'O tecido ainda não está completo. Crie o tecido primeiro antes de implantá-lo.';
            messageHeart.style.color = 'red';
        }
        
        
    }

    }
  }


;

