function mostrar() {
  let nombre;
  let cursada;
  let cantMaterias;
  let sexo;
  let nota;
  let edad;
  let respuesta = "si";

  let primerIngreso = true;
  let nombreMejorPromedio;
  let mejorPromedioNoMasculino;


  let nombreJoven;
  let edadMasJoven;
  

  let totalNotaMasculino = 0;
  let totalNotaFemenino = 0;
  let totalNotaNoBinario = 0;
  let totalMasculino = 0;
  let totalFemenino = 0;
  let totalNoBinario = 0;
  

  let mayorCantMaterias;
  let remotoEdadMasMaterias;
  let remotoNombreMasMaterias;


  do {
    do {
      nombre = prompt("Ingrese nombre");
    } while (!isNaN(nombre));
    console.log(nombre)

      do {
      cursada = prompt("Ingrese cursada. Debe ser libre-presencial-remota)");
    } while (cursada != "libre" && cursada != "presencial" && cursada != "remota");
    console.log(cursada) 
     do {
      cantMaterias = parseInt(prompt("Ingrese cantidad de materias"));
    } while (cantMaterias < 0 || cantMaterias > 8 || isNaN(cantMaterias));
    console.log(cantMaterias) 
    do {
      sexo = prompt("Ingrese sexo. Debe ser femenino-masculino-no binario)");
    } while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario");
    console.log(sexo)
    do {
      nota = parseInt(prompt("Ingrese la nota entre 0 y 10"));
    } while (nota < 0 || nota > 10 || isNaN(nota));
    console.log(nota) 
    do {
      edad = parseInt(prompt("Ingrese edad"));
    } while (edad < 18 || edad > 100 || isNaN(edad));
    console.log(edad)

    switch (sexo) {
      case "masculino":
        totalMasculino++;
        totalNotaMasculino += nota;
        break;
      case "no binario":
        totalNoBinario++;
        totalNotaNoBinario += nota;
        break;
      case "femenino":
        totalFemenino++;
        totalNotaFemenino += nota;
        break;
    }

    if (primerIngreso || nota > mejorPromedioNoMasculino || edad < edadMasJoven || cantMaterias > mayorCantMaterias) {
      if (sexo != "masculino") {
        mejorPromedioNoMasculino = nota;
        nombreMejorPromedio = nombre;
      } else if (cursada == "libre") {
        nombreJoven = nombre;
        edadMasJoven = edad;
      } else if (cursada != "remota") {
        remotoEdadMasMaterias = edad;
        remotoNombreMasMaterias = nombre;
        mayorCantMaterias = cantMaterias;
      }
    }
    primerIngreso = false;

    respuesta = prompt("desea seguir ingresando alumnos?")
  } while (respuesta != "no");


  console.log("El nombre del mejor promedio que no sea masculino es " + nombreMejorPromedio)
  console.log(" El nombre del mas joven de los alumnos entre los que la dan libre es " + nombreJoven)
  console.log(" La edad y nombre del que cursa mas materias que no sean en forma remota son " 
  +  remotoEdadMasMaterias + " " + remotoNombreMasMaterias  );



/* 
  if (totalMasculino != 0) {
    
    console.log("El promedio por nota del sexo masculino es :" + totalNotaMasculino / totalMasculino + "</br>");
  }
   else if (totalFemenino != 0) {
    
    document.write("El promedio por nota del sexo femenino es :" + totalNotaFemenino / totalFemenino + "<br>");
  }
  else if (totalNoBinario != 0) {
    
    document.write("El promedio por nota del sexo no binario es :" +  totalNotaNoBinario / totalNoBinario + "<br>");
  }

  if (bandera3 != 0) {
    document.write("Del que cursa mas materias que no sea en forma remota, edad :" + edadMayorCantMaterias + " nombre :" + nombreMayorCantMaterias);
  }  */ 


}
