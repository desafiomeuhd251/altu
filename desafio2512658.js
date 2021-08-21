function TestaChave(){
    var inSenha = document.getElementById("inChave");
    var senha = inSenha.value;
    // HUMM Espertinho , venho olhar diretamente no código, ganhará muito tempo com isso ! 
    if (senha=="23/06/1912"){
        window.location.replace('nivel0012512658.html');
    } else{
        alert ("Chave incorreta !");
    }

}

