<template>
  <div class="best-sell apper-1">
    <div class="container-fluid" :style="{width: '100%', height: '100%'}">
      <div class="row" :style="{ height: '30%' }">
        <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 section-title">
          <h2>Best Sell</h2>
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

      <div class="row" :style="{ height: '70%' }">
        <div class="product-slider">
          <div class="product-area">
            <div class="prev-btn" :style="{marginRight: '20px'}">
              <a @click="getPrevData" id="prev-btn" title="点击切换下一批" href="#" class="font-18">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </a>
            </div>
            <div
              class="product-item product-display"
              v-for="(val, index) in product"
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
                <div class="product-label" v-show="val.label.exist">
                  <span>{{ val.label.content }}</span>
                </div>
                <a href="#">
                  <img :src="val.img" :style="{ maxWidth: '100%' }" />
                </a>
              </div>
              <div class="product-introduction">
                <div class="product-type">{{ val.type }}</div>
                <div class="product-name">{{ val.name }}</div>
                <div class="product-price">
                  <div class="price">
                    <span>{{ val.price }}</span>
                    <a href="#" :style="{ visibility: 'hidden' }">
                      <span :style="{ textAlign: 'right !important', display: 'block' }">+ add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="next-btn" :style="{marginLeft: '20px'}">
              <a id="next-btn" @click="getNextData" title="点击切换下一批" href="#" class="font-18">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BestSell",
  data() {
    return {
      product: [
        {
          img: "/static/images/product/pro-hm1-5.jpg",
          type: "Chair",
          name: "Golden Easy Spot Chair",
          price: "$250.0",
          label: {
            exist: true,
            content: '-30%'
          }
        },
        {
          img: "/static/images/product/pro-hm1-6.jpg",
          type: "Chair",
          name: "Golden Easy Spot Chair",
          price: "$250.0",
          label: {
            exist: false,
            content: '-30%'
          }
        },
        {
          img: "/static/images/product/pro-hm1-7.jpg",
          type: "Chair",
          name: "Golden Easy Spot Chair",
          price: "$250.0",
          label: {
            exist: true,
            content: 'OUT'
          }
        },
        {
          img: "/static/images/product/pro-hm1-8.jpg",
          type: "Chair",
          name: "Golden Easy Spot Chair",
          price: "$250.0",
          label: {
            exist: true,
            content: 'NEW'
          }
        }
      ],
      product_2: [
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
      e.target.children[1].children[2].children[0].children[1].style.visibility = 'visible'
    },
    hiddenBtn(e) {
      e.target.children[0].children[0].style.display = "none";
      e.target.children[1].children[2].children[0].children[1].style.visibility = 'hidden'
    }
  },
  mounted() {}
};
</script>
<style scope>
.best-sell {
  width: 100%;
  height: 80%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10%;
  padding-right: 10%;
}
.best-sell .section-title {
  padding-top: 40px;
  font-family: "Roboto", sans-serif;
  text-align: center !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.best-sell .section-title h2 {
  color: #373737;
  font-weight: bolder;
  font-size: 30px;
}
.best-sell .section-title p {
  display: block;
  display: block;
  color: #737373;
  font-size: 14px;
}
.best-sell .product-slider {
  height: 100%;
  /* width: 200%; */
  /* background: rgb(181, 161, 201); */
}
.best-sell .product-slider .product-area {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
@media screen and (max-width: 768px) {
  .best-sell .product-slider .product-area .product-display:nth-child(1) {
    display: ynone !important;
  }
}
@media screen and (max-width: 992px) {
  .best-sell .product-slider .product-area .product-display:nth-child(2) {
    display: none !important;
  }
}
@media screen and (max-width: 1300px) {
  .best-sell .product-slider .product-area .product-display:nth-child(3) {
    display: none !important;
  }
}
.best-sell .product-slider .product-area .product-item {
  font-size: 14px;
  box-sizing: border-box;
  background-color: #f1eeee;
  text-align: left;
  transition: all 1s ease 0s;
  overflow: hidden;
}
.best-sell .product-slider .product-area .product-item .product-img {
  width: 100%;
  height: 80%;
}
.best-sell
  .product-slider
  .product-area
  .product-item
  .product-img
  .product-action {
  position: absolute;
  padding: 15px;
  display: none;
}
.best-sell
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
.best-sell
  .product-slider
  .product-area
  .product-item
  .product-img
  .product-action
  a:hover{
    color: #ff5151;
}
.best-sell
  .product-slider
  .product-area
  .product-item
  .product-img
  .product-label{
    position: absolute;
    margin-left: 13%;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background: #ff5151;
    text-align: center;
    line-height: 45px;
    font-weight: bold;
    color: white;
  }
.best-sell .product-slider .product-area .product-item .product-introduction {
  width: 100%;
  height: 20%;
  padding-left: 5px;
}
.best-sell
  .product-slider
  .product-area
  .product-item
  .product-introduction
  .product-type {
  height: 33.33%;
  color: #737373;
}
.best-sell
  .product-slider
  .product-area
  .product-item
  .product-introduction
  .product-name {
  height: 33.33%;
}
.best-sell
  .product-slider
  .product-area
  .product-item
  .product-introduction
  .product-price {
  height: 33.33%;
  font-weight: bold;
}
.best-sell
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
.best-sell
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