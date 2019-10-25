<template>
	<div id="myCart">
		<ul id="cartList">
			<li id="cartItem" v-for="(item,i) of cartText" :key="i">
				<router-link to="./MyOrder" slot="left">
					<img :src="item.icon" alt="" id="cartIcon">
					<p>{{item.title}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				cartText:[
					{icon:require("../../../static/myimg/mycart/order.png"),title:"全部订单"},
					{icon:require("../../../static/myimg/mycart/pay.png"),title:"待支付"},
					{icon:require("../../../static/myimg/mycart/trip.png"),title:"待出行"},
					{icon:require("../../../static/myimg/mycart/comment.png"),title:"待评价"}
        		]
			}
		},
		props:["uid"],
		created(){
			console.log(this.uid)
		}
	}
</script>
<style>
	#myCart{
		    margin: 0 auto;
		    margin-top: 50px;
		width:95%;
		height:80px;
		border-radius:8px;
		background:#fff;
		/* box-shadow:0px 0px 4px 2px rgb(235,234,234);
		 */
       		 box-shadow:0px 2px 5px  rgb(215,215,215);

	}
	#cartList{
		display:flex;
		justify-content:space-around;
		list-style:none;
		padding:0;

	}
	#cartItem{
		margin:0;
	}
	#cartItem p{
		color:rgb(155,155,155);
		font-size:12px;
		text-decoration:none;
		display:block;margin:0;
		padding:0
	}
	#cartItem img{
		width:30px;
		height:30px;
		margin-top:15px;
	}
	#cartItem a{
		text-decoration:none 
	}
</style>