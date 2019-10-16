<template>
    <!-- Tabbar 子组件 -->
    <div>
       <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>
            <!-- 面板
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1">首页</mt-tab-container-item>
            <mt-tab-container-item id="tab2">分类</mt-tab-container-item>
            <mt-tab-container-item id="tab3">购物车</mt-tab-container-item>
            <mt-tab-container-item id="tab4">我的</mt-tab-container-item>
        </mt-tab-container>
            <!-- 底部导航条父元素 -->
            <!-- 添加三个按钮 -->
        <!-- <mt-tabbar v-model="active" fixed> -->
            <!-- 底部导航条 -->
            <!-- 将图片复制到指定目录 assets-->
            
        <!-- </mt-tabbar> -->
    </div>
</template>
<script>
export default {
    props:{
        focused:false,  //选中状态
        // 选中显示图片  默认显示图片
        selectedImage:{default:""},//选中
        normalImage:{default:""}//默认
    },
}
</script>
<style>
    .imgstyle{
        width:30px;
        height:30px;
 }
</style>
