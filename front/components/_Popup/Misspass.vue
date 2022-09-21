<template>
  <div>
      <h1>Mot de passe oublié</h1>
      <form @submit.prevent="misspass">
        <input type="email" placeholder="Votre email" v-model="email">

          <div class="loader" v-if="authStatus === 'loading'"></div>

          <div class="btn--group" v-else>
              <button type="submit" class="btn--green">Envoyé un email</button>
              <button class="btn--green--alt" @click="login('Login')">Connexion</button>
          </div>
      </form>

      <div class="errors--list" v-if="errors && errors.length > 0">
          <div v-for="error of errors" :key="error">{{error}}</div>
      </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
      return {
          email: '',
          error: []
      }
  },
  methods: {
      misspass: async function() {
          console.log("- ")
          const { email } = this;

          await this.$store.dispatch('user/misspass', { email })
      },
      ...mapActions({
          login: 'popup/changeMode'
      })
  },
  computed: {
      ...mapGetters({
          errors: 'user/getErrors',
          authStatus: 'user/authStatus'
      })
  }
}
</script>

<style scoped>
  form {
      display: flex;
      flex-direction: column;
      padding: 30px 0 10px;
  }
  form input {
      margin: 5px 0;
      padding: 10px;
      border: 1px solid #dcdcdc;
      border-radius: 5px;
  }
  .btn--group button {
      width: 100%;
      margin: 5px 0;
      outline: none;
  }
</style>
