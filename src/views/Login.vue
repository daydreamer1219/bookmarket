<template>
	 <div id="main">
	 <div class="block">
	    <el-carousel height="150px">
	      <el-carousel-item v-for="item in 4" :key="item">
	        <h3 class="big">{{ item }}</h3>
	      </el-carousel-item>
	    </el-carousel>
	  
<div>
  <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
    <h3 class="loginTitle">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text"  v-model="loginForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password"  v-model="loginForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
      
    </el-form-item>
    <el-button type="success" round style="width: 100%" @click="submitLogin">Login</el-button>
	
	<p  @click="register()">点击注册</p>
  </el-form>
</div>
</div>
</div>
</template>

<script>
	
export default {
  name: "Login",
  data(){
    return{
      loginForm:{
        username:'',
        password:'',
      },
	  trustForm:{
		  username:'',
		  password:'',
	  },
      rules:{
        username:[{required:true,message:'请输入用户名',trigger:'blur'}],
        password:[{required:true,message:'请输入密码',trigger:'blur'}],
      }
    }
  },
  mounted() {
              this.$axios.get('http://localhost:8081/data.json')
                  .then(response => this.trustForm = response.data)
          },
  methods: {  
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
			if(this.trustForm.username==this.loginForm.username&&this.trustForm.password==this.loginForm.password){
          this.$message({
            message: '恭喜你，成功登录',
            type: 'success'
          });
		  this.$router.push({ path: '/book/homepage' })}
		  else if(this.trustForm.username!=this.loginForm.username){
			 this.$message.error('用户名不存在');
		  }
		  else{
			  this.$message.error('密码错误');
		  }
		  
        } else if(!valid){
          this.$message.error('请输入所有字段');
          return false;
        }
      });
    },
	 register(){
	      this.$router.push({ path: '/register' })
	    }
  }
}
</script>

<style>
	.el-carousel__item h3 {
	    color: #00aa00;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	  }
	
	  .el-carousel__item:nth-child(2n) {
	     background-color: #00aa7f;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	     background-color: #008864;
	  }
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin:180px auto;
  width:350px;
  padding: 15px 35px 15px 35px;
  background: #ffffff;
  border:1px solid #7ffff4;
  box-shadow: 0 0 25px #2c2424;
}
.loginTitle{
  marign: 0px auto 40px auto;
  text-align: center;
}
.loginRemember{
  text-align: left;
  margin:0px 0px 15px 0px;
}
</style>