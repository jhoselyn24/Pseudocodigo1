function tikitaka() {
	var cantidad = parseInt(prompt("Ingrese numero de ventas: "));
	var ope1 = 0;
	var ope2 = 0;
	var ope3 = 0;
	var res1 = 0;
	var res2 = 0;
	var res3 = 0;
	for(var a=1;a<=cantidad;a++) {
		precio = parseInt(prompt("el precio "+a+" es: ")); 
		if(precio>1000) {
			ope1+=precio;
			res1++;
		}else if (precio<500 && precio>1000) {
			ope2+=precio;
			res2++;
		}else if (precio>500) {
			ope3+=precio;
			res3++;
		}
	}
	document.write("La cantidad de ventas mayores a 1000 fueron: "+res1+" venta(s), "+" Monto: "+ope1+"<br>"+"Mayores a 500 y menor o igual que 1000: "+res3+" venta(s), "+"Monto: "+ope3+"<br>"+"Menores a 500: "+res2+" venta(s), "+"Monto: "+ope2);
}
tikitaka();
