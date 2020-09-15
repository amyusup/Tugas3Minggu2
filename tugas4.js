// const fetch = require("node-fetch");
let url = 'http://jsonplaceholder.typicode.com/users';

fetch(url)
  .then(data => data.json())
  .then(res => {
    //   console.log(res);
    res.map((item) => {
        console.log(item.name);
      });
  })
  .catch(err => console.log("Ada kesalahan saat menyambungkan"))