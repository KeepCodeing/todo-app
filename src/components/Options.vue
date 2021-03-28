<template>
  <div>
    <div class="option_box">
      <router-link
        class="option_link"
        active-class="active_option_link"
        tag="div"
        to="/all"
      >全部</router-link>
      <router-link
        class="option_link"
        active-class="active_option_link"
        tag="div"
        to="/done"
      >已完成</router-link>
      <router-link
        class="option_link"
        active-class="active_option_link"
        tag="div"
        to="/wait"
      >未完成</router-link>
    </div>
  </div>
</template>

<script>
  import TodoList from "./TodoList";
  export default {
    name: "Options",
    components: {
      TodoList,
    },
  }
</script>

<style scoped>
.option_box {
  height: 30px;
  width: 100%;
  text-align: left;
  margin-top: 20px;
  display: flex;
  justify-content: left;
}
.option_link {
  padding: 0 10px;
  color: grey;
  font-size: 14px;
}
.option_link:first-child {
  padding-left: 20px;
}
.active_option_link {
  transform: scale(1.3);
  transition: .25s;
  color: #2c3e50;
}
</style>
