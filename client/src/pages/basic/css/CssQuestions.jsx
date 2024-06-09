export default function CssQuestions() {
  return (
    <div>
      <div>CssQuestions</div>
      <div>
        (questions from github naufaldi) bisakah css menggunakan @import? bedanya padding & margin? unit baru css3 apa saja?
        unit mana saja untuk bantu desain web responsef? CSS specificity? cara membuat variable dalam css? bedanya inline,
        block dan inline-block? pseudo class? cara buat div dalam div lain berada di tengah? grid system? sebutkan aturan CSS
        Ruleset?
      </div>
      <div>
        <p className="mb-2">
          css dapat menggunakan @import untuk import file css ke file css lainnya. yang diimport bisa file css sesuai path
          atau file css yang tersimpan di internet. pertimbangannya file yang diimport ini mau disimpan di manapun akan
          dibaca lebih dulu baru file utama hingga jadi sedikit lambat dan keterbatasan browser lama
        </p>
        <p className="mb-2">
          padding dan margin berfungsi untuk mengatur ruang di sekitar element html. padding adalah ruang di dalam element
          antara konten dan border element (ruang internal). margin adalah ruang di luar element antara border element dan
          element lain atau tepi halaman (ruang external)
        </p>
        <p className="mb-2">
          unit baru css3 diantaranya: viewport units yakni unit yang didasarkan pada ukuran viewport (vw, vh, vmin, vmax);
          rem (root em) unit yang relatif terhadap ukuran font root, berbeda dengan em yang relatif terhadap ukuran font
          element induk. ch (character) unit ch didasarkan pada lebar karakter 0 dari font yang digunakan element untuk
          menetapkan lebar elemen teks berdasarkan ukuran font. misal 20ch artinya seukuran 20 karakter. Ex (x-height) unit
          ex didasarkan pada tinggi huruf kecil dari font yang digunakan element, berguna untuk mengatur tinggi element text
          berdasarkan tinggi karakter. Fr (fraction) unit fr digunakan dalam konteks grid dan mewakili sebagian dari ruang
          yang tersedia dalam grid container untuk tata letak grid fleksibel. Percentages css3 memperluas penggunaan
          percentages dimana dapat digunakan dalam lebih banyak konteks seperti padding, margin yang relatif terhadap ukuran
          induk.
        </p>
        <p className="mb-2">
          Unit-unit untuk membantu web responsive diantaranya: viewport units (vw, vh, vmax, vmin), precentages, rem, fr, em,
          css media queries
        </p>
        <p className="mb-2">
          css specificity adalah aturan browser untuk menerapkan style tertentu ketika ada konflik. style yang spesifikasinya
          paling besar yang akan diterapkan. berikut spesifikasinya: inline style 1000, id selector 100, class dan atribut
          selektor 10, type selektor 1, kombinasi selektor 111. jika ada !important maka diutamakan tapi masih mengikut
          aturan spesifikasi.
        </p>
        <p className="mb-2">
          variabel css dideklarasikan dengan -- dan diakses dengan fungsi var(), di dalam element :root. variabel bisa diubah
          di element spesifik dengan override nama variabel, dan bisa dibuat nilai opsional atau nilai default jika variabel
          tidak tersedia.
        </p>
        <p className="mb-2">
          block, inline, dan inline-block merupakan value dari property `display`. inline tidak memulai baris baru, hanya
          mengambil ruang yang diperlukan kotennya, tidak menerima property width dan height, margin dan padding vertikal
          tidak mempengaruhinya tapi horizontal berfungsi. block memulai baris barus mengambil seluruh lebar baris meskipun
          kontentnya sedikit, menerima properti dimensi width dan height, margin dan padding berfungsi normal baik horizontal
          maupun vertikal. inline-block tidak memulai baris baru, hanyak mengambil ruang yang diperlukan kontennya namun bisa
          diatur dimensi width dan height, margin dan padding berfungsi normal.
        </p>
        <p className="mb-2">
          pseudo-class adalah keyword yang ditambahkan ke selector dalam css untuk menentukan keadaan khusus dari element.
          diawali dengan :, berikut keadaan khusus: hover, active, focus, first-child, last-child, nth-child(2), not(.class),
          input[type=`checkbox`]:checked, iput:disabled, before, after.
        </p>
        <p className="mb-2">cara membuat div dalam div agar di tengah: dengan flexbox, grid, positioning, dan margin auto</p>
        <p className="mb-2">skip dulu di sini</p>
      </div>
    </div>
  );
}
