const cookiesForm = class cookiesForm {
    constructor() {
        this.isClosedOnce = false;
    }
    checkIfFormClosedOnce() {
        if (localStorage.getItem('cookiesFormOnceClosed') == 'true') {
            this.isClosedOnce = true;
        }
    }
    closeForm() {
        localStorage.setItem('cookiesFormOnceClosed', true);
        this.checkIfFormClosedOnce();
    }
    init() {
        // localStorage.setItem('cookiesFormOnceClosed', false);
        this.checkIfFormClosedOnce();

        document.querySelector('.cookie-form__button').addEventListener('click', () => {this.closeForm()});
    }
}

export default cookiesForm;