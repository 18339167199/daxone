<template>
  <div class="slide apper">
    <div class="container-fluid con">
      <div class="row con">
        <div class="col-lg-5 col-md-6 col-sm-6 col-xs-4 cin layout" :style="{ width: '40%' }">
          <div class="nav">
            <div id="prev" class="prev" :style="{marginBottom: '25px'}">
              <button type="button" @click="prev" :style="{fontSize: '25px'}">
                <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
              </button>
            </div>
            <div class="nav-number" :style="{fontSize: '25px'}">
              <span>{{ nowData + 1 }}</span>
            </div>
            <div id="next" class="next" :style="{marginTop: '25px'}">
              <button type="button" @click="next" :style="{fontSize: '25px'}">
                <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <img :src="slideInfo[nowData].img" id='slide-img' class="moveR-1"/>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-6 col-xs-6 cin layout" :style="{ width: '60%'}">
          <div class="item-info moveL-1" id="item-info">
            <h2 style="color: #ff5151">{{ slideInfo[nowData].discount }}</h2>
            <h1>{{ slideInfo[nowData].goodsName }}</h1>
            <p>{{ slideInfo[nowData].descrption }}</p>
            <div class="show-btn">
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slide",
  data() {
    return {
      slideInfo: [
        {
          img: '/static/images/slider/hm1-single-1.png',
          discount: '45% off',
          goodsName: 'Comfort Chart',
          descrption: 'Collect from Daxone get 45% Discount.'
        },
        {
          img: '/static/images/slider/hm1-single-2.png',
          discount: '30% off',
          goodsName: 'Easy Chart',
          descrption: 'Collect from Daxone get 30% price off'
        }
      ],
      slideLen: 0,
      nowData: 0,
    };
  },
  methods: {
    prev (){
      $('#slide-img').addClass('moveR-1');
      $('#item-info').addClass('moveL-1');
      if(this.nowData > 0){
        this.nowData --;
      }else{
        this.nowData = this.slideLen - 1;
      }
    },
    next (){
      $('#slide-img').addClass('moveR-1');
      $('#item-info').addClass('moveL-1');
      if(this.nowData < this.slideLen - 1){
        this.nowData ++;
      }else{
        this.nowData = 0;
      }
    }
  },
  mounted (){
    this.slideLen = this.slideInfo.length;
    $('#slide-img').on('webkitAnimationEnd', function (){
      // $('#slide-img').removeClass('apper-05');
      $('#slide-img').removeClass('moveR-1');
    })
    $('#item-info').on('webkitAnimationEnd', function (){
      // $('#item-info').removeClass('apper-05');
      $('#item-info').removeClass('moveL-1')
    })
  }
};
</script>
<style>
.con {
  width: 100%;
  height: 100%;
}
.cin {
  height: 100%;
  display: flex;
}
.layout {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
img {
  max-width: 80%;
}
button{
  background: none;
  border: 0;
}
.slide {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-image: url(/static/images/slider/hm1-bg-1.jpg);
  background-position: center;
  background-size: cover;
  padding-top: 100px;
  transition:  all ease 2s;
}
.slide .nav{
  margin-left: 10%;
}
.slide .item-info {
  position: absolute;
  font-size: 35px;
  text-align: left;
}
.slide .item-info button {
  border: 1px solid #ff5151;
  color: #ff5151;
  padding: 10px 35px 10px 35px;
  font-size: 20px;
  transition: all ease 2s;
}
.slide .item-info button:hover{
  background-color: #ff5151;
  color: white;
}
.slide .item-info * {
  margin-bottom: 1%;
}
</style>