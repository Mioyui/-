<template>
  <div id="manager" class="panel m-4">
      <h2>回收站</h2>
    <el-table
    :data="$store.state.RecycleInfo"
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
        <el-button  @click="Recover(scope.row)" type="success" size="small">恢复数据</el-button>
      </template>
    </el-table-column>
  </el-table>


  </div>
</template>

<script>
export default {
    name:'Recycle',
    data(){
        return{
            RecycleInfo:[],
        }
    },
    // 组件挂载时，将vuex里的RecycleInfo拿过来
    mounted(){
        this.RecycleInfo=this.$store.state.RecycleInfo;
    },
    methods:{
        // 回收方法，点击向后端发送恢复数据请求
        Recover(row){
            let fd=new FormData();
            for(let key in row){
            if(key==='id'){
              fd.append('RecoverId',row[key]);
            //   console.log(fd.get(key));
            console.log("这里是发送给后端的键值对",fd);
            }
              
          }

            this.$http.post('/recover',fd).then(
                response=>{
                  // 无权限 后台返回403
                    // if(response.data==='403'){
                    //   alert('您不是管理员，无权访问');
                    // }else{
                      this.$store.state.RecycleInfo=response.data;
                      alert('回收数据成功');
                      console.log("回收数据 后端发送的",response.data);
                    // }
                },
                err=>{
                    // alert('回收数据失败！',err.data);
                }
            )
        }
    }
}
</script>

<style>

</style>