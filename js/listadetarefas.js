const novaTarefa = document.querySelector('[data-form-button]')
const inputTarefa = document.querySelector('[data-form-input]')

function criarBotaoDelete(){
    const botaoDelete = document.createElement('span')
    botaoDelete.innerText = "x" //acrescenta o x !
    botaoDelete.classList = "close" // na hora que o botão de delete for apertado, irá limpar a tarefa

    botaoDelete.addEventListener('click', deletarTarefa) // evento de click
    
    return botaoDelete //retorno da função
}

function deletarTarefa(evento){ //função da linha 9
    const botaoDeleteClicado = evento.target
    const itemDaLista = botaoDeleteClicado.parentElement
    itemDaLista.remove() //remove a tarefa da lista
}

function criarTarefa(evento){ // criar uma nova tarefa
    evento.preventDefault()

    const valorTarefa = inputTarefa.value
    const listaDeTarefas = document.querySelector('[data-task]')

    novaLabel = document.createElement('label')
    novaLabel.innerText = `- ${valorTarefa}`;
    novaLabel.className = "form-check-label"

    novoItem = document.createElement('li')
    novoItem.appendChild(novaLabel)
    novoItem.appendChild(criarBotaoDelete()) // Faz com que o item criado possa ser apagado
    
    listaDeTarefas.appendChild(novoItem) // nasce um novo item

    inputTarefa.value = ""

}


novaTarefa.addEventListener('click', criarTarefa)


