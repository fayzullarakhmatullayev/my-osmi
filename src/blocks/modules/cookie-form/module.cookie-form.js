import '../../../js/commonVue.js';
import Vue from 'vue';

window.cookiesForm = new Vue({
    el: '#cookie-form',
    data: () => ({
        isClosedOnce: false
    }),
    mounted() {
        setTimeout(() => {
            this.checkIfFormClosedOnce();
        }, 0)
    },
    methods: {
        checkIfFormClosedOnce() {
            if (localStorage.getItem('cookiesFormOnceClosed') == 'true') {
                this.isClosedOnce = true;
            }
        },

        closeForm() {
            localStorage.setItem('cookiesFormOnceClosed', true);
            this.checkIfFormClosedOnce();
        }
    }
})