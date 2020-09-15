const getMonth = (callback) => {
  if (callback == undefined) {
    console.log("Semua parameter harus diisi");
  } else {
    if (typeof callback != "function") {
      console.log("Tipedata parameter tidak sesuai");
    } else {
      setTimeout(() => {
        let error = false;
        let month = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        if (!error) {
          callback(null, month);
        } else {
          callback(new Error("Sorry Data Not Found", []));
        }
      }, 4000);
    }
  }
};

const cetak = (err, params) => {
  params.map((item) => {
    console.log(item);
  });
};

getMonth();
getMonth("cetak");
getMonth(cetak);
