const form = document.getElementById('form_dep');
const containerMensagemErro = document.querySelector('.mensagem_erro');
const containerMensagemErroNome = document.querySelector('.mensagem_erro2');
const nome = document.getElementById('campo_1');
let formValido = false;
function validaNome(nomecorreto){
    const nomeComoArray = nomecorreto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nota1 = document.getElementById('campo_2');
    const nota2 = document.getElementById('campo_3');
    const nota3 = document.getElementById('campo_4');
    const mensagemErroNome = `Precisa ter nome e sobrenome!`;
    const mensagemErro = `Não são permitidos números negativos!`;

    formValido = validaNome(nome.value);

    if(!formValido){
        containerMensagemErroNome.innerHTML = mensagemErroNome;
        containerMensagemErroNome.style.display = 'block';
    }else{
        containerMensagemErroNome.style.display = 'none';
        if(parseFloat(nota1.value) < 0 || parseFloat(nota2.value) < 0 || parseFloat(nota3.value) < 0){
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
        }else{
            containerMensagemErro.style.display = 'none';
            let res = parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value) / 3;
        }
    }
})
