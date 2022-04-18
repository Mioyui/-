<template>
    <div style="margin:0 0 0 160px" class="main">
      <router-view></router-view>
    </div>
</template>

<script>

import axios from 'axios';
// import LogPanel from '../pages/LogPanel.vue'

export default {
    name:'Main',
    // components:{
    //   LogPanel
    // },
    data(){
      return{
        imageUrl: '',
        fileList: [],
        file:'',
        
      }
    },

    methods: {

    }
}
</script>

<style>
/* 遍历内容样式 */


/* 内容区 */
.main{
  padding-left: 150px;
  background-color: rgb(255, 255, 255);
}

</style>