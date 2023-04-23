import { createStore } from "vuex";
import { cart } from "../data/cart";

export default createStore({
  state: {
    cart: cart,
    installation: false,
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getSum(state) {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    getCount(state) {
      return state.cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    },
    getInstallation(state) {
      return state.installation ? "Да" : "Нет";
    },
  },
  mutations: {
    setInstallation(state, isinstallation) {
      state.installation = isinstallation;
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    incrementProduct(state, index) {
      state.cart[index].quantity++;
    },
    decrementProduct(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {
    mocFetch(state) {
      // fetch state.cart + installation
      console.log("fetch");
    },
    removeItem({ commit, state }, product) {
      const index = state.cart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        commit("removeFromCart", index);
      }
    },
    incrementProduct({ commit, state }, product) {
      const index = state.cart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        commit("incrementProduct", index);
      }
    },
    decrementProduct({ commit, state }, product) {
      const index = state.cart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        commit("decrementProduct", index);
      }
    },
  },
});
