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
        renderFraction: mainPagin,
    },

    navigation: {
        nextEl: ".main-slider__arrow_next",
        prevEl: ".main-slider__arrow_prev",
    },
});

function mainPagin(currentClass, totalClass) {
	return `<span class="${currentClass} slider__pagination-elem slider__pagination-current"></span><span class="slider__pagination-separator"></span><span class="${totalClass} slider__pagination-elem slider__pagination-total"></span>`
}

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

const sectionBestSlider = new Swiper(".s-best__slider", {
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

const sectionEventSlider = new Swiper(".s-event__slider", {
    modules: [ Navigation ],

    allowTouchMove: false,

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 86,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 24,
            allowTouchMove: true,
        },
        450: {
            slidesPerView: 1,
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
        nextEl: ".s-events__arrow_next",
        prevEl: ".s-events__arrow_prev",
    },
});

const cardEventSlider = new Swiper(".c-event__slider", {
    modules: [ Navigation, Pagination ],

	slidesPerView: 1,
    allowTouchMove: false,

	pagination: {
        el: ".c-event__pagination",
        type: "fraction",
        renderFraction: mainPagin,
    },

    navigation: {
        nextEl: ".c-event__slider-arrow_next",
        prevEl: ".c-event__slider-arrow_prev",
    },
});

// console.log(cardEventSlider.navigation.nextEl)

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