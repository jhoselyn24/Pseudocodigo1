var cantidad = Number(prompt("Cantidad de numeros a ingresar:"));
var menores = 0;
var mayores = 0;

for (var f=1; f<=cantidad; f++) {
	var n= parseInt(prompt("Ingrese numero "+f+" :"));
	if (n>0){
		mayores++;
	}else {
		menores++;
	}
}
alert("Los numeros menores o iguales a 0 son: "+menores+" y los mayores a 0 son: "+mayores);