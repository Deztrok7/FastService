miStorage=window.localStorage
listaresul=[]
const Tablas=()=>{
    var nombre = document.getElementById("Nombre").value;
    var apelld = document.getElementById("Apellidos").value;
    var correo=document.getElementById("Correo").value;
    var telefono=document.getElementById("cell").value;
    var queja=document.getElementById("queja").value;
    let informa={
        nomb:nombre,
        apell:apelld,
        corr:correo,
        quej:queja,
    }
    listaresul.push(informa)
    miStorage.removeItem("Informacion de usuarios")
    miStorage.setItem("Informacion de usuarios",JSON.stringify(listaresul))
    let tablaref=document.getElementById("tabla")
    let newtablarow =tablaref.insertRow(-1)
    let newtablarefcell= newtablarow.insertCell(0)
    newtablarefcell.textContent=nombre
    newtablarefcell= newtablarow.insertCell(1)
    newtablarefcell.textContent=apelld
    newtablarefcell= newtablarow.insertCell(2)
    newtablarefcell.textContent=correo
    newtablarefcell= newtablarow.insertCell(3)
    newtablarefcell.textContent=telefono
    newtablarefcell= newtablarow.insertCell(4)
    newtablarefcell.textContent=queja
    let newdeletoption=newtablarow.insertCell(5)
    let deletoption=document.createElement("button")
    deletoption.textContent="Eliminar"
    newdeletoption.appendChild(deletoption)

    deletoption.addEventListener("click",(event)=>{
        event.target.parentNode.parentNode.remove()
    })
    
}
