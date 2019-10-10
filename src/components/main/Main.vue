<template>
  <div class="main">
      <Header />
      <Slide />
      <Card />
      <BestSell />
      <Discount />
      <AllProducts :showTitle="true"/>
      <Footer />
      <CopyRight />
  </div>
</template>
<script>
import Header from '../public/header'
import Slide from '../pagecomponents/main/slide'
import Card from '../pagecomponents/main/card'
import BestSell from '../pagecomponents/main/bestsell2'
import AllProducts from '../pagecomponents/main/allproducts'
import Discount from '../pagecomponents/main/discount'
import Footer from '../public/footer'
import CopyRight from '../public/copyright'

export default {
    name: 'Main',
    components: {
        Header,
        Slide,
        Card,
        BestSell,
        AllProducts,
        Discount,
        Footer,
        CopyRight
    }
}
</script>
<style>
  .main{
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>