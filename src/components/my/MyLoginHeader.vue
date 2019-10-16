<template>
<div>
    
    <div class="set">
        <img src="../../../static/my_personal/set.png" alt="" width="25px" height="25px">
    </div>
    <div class="tou">
        <img src="../../../static/my_personal/brand.png" alt="" width="70px" height="70px" >
        <h4>登录/注册</h4>
    </div>
    <div style="height:20px"></div>
    <div class="mili">
        <a href="javascript:;">查看米粒</a>
        <a href="javascript:;">查看优惠券</a>
    </div>
</div>
</template>
<script>
    export default {
        data(){
            return{
                flag:true,
                loginLabel:"登录/注册",
                uname:''
            }
        },
        methods:{}
    } 
</script>
<style scoped>
.set{

width: 95%;
position:fixed;
top:0;
padding-top:15px;
background-color: #fff;
text-align: right;
}
.tou{
    display: flex;
    text-align: left;
    padding-left:10px;
    line-height:center;
}
.tou>h4{
    padding-left: 20px;
    font-size:16px;
}
.mili>a{
    text-decoration: none;
    color:rgb(67,184,236);
    padding-left:50px;
    padding-right:50px;
}
</style>
