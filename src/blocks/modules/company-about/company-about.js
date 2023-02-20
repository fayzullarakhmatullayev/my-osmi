import gsap from 'gsap';

const companyAbout = class CompanyAbout {
    constructor({selector}) {
        this.selector = selector
    }
    init() {
        if (!document.querySelector('.company-about__wrap')) return;
        document.querySelector('.company-about__wrap').addEventListener('mousemove', (e) => {
            document.querySelector(this.selector).style.clipPath = `circle(${200 * 100 / window.innerWidth}vw at ${e.pageX}px ${e.pageY}px)`;
        })
        document.querySelector(this.selector).addEventListener('mouseleave', (e) => {
            gsap.to(this.selector, 1, {
                clipPath: `circle(${window.innerWidth}px at ${e.pageX}px ${e.pageY}px)`
            })
        })
    }
}

export default companyAbout;