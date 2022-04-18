<template>
  <div id="manager" class="panel m-4">

    <el-table
    :data="$store.state.HostInfo"
    stripe
    :key="randomKey"
     @cell-dblclick="editData"
    style="width: 100%">

    <el-table-column
      property="bride"
      label="新郎"
      width="100">
      <template slot-scope="scope">
          <el-input v-if="scope.row[scope.column.property + 'isShow']"
                    :ref="scope.column.property"
                    v-model="scope.row.bride"
                    @blur="alterData(scope.row,scope.column)"></el-input>
          <span v-else>{{ scope.row.bride }}</span>
        </template>
    </el-table-column>

    <el-table-column
      property="bridep"
      label="联系方式"
      width="180">
      <template slot-scope="scope">
          <el-input v-if="scope.row[scope.column.property + 'isShow']"
                    :ref="scope.column.property"
                    v-model="scope.row.bridep"
                    @blur="alterData(scope.row,scope.column)"></el-input>
          <span v-else>{{ scope.row.bridep }}</span>
        </template>
    </el-table-column>

    <el-table-column
      property="groom"
      label="新娘"
      width="100">
      <template slot-scope="scope">
          <el-input v-if="scope.row[scope.column.property + 'isShow']"
                    :ref="scope.column.property"
                    v-model="scope.row.groom"
                    @blur="alterData(scope.row,scope.column)"></el-input>
          <span v-else>{{ scope.row.groom }}</span>
        </template>
    </el-table-column>

    <el-table-column
      property="groomp"
      label="联系方式"
      width="180">
      <template slot-scope="scope">
          <el-input v-if="scope.row[scope.column.property + 'isShow']"
                    :ref="scope.column.property"
                    v-model="scope.row.groomp"
                    @blur="alterData(scope.row,scope.column)"></el-input>
          <span v-else>{{ scope.row.groomp }}</span>
        </template>
    </el-table-column>

    <el-table-column
      property="location"
      label="婚礼地点"
      width="180">
      <template slot-scope="scope">
          <el-input v-if="scope.row[scope.column.property + 'isShow']"
                    :ref="scope.column.property"
                    v-model="scope.row.location"
                    @blur="alterData(scope.row,scope.column)"></el-input>
          <span v-else>{{ scope.row.location }}</span>
        </template>
    </el-table-column>

    <el-table-column
      property="weddingtime"
      label="婚礼时间">
      <template slot-scope="scope">
          <el-input v-if="scope.row[scope.column.property + 'isShow']"
                    :ref="scope.column.property"
                    v-model="scope.row.weddingtime"
                    @blur="alterData(scope.row,scope.column)"></el-input>
          <span v-else>{{ scope.row.weddingtime }}</span>
        </template>
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="160">
      <template slot-scope="scope">
        <el-button  @click="Edit(scope.row)" type="primary" size="small">编辑</el-button>
        <el-button  @click="Del(scope.row)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


  </div>
</template>









<script>
export default {
    name:'ManageUsers',
    data() {
      return {
        isEdit:true,
        randomKey: Math.random(),
        HostInfo:[],

      }
    },
    methods:{
      // el-table的编辑
      editData(row, column){
        row[column.property + "isShow"] = true;
        this.refreshTable(); 
        this.$nextTick(() => {
        this.$refs[column.property] && this.$refs[column.property].focus()
        }) 
      },
      alterData (row, column) {
      row[column.property + "isShow"] = false
      // 当修改完 光标失去焦点 发送后端请求改变数据
      //这个row其实就是当前修改的整行对象
      // console.log(row.location);
      let formData = new FormData();
        for(let key in row){
          if(key==='weddingtime'){
            row[key]=new Date(row[key]);
          }
            formData.append(key,row[key]);
            console.log(formData.get(key));
        }
      this.$http.post('/updateHost',formData).then(
        response=>{
          this.$store.state.HostInfo=response.data;
      },err=>{
        alert('数据修改失败！',err.data);
      })
      
      this.refreshTable()
    },
    refreshTable () {
      this.randomKey = Math.random()
    },
      // 删除请求发送给vuex 让其中state的HostInfo进行修改
      Del(row) {
          //  console.log("删除键的id",id);
          let fd=new FormData();
          for(let key in row){
            if(key==='id'){
              fd.append(key,row[key]);
              console.log(fd.get(key));
            }
              
          }
            this.$http.post('/deleteHost',fd).then(
              response=>{
                this.$store.state.HostInfo=response.data;
                console.log(response.data);
                this.$store.commit('DelHost',response.data)
              },
              err=>{
                // alert('删除操作出错！');
              });
            
          },
    add(index) {
      this.HostInfo.push({
        bride: '',
        bridep: '',
        groom: '',
        groomp: '',
        location:'',
        weddingtime:'',
      });
    },
    },
    // 组件挂载时获取后端的新人数据
    // mounted(){
    //   this.HostInfo=this.$store.state.HostInfo;
    //   console.log('组件重新挂载了');
    // },
    // beforeUpdate(){
    //   this.HostInfo=this.$store.state.HostInfo;
    //   console.log('组件在更新了');
    // },
    // updated(){
    //   this.HostInfo=this.$store.state.HostInfo;
    //   console.log('组件更新完了');
    // }


  
}
</script >

<style scoped>

.curs{
  cursor: pointer;
}

.t_show{
    transform: rotate(0deg); 
}

.t_hide{
    transform: rotate(-180deg);
}

</style>