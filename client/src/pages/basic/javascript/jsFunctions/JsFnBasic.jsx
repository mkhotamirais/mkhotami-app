const JsFnBasic = () => {
  return (
    <pre>{`
// FUNCTION(Fn)
1. function declaration
function Fn() { return "function declaration" }
function Fn(param) { return "hello " + param }
function Fn(param1, param2 = "john") { return "Hello " + param1 + " and default param " + param2 }
console.log(Fn(), Fn('brendan'))
2. function expression (anonimouse function)
const Fn = function () { return "function expression" }
const Fn = function (param1, param2 = "john") { return "hello " + param1 + " and default param " + param2 }
console.log(Fn(), Fn('brendan'));
3. arrow
const Fn = () => { return "arrow function" };
const Fn = () => "arrow function" // fungsi ini sama seperti yang atas karena hanya "return"
const Fn = (param1, param2 = "abdul") => { return "hello " + param1 + " and default param " + param2 }
// jika tidak hanya return maka {} dan 'return' tidak bisa dihilangkan;
console.log(Fn(), Fn("brendan"));
4. self invoking fn (fungsi yang menjalankan diri)
(function Fn4() { console.log("self invoking fn declaration")})();
(function () { console.log("self invoking fn expression/anonimous")})();
(() => console.log("self invoking arrow fn"))();
5. recursive fn (fungsi di dalam fungsi)
function Fn5() {
  const name = 'john'
  function Fn5a() { return "halo " + name }
  return Fn5a();
}
console.log(Fn5());


// HOF (higher order function) and CALLBACK
HOF adalah fungsi yang menerima fungsi sebagai argumen atau mengembalikan fungsi sebagai hasil;
CALLBACK adalah fungsi yang menjadi argumen dari fungsi lain lalu dieksekusi di fungsi tersebut.

function myHof(cb){ return cb() }
function myHof = (cb) => cb()
function myCb(){ console.log("hello world")}
myHof(myCb) // hello world
myHof(function myCb(){ console.log("hello world 2")}) // hello world 2
myHof(() => console.log("hello world 3)) // hello world 3
((cb) => cb())(() => console.log("halo world 4")); // hello world 4

    `}</pre>
  );
};

export default JsFnBasic;
