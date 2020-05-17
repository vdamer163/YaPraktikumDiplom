export default class NewsCardList{

    constructor(container, cards) {
        this.container = container;
        this.cards = cards;
    }

    render() {
        for (const card of this.cards) {
            this.container.insertAdjacentElement('beforeend', card)
        }

    }
   clear() {
            this.cards.length = 0;
            this.container.innerHTML = '';
    }
}