$(document).ready(function(){
	$("#button").click(function(e){
		 localStorage.setItem('listItems', $("#textarea1").html());
		e.preventDefault();
		var tarea= $("#textarea1").val();// trae el valor ingresado por el usuario
		if(tarea == "" && tarea == ""){
			alert("Debes escribir una tarea");
		}else{// si el usuario ingresa una tarea, esta se mostrara  junto al checkbox y el boton remove
			$("ul").append('<li><input type="checkbox"/>' + tarea + '<a class="waves-effect waves-light btn btn-mio remover">Remove</a></li>');
			$("#textarea1").val("");
		}
	});	
		$(document).on("click", ".remover", function(){
		$(this).parent().remove();
 	});

	//if( $("#test5").is(':checked') ) { evalua si el checkbox esta presionado, no me funciono
    //alert('Seleccionado');}

})