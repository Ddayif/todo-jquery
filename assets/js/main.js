$(document).ready(function(){
	$("#button").click(function(e){
		e.preventDefault();
		var tarea= $("#textarea1").val();// trae el valor ingresado por el usuario
		if(tarea == "" && tarea == ""){
			alert("Debes escribir una tarea");
		}else{// si el usuario ingresa una tarea, esta se mostrara  junto al checkbox y el boton remove
			$("ul").append('<div><form action="#"><p><input type="checkbox" id="test5"/><label label for="test5" id="comentarios">' + tarea +'</label></p></div>' + '<a class="waves-effect waves-light btn btn-mio remover">Remove</a>');
	
		}
	});	
		$(document).on('click' , '.remover' , function(){
		$(this).parent().remove();
 	});
})