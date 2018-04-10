import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  ingredients: []
}

const mutations = {
  setIngredients (state, payload) {
    state.ingredients = payload
  }
}

const actions = {
  getIngredients ({ commit }, payload) {
    commit('setIngredients', payload)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
