<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="悬疑" name="1">
		 <div class="book_body">
      <ul>
                  <li>
                      <div class="pic_show"><img src="../../../public/images/007.png" alt=""></div>
                      <div class="info_list">
                          <h2>嫌疑人X的献身</h2>
                          <p>作者：东野圭吾</p>
                      </div>
                      <div class="btn_pre">
                          已读
                      </div>
                  </li>
				  <li>
				      <div class="pic_show"><img src="../../../public/images/008.png" alt=""></div>
				      <div class="info_list">
				          <h2>放学后</h2>
				          <p>作者：东野圭吾</p>
				      </div>
				      <div class="btn_pre">
				          未读
				      </div>
				  </li>
				  </ul>
				  </div>
      
    </el-collapse-item>
    <el-collapse-item title="名著" name="2">
      <div class="book_body">
      <ul>
                  <li>
                      <div class="pic_show"><img src="../../../public/images/002.png" alt=""></div>
                      <div class="info_list">
                          <h2>小王子</h2>
                          <p>作者：[法] 圣埃克苏佩里</p>
                      </div>
                      <div class="btn_pre">
                          已读
                      </div>
                  </li>
      				  </ul>
      				  </div>
    </el-collapse-item>
    <el-collapse-item title="随笔" name="3">
     <div class="book_body">
     <ul>
                 <li>
                     <div class="pic_show"><img src="../../../public/images/002.png" alt=""></div>
                     <div class="info_list">
                         <h2>一只特立独行的猪</h2>
                         <p>作者：王小波</p>
                     </div>
                     <div class="btn_pre">
                         未读
                     </div>
                 </li>
				 <li>
				     <div class="pic_show"><img src="../../../public/images/011.png" alt=""></div>
				     <div class="info_list">
				         <h2>沉默的大多数</h2>
				         <p>作者：王小波</p>
				     </div>
				     <div class="btn_pre">
				         未读
				     </div>
				 </li>
     				  </ul>
     				  </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
    export default {
        name: "Collection",
		 data() {
		      return {
		        activeNames: ['1']
		      };
		    },
		    methods: {
		      handleChange(val) {
		        console.log(val);
		      }
		    }
    }
</script>
<style scoped>
    #content .book_body{
        flex: 1;overflow: auto;
    }
    .book_body ul{
        margin: 0 12px;
        overflow: hidden;
    }
    .book_body ul li{margin-top: 12px;display: flex;align-items: center;border-bottom: 1px solid #e6e6e6;padding-bottom: 10px;}
    .book_body .pic_show{width: 64px;height: 90px;}
    .book_body .pic_show img{width: 100%;}
    .book_body .info_list{margin-left:10px;flex: 1;position: relative; }
    .book_body .info_list h2{
        font-size: 17px; line-height: 24px;
        width: 150px;overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis ;
    }
    .book_body .info_list p{
        font-size:13px;
        color: #666;
        line-height: 22px;
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis ;
    }
    .book_body .info_list .grade{
        font-weight: 700;
        color: #faaf00;
        font-size: 15px;
    }
    .book_body .info_list img{
        width: 50px;
        position: absolute;
        right: 10px;
        top: 5px;
    }
    .book_body .btn_mall, .book_body .btn_pre {
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background-color: #ff0000;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;

    }
    .book_body .btn_pre {
        background-color: #3c9fe6;
    }
</style>