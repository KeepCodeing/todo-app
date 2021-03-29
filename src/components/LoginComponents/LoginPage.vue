<template>
  <div class="login_page">
    <div class="login_box">
      <div
        class="login_register_button"
        @click="showRegisterForm"
        :class="isRegister ? 'register_button_slow_down' : 'register_button_slow_up'"
      >
        <h1 v-show="!isRegister">Reg</h1>
      </div>
      <div
        class="register_form"
        :class="isRegister ? 'register_form_slow_up' : ''"
        v-show="showRegister"
      >
        <h1 @click="showRegisterForm">Close</h1>
        <h2>Sign up, find more inspiration</h2>
        <form class="register_form_box">
          <label>
            <input type="text" placeholder="your username">
          </label>
          <label>
            <input type="text" placeholder="your email">
          </label>
          <label>
            <input type="text" placeholder="your password">
          </label>
        </form>
      </div>
      <div class="login_form">
        <div class="login_form_head">
          <div>
            <img src="../../assets/logo.png" alt="logo">
            <h1>Log In VueProject</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginPage",
    data() {
      return {
        isRegister: false,
        showRegister: false
      }
    },
    methods: {
      showRegisterForm() {
        this.isRegister = !this.isRegister;
        setTimeout(() => this.showRegister = ! this.showRegister, this.isRegister ? 600 : 0);
      }
    }
  }
</script>

<style scoped>
.login_page {
  height: 100vh;
  width: 100%;
  background: antiquewhite;
}
.login_page .login_box {
  height: 600px;
  width: 500px;
  background: rgb(254, 254, 255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 30px 0;
  box-sizing: border-box;
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 10%);
}
.login_page .login_box .login_register_button {
  height: 70px;
  width: 70px;
  position: absolute;
  background: rgb(64, 102, 254);
  border-radius: 10px;
  right: 0;
  top: 0;
  transform: translate(35%, -35%);
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 10%);
  cursor: pointer;
}
.login_page .login_box .login_register_button > h1 {
  font-size: 20px;
  line-height: 70px;
  color: rgb(255, 255, 255);
  text-align: center;
}
.register_button_slow_down {
  transition: .6s;
  transform: translate(-311%, 375%) scaleX(7.2) scaleY(8.6) !important;
  border-radius: 3px !important;
}
.register_button_slow_up {
  transition: .6s;
  transform: translate(35%, -35%) scale(1) !important;
}
.register_form_slow_up {
  animation: slowUP .6s;
}
@keyframes slowUP {
  from {
    /*margin-top: 20px;*/
    opacity: 0;
  }
  to {
    /*margin-top: 0;*/
    opacity: 1;
  }
}
.login_page .login_box .register_form {
  position: absolute;
  top: 0;
  background: rgb(64, 102, 254);
  height: 100%;
  width: 100%;
  border-radius: 20px;
  padding: 5px 20px;
  box-sizing: border-box;
}
.login_page .login_box .register_form > h1 {
  font-size: 20px;
  line-height: 70px;
  color: rgb(255, 255, 255);
  text-align: right;
  cursor: pointer;
}
.login_page .login_box .register_form > h2 {
  color: rgb(255, 255, 255);
}
.login_page .login_box .register_form .register_form_box {
  margin-top: 20px;
  text-align: center;
}
.login_page .login_box .register_form .register_form_box input {
  height: 40px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid #fff;
  outline: none;
  padding-left: 7px;
  font-size: 24px;
  background: none;
  margin: 10px 0;
  color: white;
  font-weight: lighter;
}
.login_page .login_box .login_form .login_form_head {
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 30px;
}
.login_page .login_box .login_form .login_form_head img {
  height: 35px;
  width: 35px;
  margin-bottom: 10px;
}
</style>
