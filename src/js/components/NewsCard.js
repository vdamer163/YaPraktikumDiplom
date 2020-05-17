export default class NewsCard {
    constructor(data) {
        this.data = data
    }

    localDate() {
        let datePublish = new Date(`${this.data.publishedAt}`);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        let localDate = datePublish.toLocaleString("ru", options)

        return localDate.split(/\s/)[0] + ' ' + localDate.split(/\s/)[1] + ', ' + localDate.split(/\s/)[2]
    }

    create() {
        this.element = document.createElement('div');
        this.element.classList.add('search-card');
        this.element.insertAdjacentHTML('beforeend',
            `<a href="${this.data.url}" target="_blank" class="search-card__content">
          <img alt="Photo of news" class="search-card__image" src="${this.data.urlToImage}">
          <p class="search-card__date">${this.localDate()}</p>
          <h2 class="search-card__title">${this.data.title}</h2>
          <p class="search-card__subtitle">${this.data.description.replace(/<[^>]+>/g,'')}</p>
        </a>
        <a class="search-card__source" href="#">${this.data.source.name}</a>`)
    }

    getElement() {
        return this.element
    }
};

