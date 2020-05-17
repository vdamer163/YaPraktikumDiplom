export default class CommitCardList{

    constructor(container, cards) {
        this.container = container;
        this.cards = cards;
    }

    render() {
        for (const card of this.cards) {
            this.container.insertAdjacentElement('beforeend', card)
        }

    }
}