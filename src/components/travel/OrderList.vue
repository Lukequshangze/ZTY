<template>
	<div id="orderList">
		<div id="orderTitle">
			<ul>
				<li><i></i></li>
				<li><h4>北京&gt;上海</h4></li>
				<li>待支付</li>
			</ul>
		</div>
		<div id="orderText">
			<ul>
				<li><i></i></li>
				<li>
					<ul>
						<li>起飞时间:2019-10-20&nbsp;06:50</li>
						<li>乘坐航班:HO1252&nbsp;北京收地机场&nbsp;T3航站楼</li>
						<li>订单总价:￥635.00</li>
					</ul>
				</li>
			</ul>
			<button id="orderBtn">付款</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style>
	#orderList{
		margin:0 auto;
		width:90%;
		height:150px;
		border-radius:8px;
		background:#fff;
		box-shadow:0px 0px 2px 2px rgb(235,234,234);
		margin-top:10px;
	}
	#orderTitle{
		height:50px;
		width:100%;
		border-radius:8px 8px 0 0;
		border-bottom:1px solid rgb(235,234,234);
	}
	#orderTitle>ul{
		display:flex;
		justify-content: space-around;
	}
	#orderTitle li+li+li{
		font-size:14px;
	}
	#orderTitle i{
		background-image:url(../../../static/myimg/mycart/plane.png);
		background-repeat:no-repeat;
		display:block;
		width: 32px;
		height:32px;
	}
	#orderText{
		height:80px;
		width:100%;
	}
	#orderText>ul{
		display: flex;
		margin-top:5px;
	}
	#orderText li{
		font-size: 14px;
	}
	#orderText i{
		background-image:url(../../../static/myimg/mycart/traffic.png);
		background-repeat:no-repeat;
		display:block;
		width: 64px;
		height:64px;
	}
	#orderText>ul ul li{
		text-align:left
	}
</style>