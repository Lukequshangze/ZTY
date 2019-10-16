<template>
    <div id="goal-page">
        <!-- 顶部搜索框 -->
        <div class="goal-search">
             <mt-search v-model="commodityName" cancel-text="取消"  placeholder="搜索" @keyup.enter.native="loadListData"></mt-search>


            <!-- <input type="none">
            <span>搜索</span>
            <div class="seaech-style">
                <img src="../../assets/goal/search.png" alt="">
            </div> -->
            
        </div>




        <!-- <div class="goal-ul">
            <div><ul><li>1</li></ul></div>
            <div><ul><li>1</li></ul></div>
            <div><ul><li>1</li></ul></div>
            <div><ul><li>1</li></ul></div>
        </div> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .goal-search{
        /* display: flex;
        justify-items: center;
        align-items: center;
         padding-bottom: 5px; */
        /* 父元素相对定位 */
        position: relative;
        padding:5px 5px 0 5px;
        border-radius: 50px;
    }
    .searchWrap {
    margin: 5px 8px;
    background: #fff;
    }
    .mint-searchbar{
    padding: 0;
    box-sizing: border-box;
    }
    .seaech-style{
        /* 搜索框子元素绝对定位 */
        position: absolute;
        top: 4px;
        left: 12px;
    }
    .goal-search input{
        width: 300px;
        height: 22px;
        border-radius: 20px;
        border:1px solid #fff;
        background: #ddd;
    }
    .goal-search span{
        color:rgb(38, 40, 168);
        margin-left:10px;
    }

    /* #goal-page{
        margin:60 auto;
        padding:0 auto;
        float: left;
        text-align: center;
        width: 30%;
        height: 100%;
        background: #ddd;
    } */
    
    #goal-page ul{
        padding: 0;
    }
</style>
