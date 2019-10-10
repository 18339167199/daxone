<template>
  <div class="allproduct apper-1">
    <div class="container-fluid" :style="{width: '100%', height: '100%'}">
      <div class="row" :style="{ height: '30%' }" v-show="showTitle">
        <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 section-title">
          <h2>All Product</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
          <p>
            Lorem Ipsum has been
            the industry's standard dummy text
          </p>
        </div>
      </div>

      <div class="row" :style="{ height: '70%' }" v-for="(val, ind) in product" :key="ind">
        <div class="product-slider">
          <div class="product-area">
            <!-- <div class="prev-btn" :style="{marginRight: '20px'}">
              <a @click="getPrevData" id="prev-btn" title="点击切换下一批" href="#" class="font-18">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </a>
            </div>-->
            <div
              class="product-item product-display"
              v-for="(value, index) in val"
              :key="index"
              @mouseenter="showBtn"
              @mouseleave="hiddenBtn"
            >
              <div class="product-img">
                <div class="product-action moveR-1">
                  <a title="Quick View" href>
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </a>
                  <a title="Wish List" href>
                    <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                  </a>
                  <a title="Share" href>
                    <span class="glyphicon glyphicon-share" aria-hidden="true"></span>
                  </a>
                </div>
                <a href="#">
                  <img :src="value.img" :style="{ maxWidth: '100%' }" />
                </a>
              </div>
              <div class="product-introduction">
                <div class="product-type">{{ value.type }}</div>
                <div class="product-name">{{ value.name }}</div>
                <div class="product-price">
                  <div class="price">
                    <span>{{ value.price }}</span>
                    <a href="#" :style="{ visibility: 'hidden' }">
                      <span
                        :style="{ textAlign: 'right !important', display: 'block' }"
                      >+ add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="next-btn" :style="{marginLeft: '20px'}">
              <a id="next-btn" @click="getNextData" title="点击切换下一批" href="#" class="font-18">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </a>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AllProducts",
  props:{
    showTitle: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      product: [
        [
          {
            img: "/static/images/product/pro-hm1-5.jpg",
            type: "Chair",
            name: "Golden Easy Spot Chair",
            price: "$250.0"
          },
          {
            img: "/static/images/product/pro-hm1-6.jpg",
            type: "Chair",
            name: "Golden Easy Spot Chair",
            price: "$250.0"
          },
          {
            img: "/static/images/product/pro-hm1-7.jpg",
            type: "Chair",
            name: "Golden Easy Spot Chair",
            price: "$250.0"
          },
          {
            img: "/static/images/product/pro-hm1-8.jpg",
            type: "Chair",
            name: "Golden Easy Spot Chair",
            price: "$250.0"
          }
        ],
        [
          {
            img: "/static/images/product/pro-hm1-1.jpg",
            type: "Chair",
            name: "Golden Easy Spot Chair",
            price: "$250.0"
          },
          {
            img: "/static/images/product/pro-hm1-2.jpg",
            type: "Chair",
            name: "Golden Easy Spot Chair",
            price: "$250.0"
          },
          {
            img: "/static/images/product/pro-hm1-3.jpg",
            type: "Chair",
            name: "Golden Easy Spot Chair",
            price: "$250.0"
          },
          {
            img: "/static/images/product/pro-hm1-4.jpg",
            type: "Chair",
            name: "Golden Easy Spot Chair",
            price: "$250.0"
          }
        ]
      ]
    };
  },
  methods: {
    getPrevData(e) {
      this.product = this.product_2;
      e.preventDefault();
    },
    getNextData(e) {
      e.preventDefault();
    },
    showBtn(e) {
      e.target.children[0].children[0].style.display = "block";
      e.target.children[1].children[2].children[0].children[1].style.visibility =
        "visible";
    },
    hiddenBtn(e) {
      e.target.children[0].children[0].style.display = "none";
      e.target.children[1].children[2].children[0].children[1].style.visibility =
        "hidden";
    }
  },
  mounted() {}
};
</script>
<style scope>
.allproduct {
  width: 100%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 100px;
  padding-left: 10%;
  padding-right: 10%;
}
.allproduct .section-title {
  padding-top: 40px;
  padding-bottom: 20px;
  font-family: "Roboto", sans-serif;
  text-align: center !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.allproduct .section-title h2 {
  color: #373737;
  font-weight: bolder;
  font-size: 30px;
}
.allproduct .section-title p {
  display: block;
  display: block;
  color: #737373;
  font-size: 14px;
}
.allproduct .product-slider {
  height: 100%;
  /* width: 200%; */
  /* background: rgb(181, 161, 201); */
}
.allproduct .product-slider .product-area {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
@media screen and (max-width: 768px) {
  .allproduct .product-slider .product-area .product-display:nth-child(1) {
    display: ynone !important;
  }
}
@media screen and (max-width: 992px) {
  .allproduct .product-slider .product-area .product-display:nth-child(2) {
    display: none !important;
  }
}
@media screen and (max-width: 1300px) {
  .allproduct .product-slider .product-area .product-display:nth-child(3) {
    display: none !important;
  }
}
.allproduct .product-slider .product-area .product-item {
  font-size: 14px;
  box-sizing: border-box;
  background-color: #f1eeee;
  text-align: left;
  transition: all 1s ease 0s;
  overflow: hidden;
}
.allproduct .product-slider .product-area .product-item .product-img {
  width: 100%;
  height: 80%;
}
.allproduct
  .product-slider
  .product-area
  .product-item
  .product-img
  .product-action {
  position: absolute;
  padding: 15px;
  display: none;
}
.allproduct
  .product-slider
  .product-area
  .product-item
  .product-img
  .product-action
  a {
  display: block;
  margin-bottom: 50%;
  font-size: 18px;
}
.allproduct
  .product-slider
  .product-area
  .product-item
  .product-img
  .product-action
  a:hover {
  color: #ff5151;
}
.allproduct .product-slider .product-area .product-item .product-introduction {
  width: 100%;
  height: 20%;
  padding-left: 5px;
}
.allproduct
  .product-slider
  .product-area
  .product-item
  .product-introduction
  .product-type {
  height: 33.33%;
  color: #737373;
}
.allproduct
  .product-slider
  .product-area
  .product-item
  .product-introduction
  .product-name {
  height: 33.33%;
}
.allproduct
  .product-slider
  .product-area
  .product-item
  .product-introduction
  .product-price {
  height: 33.33%;
  font-weight: bold;
}
.allproduct
  .product-slider
  .product-area
  .product-item
  .product-introduction
  .product-price
  .price {
  width: 100%;
  height: 100%;
  top: 0;
  display: inline-block;
  text-align: left;
  padding: 4px;
}
.allproduct
  .product-slider
  .product-area
  .product-item
  .product-introduction
  .product-price
  .price
  a:hover {
  color: #ff5151;
}
</style>