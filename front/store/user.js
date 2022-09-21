import Cookies from 'universal-cookie';

export const state = () => ({
    status: '',
    authenticated: false,
    errors: []
})

export const getters = {
    isAuthenticated: (state) => state.authenticated,
    authStatus: (state) => state.status,
    getErrors: (state) => state.errors
}

export const actions = {
    signup: async function ({ commit }, user) {
        let errs = [];
        commit('authRequest');
        if (user.username.length === 0) {
            errs.push('username_required');
        }
        if (user.password.length === 0) {
            errs.push('password_required');
        }
        if (user.password !== user.passwordConfirm) {
            errs.push('passwords_must_be_same');
        }
        if (errs.length > 0) {
            commit('authError', errs);
            return;
        }
        await this.$axios.$post(process.env.apiUrl + '/user', user)
        .then(resp => {
            commit('authSuccess');
            commit('popup/hide', null, { root: true });
        })
        .catch(err => {
            commit('authError', [err.response.data]);
        });
    },
    misspass: async function ({ commit }, user) {
      let errs = [];
      commit('authRequest');
      if (user.email.length === 0) {
          errs.push('email_required');
      }
      if (errs.length > 0) {
          commit('authError', errs);
          return;
      }
      await this.$axios.$post(process.env.apiUrl + '/user/changepassword', user)
      .then(resp => {
          commit('popup/hide', null, { root: true });
      })
      .catch(err => {
          commit('authError', [err.response.data]);
      });
    },
    login: async function({ commit }, user) {
        let errs = [];
        commit('authRequest');
        if (user.username.length === 0) {
            errs.push('username_required');
        }
        if (user.password.length === 0) {
            errs.push('password_required');
        }
        if (errs.length > 0) {
            commit('authError', errs);
            return;
        }
        await this.$axios.$post(process.env.apiUrl + '/auth', user)
        .then(resp => {
            commit('authSuccess');
            commit('popup/hide', null, { root: true });
        })
        .catch(err => {
            commit('authError', [err.response]);
        });
    },
    logout: async function({ commit }) {
        commit('logout');
    },
    setAuthenticated: async function({ commit }) {
        commit('authSuccess');
    }
}

export const mutations = {
    authRequest: (state) => {
        state.status        = 'loading';
        state.authenticated = false;
        state.errors        = [];
    },
    authSuccess: (state) => {
        state.status        = 'success';
        state.authenticated = true;
        state.errors        = [];
    },
    authError: (state, errors) => {
        state.status        = 'error';
        state.authenticated = false;
        state.errors        = errors;
    },
    logout: (state) => {
        state.status        = '';
        state.authenticated = false;
        state.errors        = [];
        const cookies       = new Cookies();
        cookies.remove('token_mysite');
    },
    reset: (state) => {
        state.status = '';
        state.errors =  [];
    }
}
