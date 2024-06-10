const JsObject = () => {
  return (
    <pre className="text-sm">{`
// OBJECT
1. Object literal
const obj = {};
obj.id = 1;
obj.name = "object literal";
const obj2 = { id: 1, name: "object literal" };
obj2.name = "name property changed";
obj2.detail = "detail property added";
console.log(obj, obj2.name); // { id: 1, name: 'object literal' } name property changed
2. Fn Declaration (object literal inside fn)
const Fn = (id, name) => {
  const obj = { id: id, name: name };
  return obj;
};
const Fd1 = Fn(1, "function declaration 1");
const Fd2 = Fn(2, "function declaration 2");
console.log(Fd1, Fd2.name); // { id: 1, name: 'function declaration 1' } function declaration 2
3. Constructor Fn (using this, no arrow fn, not recommended to use class)
function Fn(id, name) {
  //   let this = Object.create(Fn2.prototype) // implicitly
  this.id = id;
  this.name = name;
  //   return this // implicitly
}
const Cf1 = new Fn(1, "constructor function 1");
const Cf2 = new Fn(2, "constructor function 2");
console.log(Cf1, Cf2.name); // Fn { id: 1, name: 'constructor function 1' } constructor function 2
// This constructor function may be converted to a class declaration
4. Object create
const objA = { id: 1, name: "objectA" };
const objB = Object.create(objA);
obj4.asal = "jakarta";
console.log(objA, objB, objB.name); // { id: 1, name: 'objectA' } objectA
5. Object method
const obj = {
  nama: "property-name",
  panggil1: function (nama) { return "ES5 method with property " + this.nama + " and parameter " + nama },
  panggil2(nama) { return "ES6 method with property" + this.name + " and parameter " + nama },
  panggil3: (nama) => "Arrow function without property, no this and parameter " + nama,
};
console.log(obj.panggil1("ahmad")); // ES5 method with property property-name and parameter ahmad
6. Object default methods
// Object to arr with Object.values
// Object to string with JSON.stringify


// CLASS (constructor function) AND PROTOTYPE ()
// Class: penulisan constructor function dengan es6
// Prototype: mekanisme yang memungkinkan objek untuk mewarisi properti dan metode dari objek lain
class Kelas {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
    panggil(name) {
      return "Hello property " + this.name + " and parameter " + name;
    }
}
const John = new Kelas(1, "john");
console.log(John.panggil("doe"), new Kelas(2, "brendan").panggil("eich"));

    `}</pre>
  );
};

export default JsObject;
