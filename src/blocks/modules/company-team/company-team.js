import gsap from 'gsap';

const companytTeam = class companytTeam {
    constructor() {}
    init() {
        if (document.querySelector('.company-team-item'))
        gsap.utils.toArray(".company-team-item").forEach((item, i) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top-=800 top',
                    end: 'bottom-=400 top',
                    scrub: 1,
                    //markers: true
                },
                scale: 1,
            })
        })
        
    }
}

export default companytTeam;