
<!-- 首页广告 -->
<template>
<div class="banner">
    <Carousel :radius-dot="true"  v-model="value2" :height="527"  autoplay  loop >
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
    <slot></slot>
</div>
 
</template>
<style lang="scss" scoped>
     .banner{
     background: #ccc;
      .ivu-carousel-list{
        height: 100%;
        color:white;
        font-size: 40px;
      }
  }

</style>


<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>

