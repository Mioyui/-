<template>
<!-- 用户要登录登出以及个人信息等的面版 -->
  <div>

 <el-menu

      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>个人信息</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      
      <el-menu-item index="2" v-show="$store.state.isLogin" @click="quit">
        &nbsp;<i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
        &nbsp;&nbsp;<span slot="title">登出</span>
      </el-menu-item> 

      <el-menu-item index="3" v-show="$store.state.isLogin" @click="power">
        &nbsp;<i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
        &nbsp;&nbsp;<span slot="title">申请权限</span>
      </el-menu-item> 
        <!-- 登录的那个按钮 -->
            <!-- <router-link replace to="/login"> -->
          <!-- 每当点击登录按钮后，点击登录按钮状态为true 显示登录和注册的面板  -->
            <el-menu-item index="4" v-show="!($store.state.isLogin)" @click="LogPanel();isClickLogin()">
              &nbsp;<i class="fa fa-sign-in fa-lg" aria-hidden="true"></i>
              &nbsp;&nbsp;<span slot="title" >登录</span>
            </el-menu-item>

            
          <!-- </router-link> -->
    </el-menu>
    
    
    
    
  </div>
</template>

<script>
import Login from '../pages/Login.vue';
import LoginBt from './LoginBt.vue'

export default {
    name:'UserPanel',
    data(){
      return{
        isLogin:false,
        clickLogin:false,
      }
    },
    components:{
      LoginBt,
    },
    methods:{
      quit(){
        this.$http.post('/logout?user='+this.$store.state.username);
        this.$store.state.isLogin=false;
        alert('登出成功!');
        this.$store.state.UserName='请登录';
        this.$router.replace('/home');
        location.reload();
      },
      LogPanel(){
        this.$router.push('/login');
      },
      // 是否点击登录按钮
      power(){
        this.$http.post('/key?key='+this.$store.state.Key+'&name='+this.$store.state.username)
      }
    }

}
</script>

<style>
.el-menu{
  border-left: 1px solid #e6e6e6;
}

</style>