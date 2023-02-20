import gsap from 'gsap';
import $ from 'jquery';





const casesUpdated = class CasesUpdated {
    constructor() {}
    bioline() {
        if (!document.querySelector('.cases__item.bioline')) return;
        document.querySelectorAll('.cases__item.bioline').forEach(item => {
            item.addEventListener('mousemove', event => {
                gsap.to(item.querySelector('.bioline__image--hidden'), {
                    'clip-path': `polygon(0% 0%, ${event.offsetX}px 0%, ${event.offsetX}px 100%, 0% 100%)`
                });
            })
            item.addEventListener('mouseleave', event => {
                gsap.to(item.querySelector('.bioline__image--hidden'), {
                    'clip-path': `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`
                });
            })
        })
    }
    medex() {
        var figure = $(".medex");
        var vid = figure.find("video");
        
        [].forEach.call(figure, function (item,index) {
            item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
            item.addEventListener('mouseout', hideVideo.bind(item,index), false);
        });
        
        function hoverVideo(index, e) {
            vid[index].play(); 
        }
        
        function hideVideo(index, e) {
            vid[index].pause(); 
        }
    }
    setParalax() {
        document.querySelectorAll('.cases__item[data-is_paralaxed]').forEach(item => {
            item.addEventListener('mousemove', (event) => {
                item.querySelectorAll('[data-speed]').forEach(elem => {
                    gsap.to(elem, {
                        x: event.offsetX / elem.dataset.speed,
                        y: event.offsetY / elem.dataset.speed
                    });
                })
            })
        });
    }


    loadModel(url) {
        return new Promise((resolve, reject) => {
            const manager = new THREE.LoadingManager();
            const loader = new THREE.GLTFLoader(manager);
            loader.load(url,
                function (gltf) {
                    resolve(gltf.scene)
                }
            );
        });
    }
    duplicateTitle() {
        $('.cases__item .cases__item-title').each(function() {
            let text = $(this).text();
            if (window.innerWidth > 1023) {
                $(this).html(`<div class="cases__item-title--forslide cases__item-title--top">${text}</div><div class="cases__item-title--forslide cases__item-title--bottom">${text}</div>`);
            }
        })
    }
    init() {
        if (!document.querySelector('.cases__items') || window.innerWidth <= 1024) return;
        this.bioline();
        this.medex();
        this.setParalax();
        this.duplicateTitle();
        // this.medex();
    }
}
export default casesUpdated;