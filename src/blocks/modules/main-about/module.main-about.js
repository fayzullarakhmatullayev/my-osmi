import '../../../js/commonVue.js';
import Vue from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.mainAbout = new Vue({
    el: '#main-about',
    methods: {
        animation() {
            if (!document.querySelector('.main-about')) return;
            if (window.innerWidth > 1023) {
                gsap.to('.main-about__circle', {
                    scrollTrigger: {
                        trigger: '.trigger-wrapper-about',
                        start: 'top-=500',
                        end: 'top',
                        scrub: 1,
                        // markers: true
                    },
                    width: () => {
                        return 7200 * 100 / window.innerWidth + 'vw'
                    },
                    height: () => {
                        return 4900 * 100 / window.innerWidth + 'vw'
                    },
                    onComplete() {
                    }
                })
                gsap.to('.main-about__title', {
                    scrollTrigger: {
                        trigger: '.trigger-wrapper-about',
                        start: 'top-=500',
                        end: 'top',
                        scrub: 1,
                    },
                    color: '#121423'
                })
                gsap.to('.main-about__description', {
                    scrollTrigger: {
                        trigger: '.trigger-wrapper-about',
                        start: 'top-=500',
                        end: 'top',
                        scrub: 1,
                    },
                    color: '#121423'
                })

                gsap.to('.main-about__statistics-item--1', {
                    scrollTrigger: {
                        trigger: '.trigger-wrapper-about',
                        start: 'top-=100',
                        end: 'top+=100',
                        scrub: 1,
                    },
                    opacity: 1,
                })

                gsap.to('.main-about__statistics-item--2', {
                    scrollTrigger: {
                        trigger: '.trigger-wrapper-about',
                        start: 'top',
                        end: 'top+=200',
                        scrub: 1,
                    },
                    opacity: 1,
                })

                gsap.to('.main-about__statistics-item--3', {
                    scrollTrigger: {
                        trigger: '.trigger-wrapper-about',
                        start: 'top+=100',
                        end: 'top+=300',
                        scrub: 1,
                    },
                    opacity: 1,
                })

                gsap.to('.main-about__statistics-item--4', {
                    scrollTrigger: {
                        trigger: '.trigger-wrapper-about',
                        start: 'top+=200',
                        end: 'top+=400',
                        scrub: 1,
                    },
                    opacity: 1,
                })
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.animation()
        },250)
    },
})