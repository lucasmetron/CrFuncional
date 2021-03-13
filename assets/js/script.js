function cadastrado(){

    let telaCont = document.getElementById("tela");
    alert("Dados Salvos!")
    document.location.reload(true)

}

$(document).ready(function(){
    $(".hamburguer").click(function(){
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    })
});