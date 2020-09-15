const cekPrima = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pembagi = 0;
      for (let i = 1; i <= params; i++) {
        if(params <= 0){
          pembagi= 0
        }else if (params == 1) {
          pembagi = 2;
        } else if (params % i == 0) {
          console.log(i);
          pembagi = pembagi + 1;
        }
      }
      let cek = pembagi == 2;
      if (cek) {
        resolve(`${params} adalah bilangan prima`);
      } else {
        reject(new Error(`${params} bukan bilangan prima`));
      }
    }, 3000);
  });
};

const cekGanjilGenap = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cek = params % 2 == 0;
      if (cek) {
        resolve(`${params} adalah bilangan genap`);
      } else {
        reject(new Error(`${params} adalah bilangan ganjil`));
      }
    }, 3000);
  });
};

const check = (params, metode, callback) => {
  if (params == undefined || metode == undefined || callback == undefined) {
    console.log("Semua parameter harus diisi");
  } else {
    if (
      typeof params != "number" ||
      typeof metode != "string" ||
      typeof callback != "function"
    ) {
      console.log("Tipedata parameter tidak sesuai");
    } else {
      metode = metode.toLowerCase();
      if (metode == "thencatch") {
        let promise = callback(params);
        promise
          .then((hasil) => {
            console.log(hasil);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else if (metode == "trycatch") {
        (async () => {
          try {
            let promise = await callback(params);
            console.log(promise);
          } catch (err) {
            console.log(err.message);
          }
        })();
      } else {
        console.log("Metode yang dimasukkan tidak terdaftar");
      }
    }
  }
};

check(3, "TRYCATCH", cekPrima);
check(6, "TRYCATCH", cekGanjilGenap);
