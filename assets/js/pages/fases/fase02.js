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
  
function avançar2(){
    tela += 1
    painel.innerHTML = ""

    if(tela == 1){    
    painel.style.alignItems = "center"  
    painel.innerHTML =  
    `
    <div class="game-container">
        <h1>Criar Tecido Muscular Esquelético</h1>
        <p>O paciente está com <abbr title="Rabdomiólise é uma condição séria causada por lesão muscular direta. Isso resulta na morte das fibras musculares e liberação de seus conteúdos na corrente sanguínea. Pode levar a complicações sérias, como insuficiência renal." id="rabdomiolise">rabdomiólise</abbr>. <br>Crie um tecido muscular esquelético artificial para ajudá-lo.</p>
        <div class="dropzone" id="assembly-zone">Área de Montagem</div>
        <div class="components">
            <div class="component" draggable="true" id="cell1"><abbr title="Células precursoras dos miócitos, que por sua vez são células musculares maduras. Desempenham um papel fundamental no desenvolvimento e regeneração dos tecidos musculares. " id="fibra1">Mioblastos</abbr></div>
            <div class="component" draggable="true" id="cell2"><abbr title="Célula responsável pela produção de fibras de colágeno, elastina e outras substâncias da matriz extracelular." id="fibra1">Fibroblasto</abbr></div>
            <div class="component" draggable="true" id="cell3"><abbr title="Células progenitoras mononucleares encontradas em músculos maduros entre a lâmina basal e o sarcolema. Capazes de se diferenciar e se fundir para aumentar o número de fibras musculares existentes e formar novas fibras." id="fibra1">Célula Satélite</abbr></div>
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
        if (items.length === 3) {
            messageAssembly.textContent = 'Parabéns! Você criou um tecido muscular esquelético artificial de alta qualidade.';
            messageAssembly.style.color = 'green';
            setTimeout(() => {
                avançar2()
            }, 2000);
        } else {
            messageAssembly.textContent = 'Por favor, adicione todas as células necessárias para criar o tecido muscular.';
            messageAssembly.style.color = 'red';
        }
    }
    } else if(tela == 2){
        painel.innerHTML = 
        `
        <div class="game-container">
        <h1>Implantar Tecido no Músculo</h1>
        <p>Mova o tecido muscular esquelético criado para a área lesionada do paciente.</p>
        <div class="components">
            <div class="component" draggable="true" id="tissue">Tecido Muscular</div>
        </div>
        <div class="dropzone2" id="muscle-zone">
            <img src="" alt="" id="imgmuscle">
        </div>
        <button id="check-muscle">Verificar</button>
        <div id="message-muscle"></div>
    </div>
        `
        const tissue = document.getElementById('tissue');
    const muscleZone = document.getElementById('muscle-zone');
    const checkMuscleButton = document.getElementById('check-muscle');
    const messageMuscle = document.getElementById('message-muscle');

    tissue.addEventListener('dragstart', dragStart);
    muscleZone.addEventListener('dragover', dragOver);
    muscleZone.addEventListener('drop', dropInMuscle);

    checkMuscleButton.addEventListener('click', checkMuscle);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dropInMuscle(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        if (!muscleZone.contains(element)) {
            muscleZone.appendChild(element);
        }
    }

    function checkMuscle() {
        const items = muscleZone.querySelectorAll('.component');
        if (items.length === 1) {
            messageMuscle.textContent = 'Ótimo! Você implantou o tecido no músculo com sucesso.';
            messageMuscle.style.color = 'green';
        } else {
            messageMuscle.textContent = 'O tecido ainda não está completo. Crie o tecido primeiro antes de implantá-lo.';
            messageMuscle.style.color = 'red';
        }

        setTimeout(() => {
            localStorage.setItem('fase2Concluida', "true");
            location.href = '/pages/iniciar.html';
        }, 2000)
    }
    }
  }

    