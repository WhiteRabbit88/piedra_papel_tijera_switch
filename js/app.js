var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = "a";
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        document.write("Tu elección: " + user + "<br>");
        document.write("Elección de la Pc: " + machine + "<br>");
        document.write("Es un empate");
        break;
    case (machine === "piedra" && user === "papel"):
        document.write("Tu elección: " + user + "<br>");
        document.write("Elección de la Pc: " + machine + "<br>");
        document.write("Ganaste");
        break;
    case (machine === "papel"  && user === "tijera"):
        document.write("Tu elección: " + user + "<br>");
        document.write("Elección de la Pc: " + machine + "<br>");
        document.write("Ganaste")
        break;
    case (machine === "tijera" && user === "piedra"):
        document.write("Tu elección: " + user + "<br>");
        document.write("Elección de la Pc: " + machine + "<br>");
        document.write("Ganaste")
        break;
    default:
        document.write("Tu elección: " + user + "<br>");
        document.write("Elección de la Pc: " + machine + "<br>");
        document.write("¡Perdiste!");       
}
