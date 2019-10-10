<template>
  <div class="discount">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <img :src="bgimg" alt :style="{ maxWidth: '100%' }"/>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 discount-introduce">
          <p>
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <h1>
            Winter Discount
            Up to 30%
          </h1>
          <p>
            It is a long established fact that a reader 
            will be distracted by the readable content of 
            a page when looking at its layout.
          </p>
          <button>SHOW NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Discount",
  data() {
    return {
      bgimg: "/static/images/banner/banner-1.jpg"
    };
  }
};
</script>
<style scope>
.discount {
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.discount .discount-introduce{
  padding-top: 10%;
  display: flex;
  font-size: 18px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.discount .discount-introduce p, h1{
  margin-bottom: 2%;
}
.discount .discount-introduce button{
  margin-top: 5%;
  border: 1px solid #ff5151;
  color: #ff5151;
  padding: 10px 35px 10px 35px;
  font-size: 20px;
  transition: all ease 2s;
}
.discount .discount-introduce button:hover{
  background-color: #ff5151;
  color: white;
}
</style>