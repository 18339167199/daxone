<template>
  <div class="card">
    <div class="bg-img" :style="{backgroundImage: `url(${cardBg})`}">
      <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-11">
          <div class="card-banner">
            <p>Premium Home</p>
            <p>Decorator</p>
            <a href="#" class="font-18">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {
      cardBg: "/static/images/bg/banner-bg-1.jpg"
    };
  }
};
</script>
<style>
.font-18{
  font-size: 18px;
}
.card {
  /* height: 80%; */
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.card .bg-img {
  height: 100%;
  width: 75%;
  box-sizing: border-box;
  background-position: center center;
  background-size: 100% 100%;
  padding-top: 120px;
  padding-bottom: 120px;
}
.card .bg-img .card-banner{
  text-align: right;
  color: #7c5e48;
  font-size: 40px;
}
.card .bg-img .card-banner a{
  color: #7c5e48;
  text-decoration: underline;
  transition: all ease 1s;
}
.card .bg-img .card-banner a:hover{
  color: #ff5151;
}
</style>