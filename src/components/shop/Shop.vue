<template>
  <div class="shop">
    <Header />
    <BreadCrumbs title="Shop Page" :router="router"/>
    <Products />
    <Footer />
    <Tags />
    <CopyRight />
  </div>
</template>
<script>
import Header from '../public/header'
import Footer from '../public/footer'
import BreadCrumbs from '../public/breadcrumbs'
import Products from '../pagecomponents/shop/products'
import Tags from '../public/tags'
import CopyRight from '../public/copyright'

export default {
    name: 'Shop',
    components: {
      Header,
      Footer,
      BreadCrumbs,
      Products,
      Tags,
      CopyRight
    },
    data (){
        return {
          router: [
            {
              href: '/',
              name: 'Home'
            },
            {
              href: '',
              name: 'Shop'
            },
          ]
        }
    },
}
</script>
<style>
  .shop{
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>