import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const careerBlocks = class careerBlocks {
    constructor() {}
    animateItems() {
        if (!document.querySelector('.career-blocks-item')) return;
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": () => {
                gsap.utils.toArray(".career-blocks-item").forEach((item, i) => {
                    ScrollTrigger.create({
                        trigger: item,
                        start: "top top",
                        pin: true,
                        pinSpacing: false,
                    });
                });
            }
        });
    }
    init() {
        this.animateItems();
    }
}

export default careerBlocks;