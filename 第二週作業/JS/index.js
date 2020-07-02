import config from "./config.js";
import db from "./db.js";

var obj = {
  data: {
    productItems: [],
  },
  async created() {
    console.log("1");
    await db
      .getProductsAsync()
      .then((d) => {
        this.data.productItems = d;
        this.render();
      })
      .catch((err) => {
        alert(err);
      });
    console.log("2");
  },
  render() {
    // let appElement = document.querySelector("app");
    var str = "";
    this.data.productItems.forEach((item) => {
      str += `
        <div class="card bs m1">
        <div class="card-title textCenter">
          <h3 class="m1">${item.title}</h3>
        </div>
        <div class="card-body">
          <img
            style="width: 100%;"
            src="${item.imageUrl[0]}"
          />
          <div class="textLeft pd2">
            Its wearer, like Artorias himself, can traverse the
          </div>
        </div>
      </div> 
        `;

      document.querySelector(".cardContainer").innerHTML=str;
    });
  },
};


obj.created();

