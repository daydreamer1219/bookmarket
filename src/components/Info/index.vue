<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  </el-form-item>
  <el-form-item label="出生日期" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;">
		</el-date-picker>
      </el-form-item>
    </el-col>
    </el-form-item>
    <el-form-item label="性别" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="女"></el-radio>
        <el-radio label="男"></el-radio>
      </el-radio-group>
    </el-form-item>
 
  <el-form-item label="爱好" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="运动" name="type"></el-checkbox>
      <el-checkbox label="美食" name="type"></el-checkbox>
      <el-checkbox label="小说" name="type"></el-checkbox>
      <el-checkbox label="影视" name="type"></el-checkbox>
    </el-checkbox-group>
	 </el-form-item>
  <el-form-item label="小说偏好" prop="like">
    <el-select v-model="ruleForm.region" placeholder="请选择类型">
      <el-option label="悬疑" value="xuanyi"></el-option>
      <el-option label="言情" value="yanqing"></el-option>
	  <el-option label="穿越" value="yanqing"></el-option>
    </el-select>
	</el-form-item>
  <el-form-item label="个性签名" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
    </el-form-item>
    <el-form-item label="公开" prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
    <el-button @click="resetForm('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
	  name:'Info',
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择偏好', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          
          type: [
            { type: 'array', required: true, message: '请至少选择一个爱好', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写个性签名', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('保存成功！');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>