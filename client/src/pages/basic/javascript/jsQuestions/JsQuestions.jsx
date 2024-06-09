export default function JsQuestions() {
  return (
    <div>
      <div>JsQuestions</div>
      <div className="mb-3">
        (questions from github naufaldi) async & sync? var, const, let? tipe data js? dom? array vs object? == vs ===? this?
        arrow fn & regular fn? undefined & null? while loop & for loop? closure? setTimeout itu sync atau async? HOF &
        penggunaannya? hoisting? callback? promise? pada promise bagaimana jika catch tidak dijalankan? concurrency &
        parallelism? bagaimana js yang notabene nya single-threaded menangani proses asynchronous? implementasi oberserver
        pattern dengan menampilkan input user dari feld input?
      </div>
      <div>
        <p className="mb-2">
          synchronous adalah cara eksekusi tugas atau operasi dalam program secara berurutan satu per satu, setiap tugas
          harus selesai sebelum tugas berikutnya dimulai. asynchronous adalah cara eksekusi tugas atau operasi dalam program
          secara paralel atau indemenden tanpa harus menunggu tugas lain selesai, program dapat melanjutkan tugas berikutnya
          sementara tugas asinkron sedang berjalan
        </p>
        <p className="mb-2">
          var, const dan let adalah kata kunci untuk mendeklarasikan variabel, ketiganya memiliki perbedaan dalam hal scope,
          hoisting, dan mutabilitas. var scope (fungsi & block) hoisting (di-hoist dengan inisialisasi undefined) redeklarasi
          (boleh) mutabilitas (boleh). let scope (block) hoisting (hoisting tanpa inisialisasi, temporal dead zone)
          redeklarasi (tidak boleh dalam cakupan yang sama) mutabilitas (boleh). const sama dengan let bedanya mutabilitas
          tidak dapat diubah setelah inisialisasi kecuali untuk properti objek atau array;
        </p>
        <p className="mb-2">
          tipe data dalam javascript: tipe data prifitif 1. number (bilangan bulat atau desimal) 2. string (urutan karakter)
          3. boolean (true or false) 4. null (nilai kosong atau non-eksisten secara sengaja) 5. undefined (variabel yang
          belum diinisiasi atau properti yang tidak ada) 6. symbol (ES6, identitas unik); tipe data komposit 7. object
          (koleksi data dengan struktur kompleks terdiri dari pasangan key-value) 8. array (objek khusus yang mewakili daftar
          nilai terurut) 9. function (objek khusus yang mewakili kode yang dapat dipanggil)
        </p>
        <p className="mb-2">
          array dan object merupakan tipe data untuk menyimpan koleksi nilai bedanya: array adalah kumpulan data yang
          diurutkan dan diakses melalui index numerik dimulai dari 0 dan dideklarasikan menggunakan tanda kurung siku.
          methodnya push, opo, shift dll, bisa diiterasi dengan for ... of atau forEach. object adalah kumpulan key-value
          yang tidak berurutan untuk menyimpan data yang berhubungan dideklarasikan degnan kurung kurawal, methods nya
          Object.keys, Object.values dll, bisa diiterasi dengan for ... in.
        </p>
        <p className="mb-2">
          DOM adalah antarmuka pemrograman berbasis objek yang mewakili struktur dokumen HTML. ini adalah model berorientasi
          objek dari halaman web yang bisa dimanipulasi dengan bahasa pemrograman seperti javascript secara dinamis.
          manipulasi dom dilakukan dengan 1. akses element 2. ubak konten 3. ubah atribut 4. tambah dan hapus elemen 5. event
          handling.
        </p>
        <p className="mb-2">
          == (loose equality) dan === (strict equality) adalah operator perbandingan untuk memeriksa kesamaan pada dua nilai.
          Loose Equality membandingkan nilai dengan konversi tipe jika diperlukan, yakni kedua nilai tidak perlu identik.
          Strict Equality membandingkan nilai tanpa konversi tipe, kedua nilai identik.
        </p>
        <p className="mb-2">
          this adalah kata kunci yang merujuk pada konteks di mana fungsi tersebut dipanggil. konteksnya berupa 1. global
          konteks (this = window) 2. fungsi biasa (this = window) 3. fungsi strict mode (this = undefined) 4. method object
          (this = object tersebut) 5. constructor function (this = instance baru dari objek yang dibuat) 6. arrow function
          tidak memiliki konteks this. 7. event handler merujuk pada dom yang menerika event tersebut. bisa dengan method
          call, apply dan bind.
        </p>
        <p className="mb-2">
          arrow function penulisannya lebih singkat, tidak memiliki konteks this tapi mengambil dari lingkup sekitar (lexical
          scoping), tidak bisa digunakan sebagai konstruktor untuk membuat objek baru, tidak memiliki arguments. Regular
          Function memiliki konteks this, mendukung arguments, dan bisa digunakan sebagai konstruktor.
        </p>
        <p className="mb-2">
          undefined adalah nilai default yang diberikan kepada variabel yang belum diinisialisasi atau ketika fungsi yang
          tidak mengembalikan nilai. Null adalah nilai khusus yang menunjukkan bahwa variabel atau objek tidak memiliki nilai
          atau nilai yang tidak ada.
        </p>
        <p className="mb-2">
          while loop sintaksnya sederhana, hanya kata kunci `while` lalu kondisi, inisialisasi variabel biasanya dilakukan
          sebelum loop dimulai, ini digunakan ketika jumlah iterasi tidak pasti dan hanya ada kondisi yang perlu dipenuhi
          untuk melakukan iterasi. for loop lebih terstruktur, termasuk inisialisasi, kondisi dan ekspektasi iterasi ditulis
          dalam satu baris, digunakan saat mengetahui jumlah iterasi, kondisi dan ekspektasi iterasi.
        </p>
        <p className="mb-2">
          closure adalah kemampuan sebuah fungsi untuk mengakses variabel dari luar scope nya di mana fungsi tersebut
          dedeklarasikan bahkan setelah scope luar tersebut selesai dieksekusi, kondisinya biasanya saat terdapat fungsi yang
          berisi fungsi lain (inner function / fungsi dalam) dan fungsi dalam tersebut mengakses fungsi variabel dari fungsi
          luar. kata kuncinya (scope, inner function, akses variabel)
        </p>
      </div>
    </div>
  );
}
