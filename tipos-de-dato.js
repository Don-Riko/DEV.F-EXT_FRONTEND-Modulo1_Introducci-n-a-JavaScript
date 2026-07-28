// ============================================
// TIPOS DE DATOS EN JAVASCRIPT
// ============================================
// Este archivo muestra los distintos tipos de datos
// que existen en JavaScript usando typeof para identificarlos.

console.log("============================================");
console.log("   TIPOS DE DATOS EN JAVASCRIPT");
console.log("============================================\n");

// --------------------------------------------
// 1. NUMBER (Numeros)
// --------------------------------------------
console.log("--- TIPO: NUMBER ---");
console.log("Valor: 42");
console.log("Tipo:", typeof 42);           // number

console.log("Valor: -666");
console.log("Tipo:", typeof -666);         // number

console.log("Valor: 0");
console.log("Tipo:", typeof 0);            // number

console.log("");

// --------------------------------------------
// 2. STRING (Cadenas de texto)
// --------------------------------------------
console.log("--- TIPO: STRING ---");
console.log("Valor: 'Veinticinco'");
console.log("Tipo:", typeof 'Veinticinco'); // string

console.log("Valor: '' (cadena vacia)");
console.log("Tipo:", typeof '');            // string

console.log("Valor: 'FALSE'");
console.log("Tipo:", typeof 'FALSE');       // string (es texto, no booleano)

console.log("");

// --------------------------------------------
// 3. BOOLEAN (Verdadero o Falso)
// --------------------------------------------
console.log("--- TIPO: BOOLEAN ---");
console.log("Valor: true");
console.log("Tipo:", typeof true);          // boolean

console.log("");

// --------------------------------------------
// 4. UNDEFINED
// --------------------------------------------
console.log("--- TIPO: UNDEFINED ---");
console.log("Valor: undefined");
console.log("Tipo:", typeof undefined);     // undefined

console.log("");

// --------------------------------------------
// 5. OBJECT (null es un caso especial)
// --------------------------------------------
console.log("--- TIPO: OBJECT (null) ---");
console.log("Valor: null");
console.log("Tipo:", typeof null);          // object (esto es un bug historico de JS)

console.log("");

// ============================================
// NOTA IMPORTANTE SOBRE 'FALSE'
// ============================================
// 'FALSE' (con comillas) es un STRING, no un booleano.
// Los booleanos en JS son: true y false (en minusculas, sin comillas).
console.log("============================================");
console.log("   NOTA SOBRE 'FALSE'");
console.log("============================================");
console.log("'FALSE' (con comillas) es un string:", typeof 'FALSE');
console.log("false (sin comillas) es un boolean:", typeof false);

console.log("");

// ============================================
// EJEMPLOS ADICIONALES (propios)
// ============================================
console.log("============================================");
console.log("   EJEMPLOS ADICIONALES");
console.log("============================================\n");

// Numeros decimales
console.log("--- Numeros decimales ---");
console.log("Valor: 3.14");
console.log("Tipo:", typeof 3.14);          // number

// Infinity y NaN
console.log("\n--- Valores especiales numericos ---");
console.log("Valor: Infinity");
console.log("Tipo:", typeof Infinity);      // number

console.log("Valor: NaN (Not a Number)");
console.log("Tipo:", typeof NaN);           // number (sorprendente!)

// BigInt
console.log("\n--- BigInt ---");
console.log("Valor: 9007199254740991n");
console.log("Tipo:", typeof 9007199254740991n); // bigint

// Symbol
console.log("\n--- Symbol ---");
console.log("Valor: Symbol('id')");
console.log("Tipo:", typeof Symbol('id'));   // symbol

// Function
console.log("\n--- Function ---");
console.log("Valor: function() {}");
console.log("Tipo:", typeof function() {}); // function

// Array (es un objeto)
console.log("\n--- Array ---");
console.log("Valor: [1, 2, 3]");
console.log("Tipo:", typeof [1, 2, 3]);     // object

// Object
console.log("\n--- Object ---");
console.log("Valor: { nombre: 'Juan', edad: 25 }");
console.log("Tipo:", typeof { nombre: 'Juan', edad: 25 }); // object

console.log("\n============================================");
console.log("   FIN DE EJEMPLOS");
console.log("============================================");
