let $boton = document.getElementById("bEnviar");

const cargarTodos = () => {
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
        if(xml.readyState == 4 && xml.status == 200){
            let capa = document.getElementById("mostrar-todo-container");
            capa.innerHTML = xml.responseText;
        }
    };
    xml.open("GET", "mostrar_todo.php", true);
    xml.send();
}

const nuevoTodo = () => {
    let todo = document.getElementById("todo");
    let header = "todo=" + todo.value;
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = () => {
        if(xml.readyState == 4 & xml.status == 200){
            console.log("solicitud completada");
            cargarTodos();
        }else{
            console.log(xml.readyState);
        }
    }
    xml.open("POST", "nuevo_todo.php", true);
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send(header);
}
$boton.addEventListener("click", () => {
    nuevoTodo();
})

document.addEventListener("DOMContentLoaded", cargarTodos);
