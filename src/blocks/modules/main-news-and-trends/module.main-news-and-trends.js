import '../../../js/commonVue.js';
import Vue from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'

gsap.registerPlugin(ScrollTrigger);

window.mainNewsAndTrends = new Vue({
    el: '#news-and-trends',
    data: () => ({}),
})

class MainNewsAndTrends {
    constructor() {
        this.btns = document.querySelectorAll('.news-and-trends-button[data-news]');
        this.cloneHtmlGlideSlidesBeforeInitSlider = null;
        this.slider = null;
    }

    init(){
        this.cloneHtmlGlideSlidesBeforeInitSlider = document.querySelector('.news-and-trends-right-slider .glide__slides').innerHTML;
        this.onInitSlider();
        this.onClickBtn();
    }

    onInitSlider() {
        this.slider = new Glide('.news-and-trends-right-slider', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            breakpoints: {
                800: {
                    perView: 2
                },
                600: {
                    perView: 1
                }
            }
        }).mount();
    }

    onClickBtn() {
        const self = this;
        this.btns.forEach(item => {
            item.addEventListener('click', function(event) {
                self.btns.forEach(btn => {
                    btn.classList.remove('active')
                })
                this.classList.add('active')
                const news = this.dataset?.news || 'all';
                self.onFilter(news)
            })
        })
    }

    onFilter(news) {
        if(this.slider) {
            this.slider.destroy();
        }

        document.querySelector('.news-and-trends-right-slider .glide__slides').innerHTML = this.cloneHtmlGlideSlidesBeforeInitSlider;

        if (news !== 'all') {
            const items = document.querySelectorAll(`.news-and-trends-right-slider .news-and-trends-item:not([data-id-news="${news}"])`);

            new Promise(function(resolve, reject) {
                for (const [i, item] of items.entries()) {
                    item.remove();

                    if (i === items.length - 1) {
                        resolve(true)
                    }
                }
            }).then(() => {
                this.onInitSlider()
            })
        } else {
            this.onInitSlider()
        }
    }
}

const mainNewsAndTrendsClass = new MainNewsAndTrends();
mainNewsAndTrendsClass.init();