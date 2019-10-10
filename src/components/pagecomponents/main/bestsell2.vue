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
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(val, index) in product" :key="index">
                  <div
                    class="product-item product-display"
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
                            <span
                              :style="{ textAlign: 'right !important', display: 'block' }"
                            >+ add to cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>

              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>

              <div class="swiper-scrollbar"></div>
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
            content: "-30%"
          }
        },
        {
          img: "/static/images/product/pro-hm1-6.jpg",
          type: "Chair",
          name: "Golden Easy Spot Chair",
          price: "$250.0",
          label: {
            exist: false,
            content: "-30%"
          }
        },
        {
          img: "/static/images/product/pro-hm1-7.jpg",
          type: "Chair",
          name: "Golden Easy Spot Chair",
          price: "$250.0",
          label: {
            exist: true,
            content: "OUT"
          }
        },
        {
          img: "/static/images/product/pro-hm1-8.jpg",
          type: "Chair",
          name: "Golden Easy Spot Chair",
          price: "$250.0",
          label: {
            exist: true,
            content: "NEW"
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
      e.target.children[1].children[2].children[0].children[1].style.visibility =
        "visible";
    },
    hiddenBtn(e) {
      e.target.children[0].children[0].style.display = "none";
      e.target.children[1].children[2].children[0].children[1].style.visibility =
        "hidden";
    }
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      // loop: true,
      centeredSlides: true,
      initialSlide: 2,
      spaceBetween: 30,
      grabCursor: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  }
};
</script>
<style scope>
