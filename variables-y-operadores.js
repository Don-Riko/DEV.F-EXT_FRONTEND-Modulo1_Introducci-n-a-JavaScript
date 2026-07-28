// ============================================
// VARIABLES Y OPERADORES EN JAVASCRIPT
// ============================================
// Este archivo contiene ejemplos de declaracion de variables
// y uso de operadores basicos en JavaScript.

console.log("============================================");
console.log("   VARIABLES Y OPERADORES EN JAVASCRIPT");
console.log("============================================\n");

// --------------------------------------------
// 1. DECLARACION DE VARIABLES
// --------------------------------------------
console.log("--- DECLARACION DE VARIABLES ---\n");

// var - forma antigua (alcance de funcion)
var nombre = "Ricardo";
console.log("var nombre =", nombre);

// let - forma moderna (alcance de bloque, se puede reasignar)
let edad = 28;
console.log("let edad =", edad);

// const - constante (alcance de bloque, NO se puede reasignar)
const PI = 3.14159;
console.log("const PI =", PI);

console.log("");

// --------------------------------------------
// 2. DIFERENCIA ENTRE let Y const
// --------------------------------------------
console.log("--- DIFERENCIA ENTRE let Y const ---\n");

let contador = 0;
console.log("contador inicial:", contador);
contador = 5;
console.log("contador reasignado:", contador);

const GRAVEDAD = 9.81;
console.log("GRAVEDAD:", GRAVEDAD);
// GRAVEDAD = 10; // Esto daria error: Assignment to constant variable

console.log("");

// --------------------------------------------
// 3. OPERADORES ARITMETICOS
// --------------------------------------------
console.log("--- OPERADORES ARITMETICOS ---\n");

let a = 10;
let b = 3;

console.log("a =", a);
console.log("b =", b);
console.log("");

console.log("Suma (a + b):", a + b);           // 13
console.log("Resta (a - b):", a - b);          // 7
console.log("Multiplicacion (a * b):", a * b); // 30
console.log("Division (a / b):", a / b);       // 3.333...
console.log("Modulo (a % b):", a % b);         // 1
console.log("Exponente (a ** b):", a ** b);     // 1000

console.log("");

// --------------------------------------------
// 4. OPERADORES DE ASIGNACION
// --------------------------------------------
console.log("--- OPERADORES DE ASIGNACION ---\n");

let x = 10;
console.log("x inicial:", x);

x += 5;  // x = x + 5
console.log("x += 5 ->", x);   // 15

x -= 3;  // x = x - 3
console.log("x -= 3 ->", x);   // 12

x *= 2;  // x = x * 2
console.log("x *= 2 ->", x);   // 24

x /= 4;  // x = x / 4
console.log("x /= 4 ->", x);   // 6

x %= 4;  // x = x % 4
console.log("x %= 4 ->", x);   // 2

console.log("");

// --------------------------------------------
// 5. OPERADORES DE COMPARACION
// --------------------------------------------
console.log("--- OPERADORES DE COMPARACION ---\n");

console.log("5 == '5' (igualdad flexible):", 5 == '5');     // true
console.log("5 === '5' (igualdad estricta):", 5 === '5');   // false
console.log("5 != '5' (desigualdad flexible):", 5 != '5'); // false
console.log("5 !== '5' (desigualdad estricta):", 5 !== '5'); // true
console.log("10 > 5:", 10 > 5);     // true
console.log("10 < 5:", 10 < 5);     // false
console.log("5 >= 5:", 5 >= 5);     // true
console.log("4 <= 3:", 4 <= 3);     // false

console.log("");

// --------------------------------------------
// 6. OPERADORES LOGICOS
// --------------------------------------------
console.log("--- OPERADORES LOGICOS ---\n");

let esMayor = true;
let tienePermiso = false;

console.log("esMayor:", esMayor);
console.log("tienePermiso:", tienePermiso);
console.log("");

console.log("AND (esMayor && tienePermiso):", esMayor && tienePermiso); // false
console.log("OR (esMayor || tienePermiso):", esMayor || tienePermiso);  // true
console.log("NOT (!esMayor):", !esMayor);                                // false
console.log("NOT (!tienePermiso):", !tienePermiso);                      // true

console.log("");

// --------------------------------------------
// 7. CONCATENACION DE STRINGS
// --------------------------------------------
console.log("--- CONCATENACION DE STRINGS ---\n");

let primerNombre = "Ana";
let apellido = "Garcia";

// Concatenacion con +
let nombreCompleto = primerNombre + " " + apellido;
console.log("Con +:", nombreCompleto);

// Template literals (interpolacion con backticks)
let saludo = `Hola, mi nombre es ${primerNombre} ${apellido} y tengo ${edad} anios.`;
console.log("Con template literal:", saludo);

console.log("");

// --------------------------------------------
// 8. OPERADOR typeof (repaso)
// --------------------------------------------
console.log("--- OPERADOR typeof ---\n");

console.log("typeof nombre:", typeof nombre);       // string
console.log("typeof edad:", typeof edad);           // number
console.log("typeof PI:", typeof PI);               // number
console.log("typeof esMayor:", typeof esMayor);     // boolean
console.log("typeof null:", typeof null);           // object (bug historico)
console.log("typeof undefined:", typeof undefined); // undefined

console.log("\n============================================");
console.log("   FIN DE EJEMPLOS");
console.log("============================================");
