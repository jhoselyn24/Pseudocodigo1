function ahorro(){
	var totalAhorrado=0;
    for(var i=1; i<=12;i++){
    cuota=Number(prompt('Ingresa deposito del mes '+i+':'));
    totalAhorrado=totalAhorrado+cuota;
    alert('Mes '+i+' lleva ahorrado:'+totalAhorrado);
	}

	alert('El ahorro en un año es:'+totalAhorrado);
}
ahorro();
