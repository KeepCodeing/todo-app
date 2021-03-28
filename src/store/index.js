import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_TODO, COMMIT_TODO} from "./type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo_list: [
      { todo: 'marina is angel', isDone: true },
      { todo: 'udk is angel', isDone: false },
      { todo: 'hello world', isDone: false },
    ]
  },
  mutations: {
    [ADD_TODO](state, res) {
      state.todo_list.push(res);
    }
  },
  actions: {
    [COMMIT_TODO](context, payload) {
      context.commit(ADD_TODO, payload);
    }
  },
  modules: {
  }
})
