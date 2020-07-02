import config from "./config.js";

export default {
  getProductsAsync() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.pre_apiURL}/${config.uuid}/ec/products`)
        .then((d) => {
          console.log("3");
          resolve(d.data.data);
          console.log("4");
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
