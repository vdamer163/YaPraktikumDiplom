import "../../pages/about.css"

import Glide from '@glidejs/glide'
import GithubApi from "../modules/GithubApi";
import CommitCard from "../components/CommitCard";
import CommitCardList from "../components/CommitCardList";
import DataStorage from "../modules/DataStorage";
import GlideLayout from "../components/GlideLayout";


const searchResultHeader = document.querySelector('.search-result__header')
const dataStorage = new DataStorage();
const githubApi = new GithubApi();
const glideLayout = new GlideLayout(searchResultHeader)

let commitCard;
const commitCards = [];

(function () {
    githubApi.getCommits()
        .then((data) => {
                dataStorage.setItem(data, 'commitHistory');
                glideLayout.create()
                renderCommitCard()
            }
        )
        .catch(err => {
            throw err;
        });
})();

function renderCommitCard() {
    const glideSlides = document.querySelector('.glide__slides')
    const commitCardList = new CommitCardList(glideSlides, commitCards);
    const githubApiData = dataStorage.getItem('commitHistory')
    for (const cardData of githubApiData) {
        commitCard = new CommitCard(cardData);
        commitCard.create();
        commitCards.push(commitCard.getElement())
    }
    commitCardList.render();
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        peek: {
            before: 100,
            after: 100
        },
        gap: 16,
        breakpoints: {
            1280: {
                perView: 3,
                peek: {
                    before: 0,
                    after: 50
                },

            },
            1010: {
                perView: 2,
            },
            879: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 50
                }
            },
            768: {
                perView: 2,
                peek: {
                    before: 30,
                    after: 50
                },
                gap: 8,
            },
            730: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 0
                },
                gap: 8,
            },
            670: {
                perView: 1,
                peek: {
                    before: 100,
                    after: 100
                },
                gap: 8,
            },
            531: {
                perView: 1,
                peek: {
                    before: 0,
                    after: 100
                },
                gap: 8,
            },
            436: {
                perView: 1,
                peek: {
                    before: 50,
                    after: 0
                },
                gap: 8,
            },
            320: {
                perView: 1,
                peek: {
                    before: 0,
                    after: 0
                },
                gap: 8,
            }
        }

    })
    glide.mount()
}





