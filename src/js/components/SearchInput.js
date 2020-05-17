export default class SearchInput {
    constructor() {
        this.hasError = false;
        this.form = document.forms.searchForm;
        this.input = this.form.elements.searchField;
    }

    setEventListeners() {
        this.form.addEventListener('input', this.searchInputValidation.bind(this));
        //this.form.addEventListener('input', this.searchButtonState.bind(this));
    }


    searchInputValidation() {
        this.validity = this.input.validity;
        this.hasError = false;
        if (this.validity.tooShort) {
            this.hasError = true;
        }
        if (this.validity.tooLong) {
            this.hasError = true;
        }
    };

}