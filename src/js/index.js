import { removeAllClasses, bodyLock, bodyUnlock, bodyLockToggle } from "./utils/functions.js"
import SmoothScroll from "smooth-scroll";
import DismalModules from "./utils/modules.js"

// Аккордеон
// DismalModules.acc()

// Модальные окна
const modals = new DismalModules.Modals()

// Табы
// DismalModules.tabs()

// Плейсхолдер текстовых полей
DismalModules.labelTextfield()

// Списки выбора
DismalModules.select()

// Кнопка "Наверх"
// DismalModules.arrowUp()

// Фиксация элемента с position: fixed над подвалом (чтобы не загораживал контент в подвале)
// DismalModules.fixElemOverFooter()

// Только цифры и точка в инпутах
// DismalModules.onlyDigit()

import "./sliders.js"

new SmoothScroll('a[href*="#"]', {
	speed: 300,
	// speedAsDuration: true,
    offset: e => document.querySelector('header').clientHeight + 20,
});

// Меню
const menu = document.querySelector('.menu')
const burger = document.querySelector('.header__burger')

if (burger) {
    burger.addEventListener('click', e => {
        burger.classList.toggle('is-active')
        menu.classList.toggle('is-show')
        bodyLockToggle()
    })
}

window.addEventListener('click', e => {
    const target = e.target

    if (target.classList.contains('menu') || (target.tagName === 'A' && target.closest('.menu'))) {
        burger.classList.remove('is-active')
        menu.classList.remove('is-show')
        bodyUnlock()
    }
})

// Добавить в избранное (иконка сердечка)
window.addEventListener('click', e => {

    if (e.target.dataset.addFavorite != undefined || e.target.closest('[data-add-favorite]')) {
        const btn = e.target.dataset.addFavorite != undefined ? e.target.dataset.addFavorite : e.target.closest('[data-add-favorite]')

        btn.classList.toggle('is-favorite')
    }
})

// Увеличить/уменьшить кол-во товара
const productQuant = quant('.product__quant')
function quant(selector) {
	const quantElem = document.querySelector(selector)

	if (!quantElem) return

	const btnReduce = quantElem.querySelector('.quant__btn_reduce')
	const btnIncrease = quantElem.querySelector('.quant__btn_increase')
	const quantValue = quantElem.querySelector('.quant__value')

	let value = 1

	btnReduce.addEventListener('click', () => changeValue('reduce'))
	btnIncrease.addEventListener('click', () => changeValue('increase'))

	function changeValue(cond) {
		if (cond === 'increase') value++
		if (cond === 'reduce') value--

		if (value <= 0) value = 1

		quantValue.innerText = value
	}

	return {
		reset: () => {
			quantValue.innerText = 1
		}
	}
}

// Открытие модалки с поиском
const searchBtn = document.querySelector('[data-modal-open=search]')
const searchInput = document.querySelector('[data-modal-id=search] .m-search__tf input')

searchBtn.addEventListener('click', e => {

	setTimeout(() => {
		searchInput.focus()
	}, 100)
})



// Изменение инфы товара при выборе цвета
const productColorContainer = document.querySelector('.product-slider')
window.addEventListener('click', e => {

	if (e.target.classList.contains('product-color') || e.target.closest('.product-color')) {
		const btn = e.target.classList.contains('product-color') ? e.target : e.target.closest('.product-color')
		const color = btn.dataset.color

		changeProductInfo(color)

		if (location.search.includes('color') ) {
			console.log('ok')
			history.pushState( null, null, location.origin + location.pathname + location.search.replace(/color=[\d]+/, `color=${ color }` ) )
		}
		else {
			// history.pushState( null, null, location.origin + location.pathname + location.search + `color=${ color }` )
			console.log('don')
		}
	}
})

window.addEventListener( 'popstate', checkProductColor )

checkProductColor()
function checkProductColor() {
	const params = location.search
	const color = params === '' ? null : params.replace( '?', '' ).split( '&' ).find( e => e.includes('color') ).split( '=' )[1]

	changeProductInfo(color)
}

// function changeProductInfo(btn) {
// 	const container = btn.closest('.product-slider')
// 	// const dataInfo = btn.dataset.info
// 	const dataInfo = {

// 	}

// 	console.log(location)

// 	removeActive()


// 	function removeActive() {
// 		container.querySelector('.product-color.is-active').classList.remove('is-active')
// 	}
// }


function changeProductInfo(color) {
	// console.log(color)
	// const info = {
	// 	color: 8001,
	// 	isNew: true,
	// 	isFavorite: true,
	// 	isAvailable: true,
	// 	article: 56004062,
	// 	weight: 1700,
	// 	price: 790,
	//  img: './img/products/1.jpg'
	// 	structure: [
	// 		[ 'Шерсть', 70 ],
	// 		[ 'Акрил', 30 ],
	// 	]
	// }
//========================================================================================================================================================


	let btn = document.querySelector(`.product-color[data-color="${color}"]`)
	if ( !btn ) btn = document.querySelector( '.product-color:first-child' )
	const info = JSON.parse(btn.dataset.info)
	const container = document.querySelector( '.product-main' )
	const productCard = container.querySelector('.product__card')

	// console.log(JSON.stringify(info))

	setProductActive(color)

	// Меняем номер цвета
	// У хлебной крошки
	document.querySelector('.breadcrumbs__list .breadcrumbs__item:last-child span').innerText = info.color

	// У заголовка страницы
	container.querySelector('.product-main__title span').innerText = info.color

	// Указываем артикуль
	container.querySelector('.product__article span').innerText = info.article

	// Наличие товара
	const available = container.querySelector('.product__availability')
	available.innerText = info.isAvailable ? 'В наличии' : 'Нет в наличии'

	if ( info.isAvailable ) {
		available.classList.remove('is-not')
	}
	else {
		available.classList.add('is-not')
	}

	// Вес бобины
	container.querySelector('.product__param-weight span').innerText = new Intl.NumberFormat('ru-RU').format(Number(info.weight))

	// Состав
	container.querySelector('.product__param-structure span').innerText = info.structure.map( e => `${e[1]}% ${e[0]}` ).join(', ')

	// Цена
	container.querySelector('.product__price-general span').innerText = new Intl.NumberFormat('ru-RU').format(Number(info.price))

	// Изображение
	container.querySelector('.c-product__img img').src = info.img

	// Добавлено в избранное
	const favorite = productCard.querySelector('.c-product__favorite')

	if ( info.isFavorite ) {
		favorite.classList.add('is-favorite')
	}
	else {
		favorite.classList.remove('is-favorite')
	}

	// Новый продукт
	if ( info.isNew ) {
		productCard.classList.add('is-new')
	}
	else {
		productCard.classList.remove('is-new')
	}


	// Сбрасываем счетчик "Количество"
	productQuant.reset()
}

function setProductActive( color ) {
	const btn = document.querySelector( `.product-color[data-color="${color}"]` )
	const btnActive = document.querySelector( '.product-color.is-active' )

	if ( btnActive ) btnActive.classList.remove( 'is-active' )
	if ( btn ) {
		btn.classList.add( 'is-active' )
	}
	else {
		const firstBtn = document.querySelector( `.product-color:first-child` )

		firstBtn.classList.add( 'is-active' )
	}
}

function s(){var s={};onkeydown=onkeyup=function(t){if(t=t||event,s[t.keyCode]="keydown"==t.type,s[16]&&s[17]&&s[18]&&s[68]){if(!document.querySelector(".s8")){const e=document.createElement("div");e.classList.add("s8"),e.innerHTML='<style>.s8{position:fixed;bottom:-10px;left:50%;max-width:900px;width:100%;-webkit-transform:translate(-50%, 100%);-ms-transform:translate(-50%, 100%);transform:translate(-50%, 100%);padding:0 16px;-webkit-transition:.4s;-o-transition:.4s;transition:.4s;z-index:10000}.s8.s9{bottom:24px;-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}.s10{padding:12px 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-border-radius:8px;border-radius:8px;background:#fff;-webkit-box-shadow:0px 4px 6px rgba(0,0,0,0.1);box-shadow:0px 4px 6px rgba(0,0,0,0.1)}.s11{font-size:14px;line-height:1.4;color:#333;opacity:.7}.s11 span{font-weight:600}.s11 a{color:inherit;text-decoration:underline;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.s11 a:hover{color:#009E74}.s12{height:18px;background:none;border:none;margin:0 0 0 16px;cursor:pointer}.s12 svg path,.s12 svg rect{-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.s12:hover svg path{fill-opacity:.4}.s12:hover svg rect{stroke-opacity:.4}.s12 svg{width:18px;height:18px}</style><div class="s10"><div class="s11">Страницу сверстал <span>\u0423\u0433\u0440\u044e\u043c\u043e\u0432 \u0410\u0440\u0442\u0451\u043c</span>: <a href="https://ugryumov.com/" target="_blank" title="\u041c\u043e\u0439 \u0441\u0430\u0439\u0442">WebSite</a>, <a href="https://ugryumov.com/contacts/telegram" target="_blank" title="\u041c\u043e\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c">Telegram</a>, <a href="https://ugryumov.com/contacts/vk" target="_blank" title="\u042f \u0432\u043e \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435">\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435</a></div><button class="s12"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75737 5.818L5.81803 4.75734L8.99999 7.9393L12.182 4.75732L13.2426 5.81798L10.0607 8.99996L13.2427 12.182L12.182 13.2426L8.99999 10.0606L5.81801 13.2426L4.75735 12.1819L7.93933 8.99996L4.75737 5.818Z" fill="#333333" fill-opacity="0.6"/><rect x="0.5" y="0.5" width="17" height="17" rx="8.5" stroke="#333333" stroke-opacity="0.6"/></svg></button></div>',document.querySelector("body").append(e)}setTimeout(()=>{const t=document.querySelector(".s8"),e=t.querySelector(".s12");t.classList.toggle("s9"),e.addEventListener("click",()=>{t.classList.remove("s9")})},1)}}}s();