const JsObject = () => {
  return (
    <pre className="text-sm">{`
// 1. Object literal, Fn Declaration (object literal inside fn), Constructor Fn (using this, no arrow fn, not recommended to use class)
const obj = {};
obj.id = 1;
obj.name = "object literal"
const obj2 = { id: 1, name: "object literal" };
obj12.name = "change name";
obj12.detail = "add detail";
console.log(obj, obj.id, obj.name)

const Fn = (id, name) => {
  const obj = { id: id, name: name };
  return obj;
};
const Fd1 = Fn(1, "function declaration 1");
const Fd2 = Fn(2, "function declaration 2");
console.log(Fd1, Fd2, Fd1.id, Fd1.name);

function Fn(id, name) {
  //   let this = Object.create(Fn2.prototype) // implicitly
  this.id = id;
  this.name = name;
  //   return this // implicitly
}
const Cf1 = new Fn(1, "constructor function 1");
const Cf2 = new Fn(2, "constructor function 2");
console.log(Cf1, Cf2, Cf1.id, Cf1.name);

// 4. Object create
const objA = { id: 1, name: "objectA" };
const objB = Object.create(objA);
obj4.asal = "jakarta";
console.log(objA, objB, objB.);

// 5. Object method &, Object to arr & object to string;
const objA = { nama: "ahmad", umur: 21 };
const objB = {
  nama: "abdul",
  panggil1: function (name) {return "this is es5 method with property" + this.name},
  panggil2(name) {return \n"This is es6 method with property" + this.name;},
  panggil3() => "This is arrow function without property, no this"
};
({ nama, umur } = { nama: "ahmad", umur: 25 }); // anonimous object by destructuring;
console.log(objB.panggil1("ahmad"), nama, umur);

const objToArr1 = Object.values(obj5);
const objToArr2 = Object.values(obj6);
// JSON.stringify can't convert method of object; Anonimous object by destructuring
const objToStr1 = JSON.stringify(obj5);
const objToStr2 = JSON.stringify(obj6);
console.log(objToArr1, objToArr2, objToStr1, objToStr2);
    `}</pre>
  );
};

export default JsObject;
