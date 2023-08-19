/*  
    DOM Manipulation (ELEMENT)

    DOM manipulation merupakan sebuah cara kita unutk memanipulasi sebuah object yang sudah di tampung di dalam sebuah variabel
    dalam DOM manupulation ini ada beberapa cara untuk meakukanya yaitu 
        document.innerHTML = untuk merubah nilai dari html
        document.style = untuk merubah style atau css
        document.setAttribute() = untuk menambahkan attribuet pada element html
        document.getAttribute() = untuk mengambil nilai attribut pada html sama seperti getter pada enkapsulasi
        document.remoeAttribute() = untuk menghapus atribut
        document.classList = untuk melakukan manilupasi didalam atribute class yang ada didalam html
        document.classList.add()  = untuk menambahkan nama class baru di dalam class
        document.classList.remove()  =  untuk menghapus nilai dari class
        document.classList.toggle()  =  untuk melakukan cek class, jika ada maka akan di hapus jika tidak ada maka akan di tambahkan
        document.classList.item()  =  untuk mengeahui nama class dari sebuah element
        document.classList.contains()  =  untuk mengcek apakah ada nilai yang di maksud return sebuah boolean
        document.classList.replace()  =  untuk mengganti nama classnya

*/

const ambilHtml = document.getElementById("judul");
const ambilP = document.getElementsByTagName("p");
const tambahAttrib = document.getElementById('b');
const getAtrib = document.querySelector("section#a a");

const editClass = document.querySelector("section#a .p2");
const toogel = document.body;

// melakukan edit pada nilai html dan 
// dapat dilalukan untuk menambahkan suatu tag html
ambilHtml.innerHTML = "<u>Merubah Hello World</u>";


// .style.<propertycss> = "value";
// untuk merubah nilai style pada css
ambilP[0].style.backgroundColor = "magenta";

// .setAttribute() merupakan code untuk menambahkan atribut pada html seperti atribut id,class,required,name,readonly dsb
// untuk value nya yang pertama adalah nama dari attribut lalu yang kedua adalah nilai dari atrubt tersebut
tambahAttrib.setAttribute("name","SectionB");

// .getAttribute() unutk mengambil nilai dari suatu hasil yang di tangkap
console.log(getAtrib.getAttribute("href"));

// .removeArrtibute() untuk menghapus nilai atribut dari html
console.log(getAtrib.removeAttribute("href"));

// .add() untuk menambahkan nilai class baru dalam html
editClass.classList.add("label","item","kelas","list");

// .remove() berfungsi untuk menghapus nilai yang ada dalam atribute class, jika ada maka akan terhapus jika tidak maka tidak terjadi apa apa
editClass.classList.remove("label");

// .toogle() akan melakukan cek, jika tidak ada maka akan menambahkan labeltersebut, jika ada maka akan menghapus label tersebut
// .toogle() akan lebih cocok untuk malkukan trigger button jika ingin mengganti background
toogel.classList.toggle("muda"); // bisa di coba di jalankan di console jika penasaran

// .item() untuk melihat nilai dari class tersebut, di isi dengan nilai index yang ada dalam class
console.log(editClass.classList.item(2)); // akan return sebuah value berdasarkan indexnya

// .contains() maka akan meakukan return sebuah nilai true atau false jika element yang di maksud ada
console.log(editClass.classList.contains("item")); // bernilai true karena class dengan nama item ada

// .replace() nilai awal adalah nilai yang ingin di ganti, lalu nilai sekanjutnya dalah nilai baru yang ingin di ganti
console.log(editClass.classList.replace("kelas","item2"));

