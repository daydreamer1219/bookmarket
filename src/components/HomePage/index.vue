<template>
  <el-carousel :interval="2000" arrow="always" 
  height="500px"  >
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <img :src="item.idView">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default{
    name:'HomePage',
    data(){
      return {
        imagebox:[{id:0,idView:require('./1.png')},
        {id:1,idView:require('./2.png')},
        {id:2,idView:require('./3.png')},
		{id:1,idView:require('./1.png')},
		{id:2,idView:require('./2.png')}
        ]
      }
    }
  }
</script>

<style>
 .el-carousel__item h3 {
 
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #00aa7f;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #00aa7f;
  }
</style>

