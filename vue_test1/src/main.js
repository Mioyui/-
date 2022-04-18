import Vue from 'vue';
import App from './App.vue';
// 引入vuex
import Vuex from 'vuex';

// 引入store
import store from './store/index';

import VueRouter from 'vue-router';
import router from './router';
import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
// import { config } from 'vue/types/umd';

Vue.config.productionTip = false;
axios.defaults.withCredentials=true;
Vue.use(ElementUI);
Vue.use(VueRouter);




const axiosupLoad=axios.create({
    baseURL: "http://eq8c7g.natappfree.cc",
    timeout:5000,
    withCredentials:true,
    headers:{
        
        'Content-Type': "application/json;charset=utf-8",
        'Access-Control-Allow-Credentials':"true",
        // 'Authorization':sessionStorage.getItem('Token')

    },
    
});

Vue.prototype.$http=axiosupLoad;

new Vue({
    el:'#app',
    render: h => h (App),
    store,
    router,
})