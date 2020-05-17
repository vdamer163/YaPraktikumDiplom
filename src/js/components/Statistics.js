

export default class Statistics {
    constructor(data) {
        this.data = data
    }

    overallMentionWeekday () {
        this.datePublish = []
        for (const cardData of this.data.articles) {
            this.datePublish.push(cardData.publishedAt.split('T')[0])
            this.resultData = {};
            this.datePublish.sort().forEach((date) => {
                if (this.resultData[date] != undefined)
                    ++this.resultData[date];
                else
                    this.resultData[date] = 1;
            });
        }
        return this.resultData
    }


    numberMention(){
        this.overallMentionWeekday()
        this.numberMentionArr = []
        for (const key in this.resultData) {
            this.numberMentionArr.push(this.resultData[key])
        }
        return this.numberMentionArr

    }

    arrWeekday(){
        this.overallMentionWeekday()
        this.numberWeekdayArr = []
            for (const name of Object.keys(this.resultData)) {
                this.datePublish = new Date(`${name}`);
                const options = {
                    day: 'numeric',
                    weekday: 'short',
                };
                this.localDate = this.datePublish.toLocaleString("ru", options)
                this.numberWeekdayArr.push(this.localDate.split(/\, /)[1] + ', ' + this.localDate.split(/\,/)[0])
            }
        return this.numberWeekdayArr
    }

    numberMentionTitle (searchField) {
         this.titleArticles = []
        for (const cardData of this.data.articles) {
            this.titleArticles.push(cardData.title)
        }
        this.titleArticles = JSON.stringify(this.titleArticles).toLowerCase()
        this.titleArticles = JSON.parse(this.titleArticles)

        this.titleMatchSearch = [];
        this.titleArticles.forEach(date => {
            if (date.indexOf(searchField.toLowerCase()) >= 0)
                this.titleMatchSearch.push(searchField);
        });
        return this.titleMatchSearch
    }
}