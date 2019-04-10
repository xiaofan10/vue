<template>
  <div class="app-wrap">
    <div>
      <router-link to="/line">
        <mt-cell title="折线图" is-link></mt-cell>
      </router-link>
      <router-link to="/pie">
        <mt-cell title="饼图" is-link></mt-cell>
      </router-link>
    </div>

    <div>
      <mt-progress :value="20" :bar-height="5"></mt-progress>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      text: "dsfds"
    }
  },
  components: {

  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
@import './assest/styles/global.scss';
  .app-wrap {
    width: 100vw;
    .ec-wrap {
      position: relative;
      width: 100vw;
      height: px2rem(300);
    }
  }
</style>
