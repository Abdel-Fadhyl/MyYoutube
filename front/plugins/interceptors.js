import Cookies from 'universal-cookie';
var util = require('util')

export default ({ app: { $axios }, res, req, store, redirect }) => {
    $axios.setHeader('Content-Type', 'application/json');
    $axios.interceptors.response.use(function (response) {
      if (!response.data){
        return response
      }
      const data = response.data+""
      console.log((util.inspect(data) ?util.inspect(data):"NON" ))
      const token = data.split('Bearer ');
      if (token) {
          if (token[1]) {
              res.setHeader('Set-Cookie', `token_mysite=${token[1]}; Path=/`)
          } else {
              const cookies = new Cookies();
              cookies.set('token_mysite', token, { path: '/' });
          }
      }
      return response;
  }, function (error) {
      if (error.response == 401) {
          store.commit('user/logout');
      }
      return Promise.reject(error);
  });
    $axios.interceptors.request.use(function (config) {
        let token   = '';
        let cookies = null;
        if (process.server) {
            cookies = new Cookies(req.headers.cookie);
        } else {
            cookies = new Cookies();
        }
        token = cookies.get('token_mysite');
        if (token) {
          console.log("- tentative de get")
          config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}
