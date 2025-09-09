let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let senha = document.getElementById('senha')
let cpf = document.getElementById('cpf')

// Máscara do CPF
cpf.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  e.target.value = value;
});

// Máscara do Telefone
telefone.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d{4})(\d{4})$/, "$1-$2");
  e.target.value = value;
});

// Máscara do Nome
nome.addEventListener('input', function (e) {
    let value = e.target.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]/g, "");
    let nomes = value.split(' ');

    for (let i = 0; i < nomes.length; i++) {
        if(nomes[i].length > 0) {
            nomes[i] = nomes[i][0].toUpperCase() + nomes[i].substr(1).toLowerCase();
        }
    }
    
    e.target.value = nomes.join(' ');
})

// Visualizar a Senha
let botaoSenha = document.querySelector('.botao_senha');
botaoSenha.addEventListener('click', function() {
    if (senha.type === 'password') {
        senha.type = 'text';
        botaoSenha.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        senha.type = 'password';
        botaoSenha.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});