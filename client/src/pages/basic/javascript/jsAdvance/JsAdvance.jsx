import JsClass from "./JsClass";
import JsDestructuring from "./JsDestructuring";
import JsObject from "./JsObject";
import JsPromise from "./JsPromise";
import JsPrototype from "./JsPrototype";

const JsAdvance = () => {
  return (
    <section>
      <h2>JsAdvance</h2>
      <p>Key Words: Object, Property, Method, Class, Prototype</p>
      <p>
        Semua js valui kecuali primitives adalah objek, property = variabel dalam objek, method = fungsi dalam objek, class
        cara lain penulisan objek tapi di belakang layar tetap objek. Tipe data apapun pasti objek artinya pasti punya
        prototype. Array.prototype; Number.prototype; Object.prototype; Date.prototype; dll
      </p>
      <JsObject />
      <ul className="list-inside list-disc">
        <li>
          <b>Prototype</b> konsepnya mirip dengan Class
          <JsPrototype />
        </li>
        <li>
          <JsClass />
        </li>
        <li>
          <b>Destructuring dan Rest parameter</b>
          <JsDestructuring />
        </li>
        <li>
          <b>Promise</b> adalah Object yang merepresentasikan berhasil atau gagal suatu event yang asynchronous di masa yang
          akan datang.
          <br />
          promise (fulfilled / rejected / pending) = janji (terpenuhi, ingkar, tenggat).
          <br />
          callback (resolve / reject / finally) resolve if fulfilled; reject if rejected; finally if finish pending.
          <br />
          action (then, catch)
          <JsPromise />
        </li>
      </ul>
    </section>
  );
};

export default JsAdvance;
