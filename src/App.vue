
<template>
<div class="container">
 <Header @Toggle-show-add="ToggleAddTask" title="Task Tracker"  :showAddTask="showAddTask"/>
 <router-view :showAddTask="showAddTask"></router-view>
<Footer />

</div>

  
</template>
<script>
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
  Header,
  Footer,

  
  },
  data(){
    return{
      showAddTask: false
    }
  },
  methods:{
       ToggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
  }
}
</script>



<style >
.container{
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;

}
.btn{
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

   
}

</style>
