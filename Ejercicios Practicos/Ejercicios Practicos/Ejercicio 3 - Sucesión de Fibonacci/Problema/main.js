//11235813
var cantidad = Number(prompt("Escribe la cantidad de numeros:"));
var a = 1;
var b = -1;
var resultado = "";

for (var i = 1; i<=cantidad; i++) {
	var n;
	n = a + b;
	b = a;
	a = n;
	resultado += n + "-"; 
}
document.write(resultado);
