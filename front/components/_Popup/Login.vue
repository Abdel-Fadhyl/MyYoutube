<template>
    <div>
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <input type="text" placeholder="Votre nom d'utilisateur" v-model="username">
            <input type="password" placeholder="Mot de passe" v-model="password">

            <div class="loader" v-if="authStatus === 'loading'"></div>

            <div class="btn--group" v-else>
                <button type="submit" class="btn--green">Connexion</button>
                <button class="btn--green--alt" @click="signup('Signup')">Inscription</button>
                <button class="btn--green--alt" @click="misspass('Misspass')">Mots de passe oublié</button>
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
            username: '',
            password: ''
        }
    },
    methods: {
        login: async function() {
            const { username, password } = this;
            await this.$store.dispatch('user/login', { username, password })
        },
        ...mapActions({
            signup: 'popup/changeMode',
            misspass: 'popup/changeMode'
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
