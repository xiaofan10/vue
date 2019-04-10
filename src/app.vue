<template>
  <div id="text">
    {{text}}
    <div class="test">dsf禁空间sdf</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "dsfds"
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
@import './assest/styles/global.scss';

  #text {
    color: #f00;
    font-size: px2rem(50);
    .test {
      color: #0f0;
      background: url('./assest/image/1.png');
    }
  }
</style>
