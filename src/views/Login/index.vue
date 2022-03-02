<template>
  <div class="account-login">
      <div class="login-title whitecolor">登录</div>
    <a-form :model="formState" :label-col="formState.layout.labelCol" class="form-box">
      <label for="username" class="whitecolor">用户名</label>
      <a-form-item name="username" :wrapper-col="formState.layout.wrapperCol" id='username'>
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <label for="username" class="whitecolor">密码</label>
      <a-form-item name="password" :wrapper-col="formState.layout.wrapperCol">
        <a-input-password v-model:value="formState.password" type="password" />
      </a-form-item>

      <a-form-item :wrapper-col="formState.layout.labelCol">
        <a-button type="primary" html-type="submit" style="width:302px;margin:0 auto">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive, defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "login",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const formState = reactive({
      username: "",
      password: "",
      layout: {
        labelCol: { span: 10},
        wrapperCol: { span:24 },
      },
    });
    onMounted(() => {
      console.log("onMounted!", formState);
    });
    //数据
    return {
      formState,
    };
  },
});
</script>
<style scoped lang="scss">
@import "./login.scss";
</style>