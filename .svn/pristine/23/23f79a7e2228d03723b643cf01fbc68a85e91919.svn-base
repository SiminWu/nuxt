<template>
  <div>
    这个页面是:{{$route.params.id}}
  </div>
</template>
<script>
  export default {
    layout: 'top-nav',
    validate (data) {
      // Must be a number
      return /^\d+$/.test(data.params.id)
    }
  }
</script>
