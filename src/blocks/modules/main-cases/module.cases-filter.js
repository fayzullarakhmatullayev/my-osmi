class CasesFilter {
    constructor() {
        this.btns = document.querySelectorAll('[data-cases-filter-btn]');
        this.items = document.querySelectorAll('[data-cases-filter-item]');
        this.activeId = -1;
    }

    onInit() {
        this.findActiveBtn();
        this.onClickBtn();
    }

    findActiveBtn() {
        this.activeId = parseInt(Array.from(this.btns).filter((btn) => btn.classList.contains('active')).at(-1)?.dataset.casesFilterBtn) || -1;
        this.onFilter()
    }

    onFilter() {
        if (this.activeId === -1) {
            this.items.forEach((item) => {
                item.style.display = 'block'
            })
        } else {
            Array.from(this.items).map((item) => {
                item.style.display = item.dataset.casesFilterItem.includes(this.activeId) ? 'block' : 'none'
                return item;
            })
        }
    }

    onClickBtn() {
        this.btns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                Array.from(this.btns).filter((btn) => btn.classList.contains('active')).at(-1)?.classList.remove('active')
                event.target.closest('.btn').classList.add('active')
                this.activeId = parseInt(event.target.closest('.btn')?.dataset.casesFilterBtn) || -1;
                this.onFilter()
            })
        })
    }
}

const casesFilter = new CasesFilter();

casesFilter.onInit()