<template>
    <div class="navbar--container">
        <div class="navbar">
            <div class="navbar--left">
                    <nuxt-link to="/" class="navbar--brand">My Youtube</nuxt-link>
            </div>
            <div class="navbar--right">
                <template v-if="isAuthenticated">
                    <div><h1>Bienvenue</h1></div>
                    <div class="btn--icon" @click="logout"><i class="fas fa-power-off"></i></div>
                    <div>
                    </div>
                </template>
                <div v-else class="btn--green" @click="showPopup">Connexion</div>
                <a class="nav-link" href="/account">Mon Profil</a>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    methods: {
        ...mapActions({
            showPopup: 'popup/show',
            logout: 'user/logout'
        })
    },
    computed: {
        ...mapGetters({
            isAuthenticated: 'user/isAuthenticated',
        })
    }
}
</script>

<style scoped>
.navbar--container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    /* background-color: red; */
    background-image: url(../pages/images/header.jpg);
    background-size: cover;
}
.navbar {
    display: flex;
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.navbar--left {
    font-size: 1.5rem;
}
.navbar--left a {
    text-decoration: none;
    color: #FFFFFF;
    transition: all .2s;
}
.navbar--left a:hover {
    padding: 0 5px;
}
.navbar--right {
    display: flex;
    text-align: center;
}
.navbar--right .btn--icon {
    color: #e74c3c;
    cursor: pointer;
    margin-left: 20px;
    transition: all .2s;
}
.navbar--right .btn--icon:hover {
    transform: translateY(-2px);
}
.nav-link {
    padding: 1rem;
    left: 100%;
    display: inline-block;
    border-radius: 10px;
    background-color: rgb(92, 0, 0);
    border: none;
    color: #FFFFFF;
    margin-left: 10px;
    text-decoration: none;
}
.btn--green{
    border: none;
    background-color: rgb(92, 0, 0);
    text-align: center;
    color: #FFFFFF;
}
.btn--green:hover{
    background-color: red;
    color: #FFFFFF;
}
</style>
