import "../pages/index.css"
import NewsCard from "./components/NewsCard";
import NewsCardList from "./components/NewsCardList";
import NewsApi from "./modules/NewsApi";
import DataStorage from "./modules/DataStorage";
import SearchInput from "./components/SearchInput";


const loading = document.querySelector('.loading');
const loadingNotFound = document.querySelector('.loading__not-found');
const loadingNotFoundError = document.querySelector('.loading__not-found_error');
const searchResult = document.querySelector('.search-result');
const cardList = document.querySelector('.search-result__list')
const searchResultButton = document.querySelector('.search-result__button')
const searchForm = document.forms.searchForm;
const searchField = searchForm.elements.searchField;
let card;
const cards = [];
const newsCardList = new NewsCardList(cardList, cards);
const apiKey = 'de082bf28ea84b79b66f55ed2d0750a9'
const pageSize = '100'

const date = new Date();
const currentDate = date.toISOString().split('T')[0]
const date2 = new Date();
date2.setDate(date2.getDate() - 6);
const pastSevenDay = date2.toISOString().split('T')[0]
const dataStorage = new DataStorage();
const searchInput = new SearchInput()
const counter = makeCounter();


searchInput.setEventListeners()

searchResultButton.addEventListener('click', moreSearchResult)
searchForm.addEventListener('submit', startSearch);


function makeCounter() {
    let currentCount = 0;
    return function () {
        return currentCount = currentCount + 3;
    };
}


function moreSearchResult() {
    const i = counter()
    const start = i;
    const end = i + 3;
    searchResultRender(start, end);
}


function searchResultRender(start, end) {
    const objectSearchResult = dataStorage.getItem('keySearch')
    if (objectSearchResult) {
        let arrArticles = objectSearchResult.articles
        if (objectSearchResult.totalResults === 0) {
            loadingNotFound.classList.add('enable')
        }
        if (arrArticles.length >= 1 && arrArticles.length <= 3) {
            searchResult.classList.add('enable')
            loadingNotFound.classList.remove('enable')

        }
        if (arrArticles.length >= 3) {
            searchResult.classList.add('enable')
            searchResultButton.classList.add('enable')
            arrArticles = objectSearchResult.articles.slice(start, end)
        }
        for (const cardData of arrArticles) {
            card = new NewsCard(cardData);
            card.create();
            cards.push(card.getElement())
        }
        newsCardList.render();
        if (objectSearchResult.totalResults === cardList.childElementCount) {
            searchResultButton.classList.remove('enable')
        }
        if (cardList.childElementCount == pageSize) {
            searchResultButton.classList.remove('enable')
        }

    }

}

window.onload = () => {
    searchResultRender(0, 3);
    loadingNotFound.classList.remove('enable')
    loadingNotFoundError.classList.remove('enable')
    searchField.value = dataStorage.getItem('searchField')

}

function startSearch(event) {
    loadingNotFound.classList.remove('enable')
    searchResult.classList.remove('enable')
    loading.classList.add('enable')
    loadingNotFoundError.classList.remove('enable')
    event.preventDefault();
    newsCardList.clear();
    const newsApi = new NewsApi(searchField.value, pastSevenDay, currentDate, pageSize, apiKey);
    dataStorage.setItem(searchField.value, 'searchField')
    newsApi.getNews()
        .then((data) => {
            dataStorage.setItem(data, 'keySearch');
            searchResultRender(0, 3)
            loading.classList.remove('enable')
        })
        .catch(err => {
            loading.classList.remove('enable')
            loadingNotFoundError.classList.add('enable')
            throw err;

        });
}



