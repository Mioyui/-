// 该文件用于创建store
import Vue from 'vue';

// 引入vuex

import Vuex from 'vuex';

// 使用vuex插件
Vue.use(Vuex);

const actions={

};
const mutations={
    DelHost(state,value){
        state.HostInfo=value;
    }

}
// 用于存储数据
const state={
    // 存储新人登记以及宾客参加的数据
    HostInfo:[],
    RecycleInfo:[],
    GuestInfo:{},
    UserName:'请登录',
    isLogin:false,
    userToken:{},
    username:'',
    password:'',
    Key:0,
}

// 创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})