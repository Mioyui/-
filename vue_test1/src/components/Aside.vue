<template>
<!-- aside -->
  <div class="container-fluid">
    <div class="col-md-3">
      <div id="sidebar">

          <el-aside width="220px" style="border-radius:3px">
            <el-menu>
                <el-menu-item index="1" @click="toHome"><i class="fa fa-home fa-lg" aria-hidden="true" ></i>首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="fa fa-plus fa-lg" aria-hidden="true"></i>婚礼添加</template>
                    <el-menu-item index="2-1" @click="toWedForm">填写信息</el-menu-item>
                    <el-menu-item index="2-2" @click="toGuestTable">赴宴情况</el-menu-item>
                </el-submenu>
                  
                <el-submenu index="3">
                    <template slot="title"><i class="fa fa-bars fa-lg" aria-hidden="true"></i>用户管理</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1" @click="toManageUsers">管理新人信息</el-menu-item>
                    <el-menu-item index="3-2" @click="toRecycle">回收站</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>另请期待</template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1"></el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
          </el-aside>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Aside',
    methods:{
      toRecycle(){
        // 回收请求 后端返回曾经删除的数据
        this.$http.get('/recycleBin?username='+this.$store.state.username+'&password='+this.$store.state.password).then(
          response=>{
            // console.log("这里是无权返回",response)
            if(response.request.status===403||response.data==='500'){
            alert('你不是管理员，无权限访问！');
          }else{
            this.$store.state.RecycleInfo=response.data;
            this.$router.push('/recycle');
            console.log(response.data);
          }

          },
          err=>{
            alert('你不是管理员111，无权限访问！');
          }
        )
        
      },
      toHome(){
        this.$router.push('/home');
      },
      toWedForm(){
        this.$router.push('/wedform');
      },
      // 获取宾客信息
      toGuestTable(){
        this.$http.get('/guestSelect').then(
          response=>{
            // 如果有权限的话 获取返回的宾客信息 再进入宾客路由
            this.$store.state.GuestInfo=response.data;
            this.$router.push('/guesttable');
          },err=>{
            alert('宾客请求失败',err.data);
        })
        
      },
      toManageUsers(){
        // 当点击管理用户组件 后台返回所有新人登记的数据 并且呈现再main组件中
        //我们可以用vuex来管理返回的数据
        // this.$router.push('/manageusers');
        this.$http.get('/hostPrint?username='+this.$store.state.username+'&password='+this.$store.state.password).then(
          response=>{
            // console.log("这里是无权返回",response)
            // response.request.status===403||response.request.status===500
          if(response.data==='403'||response.data==='500'){
            alert('你不是管理员，无权限访问！');
          }else{
            this.$store.state.HostInfo=response.data;
            this.$router.push('/manageusers');
          }
        },
        err=>{
            console.log('访问失败',err);
            alert('你不是管理员，无权限访问！');
        })
        
        
      }
    }
}
</script>

<style>


.fa{
  margin-right: 10px;
}
/* 侧边栏样式  */
#sidebar {
  position: fixed;
  top: 50px;
  left: 220px;
  width: 220px;
  margin-left: -220px;
  border: none;
  border-radius: 0;
  overflow-y: auto;
  background-color: #D9AFD9;
  background-image: linear-gradient(236deg, #D9AFD9 0%, #97D9E1 100%);

  bottom: 0;
  overflow-x: hidden;
  padding-bottom: 40px;
}


.side-bar > li > a {
  color: #eee;
  width: 220px;
}


.side-bar li a:hover,
.side-bar li a:focus {
  background-color: #333;
}

</style>