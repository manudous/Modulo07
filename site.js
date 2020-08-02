// VALIDAR UN IBAN

// Case 1. Validar que se informa con dos letras, y los números correspondientes.

const pattern = /^[A-Z]{2}\d{22}$/i;
const IBAN = 'ES6600190020961234567890';

console.log(pattern.test(IBAN));

// Case 2. Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

const pattern2 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/i;
const values = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

values.forEach(value => {
    console.log(value + " =  ", pattern2.test(value));
});

// Case 3. Vamos a extraer el código de páis y el dígito de control.

const pattern3 = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/i;
const values3 = 'ES66 0019 0020 9612 3456 7890';

console.log(values3.match(pattern3));

// VALIDAR MATRÍCULA COCHE

// Case 1. Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a

const pattern4 = /^\d{4}(\s?|-)[A-Z]{3}$/
const values4 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

values4.forEach(value => {
    console.log(value + " =  ", pattern4.test(value));
});

// Case 2. Vamos a extraer por un lado la parte numérica y por otro las letras.

const pattern5 = /^(\d{4})(\s?|-)([A-Z]{3})$/
const values5 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

values5.forEach(value => {
    console.log(value + " =  ", value.match(pattern5));
});

// OPCIONALES

// Case 1. Extraer imágenes de un fichero HTML

let pattern6 = /(https:\/\/.{1,}.(png|jpg|gif))/g
const values6 = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

console.log(values6 + " =  ", values6.match(pattern6));

// Case 2. De un HTML extraer todos los src de todos los objetos img:

let pattern7 = /(https:\/\/.{1,}.(png|jpg|gif))/gm

const values7 = '<html>\n <body>\n  <img src = "https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg" />\n  <h1>ejemplo</h1>\n  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" /> \n </body > \n</html > ';

console.log(values7 + " =  ", values7.match(pattern7));



// VALIDAR SINTAXIS TARJETA DE CRÉDITO

// Case 1 Vamos a validar los siguiente formatos (todos válidos)

const pattern8 = /^5[1-5]\d{2}((\s?|\-)\d{4}){3}$/ 
const values8 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

values8.forEach(value => {
    console.log(value + " =  ", pattern8.test(value));
});

// Case 2 Vamos a extraer cada grupo de cuatro digitos.

const pattern9= /^(5[1-5]\d{2})(\s?|\-)(\d{4})(\s?|\-)(\d{4})(\s?|\-)(\d{4})$/ 
const values9 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

values9.forEach(value => {
    console.log(value + " =  ", value.match(pattern9))
});

// BUSCAR EXPRESIONES REGULARES

// Antes de ponernos a implementar una expresión regular de algo estándar es buena idea 
// buscar y ver si existen implementaciones de las que ya podemos partir.

// En este ejercicio vas a buscar una serie de expresiones regulares y validar si la expresión dada es correcta:

// Comprobar si una clave es fuerte o no:

// // Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un numero y un caracter especial.

const pattern10 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/
const values10 = '@3mB';

console.log(values10 + " =  ", pattern10.test(values10));


// // Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.

const pattern11 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const values11 = 'aB8dad@er';


console.log(values11 + " =  ", pattern11.test(values11));

//Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).

const pattern12 = /^((https?):\/\/)?(w{3}\.)?[a-z0-9\-\.]{3,}\.[a-z]{2,}(\.[a-z]{2,})?$/i
const values12 = ['https://www.lemoncode.net', 'www.lemoncode.net', 'lemoncode.net'];

values12.forEach(value => {
    console.log(value + " =  ", pattern12.test(value));
});

// Validar que un color en Hexadecimal esta bien formado.

const pattern13 = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
const values13 = ['#123456', '#A45', '#4A78AD'];

values13.map(value => {
    console.log(`${values13} =  `, pattern13.test(value));
});