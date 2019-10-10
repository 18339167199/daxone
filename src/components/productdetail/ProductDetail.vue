<template>
  <div class="productdetail">
    <Header />
    <BreadCrumbs title="Product Page" :router="router" />
    <Footer />
    <Tags />
    <CopyRight />
  </div>
</template>
<script>
import Header from '../public/header'
import Footer from '../public/footer'
import CopyRight from '../public/copyright'
import Tags from '../public/tags'
import BreadCrumbs from '../public/breadcrumbs'

export default {
    name: 'ProductDetail',
    components: {
        Header,
        Footer,
        Tags,
        CopyRight,
        BreadCrumbs
    },
    data (){
        return {
            router: [
                {
                    href: '/',
                    name: 'Home'
                },
                {
                    href: '/shop',
                    name: 'Shop'
                },
                {
                    href: '',
                    name: 'Product'
                }
            ]
        }
    }
}
</script>
<style>
  .productdetail{
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>