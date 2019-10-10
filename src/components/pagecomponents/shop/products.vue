<template>
  <div class="products">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9 col-lg-push-3" :style="{ height: '100%' }">
          <div class="products-topbar">
            <div class="products-topbar-left">
              <div class="view-mode">
                <a href="#">
                  <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
                </a>
                <a href="#">
                  <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                </a>
              </div>
              <p>Showing 1 - 20 of 30 results</p>
            </div>
            <div class="products-topbar-right">
              <div class="view-number">
                <label>View:</label>
                <select>
                  <option value>Default</option>
                  <option value>Name</option>
                  <option value>Price</option>
                </select>
              </div>
              <div class="sort">
                <label>Sort by:</label>
                <select>
                  <option value>Default</option>
                  <option value>Name</option>
                  <option value>Price</option>
                </select>
              </div>
            </div>
          </div>
          <div class="products-list">
            <AllProducts :showTitle="false" :style="{padding: '0 !important'}" />
            <AllProducts :showTitle="false" :style="{padding: '0 !important'}" />
            <br>
            <Page :total="100"></Page>
          </div>
        </div>
        <div class="col-lg-3 col-lg-pull-9" :style="{ height: '100%' }">
          <div class="products-filter">
            <div class="products-filter-search widget" :style="{ paddingTop: '0 !important' }">
              <h2>Search</h2>
              <form id="search" class="form-inline">
                <div class="form-group" :style="{ width: '100%' }">
                  <label class="sr-only" for="Search">Search</label>
                  <div class="input-group" :style="{ width: '100%' }">
                    <input type="text" class="form-control" id="Search" placeholder="Search" />
                    <a href="#" class="input-group-addon">
                      <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div class="products-filter-options widget">
              <p class="font-18" :style="{ fontWeight: '550' }">Shop By Categories</p>
              <Menu
                :theme="theme"
                :accordion="true"
                :style="{width: '100% !important', textAlign: 'left'}"
              >
                <Submenu key="1">
                  <template slot="title">
                    Women Fashion
                  </template>
                  <Menu-item name="aa" key="1-1">Dress</Menu-item>
                  <Menu-item name="aa" key="1-2">Shoes</Menu-item>
                  <Menu-item name="aa" key="1-3">Sunglasses</Menu-item>
                  <Menu-item name="aa" key="1-3">Sweater</Menu-item>
                  <Menu-item name="aa" key="1-3">Handbag</Menu-item>
                </Submenu>
                <Submenu key="2">
                  <template slot="title">
                    Men Fashion
                  </template>
                  <Menu-item name="aa" key="2-1">Shirt</Menu-item>
                  <Menu-item name="aa" key="2-2">Shoes</Menu-item>
                  <Menu-item name="aa" key="2-2">Sunglasses</Menu-item>
                  <Menu-item name="aa" key="2-2">Sweater</Menu-item>
                  <Menu-item name="aa" key="2-2">Jacket</Menu-item>
                </Submenu>
                <Submenu key="3">
                  <template slot="title">
                    Furniture
                  </template>
                  <Menu-item name="aa" key="3-1">Chair</Menu-item>
                  <Menu-item name="aa" key="3-2">Lift Chair</Menu-item>
                  <Menu-item name="aa" key="3-3">Bunk Bed</Menu-item>
                  <Menu-item name="aa" key="3-3">Computer Desk</Menu-item>
                  <Menu-item name="aa" key="3-3">Bookcase</Menu-item>
                </Submenu>
                <Menu-item name="aa" key="4">Lamp</Menu-item>
                <Menu-item name="aa" key="5">Electronics</Menu-item>
                <Menu-item name="aa" key="6">Accessories</Menu-item>
              </Menu>
            </div>
            <div class="products-filter-price widget">
              <h4>Range: $100.00 - 1300.00</h4>
              <Slider :value="[0, 1200]" range></Slider>
              <span>$0 - $1200</span>
            </div>
            <div class="products-filter-refine widget">
              <h4>Refine By</h4>
              <div class="checkbox">
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox1" value="option1" /> On Sale
                </label>
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox2" value="option2" /> New
                </label>
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox3" value="option3" /> In Stock
                </label>
              </div>
            </div>
            <div class="products-filter-refine widget">
              <h4>Refine By</h4>
              <div class="checkbox">
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox1" value="option1" /> On Sale
                </label>
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox2" value="option2" /> New
                </label>
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox3" value="option3" /> In Stock
                </label>
              </div>
            </div>
            <div class="products-filter-refine widget">
              <h4>Refine By</h4>
              <div class="checkbox">
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox1" value="option1" /> On Sale
                </label>
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox2" value="option2" /> New
                </label>
                <label class="checkbox">
                  <input type="checkbox" id="inlineCheckbox3" value="option3" /> In Stock
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AllProducts from "../main/allproducts";

export default {
  name: "Products",
  components: {
    AllProducts
  },
  data() {
    return {
      theme: "light"
    };
  },
  methods: {
    chang() {
      
    }
  }
};
</script>
<style>
.products {
  padding: 100px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.products .products-topbar {
  background: white;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 20px;
}
.products .products-topbar div,
p {
  display: inline-block;
}
.products .products-topbar .products-topbar-left {
  margin-right: 20px;
}
.products .products-topbar .products-topbar-left .view-mode a {
  display: inline-block;
  margin-right: 20px;
}
.products .products-topbar .products-topbar-right select {
  display: inline-block;
  border-radius: 5px;
  padding: 0 10px;
}
.products .products-topbar .products-topbar-right .view-number,
.sort {
  margin-right: 20px;
}
.products .products-filter {
  width: 100%;
  height: 100%;
  padding: 10px;
  text-align: left;
  border: 1px solid #cccccc;
  border-radius: 5px;
}
.products .products-filter .widget {
  padding: 30px 0 30px 0;
  border-bottom: 1px solid #cccccc;
  font-size: 15px;
}
.products .products-filter .widget .checkbox {
  margin-bottom: 15px;
}
.products .products-filter .widget h4 {
  margin-bottom: 15px;
}
.products .products-filter .products-filter-search h2 {
  margin-bottom: 15px;
}
</style>