<template>
   <div>
       <h4>login.vue</h4>
      <mt-field label='用户名：' placeholder="请输入用户名" v-model='uname'></mt-field>
        <mt-field label='密码：' placeholder="请输密码" v-model='upwd'></mt-field>
        <!-- 登录 -->
        <mt-button @click='login' size='large'>登录</mt-button>
    </div>    
</template>
<script>
export default {
  data(){return{
      uname:'',
      upwd:''
  }},
  methods:{
      login(){
        //1：获取用户输入的用户名
var u=this.uname;
//2：获取用户输入的密码，
var p=this.upwd;
//3:创建正则表达式 密码3-12 字母数字
var ureg=/^[a-zA-Z0-9]{3,12}$/i;
//4:验证用户名
//5: 验证不成功，提示消息
 if(ureg.test(u)==false){
this.$messagebox('用户名格式错误');
return;
 }

//6:验证密码
//7：验证不成功，提示消息
 if(ureg.test(p)==false){
this.$messagebox('','密码格式错误')
return;
 }
//8:发送ajax 请求
var url='login';
var obj={uname:u,upwd:p};
this.axios.get(
    url,
    {params:obj}
).then(res=>{
    console.log(res);
    //9:获取服务器返回结果
     //10:登录失败提示消息
     //11:登录成功跳转 /Product
       console.log(res.data.code);
       if(res.data.code<0){
       this.$messagebox('消息','用户名和密码错误');
       }else{
        //跳转Prodect组件 
        this.$router.push('/Product');
       }


       
});

  }
 } 
}
</script>
<style scoped>

</style>


