/* 
    DOM Events

    merupakan sebuah teknik dimana kita menangkap sebauh inputan atau trigger dari user dapat di lakukan dengan 2 teknik
        Event Handler = menggunakan tambahan attribut html di dalamnya atau kita tambahkan function sendiri
        addEventListener() = menambahakn method
    
        untuk menggunakan event handler cara yang paling mudah untuk di ingat yaitu dengan menggunakan keyword on(isidenganaktivitas)
        onclick saat click
        ondblclick saat double click

    saat kita menggukana event handler inline yang menambahkan atribut tambhaan pada htmlnya itu kurang di sarankan karena mengubah struktur dari html tersebut
    maka sebagai gantinya lebih baik menuliskan event handlernya didalam file js cara penulisanya harus 
        1. ambil terlebih dahulu object mana yang akan di ganti
        2. buat sebuah function untuk mengganti object tersebut
        3. panggil object tersebut lalu tambahkan event yang akan di gunakan 
            contoh
            const p1 = document.getElementById("pertama");
            p1.onclick = gantiBackground; //tidak perlu menggunakan tanda()karena bisa membuat function itu lgsg dijalankan

            function gantiBackground(){
                p1.style.backgroundColor = "yellow"
            }

    addEventListener
    kelebihan dari ini dia dapat menggunakan function didalamnya
    cara penggunaan sama saja akan tetapi addEventListener tergolong metode baru dalam event handler
            contoh:
                const p1 = document.getElementById("pertama");
                p1.addEventListener("namaEvent",function)
                p1.addEventListener("click",function(){
                    alert(123)
                })

*/
const judul = document.getElementById("judul");
const p1 = document.querySelector("section#a .p1")

// Event hendler dengan inline HTML
function gantiwarnaP2() {
    p1.style.backgroundColor = "lightblue"
}

/* event handler dengan menggunakan onclick didalam file jsnya */
judul.onclick = gantiwarna;

function gantiwarna() {
    judul.style.backgroundColor = "lightgreen"
}

const p4 = document.querySelector("section#b p")

p4.addEventListener("click",function(){
    // ambil parent
    const ul = document.querySelector("section#b ul")
    // membuat tag html
    const li = document.createElement("li")
    // membuat isi dari tag html
    const text = document.createTextNode("list Baru")
    // memasukan isi text ke dalam tag html
    li.appendChild(text)
    // memasukan li kedalam ul
    ul.appendChild(li)
})
