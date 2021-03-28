<template>
  <div class="todo_list_box">
    <ul>
      <template v-for="item in todo_list">
        <li
          class="todo_list_option"
          v-show="showTodo($route.path, item.isDone)"
        >
          <div @click="changeState(item)">
            <div :style="{display: item.isDone ? 'block' : 'none'}"></div>
          </div>
          <span
            :style="{textDecoration: item.isDone ? 'line-through' : 'none'}"
          >{{item.todo}}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Vue from 'vue'
  export default {
    name: "TodoList",
    computed: {
      ...mapState({
        todo_list: state => state.todo_list
      }),
    },
    methods: {
      changeState(item) {
        Vue.set(item, 'isDone', !item.isDone);
      },
      showTodo(path, isDone) {
        if (path.includes('all')) return true;
        if (path.includes('wait') && !isDone) return true;
        if (path.includes('done') && isDone) return true;
      }
    }
  }
</script>

<style scoped>
.todo_list_box {
  overflow: scroll;
  padding: 10px 20px;
}
.todo_list_box .todo_list_option {
  display: flex;
  align-items: center;
}
.todo_list_box .todo_list_option > div {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo_list_box .todo_list_option > div > div {
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: rgb(171, 131, 243);
}
.todo_list_box > ul{
  list-style: none;
}
.todo_list_box > ul > li {
  padding: 7px 14px;
  background: white;
  border-radius: 13px;
  margin: 17px 0;
  height: 35px;
  line-height: 35px;
}
.todo_list_box > ul > li > span {
  margin-left: 8px;
}
</style>
