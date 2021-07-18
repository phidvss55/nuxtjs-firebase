import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            decks: []
        },
        mutations: {
            addDeck(state, newDeck) {
                state.decks.push(newDeck)
            },
            editDeck(state, editDeck) {
                const deckIndex = state.decks.findIndex(deck => deck.id === editDeck.id)
                state.decks[deckIndex] = editDeck
            },
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
            async addDeck(vuexContext, deckData) {
                return await axios
                    .post(
                        "https://nuxt-vue-e5fd6-default-rtdb.firebaseio.com/decks.json",
                        deckData
                    )
                    .then((result) => {
                        vuexContext.commit('addDeck', { ...deckData, id: result.data.name })
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            async editDeck(vuexContext, deckData) {
                return await axios
                    .put(
                        `${process.env.baseApiUrl}/decks/${deckData.id}.json`,
                        deckData
                    )
                    .then((result) => {
                        vuexContext.commit('editDeck', { ...result.data, id: deckData.id })
                    })
                    .catch((err) => {
                        console.log(err);
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