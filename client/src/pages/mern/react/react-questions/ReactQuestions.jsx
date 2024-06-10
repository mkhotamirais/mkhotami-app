export default function ReactQuestions() {
  return (
    <div>
      <div>ReactQuestions</div>
      <div>
        (from eduwork) Slicing? Slateless component? cara simpan data user login? redux & 3 komponen redux? HOC React? funcsi
        DOM? API & cara konsum API dari db tempat lain? synchronous & asynchronous? fungsi cookies dan localstorage dalam
        login? fungsi method POST, GET, PUT, PATCH, DELETE? jelaskan pembuatan dan penyelesaian 1 web app kompleks? mengapa
        nodejs terapkan single-thereads? apa kegunaan HOC pada usememo react? untuk apa file yaml?
      </div>
      <div>
        <p className="mb-2">
          Slicing adalah proses pemecahan desain UI menjadi komponen-komponen kecil yang reusable. tujuannya agar lebih
          modular, terstruktur dan mudah dikelola
        </p>
        <p className="mb-2">
          Stateless component atau functional component adalah komponen yang tidak memiliki state internal sendiri, hanya
          terima data dari parent component. hanya bertugas merender UI statis atau UI yang hanya bergantung pada props,
          tanpa perubahan internal
        </p>
        <p className="mb-2">
          Cara simpan data user login adalah dengan membuat token dengan jwt yang berisi data user, lalu token itu disimpan
          di localstorage atau cookie kemudian didecode untuk mendapat data user login.
        </p>
        <p className="mb-2">
          Redux pustaka javascript untuk state management yang memusatkan data state di satu state global agar pengelolaan
          oleh setiap komponen lebih mudah. 3 komponen utamanya adalah Store, Actions, Reducers. Store adalah object yang
          menyimpan seluruh state applikasi jadi setiap aplikasi hanya memiliki satu store sebagai global state, store
          menyediakan beberapa menthod seperti getState, dispatch, dan subscribe. Actions adalah oject javascript biasa yang
          mengirimkan info dari app ke store sebagai satu satunya sumber informasi yang mana memiliki type sebagai penentu
          jenis aksi, juga bisa membawa payload data yang diperlukan reducer untuk update state. Reducer adalah fungsi murni
          yang mengambil state saat ini dan action sebagai argumen lalu kembalikan state baru. jadi reducers menentukan
          bagaimana state berubah sebagai response terhadap actions yang dikirim ke store.
        </p>
        <p className="mb-2">
          HOC React adalah Hihger Order Component yakni fungsi yang menerima komponen lain sebagai argumen dan mengembalikan
          komponen baru dengan kemampuan tambahan berupa logika dan fungsionalitas tertentu
        </p>
        <p className="mb-2">DOM adalah antarmuka pemrograman untuk manipulasi dokumen HTML</p>
        {/* lewat ke 3 pertanyaan akhir */}
        <p className="mb-2">nodejs menerapkan single-threads</p>
        <p className="mb-2">
          yaml (yaml aint markup language) adalah sebuah format serialisasi data yang sederhana, ringan, dan mudah dibaca
          manusia. sintaksnya bersih dain intuitif, struktur hierarki menggunakan indentasi, datanya direpresentasikan dengan
          pasangan key:value, key sebelah kiri : value sebelah kanannya. Fungsinya untuk pengembangan perangkat lunak
          khususnya dalam penyimpanan dan pertukaran data antar sistem yang berbeda. selain itu juga untuk konfigurasi sistem
          karena kemampuannya untuk menangani struktur data yang kompleks dan dengan cara yang lebih mudah dipahami manusia.
        </p>
        <p className="mb-2"></p>
      </div>
      {/* PERTANYAA LAINNYA */}
      <div className="mb-2">
        (from github naufaldi) apa itu jsx & bagaimana bisa dirender di html? lifecycle? real dom vs virtual dom? mengapa
        reactjs menggunakan virtual dom? kegunaan prop key, apa yang terjadi jika tidak menggunakannya? kapan dan mengapa
        menggunakan state management? hooks yang pernah digunakan dan kegunaannya? mengapa hooks selalu dipanggil di top
        level component? HOC? kapan pake context & kapan pakai redux? bedanya pure component dan functional component?
        bedanya class component dan functional component? apa itu SSR dan CSR dan kapan digunakannya? bedanya controlled vs
        uncontrolled component? cara agar browser dan server dapat komunikasi tanpa reload halaman? apa itu memization dan
        apa manfaatnya? bedanya useMemo dan useCallback?
      </div>
      <p className="mb-2">
        jsx adalah ekstensi sintaks untuk javascript yang biasanya digunakan react yang memungkinkan penulisan kode seperti
        html di dalam js. biasanya digunakan untuk html dan expresi javascript bisa disisipkan dengan kurung kurawal. cara
        render jsx ke html perlu library react dan react dom. file jsx dikonversi ke javascript dengan babel lalu dirender
        dengan kata kunci ReactDOM.render
      </p>
      <p className="mb-2">
        lifecycle mengacu pada serangkaian fase yang terjadi dalam siklus hidup komponen react yang meliputi mouting
        (pemasangan), updating (pembaruan) dan unmounting (pembongkaran). fase mounting menjalankan method constuctor(),
        render() dan componentDidMount(). fase updating menjalankan method souldComponentUpdate(), render(), dan
        componentDidUpdate(). fase unmounting menjalankan method componentWillUnmount()
      </p>
      <p className="mb-2">Real DOM vs Virtual DOM.</p>
      <p className="mb-2">Reactjs menggukanakan virtual dom karena</p>
      <p className="mb-2">kegunaan prop key dan apa yang terjadi jika tidak menggunakannya</p>
      <p className="mb-2">kapan dan mengapa menggunakan state management</p>
      <p className="mb-2">hooks yang pernah digunakan dan kegunaannya</p>
      <p className="mb-2">mengapa hooks selalu dipanggil di top level component</p>
      <p className="mb2">HOC</p>
      <p className="mb2">kapan pake context & kapan pakai redux</p>
      <p className="mb2">bedanya pure component dan functional component</p>
      <p className="mb2">bedanya class component dan functional component</p>
      <p className="mb2">apa itu SSR dan CSR dan kapan digunakannya</p>
      <p className="mb2">bedanya controlled vs uncontrolled component</p>
      <p className="mb2">cara agar browser dan server dapat komunikasi tanpa reload halaman</p>
      <p className="mb2">apa itu memization dan apa manfaatnya</p>
      <p className="mb2">bedanya useMemo dan useCallback</p>
    </div>
  );
}
