<template>  
<div>
   <div class="d1">
        <div class="header_bar">
            <input type="text" autofocus x-webkit-speech placeholder="请输入搜索内容">
            <img src="../../../static/index_pic/icon/mag_icon.png" class="msg_icon">
            <span class="right_icon"><img src="../../../static/index_pic/icon/paper_icon.png"></span>
            <span class="right_icon"><img src="../../../static/index_pic/icon/phone_icon.png"></span>
        </div>
        <div class="search_referral">
            <div class="search_history">
                <div class="search_bar">
                    <div>
                        <p>历史搜索</p>
                    </div>
                    <div>
                        <a href="">
                            <p class="right_del"><img src="../../../static/index_pic/icon/del_icon.png">删除</p>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <mt-button class="bar_btn" size="small">搜索历史</mt-button>
                    </div>
                </div>
            </div>
            <div class="hot_search">
                <p>热门搜索</p>
            </div>
            <div class="hot_box">
                <div>
                    <mt-button class="bar_btn" size="small">泰国</mt-button>
                </div>
                <div>
                    <mt-button class="bar_btn" size="small">好莱坞</mt-button>
                </div>
                <div>
                    <mt-button class="bar_btn" size="small">皇后镇</mt-button>
                </div>
                <div>
                    <mt-button class="bar_btn" size="small">澳大利亚</mt-button>
                </div>
                <div>
                    <mt-button class="bar_btn" size="small">普吉岛</mt-button>
                </div>
                <div>
                    <mt-button class="bar_btn" size="small">北海道</mt-button>
                </div>
            </div>
        </div>
    </div>
    <div class="main_part">
        <div class="content">
            <div class="carousel">
                <mt-swipe :auto="4000" :show-indicators="true">
                    <mt-swipe-item >
                        <img src="@../../../static/index_pic/pic/jhk-02.jpg" />
                    </mt-swipe-item>
                    <mt-swipe-item >
                        <img src="@../../../static/index_pic/pic/jhk-01.jpg" />
                    </mt-swipe-item>
                    <mt-swipe-item >
                        <img src="@../../../static/index_pic/pic/jhk-03.jpg" />
                    </mt-swipe-item>
                    <mt-swipe-item >
                        <img src="@../../../static/index_pic/pic/jhk-04.jpg" />
                    </mt-swipe-item>
                    <mt-swipe-item >
                        <img src="@../../../static/index_pic/pic/jhk-05.jpg" />
                    </mt-swipe-item>
                </mt-swipe>
            </div> 
           <div class="nav_bar">
                <div class="nav_box">
                    <ul class="nav_bar_ul">
                        <a href="#"> 
                        <li><img src="@../../../static/index_pic/icon/Ind.png" ><p> 当地跟团 </p> </li>
                        </a> 
                        <a href="#"> 
                            <li><img src="@../../../static/index_pic/icon/local.png" ><p> 当地玩乐 </p> </li>
                        </a> 
                        <a href="#"> 
                        <li><img src="@../../../static/index_pic/icon/ship.png" ><p> 邮游轮 </p> </li>
                        </a> 
                        <a href="#"> 
                        <li><img src="@../../../static/index_pic/icon/roll.png" ><p> 精品小团 </p> </li>
                        </a> 
                        <a href="#"> 
                        <li><img src="@../../../static/index_pic/icon/bard.png" ><p> 个性定制 </p> </li>
                        </a> 
                    </ul>
                </div>
                <div>
                    <ul class="nav_bar_ul">
                        <a href="#"> 
                            <li><img src="@../../../static/index_pic/icon/writ.png" ><p> 境外门票 </p> </li>
                        </a> 
                        <a href="#"> 
                            <li><img src="@../../../static/index_pic/icon/airpo.png" ><p> 接送机 </p> </li>
                        </a> 
                        <a href="#"> 
                            <li><img src="@../../../static/index_pic/icon/taxt.png" ><p> 境外用车 </p> </li>
                        </a> 
                        <a href="#"> 
                            <li><img src="@../../../static/index_pic/icon/visa.png" ><p> 签证 </p> </li>
                        </a> 
                        <a href="#"> 
                            <li><img src="@../../../static/index_pic/icon/feature.png" ><p> 特色体验 </p> </li>
                        </a> 
                    </ul>
                </div>
                <div class="show_box">
                   <a href="javascript:;"><img src="@../../../static/index_pic/pic/jhk-02(2).jpg"></a>
                </div>
                <div class="promote">
                    <div class="pro_1f">
                        <div>
                            <h3>新人超值专项</h3>
                        </div>
                        <div class="f1_R">
                            <a href="">
                                <p>查看全部</p>
                                <h3>＞</h3>
                            </a>
                        </div>
                    </div>
                    <div class="pro_2f">
                        <div class="left_box">
                            <img src="@../../../static/index_pic/pic/jhk-07.jpg">
                        </div>
                        <div class="right_box">
                            <div class="up_box">
                                <div class="up_box_pic">
                                    <img src="@../../../static/index_pic/pic/jhk-08.jpg" >
                                </div>
                            </div>
                            <div class="bottom_box">
                                    <img src="@../../../static/index_pic/pic/jhk-09.jpg">
                            </div>
                        </div>
                    </div>
                     <div class="pro_1f">
                        <div>
                            <h3>热门目的地</h3>
                        </div>
                        <div class="f1_R">
                            <a href="">
                                <p>查看全部</p>
                                <h3>＞</h3>
                            </a>
                        </div>
                    </div>
                    <div class="hot_bourn">
                        <div class="hot_nav">
                            <div class="hot_info">北美洲</div>
                            <div class="hot_info">非洲</div>
                            <div class="hot_info">奥新</div>
                            <div class="hot_info">法国</div>
                        </div>
                        <div class="bourn_info">
                            <div>
                                <ul>
                                    <li>
                                        <a href="" id="bourn_pic">
                                            <img src="@../../../static/index_pic/pic/jhk-08.jpg">
                                        </a>
                                    </li>
                                    <li><a href="javascript:;" id="first_text">澳大利亚</a></li>
                                    <li><a href="javascript:;" id="net_text">凯恩斯</a></li>
                                    <li><a href="javascript:;"  class="last_text">皇后镇</a></li>
                                    <li><a href="javascript:;"  class="last_text">墨尔本</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>   
                                        <a href="javascript:;" id="bourn_pic">
                                            <img src="@../../../static/index_pic/pic/jhk-08.jpg">
                                        </a>
                                    </li>
                                    <li><a href="javascript:;" id="first_text">奥克兰</a></li>
                                    <li><a href="javascript:;" id="net_text">悉尼</a></li>
                                    <li><a href="javascript:;"  class="last_text">布里斯班</a></li>
                                    <li><a href="javascript:;"  class="last_text">基督城</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                <li>
                                        <a href="javascript:;" id="bourn_pic">
                                            <img src="@../../../static/index_pic/pic/jhk-08.jpg">
                                        </a>
                                    </li> 
                                    <li><a href="javascript:;" id="first_text">特卡波</a></li>
                                    <li><a href="javascript:;" id="net_text">林肯港</a></li>
                                    <li><a href="javascript:;"  class="last_text">白日梦岛</a></li>
                                    <li><a href="javascript:;"  class="last_text">阿尔卑斯</a></li>
                                </ul>
                            </div>
                        </div>
                    
                    
                    </div>
                     <div class="pro_1f">
                        <div>
                            <h3>新人超值专项</h3>
                        </div>
                    </div>
                    <div class="hot_sell">
                       <div>
                            <router-link to="/Detail"> 
                                <div class="hot_pic">
                                    <img src="@../../../static/index_pic/pic/jhk-10.jpg">
                                </div>
                                <div class="hot_box">
                                    <p class="hot_title">(7天)美国夏威夷欧湖岛+火山大岛+茂宜岛跟团旅游 </p>
                                    <p class="hot_sco">5分</p>
                                    <div class="hot_info">
                                        <span class="hot_pri">￥9,282.92</span>
                                        <span class="hot_up">/起</span>
                                        <span class="sell_info">1034人出行</span>
                                    </div>
                                </div>
                            </router-link>
                       </div>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
</div>
</template>

<script>

export default {
  
 }

</script>

<style scoped>

body{
    position: relative;
}
.main_part{
    font-size: 12px;
    /* position: relative; */
}
.header_bar{
    background:rgb(39, 123, 202);
    display: flex;
    justify-content: space-around;
    padding:10px 15px;
    padding-top:35px;
}
.header_bar input{
    border: 1px solid #fff;
    height: 30px;position: relative;
    width: 230px;
    /* margin-right: 10px; */
    padding-left: 35px;
    border-radius: 25px;
    outline: none;
}
 .d1{
    position: fixed;
    z-index: 1;
    top:0;
}
.search_referral{
    display: none;
    width:100%;
    margin:10px;
    font-size: 14px;
    position: absolute;
    top:100px;
    left:0;
    right:0px;
}


.msg_icon{
    width: 20px;
    position: absolute;
    left: 25px;
    top:40px;
}
.right_icon img{
    width:30px;
    height:30px;
    margin-left:10px;
}
.hot_search{
        margin-top:20px;
}
.search_bar{
    width:90%;
    display: flex;
    justify-content: space-between;
}
.bar_btn{
    margin:15px;
    margin:10px 8px;
    font-size: 12px;
}
.hot_box{
    display:flex;
    flex-wrap:wrap;
}


/*-----------------*/
.content{
    margin:15px 10px;
    width:auto;
    margin-top:93px;
}
    a{
        text-decoration:none; 
    }
    ul{
        list-style: none;
    }
/* carousel */
    .carousel{
        height:150px;
        margin-bottom:8%;
    }
    .carousel img{
        width:100%;
        height:150px;
        border-radius: 12px;
    } 
/* nav_bar */
    .nav_bar_ul{
        display: flex;
        justify-content: space-around;
        text-align: center;
        margin-bottom:0 5px 15px 5px;
        
    }
    .nav_box{
        margin-bottom:5%;
    }
    .nav_box a{
    color:black;
    }
    .nav_bar ul p{
        margin-top:5px;
    }
    /* 广告位 */
    .show_box{
       display: flex;
        margin:6% 2%;
    }
    .show_box img{
        width:100%;
        height:100%;
         border-radius:18px;
        
    }

    /* promote */
.pro_1f{
    display: flex;
    justify-content: space-between;
}
.f1_R a{
   display:flex;
   align-items: center;
}
.pro_2f{
   display:flex;
   border:1px #66666629 solid;
   border-radius: 8%;
   padding: 5%;
   margin: 10px 0 20px 0;
}
.pro_2f img{
     border-radius: 4%;
}
.f1_R{
      margin-left: 5px;
}
.left_box.right_box{
    width:100%;
}
.right_box{
    margin-left: 15px;
}
.up_box_pic{
     margin-bottom:10px;
}
.pro_2f img{
    width:100%;
    height: 100%;
}
.hot_bourn{
    border:1px #66666629 solid;
   border-radius: 8%;
    margin: 15px 0;
}
.hot_nav{
    display: flex;
    justify-content:space-around;
    color: rgb(39, 123, 202);
    margin: 15px;
}
.bourn_info img{
    width:100%;
    height: 100%;
    margin-bottom:-70px;
}
.bourn_info{
    display:flex;
    justify-content: space-around;
    padding:0 2%;
}
.bourn_info div{
    text-align: center;
   
    /* display: flex; */
}
.bourn_info ul {
 margin:0 5% 8% 5%;
}
.bourn_info li{
   margin-bottom: 14%;
}
#first_text{
    color:#fff;
    font-size:15px;
}
#net_text{
    color:#fff;
    font-size: 10px;
}
.last_text{
   color:black;
    font-size:12px;
}

/* hot_sell */
.hot_sell{
    margin-top:30px;
    margin-bottom:10px;
    position: relative;
}
.hot_pic img{
    width:60%;
    height:100%;
    border-radius: 5px;
}
.hot_pic{
    position:absolute;
    left: 0;
    top:-25px;
}
.hot_box{
    margin-left: 20px;
    height:113px;
    display: block;
    border: 1px #66666629 solid;
    padding-left:28%;
    border-radius: 8px;
}
.hot_title{
    padding-top: 5px;
    font-size: 13px;
}
.hot_sco{
     padding-right: 12px;
    padding-top: 5px;
    float:right;
    color:orangered;
}
.hot_info{
   margin-top: 20px;
}
.hot_pri{
    color: red;
    font-size: 20px;
}
.hot_up{
    font-size:8px;
    margin-right:5px;
}
.sell_info{
    padding-right:1%；
}
</style>
