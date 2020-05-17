export default class NewsApi {
    constructor(textSearch,pastSevenDay,currentDate,pageSize,apiKey) {
        this.textSearch = textSearch;
        this.pastSevenDay = pastSevenDay;
        this.currentDate = currentDate;
        this.pageSize = pageSize;
        this.apiKey = apiKey;
        this.url = `https://newsapi.org/v2/everything?language=ru&q=${this.textSearch}&from=${this.pastSevenDay}&to=${this.currentDate}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`
        this.req = new Request(this.url);
    }

    getNews() {
        return fetch(this.req)

            .then(res => res.json())
            .catch(err => {
                throw err;
            });

    }

}