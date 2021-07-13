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
    cargar(state,payload){
      state.tareas= payload
    },
    agregandoTarea(state,newTarea){
      state.tareas.push(newTarea)
      localStorage.setItem("tareas",JSON.stringify(state.tareas))
    }
    ,
    eliminandoTarea(state,id){
      state.tareas = state.tareas.filter(tarea => tarea.id != id )
      localStorage.setItem("tareas",JSON.stringify(state.tareas))
 
    }    
  },
  actions: {
    
    agregarTarea: ({commit},newTarea) =>commit('agregandoTarea',newTarea),
    eliminarTarea: ({commit},id) => commit('eliminandoTarea',id),
    cargarLocalStorage({commit}){
      if(localStorage.getItem("tareas")){
        const tareas = JSON.parse(localStorage.getItem("tareas"))
        commit('cargar',tareas)
        return 
      }
      localStorage.setItem("tareas",JSON.stringify([]))
    }
  },
  modules: {
  }
})
