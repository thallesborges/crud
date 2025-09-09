let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let senha = document.getElementById('senha')

function verificarEntradas() {
    console.log(nome.value)
    console.log(email.value)
    console.log(telefone.value)
    console.log(senha.value)
}


// Máscara do CPF
document.getElementById('cpf').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  e.target.value = value;
});

// Máscara do Telefone
document.getElementById('telefone').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d{4})(\d{4})$/, "$1-$2");
  e.target.value = value;
});

// Máscara do Nome
document.getElementById('nome').addEventListener('input', function (e) {
    let value = e.target.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]/g, "");
    e.target.value = value;
})