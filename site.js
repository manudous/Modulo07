// VALIDAR UN IBAN

// Case 1. Validar que se informa con dos letras, y los números correspondientes.

// const pattern = /^[A-Z]{2}\d{22}$/i;
// const IBAN = 'ES6600190020961234567890';

// console.log(pattern.test(IBAN));

// Case 2. Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

// const pattern = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/i;
// const values = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

// values.forEach(value => {
//     console.log(value + " =  ", pattern.test(value));
// });

// Case 3. Vamos a extraer el código de páis y el dígito de control.

// const pattern = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/i;
// const values = 'ES66 0019 0020 9612 3456 7890';

// console.log(values.match(pattern));

// VALIDAR MATRÍCULA COCHE

// Case 1. Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a

// const pattern = /^\d{4}(\s?|-)[A-Z]{3}$/
// const values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

// values.forEach(value => {
//     console.log(value + " =  ", pattern.test(value));
// });

// Case 2. Vamos a extraer por un lado la parte numérica y por otro las letras.

// const pattern = /^(\d{4})(\s?|-)([A-Z]{3})$/
// const values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

// values.forEach(value => {
//     console.log(value + " =  ", value.match(pattern));
// });

// OPCIONALES

// Case 1. Extraer imágenes de un fichero HTML

// const pattern = /(https:\/\/.{1,}.(png|jpg|gif))/g
// const values = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

// console.log(values + " =  ", values.match(pattern));

// Case 2. De un HTML extraer todos los src de todos los objetos img:

// const pattern = /(https:\/\/.{1,}.(png|jpg|gif))/gm

// const values = '<html>\n <body>\n  <img src = "https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg" />\n  <h1>ejemplo</h1>\n  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" /> \n </body > \n</html > ';

// console.log(values + " =  ", values.match(pattern));



// VALIDAR SINTAXIS TARJETA DE CRÉDITO

// Case 1 Vamos a validar los siguiente formatos (todos válidos)

// const pattern = /^5[1-5]\d{2}((\s?|\-)\d{4}){3}$/ 
// const values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

// values.forEach(value => {
//     console.log(value + " =  ", pattern.test(value));
// });

// Case 2 Vamos a extraer cada grupo de cuatro digitos.

// const pattern = /^(5[1-5]\d{2})(\s?|\-)(\d{4})(\s?|\-)(\d{4})(\s?|\-)(\d{4})$/ 
// const values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];

// values.forEach(value => {
//     console.log(value + " =  ", value.match(pattern))
// });

// BUSCAR EXPRESIONES REGULARES

// Antes de ponernos a implementar una expresión regular de algo estándar es buena idea 
// buscar y ver si existen implementaciones de las que ya podemos partir.

// En este ejercicio vas a buscar una serie de expresiones regulares y validar si la expresión dada es correcta:

// Comprobar si una clave es fuerte o no:

// // Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un numero y un caracter especial.

// const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/
// const values = '@3mB';

// console.log(values + " =  ", pattern.test(values));


// // Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.

// const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// const values = 'aB8dad@er';


// console.log(values + " =  ", pattern.test(values));

//Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).

// const pattern = /^((https?):\/\/)?(w{3}\.)?[a-z0-9\-\.]{3,}\.[a-z]{2,}(\.[a-z]{2,})?$/i
// const values = ['https://www.lemoncode.net', 'www.lemoncode.net', 'lemoncode.net'];

// values.forEach(value => {
//     console.log(value + " =  ", pattern.test(value));
// });

// Validar que un color en Hexadecimal esta bien formado.

// const pattern = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
// const values = ['#123456', '#A45', '#4A78AD'];

// values.forEach(value => {
//     console.log(value + " =  ", pattern.test(value));
// });