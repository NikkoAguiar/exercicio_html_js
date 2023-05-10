const form = document.getElementById('form_dep');

form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();
    const numA = document.getElementById('campo_A');
    const numB = document.getElementById('campo_B');
    if(parseInt(numA.value) < parseInt(numB.value)){
        // console.log('B é maior que A!')
        console.log(numB.value)
        alert("B é maior que A!!");
        numA.value = '';
        numB.value = '';
    }else{
        // console.log('A é maior!')
        console.log(numA.value)
        alert('B não é maior que A!!');
        numA.value = '';
        numB.value = '';
    }
})