import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';
import Cookies from 'js-cookie';

const createStore = () => {
    return new Vuex.Store({
        state: {
            decks: [],
            token: null
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
            },
            setToken(state, token) {
                state.token = token;
            },
            clearToken(state) {
                state.token = null;
            },
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
                        "https://nuxt-vue-e5fd6-default-rtdb.firebaseio.com/decks.json?auth=" + vuexContext.state.token,
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
                        `${process.env.baseApiUrl}/decks/${deckData.id}.json?auth=${vuexContext.state.token}`,
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
            },
            authenticateUser(vuexContext, credentials) {
                return new Promise((resolve, reject) => {
                    // check login or register
                    let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`;
                    if (credentials.isLogin) {
                        authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`;
                    }
                    return this.$axios
                        .$post(
                            authUrlApi,
                            {
                                email: credentials.email,
                                password: credentials.password,
                                returnSecureToken: true,
                            }
                        )
                        .then((result) => {
                            vuexContext.commit('setToken', result.idToken);
                            localStorage.setItem('token', result.idToken);
                            localStorage.setItem('tokenExpiration', new Date().getTime() + result.expiresIn * 1000);

                            Cookie.set('token', result.idToken);
                            Cookie.set('tokenExpiration', new Date().getTime() + result.expiresIn * 1000);

                            vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000);
                            resolve({ success: true })
                        })
                        .catch((err) => {
                            reject(err.response)
                        })
                });
            },
            setLogoutTimer(vuexContext, duration) {
                setTimeout(() => {
                    vuexContext.commit('clearToken')
                }, duration);
            },
            initAuth(vuexContext, req) {
                let token, tokenExpiration;
                // Use Cookie
                if (req) {
                    // Handle first time go to page
                    if (!req.headers.cookie) return false;
                    const tokenKey = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='));
                    const tokenExpiration = req.headers.cookie.split(';').find(c => c.trim().startsWith('tokenExpiration='));

                    if (!tokenKey || !tokenExpiration) return false;

                    token = tokenKey.split('=')[1];
                    tokenExpiration = tokenExpiration.split('=')[1];
                } else {
                    token = localStorage.getItem('token');
                    tokenExpiration = localStorage.getItem('tokenExpiration');
                    if (new Date().getTime() > tokenExpiration || !token) return false;
                }

                vuexContext.dispatch('setLogoutTimer', tokenExpiration - new Date().getTime());
                vuexContext.commit('setToken', token);
            },
            logout(vuexContext) {
                vuexContext.commit('clearToken');
                Cookies.remove('token');
                Cookies.remove('tokenExpiration');
                localStorage.removeItem('token');
                localStorage.removeItem('tokenExpiration');
            }
        },
        getters: {
            decks(state) {
                return state.decks;
            },
            isAuthenticated(state) {
                return state.token != null;
            }
        }
    })
};

export default createStore;