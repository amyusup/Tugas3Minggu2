const getMonth = (callback) => {
  if (callback == undefined) {
    console.log("Semua parameter harus diisi");
  } else {
    if (typeof callback != "function") {
      console.log("Tipedata parameter tidak sesuai");
    } else {
      setTimeout(() => {
        let error = true;
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
        if (!error == true) {
          callback(null, month);
        } else {
          callback(new Error("Sorry Data Not Found", []));
        }
      }, 4000);
    }
  }
};

const cetak = (err, params) => {
  if (err == null) {
    params.map((item) => {
      console.log(item);
    });
  }else{
    console.log(err.message)
  }
};

getMonth();
getMonth("cetak");
getMonth(cetak);
