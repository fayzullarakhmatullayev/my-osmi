import Glide from '@glidejs/glide'

const companyPartners = class companyPartners {
    constructor(sliderClass) {
        this.sliderClass = sliderClass;
    }
    init() {
        if (!document.querySelector('.company-partners-slider')) return;
        new Glide('.company-partners-slider', {
            startAt: 0,
            bound: 'Boolean',
            perView: 2,
            gap: 0,
            breakpoints: {
                1023: {
                    perView: 1,
                },
            },
        }).mount();
    }
}

export default companyPartners;