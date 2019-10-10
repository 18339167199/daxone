<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs-content">
        <h2>{{ title }}</h2>
        <ol class="breadcrumb font-18" :style="{background: 'none'}">
          <li v-for="(val, index) in router" :key="index" :class="{ 'active': index === routerNum }">
            <a :href="val.href" v-if="index != routerNum">{{ val.name }}</a>
            <span v-else>{{ val.name }}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    router: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true
    }
  },
  name: "BreadCrumbs",
  computed: {
    routerNum (){
      return this.router.length - 1;
    }
  }
};
</script>
<style>
.breadcrumbs {
  height: calc(45% + 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(/static/images/bg/breadcrumb.jpg);
  background-position: center;
  background-size: cover;
}
</style>