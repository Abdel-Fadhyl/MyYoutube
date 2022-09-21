import Cookies from 'universal-cookie';

export const actions = {
    nuxtServerInit({ dispatch }, { req }) {
        const cookies = new Cookies(req.headers.cookie);
        if (cookies.get('token_mysite')) {
            dispatch('user/setAuthenticated');
        }
    }
}
