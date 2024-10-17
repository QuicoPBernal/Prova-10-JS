const novaTarefaInput = document.getElementById("novaTarefa");
const adicionarTarefaButton = document.getElementById("adicionarTarefa");
const listaTarefas = document.getElementById("listaTarefas");

adicionarTarefaButton.addEventListener("click", () => {
    const novaTarefa = novaTarefaInput.value.trim();

    if (novaTarefa !== "") {
        const novoItem = document.createElement("li");
        novoItem.innerHTML = `
            <input type="checkbox">
            <span>${novaTarefa}</span>
            <button class="excluir">Excluir</button>
        `;

        const checkbox = novoItem.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", () => {
            const tarefaSpan = novoItem.querySelector("span");
            if (checkbox.checked) {
                tarefaSpan.classList.add("tarefaConcluida");
            } else {
                tarefaSpan.classList.remove("tarefaConcluida");
            }
        });

        const botaoExcluir = novoItem.querySelector(".excluir");
        botaoExcluir.addEventListener("click", () => {
            listaTarefas.removeChild(novoItem);
        });

        listaTarefas.appendChild(novoItem);
        novaTarefaInput.value = "";
    }
});
