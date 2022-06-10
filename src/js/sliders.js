import Swiper, { EffectFade, Navigation, Pagination } from "swiper"

const mainSlider = new Swiper(".main-slider__container", {
    modules: [ Navigation, Pagination, EffectFade ],


    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
        768: {
            allowTouchMove: false,
        },
        0: {
            allowTouchMove: true,
        }
    },
    
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    pagination: {
        el: ".main-slider__pagination",
        type: "fraction",
        renderFraction: (currentClass, totalClass) => `<span class="${currentClass} main-slider__pagination-elem main-slider__pagination-current"></span><span class="main-slider__pagination-separator"></span><span class="${totalClass} main-slider__pagination-elem main-slider__pagination-total"></span>`
    },

    navigation: {
        nextEl: ".main-slider__arrow_next",
        prevEl: ".main-slider__arrow_prev",
    },
});

const sectionCategoriesSlider = new Swiper(".s-cat__body", {
    modules: [ Navigation ],
    
    allowTouchMove: false,

    breakpoints: {
        1100: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        650: {
            slidesPerView: 3,
            spaceBetween: 24,
            allowTouchMove: true,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 24,
            allowTouchMove: true,
        },
        0: {
            slidesPerView: 1.6,
            spaceBetween: 16,
            allowTouchMove: true,
        }
    },

    navigation: {
        nextEl: ".s-cat__arrow_next",
        prevEl: ".s-cat__arrow_prev",
    },
});

const sectionBestSlider = new Swiper(".products-slider", {
    modules: [ Navigation ],

    allowTouchMove: false,

    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 86,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        820: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 24,
            allowTouchMove: true,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
            allowTouchMove: true,
        }
    },

    navigation: {
        nextEl: ".s-best__arrow_next",
        prevEl: ".s-best__arrow_prev",
    },
});

const sectionPartnersSlider = new Swiper(".s-partners__body", {
    modules: [ Navigation ],
    
    allowTouchMove: false,

    breakpoints: {
        1100: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        650: {
            slidesPerView: 3,
            spaceBetween: 24,
            allowTouchMove: true,
        },
        450: {
            slidesPerView: 3,
            spaceBetween: 16,
            allowTouchMove: true,
        },
        0: {
            slidesPerView: 2.6,
            spaceBetween: 16,
            allowTouchMove: true,
        }
    },

    navigation: {
        nextEl: ".s-partners__arrow_next",
        prevEl: ".s-partners__arrow_prev",
    },
});