// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS

$(document).ready(function () {


	setTimeout(function () {
		$('.scroll-finger').fadeOut()
	}, 3000)

	$('.table-ovf').each(function () {
		$(this).html(`${$(this).html()}<div class="scroll-finger"><img src="img/finger.png" alt="Finger"></div>`)
	})

	$('.item__likes').click(function () {
		$(this).toggleClass('item__likes_active')
	})

	// LIKE DISLIKE

	$('.likes-item').click(function () {
		$(this).parent().find('.likes-item').removeClass('likes_active')
		if( $(this).hasClass('likes_active') )
			$(this).removeClass('likes_active')
		$(this).toggleClass('likes_active')
	})

	// LIKE DISLIKE

	$('.points .points__all').click(function () {
		$('.points ol li').toggleClass('li_show')
		if( $('.points ol li').hasClass('li_show') )
			$(this).text('Свернуть инсрукцию')
		else
			$(this).text('Показать всю инструкцию')
	})

	$('.eyes').click(function () {
		$(this).toggleClass('eyes-atcive')
		$(this).find('.eye-open').toggle()
		$(this).find('.eye-close').toggle()

		if( $(this).hasClass('eyes-atcive') ){
			$(this).parent().parent().find('input').attr('type', 'text')
		}else{
			$(this).parent().parent().find('input').attr('type', 'password')
		}
	})

	$('.switch__item').click(function () {

		$('.switch__item').removeClass('switch__item_active')

		$(this).addClass('switch__item_active')

	})

	$('code').each(function () {

		let text = $(this).data('code')

		$(this).text(text)

	})

	$('.page-partnership .block__nav li').click(function (e) {

		e.preventDefault()

		$('.page-partnership .block__nav li').removeClass('li_active')

		$(this).addClass('li_active')

		let ind = $(this).index() + 1 // 1+

		$('.switch-block, .pagination').removeClass('switch-block_active')

		$(`.switch-block_${ind}`).addClass('switch-block_active')


	})

	$('.page-deal__button_disabled').click(function () {
		alert('Кнопки будут доступны после подтверждения запроса')
	})

	$('.page-profile .block__nav li').click(function (e) {

		e.preventDefault()

		$('.page-profile .block__nav li').removeClass('li_active')

		$(this).addClass('li_active')

		let ind = $(this).index() + 1 // 1+

		$('.page-profile__block').removeClass('page-profile__block_active')

		$(`.page-profile__block_${ind}`).addClass('page-profile__block_active')

	})

	$('.page-rules .block__nav li').click(function (e) {

		if( !$(this).find('a').attr('href') )
			e.preventDefault()

		$('.page-rules .block__nav li').removeClass('li_active')

		$(this).addClass('li_active')

		let ind = $(this).index() + 1 // 1+

		$('.page-rules__block').removeClass('page-rules__block_active')

		$(`.page-rules__block_${ind}`).addClass('page-rules__block_active')

	})

	$('.item__input_copy button, .copy button').click(function () {
		var copyText = $(this).parent().find('input')
		copyText.select();
		document.execCommand("copy");
		alert("Текст скопирован!");
	})

	$('.page-deal__info .info__head .show').click(function () {
		if( $(this).text() == 'Скрыть' )
			$(this).text('Показать')
		else
			$(this).text('Скрыть')

		$(this).parent().parent().toggleClass('page-deal__info_open')
		$(this).parent().parent().find('.info__content').slideToggle(200)
	})

	$('.view-more').click(function () {
		$(this).parent().find('li').toggleClass('li_show')
		if( $(this).text() == 'Скрыть все шаги' )
			$(this).text('Показать все шаги')
		else
			$(this).text('Скрыть все шаги')
	})

	$('.card .text__more').click(function () {
		$('.popup').removeClass('popup_open')
		$(this).parent().parent().find('.popup').addClass('popup_open')
		let thiis = $(this).parent().parent()
		$(this).parent().parent().find('.slick-next').click()
		// $('body').addClass('slider-without')

		$(this).parent().parent().parent().parent().addClass('slider-without')
		$(this).parent().parent().parent().addClass('slider-without')

		setTimeout(function () {
			thiis.find('.slick-prev').click()
		}, 200)

	})

	function countFunc() {
		$('.count__plus, .item__sign_plus, .count__sign_plus').click(function () {
			$(this).parent().find('.count__num, .item__num, .count__num').val(Number($(this).parent().find('.count__num, .item__num, .count__num').val()) + 1)
		})
		$('.count__minus, .item__sign_minus, .count__sign_minus').click(function () {
			$(this).parent().find('.count__num, .item__num, .count__num').val(Number($(this).parent().find('.count__num, .item__num, .count__num').val()) - 1)
			if( Number($(this).parent().find('.count__num, .item__num, .count__num').val()) <= 1 ){
				$(this).parent().find('.count__num, .item__num, .count__num').val('1')
			}
		})
	}

	countFunc()


	$('.page-plans__bottom a').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().parent().find('.page-plans__bottom').toggleClass('page-plans__bottom_active')

		if( $(this).text() == 'Свернуть' )
			$(this).text('Подробнее')
		else
			$(this).text('Свернуть')
	})








	// LOAD FILE

	if( document.getElementById('fl1') ){
		document.getElementById('fl1').onchange = function() {
		  if (this.files[0])
		    document.querySelector('.file-load').innerHTML = this.files[0].name;
		};
	}

	if( document.getElementById('flPop1') ){
		document.getElementById('flPop1').onchange = function() {
		  if (this.files[0])
		    document.querySelector('.file-load').innerHTML = this.files[0].name;
		};
	}

	if( document.getElementById('fileSms1') ){
		document.getElementById('fileSms1').onchange = function() {
		  if (this.files[0])
		    document.querySelector('.loaded-file').innerHTML = this.files[0].name;
		};
	}

	if( document.getElementById('fileSms') ){
		document.getElementById('fileSms').onchange = function() {
		  if (this.files[0])
		    document.querySelector('.loaded-file').innerHTML = this.files[0].name;
		};
	}

	// LOAD FILE











	// DEAL SWITCH

	$('.switch__item').click(function () {
		let ind = $(this).index() - 1
		$('.page-deal__item').hide()
		if( ind == 2 ){
			$('.page-deal__item').eq(1).show()
		}
		$('.page-deal__item').eq(ind).show()
	})

	// DEAL SWITCH










	// MENU SWITCH

	$('.header__mob-switch label').click(function () {
		let ind = $(this).index() - 1
		$('.mob__block').hide()
		if( ind == 2 ){
			$('.mob__block').eq(1).show()
		}
		$('.mob__block').eq(ind).show()
	})

	// MENU SWITCH














	// PERSONE MENU

	$('.persone__top').click(function () {
		$('.persone__menu').slideToggle()
	})

	// PERSONE MENU











	// LIKE

	$('.item__like').click(function () {
		$(this).toggleClass('item__like_liked')
	})

	// LIKE







	// SELECT

	function selectFunc(){

		$('.select__head, .select-share__head').click(function () {
			if( $(this).parent().hasClass('select-share_active') || $(this).parent().hasClass('select_active') ){
				$(this).parent().find('.select__body, .select-share__body').slideUp(200)
				$(this).parent().removeClass('select_active select-share_active')
			}else{
				$('.select__head, .select-share__head').parent().find('.select__body, .select-share__body').slideUp(200)
				$('.select__head, .select-share__head').parent().removeClass('select_active select-share_active')
				$(this).parent().find('.select__body, .select-share__body').slideDown(200)
				$(this).parent().addClass('select_active select-share_active')
			}
		})

		$('.select__body span').click(function () {
			$(this).parent().parent().removeClass('select_active select-share_active')
			$(this).parent().parent().find('.select__body').slideUp(200)

			$(this).parent().parent().find('.select__head').text($(this).text())

		})

		$('.select__body .select__item, .select__body .span, .select__body .grey').click(function () {
			$(this).parent().parent().parent().find('.select__body').slideUp(200)
			$(this).parent().parent().parent().find('.select__head').text($(this).find('.span').text())

			$(this).parent().parent().parent().removeClass('select_active select-share_active')
		})


		$(document).mouseup(function (e){ // событие клика по веб-документу
			// $('.select, .select-share').removeClass('select_active select-share_active')
			// $('.select__body, .select-share__body').slideUp(200)

			$('.emoji-block').slideUp()

			var div = $(".select-share, .select, .select-v2"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.select-v2').removeClass('select_active')
				$('.select').removeClass('select_active')
				$('.select-share').removeClass('select-share_active')
				$('.select__body, .select-share__body').slideUp(200)
			}
		});
	}

	selectFunc()

	// SELECT






	// FAQ

	$('.question__head').click(function () {
		$(this).parent().find('.question__body').slideToggle(300)
		$(this).parent().toggleClass('question_open')
	})

	$('.page-faq__block .lft__menu li').click(function () {
		let ind = $(this).index() + 1

		$('.page-faq__rht').hide()
		$(this).parent().parent().parent().parent().find('.page-faq__rht_'+ind).show()

		$('.page-faq__block .lft__menu li').removeClass('li_active')
		$(this).addClass('li_active')
	})



	$('.page-faq .block__nav li').click(function (e) {

		e.preventDefault()

		$('.page-faq .block__nav li').removeClass('li_active')

		$(this).addClass('li_active')

		let ind = $(this).index() + 1 // 1+

		$('.page-faq__block').removeClass('page-faq__block_active')

		$(`.page-faq__block_${ind}`).addClass('page-faq__block_active')




		$('.page-faq__rht').hide()
		$('.page-faq__rht_1').show()

		$('.lft__menu li').removeClass('li_active')
		$('.page-faq__block').each(function () {
			$(this).find('.lft__menu li').eq(0).addClass('li_active')
		})

	})

	// FAQ










	// EMOJI

	let numCode = 128000;
	let arrCode = []

	for( let i = 0; i < 764; i++ ){
		numCode++;
		let htmlP = `<p>&#${numCode}</p>`;
		arrCode.push(htmlP)

		$('.smiles-emoji').html(arrCode)
	}

	$('.smiles-emoji p').click(function () {
		$(this).parent().parent().parent().parent().find('textarea').val( $(this).parent().parent().parent().parent().find('textarea').val() + $(this).text() )
	})

	$('.emoji-button').click(function () {
		$('.emoji-block').slideToggle()
	})

	// EMOJI














	// ЯКОРЯ

	$(".page-rules__nav").on("click","a", function (e) {

		e.preventDefault();

		var id  = $(this).attr('href'),

		top = $(id).offset().top - 20;
		
		$('body,html').animate({scrollTop: top}, 500);

	});

	// ЯКОРЯ










	// POPUP

	$('button, a, div').click(function (e) {

		if( $(this).data('popup') ){

			e.preventDefault();

			$('.popup').removeClass('popup_open')

			$(`.popup-${$(this).data('popup')}`).addClass('popup_open')

		}

	})

	$('.popup__bgd, .popup__close, .popup__close_button').click(function () {
		$('.popup').removeClass('popup_open')

		$(this).parent().parent().parent().parent().removeClass('slider-without')
		$(this).parent().parent().parent().removeClass('slider-without')
	})

	// POPUP








	// ADVERTISING

	let trArr = []

	$('.td__sum-all').text()

	$('.colors__block li').click(function () {
		$(this).toggleClass('li_blue')
		if( $(this).hasClass('li_red') ){
			$(this).removeClass('li_blue')

			trArr.remove(`
				<tr>
	                <td>
	                  <p>34653</p>
	                </td>
	                <td>
	                  <p>№${$(this).text()}</p>
	                </td>
	                <td>
	                  <p>29.06.2021
	                    <br>12:12</p>
	                </td>
	                <td>
	                  <div class="select">
	                    <div class="select__head"><span>US-Marketplase</span>
	                    </div>
	                    <div class="select__body"><span>US-Marketplase</span><span>US-Marketplase1</span><span>US-Marketplase2</span>
	                    </div>
	                  </div>
	                </td>
	                <td>
	                  <p>Россия</p>
	                </td>
	                <td>
	                  <div class="select">
	                    <div class="select__head"><span>B07R11LMH7</span>
	                    </div>
	                    <div class="select__body"><span>B07R11LMH7</span><span>B07R11LMH71</span><span>B07R11LMH72</span>
	                    </div>
	                  </div>
	                </td>
	                <td>
	                  <div class="td__count" onmousedown="return false" onselectstart="return false">
	                    <div class="count__sign count__sign_minus">
	                      <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
	                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.863281 1C0.863281 0.447715 1.311 0 1.86328 0H15.4996C16.0519 0 16.4996 0.447715 16.4996 1C16.4996 1.55228 16.0519 2 15.4996 2H1.86328C1.311 2 0.863281 1.55228 0.863281 1Z" fill="#B1B1B1"></path>
	                      </svg>
	                    </div>
	                    <input class="count__num" type="number" value="1">
	                    <div class="count__sign count__sign_plus">
	                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31818 1.18164C9.31818 0.629356 8.87047 0.181641 8.31818 0.181641C7.7659 0.181641 7.31818 0.629356 7.31818 1.18164V6.99982H1.5C0.947715 6.99982 0.5 7.44754 0.5 7.99982C0.5 8.55211 0.947715 8.99982 1.5 8.99982H7.31818V14.818C7.31818 15.3703 7.7659 15.818 8.31818 15.818C8.87047 15.818 9.31818 15.3703 9.31818 14.818V8.99982H15.1364C15.6886 8.99982 16.1364 8.55211 16.1364 7.99982C16.1364 7.44754 15.6886 6.99982 15.1364 6.99982H9.31818V1.18164Z" fill="#B1B1B1"></path>
	                      </svg>
	                    </div>
	                  </div>
	                </td>
	                <td>
	                  <p>2499 ₽</p>
	                </td>
	                <td>
	                  <p>2499 ₽</p>
	                </td>
	              </tr>
			`)
		}

		// let thisItem = $(this)


		// if( $(this).hasClass('li_blue') ){
		// 	trArr.push(`
	 //                <td>
	 //                  <p>34653</p>
	 //                </td>
	 //                <td>
	 //                  <p>№${$(this).text()}</p>
	 //                </td>
	 //                <td>
	 //                  <p>29.06.2021
	 //                    <br>12:12</p>
	 //                </td>
	 //                <td>
	 //                  <div class="select">
	 //                    <div class="select__head"><span>US-Marketplase</span>
	 //                    </div>
	 //                    <div class="select__body"><span>US-Marketplase</span><span>US-Marketplase1</span><span>US-Marketplase2</span>
	 //                    </div>
	 //                  </div>
	 //                </td>
	 //                <td>
	 //                  <p>Россия</p>
	 //                </td>
	 //                <td>
	 //                  <div class="select">
	 //                    <div class="select__head"><span>B07R11LMH7</span>
	 //                    </div>
	 //                    <div class="select__body"><span>B07R11LMH7</span><span>B07R11LMH71</span><span>B07R11LMH72</span>
	 //                    </div>
	 //                  </div>
	 //                </td>
	 //                <td>
	 //                  <div class="td__count" onmousedown="return false" onselectstart="return false">
	 //                    <div class="count__sign count__sign_minus">
	 //                      <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
	 //                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.863281 1C0.863281 0.447715 1.311 0 1.86328 0H15.4996C16.0519 0 16.4996 0.447715 16.4996 1C16.4996 1.55228 16.0519 2 15.4996 2H1.86328C1.311 2 0.863281 1.55228 0.863281 1Z" fill="#B1B1B1"></path>
	 //                      </svg>
	 //                    </div>
	 //                    <input class="count__num" type="number" value="1">
	 //                    <div class="count__sign count__sign_plus">
	 //                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	 //                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31818 1.18164C9.31818 0.629356 8.87047 0.181641 8.31818 0.181641C7.7659 0.181641 7.31818 0.629356 7.31818 1.18164V6.99982H1.5C0.947715 6.99982 0.5 7.44754 0.5 7.99982C0.5 8.55211 0.947715 8.99982 1.5 8.99982H7.31818V14.818C7.31818 15.3703 7.7659 15.818 8.31818 15.818C8.87047 15.818 9.31818 15.3703 9.31818 14.818V8.99982H15.1364C15.6886 8.99982 16.1364 8.55211 16.1364 7.99982C16.1364 7.44754 15.6886 6.99982 15.1364 6.99982H9.31818V1.18164Z" fill="#B1B1B1"></path>
	 //                      </svg>
	 //                    </div>
	 //                  </div>
	 //                </td>
	 //                <td>
	 //                  <p>2499 ₽</p>
	 //                </td>
	 //                <td>
	 //                  <p>2499 ₽</p>
	 //                </td>
		// 	`)
		// }else{
		// 	$('.page-advertising__slots tbody tr').each(function (e, w) {
		// 		if( $(this).find('td:nth-child(2)').text().trim() == '№'+thisItem.text() ){
		// 			let htmlThis 	= $(this).html()
		// 			let arrThis 	= trArr


		// 			console.log(arrThis[e])
		// 			// if( '<tr>'+String(htmlThis)+'</tr>' == String(arrThis).trim() ){
		// 				// trArr.splice(String(htmlThis), 1)
		// 			// }
		// 		}
		// 	})
		// }



		// $('.page-advertising__slots tbody').html('<tr>'+trArr+'</tr>')

		// countFunc()
		// selectFunc()
	})

	// ADVERTISING








	// MENU

	$('.header__burger').click(function () {
		$('.header__mob').slideToggle()
		$('.header').toggleClass('header_open')
	})

	// MENU



	$('.slider-nav__arr_next').click(function () {
		$(this).parent().parent().find('.slick-next').click()
	})
	$('.slider-nav__arr_prev').click(function () {
		$(this).parent().parent().find('.slick-prev').click()
	})


	$('.slider__arr_next').click(function () {
		$(this).parent().parent().find('.slick-next').click()
	})
	$('.slider__arr_prev').click(function () {
		$(this).parent().parent().find('.slick-prev').click()
	})

	// SLIDERS

	$('.slider__block').slick({
		slidesToShow: 5,
		swipeToSlide: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: 'unslick'
			}
		]
	})

	$('.slider-nav__block').slick({
		vertical: true,
		arrows: true,
		dots: false,
		slidesToShow: 5,
		asNavFor: '.slider-for',
		focusOnSelect: true,
		speed: 200,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					vertical: false,
					slidesToShow: 4,
				}
			}
		]
	})

	$('.slider-for').slick({
		slidesToShow: 1,
		arrows: false,
		dots: false,
		speed: 200,
		asNavFor: '.slider-nav__block',
		swipe: false,
		adaptiveHeight: true,
	})

	$('.slider-reviews__block').slick({
		slidesToShow: 3,
		swipeToSlide: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: 'unslick'
			}
		]
	})

	// SLIDERS






	// MEDIA

	if( $(window).width() < 576 ){
		$('.li__title').click(function () {
			$(this).parent().find('ul').slideToggle(300)
			$(this).parent().find('.li__title').toggleClass('li__title_open')
		})
	}

	// MEDIA

})




























