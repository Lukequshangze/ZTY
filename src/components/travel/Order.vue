<template>
  <div>
    <!-- 顶部导航 -->
    <div>
      <mt-header title="提交订单">
        <!--此处跳转到详情页-->
        <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
        </router-link>
      </mt-header>
    </div>
    <!-- title -->
    <div id="orderContent">
    <div id="orderTitle">
      <h3>{{title}}</h3>
    </div>
    <!-- 出行时间 -->
    <div id="orderTripeTime">
        <div @click="selectData">
          选择出行时间：{{this.selectedValue}}
        </div>
        <!-- @touchmove.prevent 阻止默认事件，此方法可以在选择时间时阻止页面也跟着滚动。 -->
        <div @touchmove.prevent>
            <!-- 年月日时分选择 -->
            <mt-datetime-picker
                lockScroll="true"
                ref="datePicker"
                v-model="dateVal"
                class="myPicker"
                type="date"
                year-format="{value}年"
                month-format="{value}月"
                date-format="{value}日"
                @confirm="dateConfirm()">
            </mt-datetime-picker>
        </div>
    </div>
     <!-- 票价类型 -->
     <div class="ticketType">
        <div class="ticketTypeLt">
          <p>成人<span>￥{{price}}/人</span></p>
        </div>
        <div class="ticketTypeRt">
        <van-stepper class="ticketBtn" v-model="adult" />
        </div>
    </div>
     <div class="ticketType">
        <div class="ticketTypeLt">
          <p>儿童<span>￥{{price*0.5.toFixed(2)}}/人</span></p><!-- toFixed()存在缺陷有空修改 -->
        </div>
        <div class="ticketTypeRt">
        <van-stepper v-model="child" />
        </div>
    </div>
     <div class="ticketType">
        <div class="ticketTypeLt">
          <p>组团<span>￥{{price*0.88.toFixed(2)}}/人</span></p>
        </div>
        <div class="ticketTypeRt">
        <van-stepper v-model="group" />
        </div>
    </div>
   
    </div> <!-- 游玩者信息 -->
    <div id="orderNews">
      <mt-field label="联系人" placeholder="输入游客信息" v-model="uname"></mt-field>
      <mt-field label="手机号码" placeholder="输入手机号用于接收短信" type="tel" v-model="phone"></mt-field>
      <mt-field label="接送地址" placeholder="输入地址用于酒店接送" type="tel" v-model="address"></mt-field>
    </div>
    <!-- 底部结算 -->
    <div id="orderSub">
      <ul>
        <li>总价:￥<span>{{adult*price+child*price*0.5+group*price*0.85.toFixed(2)}}</span></li>
        <li><router-link to="" id="orderSubBtn">提交订单</router-link></li><!--跳转支付-->
      </ul>
    </div>
  </div>
</template>
<script>
  import {formatDate} from '../../assets/formatdate.js'
  export default {
    name: 'pickerDemo',
    data(){
      return{
        dateVal: '', // 默认是当前日期
        selectedValue: '',
        adult:0,
        child:0,
        group:5,
        price:200,
        uname:"",
        phone:"",
        address:"",
        title:"八达岭长城，明十三陵，鸟巢等纯游玩一日跟团",
        year:"",
        dateValue:"",
        popupVisible:false,
        disabled:false,
        isClicked:false,
      }
    },
    mounted () {
        let that = this
    },
    methods: {
        selectData () { // 打开时间选择器
            // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
            if (this.selectedValue) {
                this.dateVal = this.selectedValue
            } else {
                this.dateVal = new Date()
            }
            this.$refs['datePicker'].open()
        },
        dateConfirm () { // 时间选择器确定按钮，并把时间转换成我们需要的时间格式
            this.selectedValue = formatDate(this.dateVal)
        }
    }
    };
</script>
<style>
/*顶部导航样式*/
  .mint-header{
    background-color:#fff;
    border-bottom:1px solid rgb(235,234,234)
  }
  .mint-tab-container-item{
    padding: 5px 0;
  }
  .mint-header-title{
    font-weight:400;
    font-size:18px;
    color:rgb(42,41,41);
  }
  .mint-button-icon{
    color:rgb(42,41,41)
  }
  /*orderContent*/
 #orderContent{
    width:90%;
    padding-left:20px;
  }
  /*title*/
  #orderTitle{
    width:90%;
    text-align: left;
  }
  #orderTripeTime{
  border-top:1px solid rgb(235,234,234);
  width:100%;
  text-align:left;
  height:40px;
  line-height:40px;
  }
 /*票价类型*/
  .ticketType{
    display:flex;
    width:100%;
    height:60px;
    border-top:1px solid rgb(235,234,234);
    justify-content:space-between;
  }
   .ticketTypeLt{
    line-height:60px;
  }
  .ticketTypeLt>p{
    color: rgb(42,41,41);
  }
  .ticketTypeLt>p>span{
    color:#fd0000;
  }
  .ticketTypeRt{
    margin-top:15px;
  }
  #orderNews{
    border-top:1px solid rgb(235,234,234);
    text-align: left;
    padding-left: 10px;
  }
  #orderSub{
    border-top:1px solid rgb(235,234,234);
    width:100%;
    height:60px;
    position:fixed;
    bottom:0;
    text-align: center;
  }
  #orderSub ul{
    display:flex;
    justify-content:space-between;
  }
  #orderSub ul{
    line-height:60px;
  }
  #orderSub ul li:nth-child(1){
    padding-left:20px;
  }
  #orderSubBtn{
    width:120px;
    height:60px;
    background-color:#fd0000;
    color:#fff;
    display:block;
  }
</style>