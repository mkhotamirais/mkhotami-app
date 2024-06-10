// import UseMemoBasic from "./UseMemoBasic";

import { memo, useMemo, useState } from "react";

const UseMemo = () => {
  return (
    <div>
      <div>UseMemo</div>
      <p>
        memo dan useMemo, keduanya berfungsi untuk memoisasi komponen. memo memoisasi keseluruhan komponen. useMemo memoisasi
        nilai di dalam komponen. memo hanya memoisasi referensi dari props yang diterima oleh komponen tersebut. nilai lokal
        tidak akan dimemoisasi, jika ingin memoisasi nilai lokal maka gunakan useMemo.
        <br />
        useMemo dan useCallback sama-sama untuk memoisasi, bedanya useMemo untuk memoisasi value sedangkan useCallback untuk
        memoisasi function. <br />
        memoisasi komponen adalah teknik dalam react untuk meningkatkan performa aplikasi dengan menghindari render ulang
        yang tidak perlu. melalui penyimpanan dan pembanding hasil render sebelumnya.
        <br />
        saat komponen render ulang, react melakukan sejumlah pekerjaan di belakang layar, termasuk membandingkan virtual dom
        untuk menentukan apakah perlu perbarui tambilan di aktuan DOM. proses ini menjadi malah secara komputasi apalagi
        logikanya kompleks. <br />
        ketika komponen dibungkus denga memo react secara otomatis melakukan memoisasi komponen tersebut dan memutuskan
        apakah perlu dirender ulang berdasarkan perubahan props atau tidak. <br />
        proses yang mahal secara komputasi mengacu pada operasi atau perhitungan yang membutuhkan banyak sumber daya
        komputasi, seperti waktu CPU atau memori. Dalam konteks React, ini dapat merujuk pada operasi yang memakan waktu saat
        merender komponen, seperti melakukan perhitungan yang kompleks atau memproses banyak data.
      </p>
      <Memo1 />
      <UseMemo1 />
    </div>
  );
};

export default UseMemo;

const Memo1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="border rounded p-2 my-1">
      Count: {count}
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>click me plus count</button>
      <br />
      Memo1 re-render karena count berubah;
      <br />
      komponen Memo1Comp1, re-render karena berada dalam komponen Memo1 yang re-render, padahal tidak ada perubahan pada
      komponen Memo1Comp1.
      <br />
      komponen Memo1Comp1, tidak re-render (hanya render sekali saja) walau berada dalam komponen Memo1 yang re-render karena
      komponen Memo1Comp3 dibungkus dengan memo.
      <br />
      <Memo1Comp1 />
      <Memo1Comp2 />
    </div>
  );
};

const Memo1Comp1 = () => {
  console.log("memo1comp1");
  return <div>Memo1Comp1</div>;
};
const Memo1Comp2 = memo(() => {
  console.log("memo1comp2");
  return <div>Memo1Comp2</div>;
});
Memo1Comp2.displayName;

const UseMemo1 = ({ numbers = [1, 2, 3] }) => {
  // const total = useMemo(() => {
  //   console.log("Calculating total...");
  //   return numbers.reduce((sum, number) => sum + number, 0);
  // }, [numbers]);
  const total = () => {};

  return (
    <div className="border rounded p-2 my-1">
      UseMemo1
      <div>Total: {total}</div>
    </div>
  );
};
UseMemo1.propTypes;
