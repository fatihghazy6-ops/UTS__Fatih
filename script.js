//Menentukan persen diskon berdasarkan subtotal
function hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
        return 10;
    } else if (subtotal >= 50000) {
        return 5;
    } else {
        return 0;
    }
}
function hitungBelanja() {
    let nama = document.getElementById("nama").value;
    let harga = Number(document.getElementById("harga").value);
    let jumlah = Number(document.getElementById("jumlah").value);
    let status = document.getElementById("status").value;
    let hasil =document.getElementById("hasil");

    //Validasi input
    if (nama === "" || harga <= 0 || jumlah <= 0) {
        hasil.innerHTML = "Lengkapi semua data sing bener yo!";
        return;
    }
     let subtotal = harga * jumlah;
     let diskon = hitungDiskon(subtotal);

     //Tambahan diskon untuk member
     if (status ==="member") {
        diskon += 5;
     }

     let potongan = subtotal * diskon / 100;
     let total = subtotal - potongan;

     hasil.innerHTML =
     "Pembeli: " + nama + "<br>" +
     "Subtotal: Rp" +subtotal +"<br>" +
     "Diskon: " + diskon + "% (Rp" + potongan + ")<br>" +
     "Total bayar: Rp" + total;

     //Simulasi harga 1 sampai 5 buah
     let simulasi = "";
     for (let i = 1; i <= 5; i++) {
        simulasi += i + "buah = Rp" + (harga * i) + "<br>";
     }
     document.getElementById("simulasi").innerHTML = simulasi;

    function newFunction() {
        return Number(document.getElementById("harga").value);
    }
}