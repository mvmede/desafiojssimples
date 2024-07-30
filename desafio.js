function obterNome() {
    let nome = prompt("Digite seu nome:");
    return nome;
}

function obterIdade() {
    let idade = parseInt(prompt("Digite sua idade:"));
    return idade;
}

function gerarSaudacao(nome, idade) {
    let saudacao = `Olá, ${nome}!`;
    return saudacao;
}

function mostrarSaudacao() {
    let nome = obterNome();
    let idade = obterIdade();
    let saudacao = gerarSaudacao(nome, idade);

    console.log(saudacao);
    console.log(`Sua idade atual é: ${idade}`);
}

mostrarSaudacao();