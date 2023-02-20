import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const companyPrinciples = class CompanyPrinciples {
    constructor() {}
    init() {
        if (document.querySelector('.company-principles')) {
            gsap.to('.company-principles-circle', {
                scrollTrigger: {
                    trigger: '.company-principles',
                    start: 'top center',
                    end: 'bottom bottom',
                    scrub: 1,
                    // markers: true
                },
                width: () => {
                    return 7200 * 100 / window.innerWidth + 'vw'
                },
                height: () => {
                    return 4900 * 100 / window.innerWidth + 'vw'
                },
            })
        }
        var carousel = document.querySelector('.company-principles-carousel');
        if (!carousel) return;
        var cells = carousel.querySelectorAll('.company-principles-cell');
        var cellCount; // cellCount set from cells-range input value
        var selectedIndex = 0;
        var cellWidth = carousel.offsetWidth;
        var cellHeight = carousel.offsetHeight;
        var isHorizontal = true;
        var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        var radius, theta;

        function rotateCarousel() {
            var angle = theta * selectedIndex * -1;
            carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
            rotateFn + '(' + angle + 'deg)';
            if (document.querySelector(`.company-principles-text.isActive`)) {
                document.querySelector(`.company-principles-text.isActive`).classList.remove('isActive');
            }
            document.querySelector(`[data-text-index="${selectedIndex+1}"]`).classList.add('isActive');
        }

        var prevButton = document.querySelector('.previous-button');
        prevButton.addEventListener( 'click', function() {
        selectedIndex--;
        rotateCarousel();
        });

        var nextButton = document.querySelector('.next-button');
        nextButton.addEventListener( 'click', function() {
        selectedIndex++;
        rotateCarousel();
        });

        var cellsRange = document.querySelector('.cells-range');
        cellsRange.addEventListener( 'change', changeCarousel );
        cellsRange.addEventListener( 'input', changeCarousel );



        function changeCarousel() {
        cellCount = cellsRange.value;
        theta = 360 / cellCount;
        var cellSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
        for ( var i=0; i < cells.length; i++ ) {
            var cell = cells[i];
            if ( i < cellCount ) {
            // visible cell
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
            } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
            }
        }

        rotateCarousel();
        }

        var orientationRadios = document.querySelectorAll('input[name="orientation"]');
        ( function() {
        for ( var i=0; i < orientationRadios.length; i++ ) {
            var radio = orientationRadios[i];
            radio.addEventListener( 'change', onOrientationChange );
        }
        })();

        function onOrientationChange() {
        var checkedRadio = document.querySelector('input[name="orientation"]:checked');
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        changeCarousel();
        }
        function chooseElem(index) {
            selectedIndex = index;
            rotateCarousel();
            clearInterval(interval);
        }

        document.addEventListener('click', function(event) {
            if (event.target.dataset.cellIndex) {
                chooseElem(event.target.dataset.cellIndex - 1);
            }
            if (event.target.dataset.textIndex) {
                chooseElem(event.target.dataset.textIndex - 1);
            }
        });

        // set initials
        onOrientationChange();


        var interval = setInterval(() => {
            if (!document.querySelector(`.company-principles-text[data-text-index="${selectedIndex+2}"]`)) {
                selectedIndex = -1;
            }
            chooseElem(++selectedIndex)        
        }, 5000);
    }
}


export default companyPrinciples;