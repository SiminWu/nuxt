<template>
  <div>
    <input type="text" v-model="userId">
    <button @click="getUserID">用户详情</button>
  </div>
</template>
<script>
  export default {
    layout: 'top-nav',
    data(){
      return{
        userId:"",
      }
    },
    methods:{
      getUserID(){
        this.$router.push('/users/'+this.userId)
      }
    }
  }
</script>
