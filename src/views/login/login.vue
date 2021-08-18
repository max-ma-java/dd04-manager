<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="login-form">
      <h3 class="title">海隆人员管理系统</h3>
      <el-form-item prop="username">
        <el-input key="username" v-model="loginForm.username" type="text" auto-complete="off" placeholder="用户名">
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input key="password"  v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码" @keyup.enter.native="handleLogin">
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon"/>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <!-- <div class="retireve-password" @click="retirevePassword">找回密码</div> -->
      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import md5 from 'js-md5'
import Cookies from 'js-cookie'
import { login} from '@/api/login'
import { setToken } from '@/utils/auth'
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
                rememberMe : true
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', message: '用户名/手机号不能为空' }],
                password: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
            },
            loading: false,
        }
    },
    created(){
        this.getCookie()
    },
    methods:{
        handleLogin(){
            this.$refs.loginForm.validate(valid => {
                const user = {
                    username: this.loginForm.username,
                    password: this.loginForm.password,
                    rememberMe: this.loginForm.rememberMe,
                }
                if(valid){
                    this.loading = true
                    if (this.loginForm.rememberMe) {
                        Cookies.set('username', user.username, { expires: 1 })
                        Cookies.set('password', user.password, { expires: 1 })
                        Cookies.set('rememberMe', user.rememberMe, { expires: 1 })
                    } else {
                        Cookies.remove('username')
                        Cookies.remove('password')
                        Cookies.remove('rememberMe')
                    }
                    const params = {
                        username : this.loginForm.username,
                        password : md5(this.loginForm.password)
                    }
                    login(params).then(res =>{
                        if(res.body.success){
                            this.loading = false
                            const data = res.body.data.token
                            setToken(data.token , user.rememberMe)
                            this.$store.dispatch('setUserInfo', data.tbEmployee)
                            this.$router.push({ path:'/' })
                        }else{
                            this.loading = false
                            this.$message.error(res.body.message);
                        }
                    })
                }
            })
        },
        getCookie(){
            const username = Cookies.get('username')
            let password = Cookies.get('password')
            const rememberMe = Cookies.get('rememberMe')
            password = password === undefined ? this.loginForm.password : password
            this.loginForm = {
                username: username === undefined ? this.loginForm.username : username,
                password: password,
                rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background:url(	'~@/assets/login/bg.jpg') no-repeat left top;
    background-size: 100%;
  }
  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 385px;
    padding: 25px 25px 5px 25px;
    .el-input {
      height: 38px;
      input {
        height: 38px;
      }
    }
    .input-icon{
      height: 39px;width: 14px;margin-left: 2px;
    }
  }
  .retireve-password{
    float: right;
    font-size: 14px;
    cursor: pointer;
    color: #909399;
  }
  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }
  .login-code {
    width: 33%;
    display: inline-block;
    height: 38px;
    float: right;
    img{
      cursor: pointer;
      vertical-align:middle
    }
  }
</style>