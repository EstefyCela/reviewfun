let agregar = $('#agregar');
let proximapelicula = $('#proximapelicula'); 

let lista = $('#lista'); 

let guardada = localStorage.getItem('lista');
if(guardada){
    lista.html(guardada)
}

agregar.on('submit', function(evento){
    evento.preventDefault();

 
    if(proximapelicula.val().length < 1) return;
 


    lista.html(lista.html() + 
    '<li><strong>' + proximapelicula.val() + 
    '</strong>' + 
    ' <a href="" class="borrar">X</a></li>'
    );

  
    localStorage.setItem('lista', lista.html());

    proximapelicula.val("");
  
})

$('.borrar').on('click', function() {
    $(this).parent().remove();
    localStorage.setItem('lista', lista.html());
})

$("footer").on("click","#nombre", function(){
    let alerta = alert("Hola! Somos Virginia y Estefania Cela. Que disfrutes la app!")
})

