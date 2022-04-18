<template>
    <!-- 这是登录路由的内容 -->
      <div class="bili-mini-mask">

        <div class="login-page">
          
          <div class="form" >
              <!-- 这里直接用路由跳转回主页以达到关闭登录的效果 -->
          <a href="#" @click="back"><el-i class="el-icon-close"></el-i></a>
          <!-- 注册表单 -->
          <el-form ref="form1" :model="form1" class="register-form" v-show="hasAcount">
              <el-form-item>
                <el-input v-model="form1.username" placeholder="username"></el-input>
              </el-form-item>

              <el-form-item>
                <el-input type="password" v-model="form1.password" placeholder="password"></el-input>
              </el-form-item>

              <el-form-item>
                <el-input v-model="form1.phone" placeholder="phone"></el-input>
              </el-form-item>

              <!-- <el-form-item>
                <el-input v-model="form1.username" placeholder="username"></el-input>
              </el-form-item> -->

              <el-form-item>
                <el-button type="primary" @click="onSubmitRg">立即创建</el-button>
              </el-form-item>
              <p class="message">已经拥有账号? <a @click="hasAcount=!hasAcount">登录</a></p>
        </el-form >

          <!-- 登录表单 -->
          <el-form ref="form2" :model="form2" class="login-form" v-show="!hasAcount">
              <el-form-item>
                <el-input v-model="form2.username" placeholder="username"></el-input>
              </el-form-item>

              <el-form-item>
                <el-input type="password" v-model="form2.password" placeholder="password"></el-input>
              </el-form-item>
              
              <el-form-item>
                <el-input type="password" v-model="$store.state.Key" placeholder="管理密钥"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" v-on:click="onSubmitLg">登录</el-button>
              </el-form-item>
              <el-checkbox v-model="form2.isRemember">记住我？</el-checkbox>
               <p class="message">还未注册？ <a @click="hasAcount=!hasAcount">创建账号</a></p>
        </el-form>
          </div>
      </div>
    </div>

</template>

<script th:inline="javascript">


const route1={
    name:'Login',
    data(){
      return{
        hasAcount:true,
        form1: {
          username: '',
          password:'',
          phone:''
        },
        form2:{
          username: '',
          password:'',
          isRemember:false,
          // Key:'',
        }
      }
    },
    methods:{
      back(){
        this.$router.back();
      },
      // isRemember(){
      //   this.form2.radio=!this.form2.radio
      // },
      onSubmitRg(){
        console.log("注册表单提交！",this.form1);
            let formData = new FormData();
            for(let key in this.form1){
                formData.append(key,this.form1[key]);
                console.log(formData.get(key));
            }
        this.$http.post('/register',formData).then(
          response=>{
            console.log("注册请求发送成功！");
            let resStatus=response.request.status;
            console.log(resStatus);
            if(resStatus>=200 && resStatus<400){
              alert("创建成功！");
              this.$router.push('/home');
            }else{
              alert('创建失败,请重新');
              console.log(response.data);
              console.log("创建存在问题");
            }
          },
          err=>{
            console.log(err.message);
            alert('用户名已存在,创建失败 请重新输入');
          },
        )
      },
      onSubmitLg(){
        console.log("登录表单提交！",this.form2);

        let formData1 = new FormData();
            for(let key in this.form2){
                formData1.append(key,this.form2[key]);
                console.log(formData1.get(key));
            }

        this.$http.post('/login',formData1,{withCredentials:true}).then(
          response=>{
            console.log("这是return",response);
            // 若登录成功，则将用户名呈现在视图上
            // 并且将能登录的账号密码放入vux里
            // 登陆成功0 用户名不存在1 密码错误 2
            if(response.data===0){
              this.$store.state.username=this.form2.username
              this.$store.state.password=this.form2.password
              this.$store.state.UserName=this.$store.state.username;
              this.$store.state.isLogin=true;
              alert('登录成功');
              this.$router.replace('/home');
            }else if(response.data===1){
              alert('用户名不存在');
            }else{
              alert('密码输入错误');
              console.log(response);
            }
            // 如果登录成功.后端返回index 我凭借这个值进行跳转
          },
          err=>{
            alert('登录失败，请重试');
          },
        )
      },
    },
}


export default route1;
</script>

<style>



  /* //可以用作spa登录注册 */
.bili-mini-mask {
  justify-content: center;
    /* margin: 0 auto; */
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 14px;
    background: rgb(255 255 255 / 50%);
    z-index: 3000;
}





.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.elinputcss {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
/* .form .register-form {
  display: none;
} */
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
/* body {
  background: rgb(141,194,111);
  background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
} */





</style>