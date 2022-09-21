<template>
    <div class="container-update-account">
        <h1>Mon Compte</h1>
        <form @submit.prevent="signup">
            <input type="text" placeholder="Votre nom" v-model="pseudo">
            <input type="text" placeholder="Votre nom d'utilisateur" v-model="username">
            <input type="email" placeholder="Votre email" v-model="email">

            <div class="loader" v-if="authStatus === 'loading'"></div>

            <div class="btn--group" v-else>
                <button class="btn--green--alt" @click="login('Login')">OK</button>
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
            pseudo: '',
            username: '',
            email: '',
        }
    },
    methods: {
        signup: async function() {
          console.log("- ")
            const { pseudo, username, email, password, passwordConfirm } = this;
            await this.$store.dispatch('user/signup', { pseudo, username, email, password, passwordConfirm });
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
    h1{
        text-align: center;
        padding: 3rem 0;
    }
    form {
        display: flex;
        flex-direction: column;
        padding: 30px 0 10px;
    }
    form input {
        margin: 5px 0;
        width: 300px;
        padding: 10px;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
    }
    .btn--green--alt {
        display: inline-block;
        border-radius: 10px;
        background-color: rgb(80, 152, 248);
        border: none;
        color: #FFFFFF;
        font-size: 15px;
        text-align: center;
        padding: 20px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
    }
</style>