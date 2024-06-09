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
      </div>
      <div>
        (from github naufaldi) apa itu jsx & bagaimana bisa dirender di html? lifecycle? real dom vs virtual dom? mengapa
        reactjs menggunakan virtual dom? kegunaan prop key, apa yang terjadi jika tidak menggunakannya? kapan dan mengapa
        menggunakan state management? hooks yang pernah digunakan dan kegunaannya? mengapa hooks selalu dipanggil di top
        level component? HOC? kapan pake context & kapan pakai redux? bedanya pure component dan functional component?
        bedanya class component dan functional component? apa itu SSR dan CSR dan kapan digunakannya? bedanya controlled vs
        uncontrolled component? cara agar browser dan server dapat komunikasi tanpa reload halaman? apa itu memization dan
        apa manfaatnya? bedanya useMemo dan useCallback?
      </div>
    </div>
  );
}
