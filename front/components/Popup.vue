<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" @click.stop>
                    <i class="close-btn fas fa-times" @click="close"></i>
                    <div class="modal-subcontainer">
                        <slot name="body">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            close: 'popup/hide'
        })
    }
}
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 2000;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        overflow-y: auto;
        webkit-transform: translate3d(0,0,0);
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        transition: opacity .3s ease;
    }
    .modal-wrapper {
        display: flex;
        margin: auto;
        max-width: 760px;
        padding: 64px;
        width: 100%;
    }
    .modal-container {
        display: flex;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        color: #35495e;
        position: relative;
    }
    .close-btn {
        position: absolute;
        right: 15px;
        top: 10px;
        cursor: pointer;
        font-size: 20px;
        color: #35495e;
    }
    .modal-subcontainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 20px;
    }
    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        transform: scale(1.1);
    }
</style>
