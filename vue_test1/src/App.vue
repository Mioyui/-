<template>
  <div>
    <Header></Header>
    <Aside></Aside>
    <Main></Main>

  </div>
</template>




<script>

import Header from './components/Header.vue';
// import Login from './pages/Login.vue';
import Aside from './components/Aside.vue';
import Main from './components/Main.vue';
export default {
  name:'App',
  components:{
    Header,
    Main,
    Aside,
    // Login,
  },
      data() {
        return{
        }
    }
}
</script>

<style >
body {
  padding-top: 80px;
}


::-webkit-scrollbar {
  width: 8px; 
}

/* //滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #D9AFD9;
  background-image: linear-gradient(65deg, #D9AFD9 0%, #97D9E1 100%);
  border-radius: 3px;
}




</style>