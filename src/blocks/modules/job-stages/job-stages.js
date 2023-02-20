import Glide from '@glidejs/glide'
import Accordion from 'accordion-js';

const jobStages = class jobStages {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
        this.accorderon;
        this.currentTab = 0;
        if (document.querySelector('.job-stages-support')) {
            this.supportSlider = new Glide('.job-stages-support-slides', {
                startAt: 0,
                perView: 1,
                gap: 0,
                type: 'slider'
            })
            if (document.querySelector('.job-stages-support-right')) {
                this.supportImagesSlider = new Glide('.job-stages-support-right', {
                    startAt: 0,
                    perView: 1,
                    gap: 0,
                    type: 'slider',
                    transitionType: 'fade'
                })
            }
        }
    }
    initAnaliticsSlider() {
        if (document.querySelector('.job-stages-slides--3')) {
            new Glide('.job-stages-slides--3', {
                startAt: 0,
                perView: 1,
                gap: 120,
                type: 'slider',
                breakpoints: {
                    800: {
                        perView: 1,
                    }
                }
            }).mount();
        };
    }
    initDesignSlider() {
        if (document.querySelector('.job-stages-slides--2')) {
            new Glide('.job-stages-slides--2', {
                startAt: 0,
                perView: 1,
                gap: 0,
                type: 'carousel'
            }).mount();
        };
    }
    initProjectingSlider() {
        if (document.querySelector('.job-stages-slides--1')) {
            new Glide('.job-stages-slides--1', {
                startAt: 0,
                perView: 1,
                gap: 120,
                type: 'slider',
                breakpoints: {
                    800: {
                        perView: 1,
                    }
                }
            }).mount();
        };
    }
    initDevelopmentSlider() {
        if (document.querySelector('.job-stages-slides--0')) {
            new Glide('.job-stages-slides--0', {
                startAt: 0,
                perView: 1,
                gap: 0,
                type: 'carousel'
            }).mount();
        };
    }
    init() {
        if (document.querySelector('.job-stages-tabs')) {
            this.accorderon = new Accordion('.job-stages-tabs', {
                duration: 400,
                showMultiple: true,
                elementClass: 'job-stages-slides',
                triggerClass: 'job-stages-trig',
                panelClass: 'job-stages-slide',
                openOnInit: [0],
                beforeOpen: currentElement => {
                //   gsap.to(currentElement.querySelector('.vacancies-tabs-item-body'), 1, {
                //     heigth: currentElement.querySelector('.vacancies-tabs-item-body').offsetHeight
                //   })
                }
            });
            document.querySelectorAll('.job-stages-trigger[data-tab-id]').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (this.currentTab == +item.dataset.tabId) return;
                    document.querySelectorAll('.job-stages-trigger[data-tab-id]').forEach(item => {
                        item.classList.remove('isActive');
                    });
                    item.classList.add('isActive');
                    this.accorderon.close(this.currentTab);
                    this.accorderon.open(+item.dataset.tabId)
                    this.currentTab = +item.dataset.tabId;
                })
            })
            if (document.querySelector('.job-stages-triggers .job-stages-arrow--prev')) {
                document.querySelector('.job-stages-triggers .job-stages-arrow--prev').addEventListener('click', () => {
                    if (document.querySelector('.job-stages-trigger.isActive').dataset.tabId == 0) return;
                    document.querySelector(`.job-stages-trigger[data-tab-id="${this.currentTab - 1}"]`).dispatchEvent(new Event('click'));
                })
            }
            if (document.querySelector('.job-stages-triggers .job-stages--next')) {
                document.querySelector('.job-stages-triggers .job-stages--next').addEventListener('click', () => {
                    if (document.querySelector('.job-stages-trigger.isActive').dataset.tabId == 3) return;
                    document.querySelector(`.job-stages-trigger[data-tab-id="${this.currentTab + 1}"]`).dispatchEvent(new Event('click'));
                })
            }
        };
        this.initAnaliticsSlider();
        this.initDesignSlider();
        this.initProjectingSlider();
        this.initDevelopmentSlider();
        
        
        if (document.querySelector('.job-stages-support')) {
            this.supportSlider.mount();
            if (document.querySelector('.job-stages-support-right')) {
                this.supportImagesSlider.mount();
                this.supportSlider.on(['move.after'], () => {
                    this.supportImagesSlider.go(`=${this.supportSlider.index}`)
                })
            }
        };
        if (document.querySelector('.job-stages-title-triggers')) {
            document.querySelectorAll('.job-stages-title-triggers').forEach(wrap => {
                wrap.querySelectorAll('.job-stages-title-trigger').forEach(item => {
                    item.addEventListener('click', () => {
                        wrap.querySelectorAll('.job-stages-title-trigger').forEach(trigger => {
                            trigger.classList.remove('isActive')
                        })
                        item.classList.add('isActive');
                    })
                });
            });
        }
    }
}

export default jobStages;