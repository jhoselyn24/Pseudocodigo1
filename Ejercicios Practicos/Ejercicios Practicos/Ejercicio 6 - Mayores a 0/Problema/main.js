var cantidad = Number(prompt("Cantidad de numeros a ingresar:"));
var menores = 0;
var mayores = 0;

for (var a=1; a<=cantidad; a++) {
	var n= parseInt(prompt("Ingrese numero "+a+" :"));
	if (n>0){
		mayores++;
	}else {
		menores++;
	}
}
alert("Los numeros menores o iguales a 0 son: "+menores+" y los mayores a 0 son: "+mayores);