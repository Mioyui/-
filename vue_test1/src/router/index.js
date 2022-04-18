import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import WedForm from '../pages/WedForm';
import GuestTable from '../pages/GuestTable';
import ManageUsers from '../pages/ManageUsers';
// import Test from '../pages/Test'
import Recycle from '../pages/Recycle'
Vue.use(VueRouter);

const router= new VueRouter({
    routes:[
        {
            // 用户登录注册页面路由
            path:'/login',
            component:Login,
            meta:{title:'登陆注册',}
        },
        {
            path:'/home',
            component:Home,
            meta:{title:'主页',}
        },
        {
            path:'/wedform',
            component:WedForm,
            meta:{title:'婚帖表单',}
        },
        {
            // 这个应该不用
            path:'/logout',
            component:Logout,
        },{
            path:'/manageusers',
            component:ManageUsers,
            meta:{
                // isAuth:true, 
                title:'用户管理',   
            }
        },
        // {   
        //     // 测试路由 无关紧要
        //     path:'/test',
        //     component:Test,
        // },
        {   
            // Recycle  回收站路由
            path:'/recycle',
            component:Recycle,
            meta:{
                // isAuth:true,  
            }
        },
        {   
            // GuestTable  赴宴宾客站路由
            path:'/guesttable',
            component:GuestTable,
            meta:{
                // isAuth:true, 
            },
        },

        
        
    ]
})



// 路由守卫 简单的权限判断

router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        if(localStorage.getItem('username')==='root'){
            next();
        }else{
            alert('无权限访问!');
        }
    }else{
        next();
    }
})
router.afterEach((to,from,next)=>{
    document.title=to.meta.title || '婚庆后台';
})


export default router;


