const btnMenu = document.getElementById("btnMenu");
const divExpandido = document.getElementById("expandido");
var aberto = false;
btnMenu.addEventListener("click", alterarMenu);
function alterarMenu() {
    if(aberto == false){
        aberto = true;
        divExpandido.classList.add("ativo");
    }
    else{
        aberto = false;
        divExpandido.classList.remove("ativo");
    }
}