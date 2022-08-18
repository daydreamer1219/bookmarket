<template>
	 <div id="main">
	 <div class="block">
	    <el-carousel height="150px">
	      <el-carousel-item v-for="item in 4" :key="item">
	        <h3 class="big">{{ item }}</h3>
	      </el-carousel-item>
	    </el-carousel>
	  
<div>
  <el-form :rules="rules" ref="registerForm" :model="registerForm" class="registerContainer">
    <h3 class="registerTitle">注册</h3>
    <el-form-item prop="username">
      <el-input type="text"  v-model="registerForm.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password"  v-model="registerForm.password" placeholder="请输入密码"></el-input>
    </el-form-item>
      <el-form-item prop="password1">
        <el-input type="password"  v-model="registerForm.password1" placeholder="再次输入密码"></el-input>
      </el-form-item>
    </el-form-item>
    <el-button type="success" round style="width: 100%" @click="submitRegister">register</el-button>
  </el-form>
</div>
</div>
</div>
</template>

<script>
	
export default {
  name: "Register",
  data(){
    return{
      registerForm:{
        username:'',
        password:'',
		password1:''
      },
	  trustForm:{
		  username:'',
		  password:'',
	  },
      rules:{
        username:[{required:true,message:'请输入用户名',trigger:'blur'}],
        password:[{required:true,message:'请输入密码',trigger:'blur'}],
		password1:[{required:true,message:'请再次密码',trigger:'blur'}],
      }
    }
  },
  mounted() {
              this.$axios.get('http://localhost:8081/data.json')
                  .then(response => this.trustForm = response.data)
          },
  methods: {  
    submitRegister() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
			if(this.trustForm.username!=this.registerForm.username){
				if(this.registerForm.password1==this.registerForm.password){
          this.$message({
            message: '注册成功,进入主页',
            type: 'success',
			
          });
		  this.$router.push({ path: '/book/hpmepage' })}
		  else{
			  this.$message.error('密码不一致');
		  }
		  
		  }
		  else if(this.trustForm.username==this.registerForm.username){
			 this.$message.error('用户名已经存在');
		  }
		   
        } else{
          this.$message.error('请输入所有字段');
          return false;
        }
      });
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
.registerContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin:180px auto;
  width:350px;
  padding: 15px 35px 15px 35px;
  background: #ffffff;
  border:1px solid #7ffff4;
  box-shadow: 0 0 25px #2c2424;
}
.registerTitle{
  marign: 0px auto 40px auto;
  text-align: center;
}
.registerRemember{
  text-align: left;
  margin:0px 0px 15px 0px;
}
</style>