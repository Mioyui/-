<template>
    <div class="wedform">
        <el-form ref="submitform" :model="submitform" label-width="80px">
            <el-form-item label="新郎信息" prop="name">
                <el-input v-model="submitform.bride" style="width:100px;" placeholder="姓名" ></el-input>
                <el-input v-model="submitform.bridep" style="width:200px;margin-left:30px" placeholder="联系方式"></el-input>
            </el-form-item>
            <el-form-item label="新娘信息">
                <el-input v-model="submitform.groom" style="width:100px;" placeholder="姓名"></el-input>
                <el-input v-model="submitform.groomp" style="width:200px;margin-left:30px" placeholder="联系方式"></el-input>
            </el-form-item>
            <el-form-item label="婚礼地点">
            <el-button type="text" @click="showMap">点击打开 地图</el-button>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="40%"
              center>
              <div id="l-map" style="height: 400px;width:400px"></div>
            </el-dialog>
            <el-input v-model="submitform.location" style="width:200px;margin-left:30px" placeholder="具体位置"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="5">
                <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="5">
                <el-time-picker placeholder="选择时间" v-model="date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
           <el-form-item label="展示图片">
               <!-- 这个是单纯的直接提交文件 -->
            <el-col :span="5">
              <el-upload
                class="upload-demo"
                :action="acurl()"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-success="fileDone"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传图片</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            </el-col>
            <el-col :span="3">&nbsp;</el-col>

            <el-col :span="6">
              <el-upload
                  class="upload-demo"
                  :action="acurl()"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :on-success="fileDone"
                  multiple
                  :limit="10"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">点击上传视频</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传MP4/WEBM文件，且不超过500kb</div>
              </el-upload>
            </el-col>
            </el-form-item>
            <el-form-item>
              <hr>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
</el-form>
    </div>
</template>

<script>




export default {
    // 新人提交婚庆信息
    name:'WedForm',
    data(){
        return{
          dialogVisible: false,
          date1:'',
          date2:'',
          rules:{
            name :[{required: true, message: '请输入', trigger: 'blur'}],
          },
            submitform: {
                bride: '',
                bridep: '',
                groom: '',
                groomp: '',
                location:'',
                weddingtime:'',
            },
            imageUrl: '',
            fileList: [],
            file:'',
        }
    },
    methods:{
        // 表单上传提交方法
        // 显示地图 选取位置
        showMap(){
          this.dialogVisible = true;
          setTimeout(() => {
              this.baiduMap()
            }, 0);
            
          },
        baiduMap(){
        // 创建地图实例
        let map=new BMapGL.Map('l-map');

        // 创建中心点坐标
        let pointCenter=new BMapGL.Point( 121.546982,29.817562);
        let point;
        map.centerAndZoom(pointCenter,15);
        // map.addControl(new BMap.NavigationControl());

        // 允许鼠标滚轮缩放地图
        map.enableScrollWheelZoom(true);
        // 给地图添加点击事件获取相应地址
        map.addEventListener('click', function(e) {
            // 向坐标添加标注点
            point=new BMapGL.Point( e.latlng.lng,e.latlng.lat);
            let marker=new BMapGL.Marker(point);
            map.addOverlay(marker);
            console.log("里面",point)
            console.log(this) 
        });
        console.log("外面",point);

    
        },

        onSubmit(){
          // 首先计算出婚礼时间
                  let year=this.date1.getFullYear();
                  let month=this.date1.getMonth()+1;
                  let day=this.date1.getDate();
                  let hh=this.date2.getHours();
                  let mm=this.date2.getMinutes();
                  let ss=this.date2.getSeconds();
                  this.submitform.weddingtime=new Date(year+'-'+month+'-'+day+' '+hh+':'+mm+':'+ss);
                  console.log("婚礼开始时间:",this.submitform.weddingtime);
          let fd=new FormData();
          for(let key in this.submitform){
              fd.append(key,this.submitform[key]);
              console.log(fd.get(key));
          }
          this.$http.post('/hostSignIn',fd).then(
            response=>{
              // 表单提交创建成功,后台返回值,我拿着值进行跳转
              console.log("发送成功",response.data);
              alert('表单提交成功!');
              this.$router.replace('/home');
              // if(response.data==="发送成功"){
              //     alert('恭喜成功提交婚礼信息!');
                  
              // }
          },error=>{
            alert('提交表单请求失败');
          })
        },
        // 文件上传地址
        acurl(){
        return "http://eq8c7g.natappfree.cc/upload";

      },
      //提价文件上传
      submitUpload() {
        this.$refs.upload.submit();
      },
      // 提交媒体成功的回调
      fileDone(res, file){
          console.log("成功发送~");
          console.log(res,file);
      },

      upFailed(err){
        console.log("上传失败",err);
      },
    },
    mounted() {
    this.baiduMap()
    },
}
</script>

<style>
.wedform{
    margin-right: 100px;
}
/* 让上传文件的默认选项消失 */
input[type=file]{
  display: none;
}

</style>