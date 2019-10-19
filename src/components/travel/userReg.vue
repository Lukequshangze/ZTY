<template>
    <div>
    <h3>注册页面</h3>
        <div id='reg'>
            <input v-model="uname" @blur="regUname()" type="text" placeholder="请输入想要注册的用户名" autofocus>
            <span class="regMsg">{{unameMsg}}</span>
            <br>
            <input v-model="upwd" @blur="regUpwd()" type="password" placeholder="请输入密码">
             <span class="regMsg">{{upwdMsg}}</span>
            <br>
          <input v-model="supwd" @blur="confirm()" type="password" placeholder="确认密码">
          <span class="regMsg">{{supwdMsg}}</span>
          <br>
           <input v-model="phone" @blur='regPhone()' type="text" placeholder="请输入手机号">
           <span class="regMsg">{{phoneMsg}}</span>
           <br>
            <input v-model="email" type="text" placeholder='请输入邮箱'>
            <span class="regMsg">{{emailMsg}}</span>
            <br>
            <button @click="submit" id='reg-btn'> 注册</button>
        </div>
    </div> 
</template>
<script>
  
    // 密码正则
    var upwd
     export default {
        data(){
            return {
                uname:'',
                upwd:'',
                supwd:'',
                email:'',
                phone:'',

                unameMsg:'',
                upwdMsg:'',
                supwdMsg:'',
                emailMsg:'',
                phoneMsg:''

            }
        },
        methods:{
            //1:事件函数：用户名焦点消失事件  验证用户名  字母数字 下划线 3-16位 
            regUname(){
                // 创建用户名正则验证 字母数字 下划线 3-16位 
                 var unameReg =/^[a-zA-Z0-9_-]{3,16}$/
                //  console.log(typeof this.uname)
                // 非空验证
                if(this.uname===''){
                     this.unameMsg='用户名不能为空'
                  console.log(this.uname)
                   return
                }else{
                      //如果不合规范 则提示  
                 unameReg.test(this.uname)?this.unameMsg='':this.unameMsg='用户名4-16 包含字母数字'
                }    
            },
            //2 :事件函数： 密码焦点消失 验证密码格式
            regUpwd(){
                // 定义密码验证正则
                //   以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
                  var upwdReg=/^[a-zA-Z0-9_-]{3,16}$/
                // 如果为空
                if(this.upwd===''){
                    this.upwdMsg='密码不能为空'
                    return
                }else{
                    console.log(upwdReg.test(this.upwd))
                 upwdReg.test(this.upwd)?this.upwdMsg='':this.upwdMsg='以字母开头，长度在6-18之间，只能包含字母、数字和下划线。'
                }
            },
            // 3: 密码确认函数   
            confirm(){
                
                   this.supwd!=this.upwd? this.supwdMsg='两次输入的密码不一致':this.supwdMsg=''
               
            },
            //4.手机验证函数
            regPhone(){
                  // 定义密码验证正则
                //   以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
                  var upwdReg=/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/
                // 如果为空
                if(this.upwd===''){
                    this.upwdMsg='密码不能为空'
                    return
                }else{
                    console.log(upwdReg.test(this.upwd))
                 upwdReg.test(this.upwd)?this.upwdMsg='':this.upwdMsg='以字母开头，长度在6-18之间，只能包含字母、数字和下划线。'
                }
            },
            //提交发送ajax 请求
            submit(){
                this.axios
            }
           
        }
    }        

</script>
<style>
    .regMsg{color:red;font-size:7px;display: block}
    
    /* 外层div    div>span+input*/
    #reg{padding-top:50px ;}
    #reg>input{
        width: 60%;
        height: 22px;
        border:none;
        border-bottom:#ddd solid 1px;
        outline: none;
        padding-left: 20px;
        }
    #reg-btn{
        width: 60%;
        height: 40px;
        background:#111111;
        font-size: 18px;
        margin:0 auto;
        color: aliceblue;
        border-radius: 5px;
    }

</style>