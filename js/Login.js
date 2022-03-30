const Ini_Ses = () => {
    fetch("https://deztrok7.github.io/FastService/json/Login.json")
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
            for (i = 0; i < 3; i++) {
                if (datos[i].correo == document.getElementById("Correo").value) {
                    if (datos[i].contraseña == document.getElementById("Pass").value) {
                        if (datos[i].tipo_de_cuenta == "Admin") {
                            window.location.href = "../html/PagAdmin.html"
                        } else {
                            if (datos[i].tipo_de_cuenta == "Restaurante") {
                                window.location.href = "../html/PagRestaurante.html"
                            } else {
                                if (datos[i].tipo_de_cuenta == "Cliente") {
                                    window.location.href = "../html/PaginaDeUsuarios.html"
                                } else {
                                    alert("Correo y/o contraseña equivocado.")
                                }
                            }
                        }
                    }
                }
            }
        })
}