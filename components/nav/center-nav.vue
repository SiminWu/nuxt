
<!-- 中部导航 -->
<template>
    <div>
       <ul class="center-nav-wrap">
           <li><nuxt-link to="/">首页</nuxt-link></li>
           <li><nuxt-link to="/searchcomponent/search-tray">找货盘</nuxt-link></li>
           <li><nuxt-link to="/searchcomponent/search-price">找靓价</nuxt-link></li>
           <li><nuxt-link to="/annoce/finance">物流金融</nuxt-link></li>
           <li><nuxt-link to="/annoce/joinus">渠道商加盟</nuxt-link></li>
           <li>昊链自营系统</li>
       </ul>
    </div>
</template>
<style lang="scss" scoped>
    .hand{
        color: red;
    }
    .center-nav-wrap{
          display: flex;
          justify-content: space-around;
          font-weight: bold;
          font-size: 16px;
           &>li{
             border-bottom: 1px solid white;
           }
          &>li:hover{
            a{
                color: aquamarine;
            }
            color: aquamarine;
            border-bottom: 1px solid aquamarine;
            cursor:pointer;
          }
    }
</style>
<script>
export default {
    
}
</script>


