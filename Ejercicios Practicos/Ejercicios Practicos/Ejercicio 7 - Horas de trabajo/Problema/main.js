function HorasDeTrabajo() {
	var pago = parseInt(prompt("Cuanto es el pago por hora: "));	
	var horas = 0;
	var total = 0;
	
	for(var i=1;i<=6;i++){
		horas= parseInt(prompt("Cuantas horas trabajó el día "+i+":"));
		total+=horas;
	}
	document.write("trabajó: "+total+" horas"+"<br>");
	document.write("El total a pagar al empleado es: "+total*pago);
}

HorasDeTrabajo();