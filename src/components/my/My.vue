
<template>
<!-- 我的工具部分  -->
  <div>
      <h3>工具栏</h3>
  
      <div>
            <myloginheader></myloginheader>
             <mycart></mycart>
            <div id='huodong'>
                <img src="../../../static/my_tools_icon/huodong.jpg" alt="">
            </div>
          <div id="my_tools">
              <h4>我的工具</h4>
              <ul>
                  <li><a href="javascript:;"><span><img src="../../../static/my_tools_icon/duihuan.png" alt=""></span><p>兑换工具</p></a></li>
                  <li><a href="javascript:;"><span><img src="../../../static/my_tools_icon/duihuan.png" alt=""></span><p>语言切换</p></a></li>
                  <li><a href="javascript:;"><span><img src="../../../static/my_tools_icon/youhuiquan.png" alt=""></span><p>优惠兑换</p></a></li>
                  <li><a href="javascript:;"><span><img src="../../../static/my_tools_icon/shoucangjia.png" alt=""></span><p>收藏夹</p></a></li>
                  <li><a href="javascript:;"><span><img src="../../../static/my_tools_icon/yonghu.png" alt=""></span><p>常用旅客</p></a></li>
                  <li><a href="javascript:;"><span><img src="../../../static/my_tools_icon/ziyuan.png" alt=""></span><p>我的定制</p></a></li>
              </ul>
          </div>
      </div>
  </div>
</template>
    
<script>
import MyCart from './MyCart'
import MyLoginHeader from './MyloginHeader'
export default {
    components:{'mycart':MyCart,'myloginheader':MyLoginHeader}
}
</script>

<style scoped>
    body{margin:0;padding:0}
    /* .my-font{}
    .my-bg{}
    .my-bg-shadow{}
     */
    #huodong{
        height: 100px;
        width: 95%;
        margin: 20px auto;
    }
    #huodong>img{height: 100px;
        border-radius: 20px;
    }
    /* 外层div  #my_tools*/
    #my_tools{}
    /* 第一部分  标题 我的工具 */
    #my_tools>h4{
        font-weight:1000;
        text-align:left;
        margin:0 0 8px 10px;
        }
    /*第二部分开始 --内容-- 结构：ul>li>a>p */
    #my_tools>ul{
        display: flex;
        flex-wrap: wrap;
        margin:0;padding:0;
        list-style:none;
        margin:0 auto;
        padding:5px 0;
        width:95%;
        /* box-shadow:-1px 1px 4px  rgb(214, 204, 204); */
        box-shadow:0px 2px 5px  rgb(215,215,215);
        border-radius:10px;
        box-sizing:border-box;
        }
    #my_tools>ul>li{
        width:25%;
        /* height: 50px; */
        text-align:center;
        margin-top:7px;
        }
    #my_tools>ul>li>a{
        text-decoration:none;
        color:#888;
        padding: 2px;
        text-align:center;
        display:inline-block;
        }
    #my_tools>ul>li>a>span{
        padding: 4px 6px;
        background: #000;
        text-align:center;
        display:inline-block;
        border-radius:20px;
         width:25px;
        height:20px;
        }
    #my_tools>ul>li:nth-child(odd)>a>span{
        background-image:linear-gradient(to bottom right, #FFE500,#F2B153);
    }
    #my_tools>ul>li:nth-child(even)>a>span{
        background-image:linear-gradient(to bottom right, #FF7F31,#FF66B2);

    }
    #my_tools>ul>li>a>span>img{
       height:20px;
        }
    #my_tools>ul>li>a>p{
        font-size:12px;
        margin-top:10px;
        }
        /* 第二部分 --内容-- 结束 */
</style> 


