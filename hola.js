	$('.registro').submit(function(e){
		e.preventDefault();
		var nombre = document.getElementsByClassName("name")[1].value; //Cogemos el valor del campo nombre
		var contras = document.getElementsByClassName("password")[1].value;
		var contras1 = document.getElementsByClassName('password1')[0].value;
		var miDiv = document.getElementsByClassName("miDiv");  // Cogemos la referencia al nuestro div.
		var html = "";  //En esta variable guardamos lo que queramos añadir al div.

	if(getCookie(nombre)!=null){
		alert("El nombre del usuario ya esta registrado");
	}

	else if( contras != contras1){
	    	miDiv[5].innerHTML = "";
	    	html = "Las contraseñas no son iguales";
	    	miDiv[5].innerHTML = html;

	    } else{
	    	setCookie(nombre,contras);
	        $(this).unbind('submit').submit();
	    }
	});

	$('.loggin').submit(function(e){
		e.preventDefault();
		var nombre = document.getElementsByClassName('name')[0].value;
		var contras = document.getElementsByClassName("password")[0].value;
		if(getCookie(nombre)==contras){
			setCookie('sesion', nombre);
			$(this).unbind('submit').submit();
		} else {
			alert('Credenciales Incorrectas');
		}

	});

function setCookie(cname, cvalue, exdays) {
	if(exdays){
		var d = new Date();
    	d.setTime(d.getTime() + (exdays*24*60*60*1000));
    	var expires = "expires="+ d.toUTCString();
    	
	} else expires = ' ';
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

/*Validar contraseña*/
function validarPass(){
	var pass = document.getElementsByClassName('pass')[0].value;
	var exp1 = /^[A-Za-z\d\W]{8,}$/i;
	var exp2 = /([A-Z]{1,})/i;
	var exp3 = /([a-z]{1,})/i;
	var exp4 = /(\d{1,})/i;
	var exp5 = /(\W{1,})/i;

	if(exp.test(pass) && exp1.test(pass) && exp2.test(pass) && exp3.test(pass) && exp4.test(pass) && exp5.test(pass)){
		valid = true;
	} else {
		valid = false;
	}
}

/*Validar contraseña*/
$('.direccion').keyup(function() {
	if($('.direccion').val()!=''){
		$('.tarjetaCredito').animate({'opacity':1},100).show().css('display','unset');
	} else {
		$('.tarjeta').val('');
		$('.tarjetaCredito').css('display','none').css('opacity',0);
	}
});

