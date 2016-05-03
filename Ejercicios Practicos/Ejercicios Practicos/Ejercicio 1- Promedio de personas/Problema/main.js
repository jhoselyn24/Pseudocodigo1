var cantidad = Number(prompt("Ingrese el numero de personas a promediar: "));
var personas = 0;
var a=1;

while(a<=cantidad) {
	var numeroPersonas = parseFloat(prompt("Ingrese la estatura "+a+" :"));
	personas += parseFloat(numeroPersonas);
	a++;
}
alert("El promedio de estatura es: "+parseFloat(personas/cantidad).toFixed(2));