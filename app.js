// Função para obter a hora atual formatada
function obterHoraAtual() {
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    return `${hora}:${minutos}`;
}

// Função para adicionar uma nova tarefa
function adicionarTarefa(evento) {
    evento.preventDefault();

    const inputTarefa = document.getElementById('input-tarefa');
    const tarefa = inputTarefa.value.trim();

    if (tarefa !== '') {
        const novaTarefa = {
            id: Date.now(),
            nome: tarefa,
            concluida: false
        };

        // Adicionar a tarefa à lista
        // Vamos implementar esta parte posteriormente
        inputTarefa.value = ''; // Limpar o campo de entrada após adicionar a tarefa
    } else {
        alert('Por favor, digite uma tarefa válida.');
    }
}

// Função para renderizar a lista de tarefas
function renderizarTarefas() {
    const listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerHTML = ''; // Limpar a lista antes de renderizar novamente

    // Vamos implementar esta parte posteriormente
}

// Adicionar evento de submissão do formulário
const formTarefa = document.getElementById('form-tarefa');
formTarefa.addEventListener('submit', adicionarTarefa);

// Iniciar a renderização da lista de tarefas
renderizarTarefas();

// Atualizar a hora a cada minuto
setInterval(() => {
    const horaAtual = obterHoraAtual();
    document.title = `Lista de Tarefas - ${horaAtual}`;
}, 60000); // 60000 milissegundos = 1 minuto
