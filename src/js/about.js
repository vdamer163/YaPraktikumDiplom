import "../pages/about.css"

import Glide from '@glidejs/glide'

new Glide('.glide', {
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

}).mount()


