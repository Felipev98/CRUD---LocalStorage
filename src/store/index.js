import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[]
  },
  getters:{
    getTareas:state => state.tareas,
    getTarea: state => id => state.tareas.find(tarea =>tarea.id === id )

  },
  mutations: {
    agregandoTarea:(state,newTarea) => state.tareas.push(newTarea),
    eliminandoTarea:(state,id) =>  (state.tareas = state.tareas.filter(tarea => tarea.id != id )),    
  },
  actions: {
    
    agregarTarea: ({commit},newTarea) =>commit('agregandoTarea',newTarea),
    eliminarTarea: ({commit},id) => commit('eliminandoTarea',id)
  },
  modules: {
  }
})
