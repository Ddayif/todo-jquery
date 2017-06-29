$(document).ready(function(){
	$("#button").click(function(e){
		e.preventDefault();
		var tarea= $("#textarea1").val();
		if(tarea == "" && tarea == ""){
			alert("Debes escribir una tarea");
		}else{
			$("#comentarios").append('<div><p class="hola">'+ tarea +'</p></div>');
		}
			
	});	
})