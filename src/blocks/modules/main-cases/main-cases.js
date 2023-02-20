import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glide from '@glidejs/glide';
import $ from "jquery";
import 'slick-carousel';
import  'jquery.marquee';
$(function() {
    if (window.innerWidth <= 1023) {
        if (document.querySelector('.js_sl')) {
            $('.js_sl').slick({
                dots: false,
                arrows: true,
                infinite: true,
                fade: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1
            });
        }
    }
    if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
        $('.marquee-js').marquee({
            //duration in milliseconds of the marquee
            duration: 10000,
            //gap in pixels between the tickers
            gap: 100,
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 0,
            //'left' or 'right'
            direction: 'left',
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: true
        });
    }
})
$(function() {
    if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
        window.addEventListener("scroll", function(event){
    
        var top = this.pageYOffset;
    
        var layers = $(".paralax_layer");
        var speed, yPos;
        layers.each(function() {
            speed = $(this).attr('data-speed');
            var yPos = -(top * speed / 100);
            $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
        });
        });
    }
});

gsap.registerPlugin(ScrollTrigger);

const mainCases = class MainCases {
    constructor({itemsClass}) {
        this.itemsClass = itemsClass;
        this.slider = new Glide('.main-cases-slider', {
            type: 'carousel',
            startAt: 1,
            perView: 1,
            gap: 0,
        });
    }
    initMobileSlider() {
        if (!document.querySelector('.main-cases-slider')) return;
            this.slider.mount();
    }
    destroyMobileSlider() {
        if (!document.querySelector('.main-cases-slider')) return;
        this.slider.destroy();
    }
    onInit() {}
    onAnimationStart() {}
    onAnimationEnd() {}
    
    init() {
         
        if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
            // if (document.querySelector('.case_page__prot')) {
            //    setTimeout(() => {
            //         gsap.to('.case_page__prot--title', {
            //             scrollTrigger: {
            //                 trigger: '.case_page__prot',
            //                 start: 'top top',
            //                 end: 'bottom bottom-=1000',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.case_page__prot--title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.case_page__prot--title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.msite .case_page__reds')) {
            //    setTimeout(() => {
            //         gsap.to('.msite .case_page__reds--title', {
            //             scrollTrigger: {
            //                 trigger: '.msite .case_page__reds',
            //                 start: '-=500',
            //                 end: '+=1000',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.msite .case_page__reds--title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.msite .case_page__reds--title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.foot_task ')) {
            //    setTimeout(() => {
            //         gsap.to('.foot_task .case_page__bls--title', {
            //             scrollTrigger: {
            //                 trigger: '.foot_task',
            //                 start: '-=500',
            //                 end: '+=1000',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.foot_task .case_page__bls--title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.foot_task .case_page__bls--title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.block_slks')) {
            //    setTimeout(() => {
            //         gsap.to('.block_slks .case_pec__title', {
            //             scrollTrigger: {
            //                 trigger: '.block_slks',
            //                 start: 'top top',
            //                 end: 'bottom bottom-=1000',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.block_slks .case_pec__title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.block_slks .case_pec__title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.itm_new')) {
            //    setTimeout(() => {
            //         gsap.to('.itm_new .case_page__video--title', {
            //             scrollTrigger: {
            //                 trigger: '.itm_new',
            //                 start: 'top top',
            //                 end: 'bottom bottom-=1000',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.itm_new .case_page__video--title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.itm_new .case_page__video--title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.msite .case_page__video')) {
            //    setTimeout(() => {
            //         gsap.to('.msite .case_page__video--title', {
            //             scrollTrigger: {
            //                 trigger: '.msite .case_page__video',
            //                 start: '-=500',
            //                 end: '+=1000',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.msite .case_page__video--title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.msite .case_page__video--title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.gl_blocks')) {
            //     setTimeout(() => {
            //          gsap.to('.case_page__gl--title', {
            //              scrollTrigger: {
            //                  trigger: '.gl_blocks',
            //                  start: 'top top',
            //                  end: 'bottom bottom-=300',
            //                  scrub: 11,
            //                  // markers: true,
            //                  onUpdate: (item) => {
            //                      if (item.progress > 0.05 && item.progress < 0.65) {
            //                          document.querySelector('.case_page__gl--title').classList.add('isInViewport');
            //                      } else {
            //                          document.querySelector('.case_page__gl--title').classList.remove('isInViewport');
            //                      }
            //                  }
            //              },
            //              x: '-100%',
            //          });
            //      }, 1000);
            // }
            // if (document.querySelector('.case_page__about--work')) {
            //      setTimeout(() => {
            //           gsap.to('.case_page__about--wtitle', {
            //               scrollTrigger: {
            //                   trigger: '.case_page__about--work',
            //                   start: 'top top',
            //                   end: 'bottom bottom-=300',
            //                   scrub: 11,
            //                   // markers: true,
            //                   onUpdate: (item) => {
            //                       if (item.progress > 0.05 && item.progress < 0.65) {
            //                           document.querySelector('.case_page__about--wtitle').classList.add('isInViewport');
            //                       } else {
            //                           document.querySelector('.case_page__about--wtitle').classList.remove('isInViewport');
            //                       }
            //                   }
            //               },
            //               x: '-100%',
            //           });
            //       }, 1000);
            // }
            // if (document.querySelector('.frost .case_task')) {
            //      setTimeout(() => {
            //           gsap.to('.frost .case_page__bls--title', {
            //               scrollTrigger: {
            //                   trigger: '.frost .case_task',
            //                   start: 'top top',
            //                   end: 'bottom bottom-=300',
            //                   scrub: 11,
            //                   // markers: true,
            //                   onUpdate: (item) => {
            //                       if (item.progress > 0.05 && item.progress < 0.65) {
            //                           document.querySelector('.case_page__about--wtitle').classList.add('isInViewport');
            //                       } else {
            //                           document.querySelector('.case_page__about--wtitle').classList.remove('isInViewport');
            //                       }
            //                   }
            //               },
            //               x: '-100%',
            //           });
            //       }, 1000);
            // }
            // if (document.querySelector('.case_page__reds')) {
            //       setTimeout(() => {
            //            gsap.to('.case_page__reds--title', {
            //                scrollTrigger: {
            //                    trigger: '.case_page__reds',
            //                    start: 'top top',
            //                    end: 'bottom bottom-=300',
            //                    scrub: 11,
            //                    // markers: true,
            //                    onUpdate: (item) => {
            //                        if (item.progress > 0.05 && item.progress < 0.65) {
            //                            document.querySelector('.case_page__reds--title').classList.add('isInViewport');
            //                        } else {
            //                            document.querySelector('.case_page__reds--title').classList.remove('isInViewport');
            //                        }
            //                    }
            //                },
            //                x: '-100%',
            //            });
            //        }, 1000);
            // }
        }
        if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
            // if (document.querySelector('.block_one .case_page__reds')) {
            //     setTimeout(() => {
            //         gsap.to('.block_one .case_page__reds--title', {
            //             scrollTrigger: {
            //                 trigger: '.block_one .case_page__reds',
            //                 start: 'top top',
            //                 end: 'bottom bottom-=300',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.block_one .case_page__reds--title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.block_one .case_page__reds--title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.blocks_bot .case_page__reds')) {
            //     setTimeout(() => {
            //         gsap.to('.blocks_bot .case_page__reds--title', {
            //             scrollTrigger: {
            //                 trigger: '.blocks_bot .case_page__reds',
            //                 start: 'top top',
            //                 end: 'bottom bottom-=300',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.blocks_bot .case_page__reds--title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.blocks_bot .case_page__reds--title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.case_ff')) {
            //     setTimeout(() => {
            //             gsap.to('.case_ff__title', {
            //                 scrollTrigger: {
            //                     trigger: '.case_ff',
            //                     start: 'top top',
            //                     end: 'bottom bottom-=300',
            //                     scrub: 11,
            //                     // markers: true,
            //                     onUpdate: (item) => {
            //                         if (item.progress > 0.05 && item.progress < 0.65) {
            //                             document.querySelector('.case_ff__title').classList.add('isInViewport');
            //                         } else {
            //                             document.querySelector('.case_ff__title').classList.remove('isInViewport');
            //                         }
            //                     }
            //                 },
            //                 x: '-100%',
            //             });
            //         }, 1000);
            // }
            // if (document.querySelector('.case_page__about')) {
            //         setTimeout(() => {
            //             gsap.to('.case_page__about--wtitle', {
            //                 scrollTrigger: {
            //                     trigger: '.case_page__about',
            //                     start: 'top top',
            //                     end: 'bottom bottom-=300',
            //                     scrub: 11,
            //                     // markers: true,
            //                     onUpdate: (item) => {
            //                         if (item.progress > 0.05 && item.progress < 0.65) {
            //                             document.querySelector('.case_page__about--wtitle').classList.add('isInViewport');
            //                         } else {
            //                             document.querySelector('.case_page__about--wtitle').classList.remove('isInViewport');
            //                         }
            //                     }
            //                 },
            //                 x: '-100%',
            //             });
            //         }, 1000);
            // }
            // if (document.querySelector('.case_crea')) {
            //     setTimeout(() => {
            //         gsap.to('.case_crea__title', {
            //             scrollTrigger: {
            //                 trigger: '.case_crea',
            //                 start: 'top top',
            //                 end: 'bottom bottom-=300',
            //                 scrub: 11,
            //                 // markers: true,
            //                 onUpdate: (item) => {
            //                     if (item.progress > 0.05 && item.progress < 0.65) {
            //                         document.querySelector('.case_crea__title').classList.add('isInViewport');
            //                     } else {
            //                         document.querySelector('.case_crea__title').classList.remove('isInViewport');
            //                     }
            //                 }
            //             },
            //             x: '-100%',
            //         });
            //     }, 1000);
            // }
            // if (document.querySelector('.case_sls')) {
            //     setTimeout(() => {
            //             gsap.to('.case_sls__title', {
            //                 scrollTrigger: {
            //                     trigger: '.case_sls',
            //                     start: 'top top',
            //                     end: 'bottom bottom-=300',
            //                     scrub: 11,
            //                     // markers: true,
            //                     onUpdate: (item) => {
            //                         if (item.progress > 0.05 && item.progress < 0.65) {
            //                             document.querySelector('.case_sls__title').classList.add('isInViewport');
            //                         } else {
            //                             document.querySelector('.case_sls__title').classList.remove('isInViewport');
            //                         }
            //                     }
            //                 },
            //                 x: '-100%',
            //             });
            //         }, 1000);
            // }
            // if (document.querySelector('.case_desc')) {
            //         setTimeout(() => {
            //             gsap.to('.case_desc__title', {
            //                 scrollTrigger: {
            //                     trigger: '.case_desc',
            //                     start: 'top top',
            //                     end: 'bottom bottom-=300',
            //                     scrub: 11,
            //                     // markers: true,
            //                     onUpdate: (item) => {
            //                         if (item.progress > 0.05 && item.progress < 0.65) {
            //                             document.querySelector('.case_desc__title').classList.add('isInViewport');
            //                         } else {
            //                             document.querySelector('.case_desc__title').classList.remove('isInViewport');
            //                         }
            //                     }
            //                 },
            //                 x: '-100%',
            //             });
            //         }, 1000);
            // }
        }
        if (!document.querySelector('.main-cases')) return;
        let self = this;
        this.onInit()
        // if (window.innerWidth < 1023) {
        // this.initMobileSlider();
        // } else {
        //     this.destroyMobileSlider();
        // }
         
        //  if ((window.innerWidth <= 1366 && window.innerWidth > 1023) || (window.innerWidth > 1440)) {
        //     setTimeout(() => {
        //         gsap.to('.main-cases-items-in', {
        //             scrollTrigger: {
        //                 trigger: '.main-cases',
        //                 start: 'top top',
        //                 end: 'bottom bottom-=200',
        //                 scrub: 2,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.main-cases-items-in').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //         gsap.to('.main-cases', {
        //             scrollTrigger: {
        //                 trigger: '.main-cases',
        //                 start: 'top top-=350',
        //                 end: 'bottom bottom',
        //                 pin: true,
        //                 scrub: 2,
        //                 pinSpacing: false,
        //                 // markers: true
        //             },
        //             x: 0,
        //             onStart() {
        //                 self.onAnimationStart();
        //             },
        //             onComplete() {
        //                 self.onAnimationEnd();
        //             }
        //         });
        //     }, 1000);
        // } else if (window.innerWidth <= 1440 && window.innerWidth > 1366) {
        //     setTimeout(() => {
        //         gsap.to('.main-cases-items-in', {
        //             scrollTrigger: {
        //                 trigger: '.main-cases',
        //                 start: 'top top',
        //                 end: 'bottom bottom-=200',
        //                 scrub: 2,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.main-cases-items-in').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //         gsap.to('.main-cases', {
        //             scrollTrigger: {
        //                 trigger: '.main-cases',
        //                 start: 'top top-=200',
        //                 end: 'bottom bottom',
        //                 pin: true,
        //                 scrub: 2,
        //                 pinSpacing: false,
        //                 // markers: true
        //             },
        //             x: 0,
        //             onStart() {
        //                 self.onAnimationStart();
        //             },
        //             onComplete() {
        //                 self.onAnimationEnd();
        //             }
        //         });
        //     }, 1000);
        // } 
        // else if (window.innerWidth <= 1023) {
        //     setTimeout(() => {
        //         gsap.to('.main-cases-items-in', {
        //             scrollTrigger: {
        //                 trigger: '.main-cases',
        //                 start: 'top top',
        //                 end: 'bottom bottom',
        //                 scrub: 3,
        //                 // markers: true,
        //                 onUpdate: (item) => {
        //                     if (item.progress > 0.05 && item.progress < 0.65) {
        //                         document.querySelector('.main-cases-items-in').classList.add('isInViewport');
        //                     } else {
        //                         document.querySelector('.main-cases-items-in').classList.remove('isInViewport');
        //                     }
        //                 }
        //             },
        //             x: '-100%',
        //         });
        //         gsap.to('.main-cases', {
        //             scrollTrigger: {
        //                 trigger: '.main-cases',
        //                 start: 'top top-=100',
        //                 end: 'bottom bottom',
        //                 pin: true,
        //                 pinSpacing: false,
        //                 // markers: true
        //             },
        //             x: 0,
        //         });
        //     }, 1000);
        // }
    }
}

export default mainCases;