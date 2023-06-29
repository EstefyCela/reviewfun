$(
    function(){
        let guardadas=localStorage.getItem("reseñas");
        if(guardadas != null){
            $("section").html(guardadas);
        } 
    }
)

$("#nueva").on("click", function(){
    $("aside").css("display", "block");
    $("#nueva").css("display","none");
})

$("#cerrar").on("click", function(){
    $("aside").css("display", "none");
    $("form")[0].reset();
    $("#nueva").css("display","block");
})

$("form").on("submit", function(){
    let titulo = $("#titulo").val()
    let contenido = $("#contenido").val()
    
    let div = $("<div></div>");
    div.addClass("reseña")
    .html(`<header>
    <h2>${titulo}</h2>
    <a href="" class="eliminar">X</a>
    </header>
    <p>${contenido}</p>
    `)

$("section").prepend(div);
$("form")[0].reset();
$("aside").css("display","none");
$("#nueva").css("display","block");

guardarReseñas()
return false;
})

function guardarReseñas(){
    let actuales = $("section").html();
    localStorage.setItem("reseñas", actuales);
}

$("section").on("click",".reseña .eliminar", function(){
    let positivo = confirm("¿Querés eliminar la reseña?")
    if(positivo){
       $(this).parent().parent().remove();
       guardarReseñas();
    }
    
    return false;
})

$("footer").on("click","#nombre", function(){
    let alerta = alert("Hola! Somos Virginia y Estefania Cela. Que disfrutes la app!")
})

setTimeout(() => {
    $('.logo').addClass('ocultar');
    $('.contenido').removeClass('ocultar');
}, "3000") 








