import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide'

gsap.registerPlugin(ScrollTrigger);

const companyRaiting = class companyRaiting {
    constructor(sliderClass) {
        if (document.querySelector('.company-raiting-slider')) {
            this.slider = new Glide('.company-raiting-slider', {
                startAt: 0,
                perView: 1,
                gap: 0
            });
        }
    }
    scrollTriggers() {
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": () => {
                if (!document.querySelector('.company-raiting-items')) return;
                let triggersWrap = document.querySelector('.company-raiting-items');
                document.querySelector('.company-raiting').addEventListener('mousemove', event => {
                    triggersWrap.scroll({
                        top: 0,
                        left: event.clientX
                    });
                })
            }
        });
    }
    changeSlide(item) {

        this.slider.go(`=${item.dataset.itemId}`);
        document.querySelectorAll('.company-raiting-item').forEach(trigger => {
            trigger.classList.remove('isActive')
        })
        item.classList.add('isActive');
    }
    onSliderInit() {
        document.querySelector(`.company-raiting-item[data-item-id="${this.slider.index}"]`).classList.add('isActive');
        this.slider.on('run.after', (item) => {
            document.querySelectorAll('.company-raiting-item').forEach(trigger => {
                trigger.classList.remove('isActive')
            })
            document.querySelector(`.company-raiting-item[data-item-id="${this.slider.index}"]`).classList.add('isActive');
        })
    }
    init() {
        if (this.slider) {
            this.slider.mount();
        };
        if (document.querySelector('.company-raiting-item') && this.slider) {
            this.onSliderInit();
            this.scrollTriggers();
           document.querySelectorAll('.company-raiting-item').forEach(item => {
               item.addEventListener('click', () => this.changeSlide(item))
           })
        }
    }
}

export default companyRaiting;