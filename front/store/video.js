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
    getallvideos: function() {
        this.$axios.$get(process.env.apiUrl + '/videos')
        .then(resp => {
          console.log(resp.data)
          return resp.data;
        })
        .catch(err => {
          console.log(err)
        });
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
