const containerMensagemSucesso = document.querySelector('.mensagem_sucesso');
const containerMensagemErro = document.querySelector('.mensagem_erro');
const containerMensagemIgual = document.querySelector('.mensagem_igual');

const form = document.getElementById('form_dep');

form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();
    const numA = document.getElementById('campo_A');
    const numB = document.getElementById('campo_B');
    const mensagemSucesso = `O valor ${numB.value} é maior que o valor ${numA.value}.`;
    const mensagemErro = `O valor ${numB.value} não é maior que o valor ${numA.value}.`;
    const mensagemIgual = `O valor ${numB.value} e o valor ${numA.value} são iguais!!`
    if(parseInt(numA.value) < parseInt(numB.value)){
        // console.log('B é maior que A!')
        // console.log(numB.value)
        // alert("B é maior que A!!");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        containerMensagemIgual.style.display = 'none';
        numA.value = '';
        numB.value = '';
    }else if(parseInt(numA.value) > parseInt(numB.value)){
        // console.log('A é maior!')
        // console.log(numA.value)
        // alert('B não é maior que A!!');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
        containerMensagemIgual.style.display = 'none';
        numA.value = '';
        numB.value = '';
    }else{
        containerMensagemIgual.innerHTML = mensagemIgual;
        containerMensagemIgual.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        containerMensagemSucesso.style.display = 'none';
    }
})