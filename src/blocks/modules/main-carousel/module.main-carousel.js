import '../../../js/commonVue.js';
import Vue from "vue";
import gsap from 'gsap';
import interact from 'interactjs';
import $ from 'jquery';

window.mainCarousel = new Vue({
    el: '#main-carousel',
    data: () => ({
        carousel: null,
        prevButton: null,
        nextButton: null,
        selectedIndex: 0,
        isHorizontal: true,
        rotateFn: '',
        cells: null,
        cellCount: 0,
        cellWidth: 0,
        cellHeight: 0,
        maxTitlesHeight: 0,
        maxTextsHeight: 0,
        cellsRange: null,
        theta: 1,
        cellSize: 0,
        radius: 0,
        interval: null,
        starCoord: 0,
    }),
    mounted() {
        setTimeout(() => {
            this.carousel = document.querySelector('.main-carousel-carousel');

            this.maxTitlesHeight = Math.max.apply(null, $(".main-carousel__text-item_titles .title")
                                    .map(function () {
                                        return $(this).height();
                                    }).get());

            this.maxTextsHeight = Math.max.apply(null, $(".main-carousel__text-item_texts .text")
                                    .map(function () {
                                        return $(this).height();
                                    }).get());

            this.cellWidth = this.carousel.offsetWidth;
            this.cellHeight = this.carousel.offsetHeight;

            this.prevButton = document.querySelector('.previous-button');
            this.nextButton = document.querySelector('.next-button');

            this.cells = this.carousel.querySelectorAll('.main-carousel-cell');

            this.cellsRange = document.querySelector('.cells-range');

            this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';

            if (window.innerWidth <= 1023) {
                interact('.main-carousel').draggable({
                    origin: 'self',
                    inertia: true,
                    listeners: {
                        move (event) {}
                    }
                }).on('dragstart', (event) => {
                    this.starCoord = event.clientX;
                }).on('dragend', (event) => {
                    if (this.starCoord > event.clientX) {
                        this.selectedIndex = this.selectedIndex++;
                        this.rotateCarousel();
                        clearInterval(this.interval);
                    } else {
                        this.selectedIndex = this.selectedIndex--;
                        this.rotateCarousel();
                        clearInterval(this.interval);
                    }
                })
            }

            this.interval = setInterval(() => {
                this.selectedIndex = this.selectedIndex + 1;
                this.rotateCarousel();
            }, 5000);

            this.onInit()
        }, 0)
    },
    methods: {
        onClickPrevent() {
            this.selectedIndex = this.selectedIndex - 1;
            this.rotateCarousel();
            clearInterval(this.interval);
        },

        onClickNext() {
            this.selectedIndex++;
            this.rotateCarousel();
            clearInterval(this.interval);
        },

        rotateCarousel() { 
            const angle = this.theta * this.selectedIndex * -1;

            $(`.main-carousel__text-item_gifts .badge`).css({
                'transform': `translateY(-50%) translateX(50%) rotate(${angle}deg)`
            })

            $(`.main-carousel__text-item_gifts .badge`).text(Math.round(360 / this.cellCount * (this.selectedIndex % this.cellCount)));
            $(`.main-carousel__grades .from`).text(Math.round(360 / this.cellCount * (this.selectedIndex % this.cellCount)));
            
            if (Math.round(360 / this.cellCount * (this.selectedIndex % this.cellCount)) < 0) {
                $(`.main-carousel__grades .from`).text(Math.round(360 / this.cellCount * (this.selectedIndex % this.cellCount)) * -1 );
            }

            $(`.main-carousel__text-item_gifts .left__in`).css({
                'transform': `rotate(${angle * -1}deg)`
            })

            this.carousel.style.transform = 'translateZ(' + -this.radius + 'px) ' +  this.rotateFn + '(' + angle + 'deg)';
            
            document.querySelectorAll(`.main-carousel__text-item_titles .title`).forEach(item => {
                item.classList.remove('isActive');
            })

            if (document.querySelector(`.main-carousel__text-item_titles .title[data-title-id="${(this.selectedIndex % this.cellCount) + 1}"]`)) {
                document.querySelector(`.main-carousel__text-item_titles .title[data-title-id="${(this.selectedIndex % this.cellCount) + 1}"]`).classList.add('isActive');
            }

            gsap.to(document.querySelectorAll(`.main-carousel__text-item_titles`), {
                height: this.maxTitlesHeight
            })

            document.querySelectorAll(`.main-carousel__text-item_texts .text`).forEach(item => {
                item.classList.remove('isActive');
            })

            if (document.querySelector(`.main-carousel__text-item_texts .text[data-text-id="${(this.selectedIndex % this.cellCount) + 1}"]`)) {
                document.querySelector(`.main-carousel__text-item_texts .text[data-text-id="${(this.selectedIndex % this.cellCount) + 1}"]`).classList.add('isActive');
            }

            gsap.to(document.querySelectorAll(`.main-carousel__text-item_texts`), {
                height: this.maxTextsHeight
            })
        },

        changeCarousel() {
            this.cellCount = this.cellsRange.value;

            this.theta = 360 / this.cellCount;

            this.cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;

            this.radius = Math.round( ( this.cellSize / 2) / Math.tan( Math.PI / this.cellCount ) );

            for ( let i = 0; i < this.cells.length; i++ ) {
                const cell = this.cells[i];

                if ( i < this.cellCount ) {
                // visible cell
                    cell.style.opacity = 1;
                    const cellAngle = this.theta * i;
                    cell.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
                } else {
                    // hidden cell
                    cell.style.opacity = 0;
                    cell.style.transform = 'none';
                }
            }
    
            this.rotateCarousel();
        },

        onOrientationChange() {
            var checkedRadio = document.querySelector('input[name="orientation"]:checked');
            this.isHorizontal = checkedRadio.value == 'horizontal';
            this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
            this.changeCarousel();
        },

        chooseElem(index) {
            if (this.selectedIndex == index) return;
            this.selectedIndex = index;
            this.rotateCarousel();
        },

        onInit() {
            if (!this.carousel) return;
            const self = this;

            ( function() {
                const orientationRadios = document.querySelectorAll('input[name="orientation"]');

            for ( let i = 0; i < orientationRadios.length; i++ ) {
                const radio = orientationRadios[i];
                radio.addEventListener( 'change', self.onOrientationChange() );
            }

            })();
    
            document.addEventListener('click', function(event) {
                if (event.target.dataset.cellIndex) {
                    self.chooseElem(event.target.dataset.cellIndex - 1);
                    clearInterval(self.interval);
                }
            });

            // set initials
            this.onOrientationChange();
        }
    }
})