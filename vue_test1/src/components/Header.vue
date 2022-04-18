<template>
 <!-- header -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Admin Panel</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                    <el-popover
                        placement="top"
                        width="200"
                        trigger="hover">
                        <UserPanel></UserPanel>
                        <!-- <router-link to="/userpanel"></router-link>
                        <router-view></router-view> -->
                        <el-button slot="reference"><span class="glyphicon glyphicon-user">&nbsp;</span>{{$store.state.UserName}}</el-button>
                    </el-popover>  
                    </li>
                    <!-- <li><a href="#">Logout</a></li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import UserPanel from '../components/UserPanel.vue';

export default {
    name:'Header',
    components:{
        UserPanel,
    },
}
</script>

<style>
/* header样式 */
.navbar{
  color: #333;
  line-height: 60px;
  background-color: #D9AFD9;
  background-image: linear-gradient(206deg, #D9AFD9 0%, #97D9E1 100%);
  
}
.navbar {

    border: 1px solid #ffffff;
}
</style>