let checkBox = document.querySelector('#botao');
let mensal = document.querySelectorAll('.preco-mensal');
let anual = document.querySelectorAll('.preco-anual');

checkBox.addEventListener('change', function(){
    
    if (checkBox.checked){
        anual.forEach(preco => preco.style.display = "none");
        mensal.forEach(preco => preco.style.display = "flex");
    }
    else {
        anual.forEach(preco => preco.style.display = "flex");
        mensal.forEach(preco => preco.style.display = "none");
    }
})
