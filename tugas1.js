const cekHariKerja = (day) => {
  day = day.toLowerCase();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => item === day);
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

const check = (params, metode) => {

  if (params == undefined || metode == undefined) {
    console.log("Semua parameter harus diisi");
  } else {
    if (typeof params != "string" || typeof metode != "string") {
      console.log("Tipedata parameter tidak sesuai");
    } else {
      metode = metode.toLowerCase();
      if (metode == "thencatch") {
        let promise = cekHariKerja(params);
        promise
        //ketika promise berhasil dijalankan maka akan menjalankan baris then
          .then((hasil) => {
            console.log(hasil);
          })
          //apabila promise gagal dijalankan maka akan menjalankan baris catch
          .catch((err) => {
            console.log(err.message);
          });
      } else if (metode == "trycatch") {
        (async () => {
          try {
            //apabila promise telah selesai dijalankan dan berhasil maka yang dijalanlan
            let promise = await cekHariKerja(params);
            console.log(promise);
            //apabila promise gagal dijalankan maka akan menjalankan baris catch
          } catch (err) {
            console.log(err.message);
          }
        })();
      } else {
        console.log("Metode yang dimasukkan tidak terdaftar")
      }
    }
  }
};

check();
console.log("...............................")
check(1,1);
console.log("...............................")
check("senin", "salah");
console.log("...............................")
check("Minggu", "thenCATCH");
check("SELASA", "TRYCATCH");

