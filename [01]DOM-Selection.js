/* 
    DOM Selection 

    DOM Selecttion merupakan tahap awal unutk melakukan seleksi atau pemilihan elemt pada html
    memiliki beberapa method 

        getElementById() return sebuah element (memilih element berdasarkan ID pada html)
        getElementsByTagName() return html collection (memilih berdasarkan tag html)
        getElementsByClassName() return html collection (memilih berdasarkan class)
        querySelector() return sebuah element 
        querySelectorAll() return sebuah nodelist

    jika ingin melakukan selection pada html maka kita harus menuliskan root nya terlebih dahulu root disini merupakan document
    document merupakan root dari sebuah halaman website contoh penulisan
        document.getElementById("buku")  //menyuruh javascript untuk mencarikan kita tagId yang berisikan "judul" didalam document html
*/

const ambilJudul = document.getElementById("judul"); 
console.log(ambilJudul);// mengembalikan nilai 1 element

// mengubah warna tulisan, 
// jika ingin mengubah style maka hanya perlu memanggil variabel penampung dari document tadi lalu kita beri .style berfungsi untuk mengubah style
// lalu kita ingin mengubah apa jika warna berarti color,lebar width dst
ambilJudul.style.backgroundColor = "yellow";
ambilJudul.style.color = "red";

// ganti isi dari sebuah html
ambilJudul.innerHTML = "Ganti JUdul";

// mengambil berdasarkan tag html
// memiliki isi beripa HTML collection atau di dalam array
const ambilP = document.getElementsByTagName("p");

// karena metod getByTagName memiliki nilai array maka kita perlu menuliskan nilai index nya
// baru kita dapat melakukan manipulasi dalam object tersebut
for(let i = 0; i < ambilP.length ; i++){
    ambilP[i].style.backgroundColor = "magenta";
}

// mengambil class dari html
// memiliki nilai berupa HTML Collection
const getClass = document.getElementsByClassName("p1");
getClass[0].innerHTML = "Ini mengganti nilai";

// mengambil berdasarkan kriteria tertentu yaitu sebuah selector css
// menghasilkan sebuah element jadi tidak dapat mengembalikan banyak nilai
const getQuery = document.querySelector("section#b ul li:nth-child(2)");
getQuery.style.backgroundColor = "lightblue";
console.log(getQuery)

// hanya bisa menargetkan 1 nilai saja jika dalam kontkes css selector harusnya semua tag p ikut terambil
// tetapi karena ini querySelector hanya mengambalikan 1 element jadi dia hanya menemukan element yang pertamakali ditemukan
const p = document.querySelector("p");
p.style.backgroundColor = "red";

// konteksnya sama seperti querySelector tetapi dia mengambil semua nilai yang ada pada selector yang telah di buat
// jika kita memasukan selector p di css maka dia akan mengambil semua tag p dalam html dan querySelectorAll lah yang bisa melakukan ini
const queryAll = document.querySelectorAll("p");
console.log(queryAll);

queryAll[2].style.fontSize = "30px";
for(let i = 0;i<queryAll.length;i++){
    queryAll[i].style.color = "cyan";
}