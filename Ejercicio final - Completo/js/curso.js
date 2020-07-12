function validarFormulario(forma) {
    console.log(" ");
    console.log("si está Validando el envio del formulario...");
    var nombre = forma.nombre;
    var telefono = forma.telefono;
    var email = forma.email;
    var mensaje = forma.mensaje;
    var java = forma.java;
    var net = forma.net;
    var php = forma.php;
    var seleccionado = false;
    console.log("Usuario..." + nombre.value);
    console.log("telefono..." + telefono.value);
    console.log("email..." + email.value);
    console.log("mensaje..." + mensaje.value);
    console.log("java..." + java.checked);
    console.log("net..." + net.checked);
    console.log("php..." + php.checked);
    // validación del Nombre del usuario
    if (nombre.value === "") {
        alert("Favor digite su nombre completo...");
        nombre.focus();
        nombre.select();
        return false;
    }
    // validación del Teléfono del usuario
    if (telefono.value === "") {
        alert("Favor digite su número telefónico...");
        telefono.focus();
        telefono.select();
        return false;
    }
    // validación del eMail del usuario
    if (email.value === "") {
        alert("Favor digite su dirección electrónica...");
        email.focus();
        email.select();
        return false;
    }
    // validación del mensaje
    if (mensaje.value === "") {
        alert("Favor digite su mensaje...");
        mensaje.focus();
        mensaje.select();
        return false;
    }
    // validación tecnologías
    if (!java.checked && !net.checked && !php.checked) {
        alert("Favor seleccione por lo menos una tecnología...");
        return false
    }
    // Formulario validado
    alert("Formulario enviado...")
    return true;
}