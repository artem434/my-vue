import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task){
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updeteTask(state, {id, description, date}){
      const tasks = state.tasks.contact()

      const idx = tasks.find(t => t.id === id )

      const task = tasks[idx]

      const status = new Date(date) > new Date() ? 'active' : 'outdate'

      tasks[idx] ={...tasks, date, description, status }

      state.tasks = tasks

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task){
      commit('createTask', task)
    },
    updeteTask({commit}, task){
      commit('updeteTask', task)
    }
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  }
})
