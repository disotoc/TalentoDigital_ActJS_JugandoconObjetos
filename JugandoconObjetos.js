/**
 * Objetivos
 * Practica iterar por medio de un array de objetos/diccionarios.
 * Imagina que se te entrega un array de objetos. Por ejemplo,
 */
var users = [{name: 'Michael', age:37}, {name: 'John', age:30}, {name: 'David', age:27}];
/**
 * ¿Cómo harías print/log de la edad de John?
 * ¿Cómo harías print/log del nombre del primer objeto?
 * ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto:
 * Michael - 37
 * John - 30
 * David - 27
 * ¿Cómo harías para imprimir el nombre de los mayores de edad?
 */
/*-----------------------------Ejercicio 1-----------------------------*/
for (var i = 0; i < users.length; i++) {
	if (users[i].name == 'John') {
		console.log(users[i].age);
	}
}
/*-----------------------------Ejercicio 2-----------------------------*/
console.log(users[0]);
/*-----------------------------Ejercicio 3-----------------------------*/
for (var i = 0; i < users.length; i++) {
	console.log(users[i].name, ' - ', users[i].age);
}
/*-----------------------------Ejercicio 4-----------------------------*/
for (var i = 0; i < users.length; i++) {
	if (users[i].age >= 18) {
		console.log(users[i].name)
	}
}