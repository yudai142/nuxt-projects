import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "hello Vuex!"
      };
    },
    mutations: {
      updateMessage: function(state, payload) {
        state.message = payload;
      }
    }
  });
};

export default createStore;
