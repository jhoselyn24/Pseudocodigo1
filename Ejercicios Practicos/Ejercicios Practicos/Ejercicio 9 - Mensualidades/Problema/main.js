function mensualidad(){
	var pagoMensual=5;
	var operacion=0;
	for(var i=1;i<=20;i++){
    	pagoMensual=pagoMensual*2;
    	operacion+=pagoMensual;
    	document.write("El mes "+i+" pagó: "+pagoMensual+"<br>");
	}
	alert("El total pagado en 20 meses es: "+operacion);
}
mensualidad();