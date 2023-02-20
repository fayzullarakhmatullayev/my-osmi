import Glide from '@glidejs/glide';
class CompanyReviews {
    constructor() {
        this.slider;
        this.translate = 0;
        this.index = 0;
        this.elementWidth = 0;
        this.allElementsWidth = 0;

        this.className = 'company-reviews-item-stage-2';

        this.companyReviewsItems = document.querySelectorAll(`.${this.className}`);

        this.companyReviewsModal = document.querySelector('.company-reviews-item-modal');
        this.companyReviewsModalClose = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__close');
        this.companyReviewsModalName = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__name');
        this.companyReviewsModalText = this.companyReviewsModal?.querySelector('.company-reviews-item-modal__text');
    }

    onInit() {
        this.onInitSlider();
        this.onClickShowMore();
        this.onClickCloseModal();
        this.onClickCompanyReviewsModal();
    }

    /**
     * Ширина слайда
     */
    countElementWidth() {
        this.elementWidth = document.querySelector(`.${this.className}:not(glide__slide--active)`).offsetWidth + 100;
    }

    /**
     * Инициализация слайдера
     */
    onInitSlider() {
        if (!document.querySelector('.company-reviews__slider')) return;

        this.slider = new Glide('.company-reviews__slider', {
            type: 'carousel',
            startAt: 1,
            perView: 1.5,
            gap: 100,
            breakpoints: {
                1023: {
                    perView: 1
                }
            }
        });

        if (window.innerWidth > 1023) {
            this.slider.mount();
            this.index = this.slider.index;
            this.countElementWidth();
        } else {
            this.slider.mount();
        }
    }

    /**
     * Действия при клике на кнопку "Показать полностью"
     */
    onClickShowMore() {
        const self = this;

        this.companyReviewsItems.forEach(item => {
            const showMore = item.querySelector(`.${self.className}__show-more`);

            showMore.addEventListener('click', function() {
                const name = this.closest(`.${self.className}`).querySelector(`.${self.className}__name`).innerHTML;
                const text = this.closest(`.${self.className}`).querySelector(`.${self.className}__text`).innerHTML;

                if (self.companyReviewsModal) {
                    self.companyReviewsModalName.innerHTML = name;
                    self.companyReviewsModalText.innerHTML = text;
    
                    self.companyReviewsModal.classList.add('company-reviews-item-modal--is-active');
                    document.querySelector('body').style.overflow = 'hidden';
                }
            })
        });
    }

    /**
     * Действия при закрытии модально окна
     */
    onCloseModal() {
        this.companyReviewsModal.classList.remove('company-reviews-item-modal--is-active');
        document.querySelector('body').style.overflow = '';

        this.companyReviewsModalName.innerHTML = '';
        this.companyReviewsModalText.innerHTML = '';
    }

    /**
     * Действие при клике по кнопке закрыть модальное окно
     */
    onClickCloseModal() {
        const self = this;

        self.companyReviewsModalClose.addEventListener('click', function() {
            self.onCloseModal();
        })
    }

    /**
     * Клик вне белого модального окна
     */
    onClickCompanyReviewsModal() {
        const self = this;

        document.addEventListener('click', function(e) {
            const openCompanyReviewsItemModal = this.querySelector('.company-reviews-item-modal--is-active')
            
            if (
                    openCompanyReviewsItemModal && 
                    !e.target.classList.contains(`${self.className}__show-more`) && 
                    !e.target.classList.contains('company-reviews-item-modal__content') && 
                    !e.target.closest('.company-reviews-item-modal__content')
                ) {
                self.onCloseModal();
            }
        })
    }
}

const companyReviews = new CompanyReviews();
companyReviews.onInit();