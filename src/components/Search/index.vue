<template>
    <div class="search_body">
        <el-select v-model="value" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        <div class="search_result">
            <h3>书名/作者</h3>
            <ul>
                <li>
                    <div class="img"><img src="../../../public/images/001.png" alt=""></div>
                    <div class="info">
                        <p><span>隐形人 </span><span>54672人阅读</span></p>
                        <p>作者：[西]埃洛伊·莫尔诺</p>
                        <p>一部关于校园霸凌的直击心灵之作。</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Search",
		 data() {
		      return {
		        options: [{
		          value: '1',
		          label: '小王子'
		        }, {
		          value: '2',
		          label: '白夜行'
		        }, {
		          value: '3',
		          label: '一只特立独行的猪'
		        }, {
		          value: '4',
		          label: '放学后'
		        }, {
		          value: '5',
		          label: '隐形人'
		        },
				{
				  value: '6',
				  label: '沉默的巡游'
				},
				{
				  value: '7',
				  label: '解忧杂货店'
				}
				],
		        value: ''
		      }
		    }
    }
</script>
<style scoped>
    #content .search_body{
        flex: 1;
        overflow: auto;
    }
    .search_body .search_input{
        padding: 8px 10px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #e5e5e5;
    }
    .search_body .search_input_wrapper{
        padding: 0 10px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        background-color: #fff;
        display: flex;
    }
    .search_body .search_input_wrapper i{
        font-size: 16px;
        padding: 4px 0;
    }
    .search_body .search_input_wrapper input{
        border: none;
        font-size: 13px;
        color: #333;
        padding: 4px 0;
        outline: none;
    }
    .search_body .search_result h3{
        font-size: 15px;
        color: #999;
        padding: 9px 15px;
        border-bottom: 1px solid #e6e6e6;
    }
    .search_body .search_result li{
        border-bottom: 1px #c9c9c9 dashed;
        padding: 10px 15px;
        box-sizing: border-box;
        display: flex;
    }
    .search_body .search_result .img{
        width: 60px;
        float: left;
    }
    .search_body .search_result .img img{
        width: 100%;
    }
    .search_body .search_result .info{
        float: left;
        margin-left: 15px;
        flex: 1;
    }
    .search_body .search_result .info p{
        height: 22px;
        display: flex;
        line-height: 22px;
        font-size: 12px;
    }
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){
        font-size: 18px;
        flex: 1;
    }
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){
        font-size: 16px;
        color: #fc7103;
    }
</style>