import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "hello Vuex!"
      };
    },
    mutations: {
      updateMessage: function(state) {
        state.message = "Updated!";
      }
    }
  });
};

export default createStore;
