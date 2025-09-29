
/*Definimos una primera variable de nombre habitantesCiudad1 y le asignamos un valor inicial, en 
estecaso, 145 lo que la convierte en una variable númerica*/

var habitantesCiudad1= "145";
var nombreCiudad1= "Barcelona";
var habitantesCiudad2= "254";
var nombreCiudad2= "Madrid";

if(habitantesCiudad1>habitantesCiudad2)
    {
alert("La ciudad "+nombreCiudad1+" tiene más habitantes que la ciudad "+nombreCiudad2);
    }

else 
    {
    if (habitantesCiudad1 < habitantesCiudad2)
        {
            alert("La ciudad "+nombreCiudad1+" tiene menos habitantes que la ciudad "+nombreCiudad2);
        }
    else
        {
            alert("Las ciudades"+nombreCiudad2+" y "+nombreCiudad1+" tienen el mismo numero de habitantes.");
        }
    }
    

