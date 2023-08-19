/* 
    DOM MANIPULATION (NODE)

    DOM manipulation node merupakan sebuah cara untuk membuat,mengubah dan menghapus nilai dom dari node nya,

    document.createElement() = membuat sebuah tag baru untuk html
    document.createTextNode() = membuat tulisan yang ingin di masukan kedalam tag yang sudah di buat
    node.appendChild() = meyimpan element di akhir
    node.insertBefore() =   bisa untuk menyimpan element di tempat tertentu
    parentNode.removeChild() = untuk meghapus 
    parentNode.replaceChild() = untuk mengganti

    node dan parentNode akan di ganti nilainya dengan element yang akan kita tergetkan
*/

/* ingin membuat paragraf baru */
    // membuat tag dan menuliskan text
const buatTagP = document.createElement("p");  //output <p></p>
const masukanP = document.createTextNode("Paragraf Baru");  //output Paragraf baru
    // memasukan tag dan text yang sudah di buat
buatTagP.appendChild(masukanP); //output <p>Paragraf baru</p>
    // mengambil element yang ingin di tambahkan sebuah tag htmlnya
const secA = document.getElementById("a");
    // memasukan nilai kedalam htmlnya
secA.appendChild(buatTagP); 

 /* ingin membuat li baru */
 const newLi = document.createElement("li");
 const textLi = document.createTextNode("item ke 4");
 newLi.appendChild(textLi);

    // jika ingin melakukan insert tag di antara html maka kita harus mengetahui paretnya dan kita harus tau tempat element mana yang ingin di masukan
    // mengambil parent ul di sec B
const secB = document.querySelector("section#b ul");
    // menentukan ingin di taruh mana
const item = document.querySelector("section#b ul li:nth-child(2)")
    // ada 2 parameter, yang pertama element baru html, yang kedua ingin di masukan sebelum apa
secB.insertBefore(newLi,item);

/* ingin melakukan remove link pada html */
    // mencari parent terlebih dahulu yaitu section A kita pakai secA aja
    // mengambil link hrefnya
const link = document.querySelector("#a a"); //menggunakan query yaotu dengan mengambil tag a
    // memasukan parent nya lalu kita ingin mengghapus bagian linknya dengan memasukan link
secA.removeChild(link)

/* ingin melakukan replace di dalam html */
    // kita harus mengambil parentnya terlebih dahulu yaitu section B
const sebtion = document.querySelector("section#b");
    // memilih bagian mna yg ingin di ganti
const p4 = document.querySelector("section#b p");
    // membuat tulisan baru
const h2 = document.createElement("h2");
const tex = document.createTextNode("Judul H2");
h2.appendChild(tex);
    // mengganti tulisanya, parameter pertama merupakan tulisan baru,parameter ke 2 merupakan bagian mana yang inginn di ganti
sebtion.replaceChild(h2,p4)