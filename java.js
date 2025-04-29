function confirmDownload() { //Untuk membuat fungsi bernama confirmDownload
    const confirmation = confirm("lanjut dowload ga nih?"); //Menampilkan kotak dialog dengan pesan "Mau download CV ku nih?"
    if (confirmation) { //Jika pengguna klik  OK
      window.location.href = "fadhiltzy.png"; //Maka akan mendownload file cv 
      return true; //Mengembalikan nilai true untuk menandakan unduhan dilanjutkan
    }else{ //Jika user tidak klik tombol ok
        window.location.href = "index.html"; //Maka akan tetap di halaman awal/index 
        return false;
    }
  }