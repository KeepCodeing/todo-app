<template>
  <div class="add_todo_box">
    <div class="add_todo_input">
      <label style="width: 100%">
        <input type="text" v-model="todo">
      </label>
      <button @click="addTodo">+</button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import {COMMIT_TODO} from "../store/type";
  export default {
    name: "InputBox",
    methods: {
      addTodo() {
        if (this.todo === '') return;
        this.$store.dispatch(COMMIT_TODO, {
          todo: this.todo,
          isDone: false
        });
        this.todo = '';
      },
    },
    data() {
      return {
        todo: ''
      }
    },
    computed: {
      ...mapState({
        todo_list: state => state.todo_list,
      })
    }
  }
</script>

<style scoped>
.add_todo_box {
  height: 50px;
  width: 100%;
  margin-top: 20px;
}
.add_todo_box .add_todo_input {
  border-radius: 50px;
  background: white;
  height: 100%;
  margin: 0 10px;
  box-shadow: 0 0 20px 2px rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
}
.add_todo_box .add_todo_input input {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  outline: none;
  border: none;
  padding-left: 17px;
  font-size: 20px;
}
.add_todo_box .add_todo_input button {
  height: 53px;
  width: 63px;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 50px;
  line-height: 50px;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
</style>
