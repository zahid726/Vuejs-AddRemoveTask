<template>
    <button class="btn" @click="onclick()" :style="{background:color}" >{{text}}</button>
</template>

<script>
export default {
   name: 'Button',
   props:{
       text: String,
       color:String

   },
   methods:{
       onclick(){
           this.$emit('Toggle-show-add')
       }
   }
}
</script>

<style scoped>

</style>