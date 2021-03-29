<template>
  <div id="app">
<!--    <Title />-->
<!--    <InputBox />-->
<!--    <Options />-->
<!--    <TodoList />-->
    <LoginPage />
  </div>
</template>

<script>
  import Title from "./components/Title";
  import InputBox from "./components/InputBox";
  import Options from "./components/Options";
  import TodoList from "./components/TodoList";
  import LoginPage from "./components/LoginComponents/LoginPage";
  export default {
    components: {LoginPage, TodoList, Options, InputBox, Title}
  }
</script>

<style>
@import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  width: 100%;
  background: rgb(244,246,250);
}
</style>
