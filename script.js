function logear(){
    let correo=document.getElementById("correo").value;
    let contraseña=document.getElementById("contra").value;
    if (correo=="qwertyxz@gmail.com" && contraseña=="Lucas2000") {
        alert("Iniciaste Sesion");
        window.open("tienda.html");
    }else{
        alert("Correo=qwertyxz@gmail.com  pass=Lucas2000" );
    }
}