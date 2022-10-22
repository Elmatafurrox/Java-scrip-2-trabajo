




let amigos=[];

let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");


let btnDetalle=document.querySelector("#btnDetalle");
let btnBorrar=document.querySelector("#btnEliminar");



let lista=document.querySelector("listadeamigos");
let formulario=document.querySelector("#formulario");


btnCancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();

});

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}

function pintar(){
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}" />Detalles</button>
                                                                                                <button class="eliminar" indice="${index}">Borrar</button>`;
            lista.appendChild(amigo);                                                                                                                                   
        });                 
         botones=document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click",()=>{
                amigos.splice(element,getAttribute("indice"),1);
                pintar();
            });
        }
    }
    else{
        lista.innerHTML="<h2>No tenemos amigos</h2>";
    }
}

function showDetalle(tel) {
    let detalles=document.getElementById("detallesAmigo");
    let amigo=amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a;
        }
    });
    detalles.innerHTML=`<img src="${amigos.foto}" alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Telefono:</span>${amigo.telefono}</p>
    <p><span>Correo:</span>${amigo.correo}</p>
    <button>Cerrar</button>`;
    detalles,classList.remove("oculto");
}


btnGuardar.addEventListener("click",(event)=>{

    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value,
    };

    amigos.push(contacto);
    limpiar();
    pintar();
    event.preventDefault();
})

btnCancelar.addEventListener("click",(event)=>{
    
    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value,
    };

    amigos.push(contacto);
    limpiar();
    pintar();
    event.preventDefault();
})