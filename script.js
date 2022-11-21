function validaFormulario(evt){
    var Nome = document.getElementById('Nome');
    var Email = document.getElementById('E-mail');
    
}

// Campo nome

function CampoNome(){
document.querySelector('.msg-nome');
if(nome.value == ""){
    CampoNome.innerHTML = "Preencha o Nome";
    CampoNome.style.display = "Bloqueado";
    contErro +=1;
}else{
    CampoNome.style.display='none'
}
}

//Campo Email

/* Validação do campo email */
function campoEmail(){

document.querySelector('.msg-email');
if(email.value == ""){
    campoEmail.innerHTML = "Preencha o Email";
}
}