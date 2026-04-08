console.log("SIM")

// CALLBACK
function finalizar() {
    console.log("Acabei");
}


// FUNÇÃO PRINCIPAL
function processar(callback) {
    console.log("Iniciando o processamento das informações...");
    callback()
}

// EXECUTO A FUNÇÃO PRINCIPAL
processar(finalizar)


// CALLBACK COM FUNÇÃO ANÔNIMA
function executarTarefa(callback) {
    console.log("Executando a função...");
    // executa a função com delay
    setTimeout(callback, 3000)
}

executarTarefa( () => {
    console.log("Acabou a tarefa!");
} )

// CALLBACK COM CONDIÇÃO SIMPLES
function verificarNota(nota, callback) {
    if (nota >= 7) {
        callback("Aprovado");
    } else {
        callback("Reprovado");
    }
}

function aprovado(resposta){
    console.log("Parabéns, você foi aprovado!");
}

verificarNota(8, aprovado)

// verificação com dois callbacks

// se deu certo
function loginCorreto() {
    console.log("Login realizado com sucesso!");
}

// se deu errado
function loginIncorreto() {
    console.log("Login falhou. Tente novamente.");
}

function validarSenha(senha, sucesso, erro) {
    if (senha === "123456") {
        sucesso();
    } else {
        erro();
    }
}

validarSenha("123456", loginCorreto, loginIncorreto)
validarSenha("senhaErrada", loginCorreto, loginIncorreto)