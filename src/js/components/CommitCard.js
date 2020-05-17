export default class CommitCard {
    constructor(data) {
        this.data = data
    }

    localDate() {
        let datePublish = new Date(`${this.data.commit.committer.date}`);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        let localDate = datePublish.toLocaleString("ru", options)

        return localDate.split(/\s/)[0] + ' ' + localDate.split(/\s/)[1] + ', ' + localDate.split(/\s/)[2]
    }

    create() {
        this.element = document.createElement('li');
        this.element.classList.add('glide__slide');
        this.element.insertAdjacentHTML('beforeend',
            ` <div class="github-history__card">
              <p class="github-history__card-date">${this.localDate()}</p>
              <div class="github-history__card-author">
                <img alt="Marie" class="github-history__card-img" src="${this.data.author.avatar_url}">
                <div class="github-history__card-info">
                  <h2 class="github-history__card-name">${this.data.commit.committer.name}</h2>
                  <p class="github-history__card-email">${this.data.commit.committer.email}</p>
                </div>
              </div>
              <p class="github-history__card-text">${this.data.commit.message}</p></div>`)
    }

    getElement() {
        return this.element
    }
};