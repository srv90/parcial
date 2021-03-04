function mostrar() {
	let nombre;
	let estadoCivil;
	let edad;
	let temperatura;
	let sexo;

	let respuesta = "si";
	let totalPasajeros = 0;
	let importeTotal =0;

	let totalViudosMas60 = 0;
	let primerIngreso = true;

	let edadSolteraMasJoven;
	let nombreSolteraMasJoven;
	let totalMayor60 = 0;

	do {
		do {
			nombre = prompt("Ingrese su nombre");
		} while (!(isNaN(nombre)));

		do {
			estadoCivil = prompt("Ingrese estado civil. Debe ser soltero-casado-viudo)");
		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do {
			edad = parseInt(prompt("Ingrese su edad entre 17 y 100"));
		} while (edad < 17 || edad > 100 || isNaN(edad));

		do {
			temperatura = parseInt(prompt("Ingrese temperatura corporal entre 36 y 40 grados"));
		} while (temperatura < 36 || temperatura > 40 || isNaN(temperatura));

		do {
			sexo = prompt("Ingrese sexo. Debe ser masculino-femenino)");
		} while (sexo != "masculino" && sexo != "femenino");

		totalPasajeros++;

		if (edad > 60) {
			if (estadoCivil == "viudo") {
				totalViudosMas60++;
			}
			totalMayor60++;
		}
		if (estadoCivil == "soltero" && sexo == "femenino") {
			if (primerIngreso || edad < edadSolteraMasJoven) {
				{
					nombreSolteraMasJoven = nombre;
					edadSolteraMasJoven = edad;
					primerIngreso = false;
				}
			}
		}

		respuesta = prompt("Desea seguir ingresando pasajeros?")
	} while (respuesta == "si");

	importeTotal += totalPasajeros * 600;

	if (totalViudosMas60 != 0) {
		document.write("La cantidad de viudos mayores a 60 años es :" + totalViudosMas60 + "<br>");
	}


	document.write("el nombre y edad de la mujer soltera mas joven son: " + nombreSolteraMasJoven + " " + edadSolteraMasJoven + "<br>");

	document.write("El importe total sin descuento es :" + importeTotal + "<br>");

	if (totalMayor60 != 0) {
		if (totalMayor60 * 100 / totalPasajeros > 50) {
			document.write("El precio final con descuento es :" + importeTotal * 0.75);
		}
	}

}

