const botaoReset = document.querySelector(".reset");
botaoReset.addEventListener("click", () => {
    if (confirm("Tem certeza de que deseja resetar o progresso? Isso limpará todos os dados salvos.")) {
        localStorage.clear();
        alert("Progresso resetado com sucesso.");
        location.reload();
    }
});