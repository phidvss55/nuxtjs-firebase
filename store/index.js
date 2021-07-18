import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            decks: []
        },
        mutations: {
            setDecks(state, decks) {
                state.decks = decks;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nuxt-vue-e5fd6-default-rtdb.firebaseio.com/decks.json').then((res) => {
                    const decksArr = [];
                    for (const key in res.data) {
                        decksArr.push({ ...res.data[key], id: key })
                    }
                    vuexContext.commit('setDecks', decksArr);
                }).catch((err) => {
                    context.error(err);
                });
            },
            setDecks(vuexContext, decks) {
                vuexContext.commit('setDecks', decks);
            }
        },
        getters: {
            decks(state) {
                return state.decks;
            }
        }
    })
};

export default createStore;