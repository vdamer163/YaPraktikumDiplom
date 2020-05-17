import "../../pages/statistic.css"

import Statistics from "../components/Statistics";
import DataStorage from "../modules/DataStorage";


const rowOne = document.querySelector('.table__mention-row_one');
const rowTwo = document.querySelector('.table__mention-row_two');
const rowThree = document.querySelector('.table__mention-row_three');
const rowFour = document.querySelector('.table__mention-row_four');
const rowFive = document.querySelector('.table__mention-row_five');
const rowSix = document.querySelector('.table__mention-row_six');
const rowSeven = document.querySelector('.table__mention-row_seven');

const dataRowOne = document.querySelector('.table__weekday_row-one');
const dataRowTwo = document.querySelector('.table__weekday_row-two');
const dataRowThree = document.querySelector('.table__weekday_row-three');
const dataRowFour = document.querySelector('.table__weekday_row-four');
const dataRowFive = document.querySelector('.table__weekday_row-five');
const dataRowSix = document.querySelector('.table__weekday_row-six');
const dataRowSeven = document.querySelector('.table__weekday_row-seven');
const searchStatisticRequest = document.querySelector('.search-statistic__request')
const searchStatisticNewsNumber = document.querySelector('.search-statistic__news-number')
const searchStatisticMentionNumber = document.querySelector('.search-statistic__mention-number')
const dataStorage = new DataStorage();
const searchFieldText = dataStorage.getItem('searchField')
searchStatisticRequest.textContent = searchFieldText
const objectSearchResult = dataStorage.getItem('keySearch')
searchStatisticNewsNumber.textContent = objectSearchResult.totalResults
const statistics = new Statistics(objectSearchResult)
const numberMention = statistics.numberMention()
const arrWeekday = statistics.arrWeekday()
const titleMatchSearch = statistics.numberMentionTitle(searchFieldText)
searchStatisticMentionNumber.textContent = titleMatchSearch.length



rowOne.style.width= numberMention[0] + '%';
rowTwo.style.width= numberMention[1] + '%';
rowThree.style.width= numberMention[2] + '%';
rowFour.style.width= numberMention[3] + '%';
rowFive.style.width= numberMention[4] + '%';
rowSix.style.width= numberMention[5] + '%';
rowSeven.style.width= numberMention[6] + '%';

rowOne.textContent = numberMention[0];
rowTwo.textContent = numberMention[1];
rowThree.textContent = numberMention[2];
rowFour.textContent = numberMention[3];
rowFive.textContent = numberMention[4];
rowSix.textContent = numberMention[5];
rowSeven.textContent = numberMention[6];


dataRowOne.textContent = arrWeekday[0];
dataRowTwo.textContent = arrWeekday[1];
dataRowThree.textContent = arrWeekday[2];
dataRowFour.textContent = arrWeekday[3];
dataRowFive.textContent = arrWeekday[4];
dataRowSix.textContent = arrWeekday[5];
dataRowSeven.textContent = arrWeekday[6];

