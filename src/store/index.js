import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'
import employeeInfo from "./employeeInfo";
import project from "./project";
import agreement from "./agreement";
import payment from "./payment";
import setting from "./setting";
import VuexPersist from "vuex-persist";
Vue.use(Vuex);
const vuexLocal = new VuexPersist({
  storage: window.sessionStorage //可选，sessionStorage/indexDB
});
export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  modules: {
    employeeInfo,
    project,
    agreement,
    payment,
    setting,
  },
  state: {
    token: "", //token
    userInfo : '',
  },
  getters: {
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
  
  },
  actions: {
    login({commit}){
      commit('setToken','123')
      router.push({path:'/'})
    },
    setUserInfo({commit} , userInfo){
      commit('setUserInfo', userInfo)
    },
    
  }
});
