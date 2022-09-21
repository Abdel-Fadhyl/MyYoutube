/* eslint-disable */
export const state = () => ({
    isVisible: false,
    modalMode: 'Login'
})

export const getters = {
    isVisible: (state) => state.isVisible,
    getMode: (state) => state.modalMode
}

export const actions = {
    show: ({ commit }) => {
        return new Promise((resolve) => {
            commit('show');
            resolve();
        })
    },
    hide: ({ commit }) => {
        return new Promise((resolve) => {
            commit('hide');
            commit('user/reset', null, { root: true });
            resolve();
        })
    },
    changeMode: ({ commit }, mode) => {
        return new Promise((resolve) => {
            commit('changemode', mode);
            resolve();
        })
    }
}

export const mutations = {
    show: (state) => {
        state.isVisible = true
    },
    hide: (state) => {
        state.isVisible = false
        state.modalMode = 'Login'
    },
    changemode: (state, mode) => {
        state.modalMode = mode
    }
}
