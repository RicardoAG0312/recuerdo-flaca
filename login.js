//Uusuario y contraseña
const usuarioValido = "juaquiti123";
const passwordValido = "qlones123";

//Obtenemos validez
let validez = (event) => {
    let usuarioIngresado = document.getElementById("usuario").value;
    let passwordIngresado = document.getElementById("password").value;
    if (usuarioIngresado === usuarioValido && passwordIngresado === passwordValido) {
        Swal.fire({
            icon: "success",
            title: "Usuario y Password Correctos",
            text: "Bienvenida, mi amor",
        });
    } else {
        event.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Usuario o Password Incorrectos",
            text: "Verifica bien e intentalo nuevamente",
        });
    }
}
window.onload = function() {
    document.getElementById('usuario').value = '';
    document.getElementById('password').value = '';
};