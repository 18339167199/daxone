<template>
  <div :class="{header: true, stick: stickHeader}" :style="{ backgroundColor: headerColor }">
    <div class="container-fluid con">
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-lg-3">
          <div class="header-left">
            <img src="/static/images/logo/logo-1.png" style="height: 100%" />
          </div>
        </div>
        <div class="col-sm-4 col-lg-5 hidden-sm hidden-xs">
          <nav class="header-nav">
            <ul>
              <li>
                <a href="#" @click="to('/')" class="font-18">Home</a>
              </li>
              <li>
                <a href="#" @click="to('shop')" class="font-18">Shop</a>
              </li>
              <li>
                <a href="#" @click="to('product')" class="font-18">Product Details</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-xs-9 col-sm-5 col-lg-4">
          <div class="header-right">
            <div class="cart-wrap">
              <button
                type="button"
                class="btn btn-default"
                data-toggle="collapse"
                data-target="#collapse"
                aria-expanded="false"
                aria-controls="collapse"
              >
                <Icon type="ios-cart" class="font-25"></Icon>
                <span class="cart-count">3 Items</span>
              </button>
            </div>
            <div class="search-btn">
              <a href="#" class="font-25">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
              </a>
            </div>
            <div class="preson-btn">
              <a href="#" class="font-25">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
              </a>
            </div>
            <div class="options-btn visible-sm visible-xs">
              <a href="#" class="font-25">
                <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
              </a>
            </div>
          </div>
          <div class="container collapse" id="collapse">
            <div class="shopping-cart-top">
              <h4 class="carttop">YOUR CART</h4>
              <a href="#" class="carttop" data-toggle="collapse"
                data-target="#collapse"
                aria-expanded="false"
                aria-controls="collapse">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
              </a>
            </div>
            <ul id="cart-list">
              <li>
                <div class="shopping-cart-img">
                  <a href="#">
                    <img src="/static/images/cart/cart-1.jpg" :style="{ maxWidth: '100%' }" />
                  </a>
                </div>
                <div class="shopping-cart-title">
                  <h4>
                    <a href="#" :style="{ width: '100%' }">Golden Easy Spot Chair.</a>
                  </h4>
                  <span :style="{ fontWeight: 'bolder' }">$99.00</span>
                </div>
                <div class="shopping-cart-delete">
                  <a href>
                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                  </a>
                </div>
              </li>
              <li>
                <div class="shopping-cart-img">
                  <a href="#">
                    <img src="/static/images/cart/cart-1.jpg" :style="{ maxWidth: '100%' }" />
                  </a>
                </div>
                <div class="shopping-cart-title">
                  <h4>
                    <a href="#" :style="{ width: '100%' }">Golden Easy Spot Chair.</a>
                  </h4>
                  <span :style="{ fontWeight: 'bolder' }">$99.00</span>
                </div>
                <div class="shopping-cart-delete">
                  <a href>
                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                  </a>
                </div>
              </li>
              <li>
                <div class="shopping-cart-img">
                  <a href="#">
                    <img src="/static/images/cart/cart-1.jpg" :style="{ maxWidth: '100%' }" />
                  </a>
                </div>
                <div class="shopping-cart-title">
                  <h4>
                    <a href="#" :style="{ width: '100%' }">Golden Easy Spot Chair.</a>
                  </h4>
                  <span :style="{ fontWeight: 'bolder' }">$99.00</span>
                </div>
                <div class="shopping-cart-delete">
                  <a href>
                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                  </a>
                </div>
              </li>
            </ul>
            <div class="shopping-cart-bottom">
              <div class="shopping-cart-total">
                <span class="font-18">Subtotal:</span>
                <span id="shop-total">$299</span>
              </div>
              <div class="shopping-cart-btn">
                <a href="#">Continue to Chackout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      stickHeader: false,
      headerColor: "",
      shopCart: false
    };
  },
  methods: {
    to(href) {
      // e = event || window.event;
      // e.preventDefault();
      this.$router.push({
        path: href
      });
    },
  },
  mounted() {
    let _this = this;
    window.onscroll = function() {
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(typeof top);
      if (Number(top) >= 100) {
        _this.stickHeader = true;
        _this.headerColor = "white";
      } else {
        _this.stickHeader = false;
        _this.headerColor = "";
      }
    };
  }
};
</script>
<style>
.stick {
  position: fixed !important;
  box-shadow: 0 0 15px 0 gray;
}
#shop-total {
  font-size: 18px;
  color: #ff5151;
  font-weight: bolder;
}
.header {
  position: absolute;
  top: 0;
  transition: all 2s ease 0s;
  width: 100%;
  height: 100px;
  z-index: 999;
}
.header .con {
  padding-top: 35px;
  padding-bottom: 25px;
}

.header .header-nav {
  width: 100%;
  height: 100%;
}
.header .header-nav ul li {
  display: inline-block;
  /* padding: 5px 20px 5px 20px;*/
  padding: 2%;
}

.header-nav .header-right {
  width: 100%;
  height: 100%;
  padding: 5px 10px 5px 10px;
}
.header-nav .header-right button {
  font-size: 30px;
}
.header .header-right .cart-wrap,
.btn-group {
  display: inline-block;
  font-size: 20px;
}
.header .header-right .cart-wrap button {
  background: none;
  font-size: 20px;
  border: none;
}
.header .header-right {
  margin-left: 20px;
  display: flex;
  justify-content: center;
}
.header .header-right a {
  display: inline-block;
  padding: 5px 10px 5px 10px;
}
.header .header-right .search-btn,
.options-btn {
  display: inline-block;
  margin-left: 25px;
  margin-right: 25px;
}
.seacrh {
  float: left;
}
#collapse {
  padding: 15px;
  width: 70%;
  background: white;
  box-shadow: 0 0 15px 0 gray;
}
#collapse .shopping-cart-top {
  border-bottom: 1px solid #cccccc;
  padding: 12px;
  margin-bottom: 10px;
}
#collapse .shopping-cart-top .carttop {
  display: inline-block;
  font-size: 12px;
  margin: 0;
  width: 48.9%;
  line-height: 1;
  color: #282828;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
}
#collapse .shopping-cart-top h4 {
  text-align: left;
}
#collapse .shopping-cart-top a {
  text-align: right;
}
#collapse ul {
  display: block;
  margin-bottom: 25px;
}
#collapse ul li {
  display: flex;
  text-align: left;
  justify-content: space-between;
  margin-bottom: 10px;
}
#collapse ul li div {
  margin-right: 10px;
}
#collapse ul li div a {
  font-size: 14px;
}
#collapse ul li div a:hover {
  color: #ff5151;
}
#collapse .shopping-cart-bottom .shopping-cart-total {
  display: flex;
  justify-content: space-around;
}
#collapse .shopping-cart-bottom .shopping-cart-btn a {
  display: block;
  padding: 5px 10px 5px 10px;
  background: #ff5151;
  font-size: 18px;
  margin: 10px;
}
</style>