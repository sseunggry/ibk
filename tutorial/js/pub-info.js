const swiperSlide = {
    init:()=>{
        swiperSlide.setClass();
        swiperSlide.slideEvent();
        swiperSlide.stepEvent();
    },
    /* 초기 body 클래스 추가 */
    setClass:()=>{
        const experInfo = document.querySelector('.experience-info');
        if( experInfo ){ document.querySelector('body').classList.add('is-hidden')}
    },
    /* 슬라이드 이벤트 */
    slideEvent:()=>{
        let tabEventChecker = true;

        const swiper = new Swiper('.swiper-container', {
            //initialSlide:9,
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 0,
            mousewheel: true,
            speed:1000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation:{
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev",
            },
            on: {
                slideChange:function(){
                    /* 슬라이드 별 아이콘 위치 변경 */
                    const iconMove = document.querySelector('.guide-move-icon');
                    const activeIdx = this.activeIndex;
                    if( activeIdx === 0 ){
                        iconMove.style.top = '0';
                        iconMove.style.left = '81.9rem';
                    } else if ( activeIdx === 1 ){
                        iconMove.style.top = '13.9rem';
                        iconMove.style.left = '81.9rem';
                    } else if( activeIdx === 2 ){
                        iconMove.style.top = '0rem';
                        iconMove.style.left = '82.5rem';
                    } else if( activeIdx === 3 ){
                        iconMove.style.top = '10.3rem';
                        iconMove.style.left = '85.5rem';
                    } else if( activeIdx === 4 ){
                        iconMove.style.top = '0rem';
                        iconMove.style.left = '82.4rem';
                    } else if( activeIdx === 5 ){
                        iconMove.style.top = '3rem';
                        iconMove.style.left = '80.9rem';
                    } else if( activeIdx === 6 ){
                        iconMove.style.top = '0rem';
                        iconMove.style.left = '82.3rem';
                    } else if( activeIdx === 7 ){
                        iconMove.style.top = '3.3rem';
                        iconMove.style.left = '82.3rem';
                    } else if( activeIdx === 8 ){
                        iconMove.style.top = '37rem';
                        iconMove.style.left = '87.3rem';
                    }

                    /* navigation */
                    const btnSwiperBtnWrap = document.querySelector('.swiper-buttons-wrap');
                    const btnSwiperNext = btnSwiperBtnWrap.querySelector('.swiper-button-next');
                    activeIdx === 0 ? btnSwiperBtnWrap.classList.add('hide') : btnSwiperBtnWrap.classList.remove('hide');
                    activeIdx === 8 ? btnSwiperNext.classList.add('hide') : btnSwiperNext.classList.remove('hide');

                    const swiperBullet = document.querySelectorAll('.swiper-pagination-bullet');
                    const swiperButton = document.querySelectorAll('.swiper-buttons-wrap [role=button]');

                    if( swiperSlide.length !== swiper.activeIndex+1 ) {
                        swiperBullet.forEach(function(btn){
                            btn.setAttribute('tabIndex', '-1');
                        });
                        swiperButton.forEach(function(btn){
                            btn.setAttribute('tabIndex', '-1');
                        });
                    }

                    const haderButton = document.querySelector('.content-header .btn');
                    if( activeIdx === 0 ) {
                        haderButton.setAttribute('tabIndex', '0');
                    } else {
                        haderButton.setAttribute('tabIndex', '-1');
                    }

                    if( activeIdx === 0 || activeIdx === 8 ) {
                        tabEventChecker = true;
                    }
                },

                init: function () {
                    /* dataNavi 링크이동 */
                    const dataNavi = document.querySelectorAll('[data-navi]');
                    dataNavi.forEach(function(dataNaviBtn){
                        dataNaviBtn.addEventListener('click', function(btn){
                            let idx = btn.currentTarget.getAttribute('data-navi');
                            swiper.slideTo(idx);
                        });
                    });

                    /* navigation 첫번째일때 삭제 */
                    const btnSwiperBtnWrap = document.querySelector('.swiper-buttons-wrap')
                    btnSwiperBtnWrap.classList.add('hide');

                    /* 카드 모션 이벤트 */
                    const cardMotions = document.querySelectorAll('[data-motion-card]');
                    cardMotions.forEach(function(cardItem){
                        const cardButtons = cardItem.querySelectorAll('.card-head .title');
                        cardButtons.forEach(function(cardBtn){
                            cardBtn.addEventListener('click', function(e){
                                cardMotionEvent(e);
                            });

                            cardBtn.addEventListener('focus', function(e){
                                cardMotionEvent(e);
                            });
                        });
                    });

                    const cardMotionEvent = (e) => {
                        const currentCard = e.currentTarget.closest('.card');
                        const currentCardIndex = parseInt(currentCard.getAttribute('data-card'));

                        const cardWrap = e.currentTarget.closest('[data-motion-card]');
                        const maxCards = cardWrap.querySelectorAll('[data-card]');
                        let cardValue = [];

                        maxCards.forEach(function(maxCard){
                            cardValue.push(parseInt(maxCard.getAttribute('data-card')));
                        });
                        const maxIndex = Math.max(...cardValue);

                        const moveCard =  cardWrap.querySelector(`[data-card="${maxIndex}"]`);

                        moveCard.setAttribute('data-card', currentCardIndex);
                        currentCard.setAttribute('data-card', maxIndex);
                    }

                    /* 스크롤박스 있을 경우 스크롤이벤트 막기 */
                    const scrollItem = document.querySelector('.card-cont.scroll');
                    scrollItem.addEventListener('wheel', function(e){
                        e.stopPropagation();
                    })
                },

                reachEnd: function(){
                    const swiperBullet = document.querySelectorAll('.swiper-pagination-bullet');
                    const swiperButton = document.querySelectorAll('.swiper-buttons-wrap [role=button]');

                    swiperBullet.forEach(function(btn){
                        btn.setAttribute('tabIndex', '0');
                    });
                    swiperButton.forEach(function(btn){
                        btn.setAttribute('tabIndex', '0');
                    });

                },
            },
        });

        /* 스와이퍼 포커스 이벤트 */
        const swiperSlide = document.querySelectorAll('.experience-info .swiper-slide');
        const swiperSlideBtn = document.querySelectorAll('.experience-info button');
        const swiperBtn = document.querySelectorAll('.experience-info [role="button"]');
        const swiperBullet = document.querySelectorAll('.swiper-pagination-bullet');

        swiperSlide.forEach(function(slide){
            // 슬라이드의 tabIndex를 기본값 '-1'로 설정
            slide.setAttribute('tabIndex', '-1');
        });


        // 페이지 내에 버튼 여부 체크
        let slideBtn = swiperSlide[swiper.activeIndex].querySelectorAll('button');
        if(slideBtn.length){
            slideBtn[slideBtn.length-1].addEventListener('keydown', function(btnEvent){
                if(btnEvent.key === 'Tab' && !btnEvent.shiftKey){
                    tabEventChecker = false;
                }

                if(btnEvent.key === 'Tab' && btnEvent.shiftKey){
                    tabEventChecker = true;
                }
            });

            slideBtn.forEach(function(btn){
                btn.setAttribute('tabIndex', '0');
            });
        }

        // swiper bullet 첫번째 요소 이벤트
        swiperBullet[0].addEventListener("keydown", function(event){
            // shiftKey tab event
            if(event.key === 'Tab' && event.shiftKey){
                event.stopPropagation();
                event.preventDefault();

                // focus remove
                document.activeElement.blur();

                // slide move
                swiper.slideTo(swiper.activeIndex-1);

                swiperBullet.forEach(function(btn){
                    btn.setAttribute('tabIndex', '-1');
                });
            }
        });

        window.addEventListener("keydown", function(event){
            console.log(tabEventChecker);
            // tab event
            if(event.key === 'Tab' && !event.shiftKey && !tabEventChecker){
                event.preventDefault();

                // slide move
                swiper.slideTo(swiper.activeIndex+1);

                // focus remove
                document.activeElement.blur();

                // slide tab btn check
                slideBtn = swiperSlide[swiper.activeIndex].querySelectorAll('button');
                if(slideBtn.length){
                    tabEventChecker = true;

                    slideBtn[slideBtn.length-1].addEventListener('keydown', function(btnEvent){
                        if(btnEvent.key === 'Tab' && !btnEvent.shiftKey){
                            tabEventChecker = false;
                        }

                        if(btnEvent.key === 'Tab' && btnEvent.shiftKey){
                            tabEventChecker = true;
                        }
                    });

                    slideBtn.forEach(function(btn){
                        btn.setAttribute('tabIndex', '0');
                    });
                }

                let oldSlideBtn = swiperSlide[swiper.activeIndex-1].querySelectorAll('button');
                if(oldSlideBtn.length){
                    oldSlideBtn.forEach(function(btn){
                        btn.removeAttribute('tabIndex');
                    });
                }
            }

            // shiftKey tab event
            if(event.key === 'Tab' && event.shiftKey){
                // slide last page check
                if( swiperSlide.length === swiper.activeIndex+1 ) {
                    // slide move
                    if( !document.activeElement.classList.contains('swiper-pagination-bullet') && !document.activeElement.classList.contains('swiper-button-prev') && !document.activeElement.classList.contains('swiper-button-next') ) {
                        event.preventDefault();
                        swiper.slideTo(swiper.activeIndex-1);
                    }
                } else {
                    let prevSlideBtn = swiperSlide[swiper.activeIndex-1].querySelectorAll('button');
                    if(prevSlideBtn.length){
                        tabEventChecker = true;
                    }

                    // slide tab btn check
                    slideBtn = swiperSlide[swiper.activeIndex].querySelectorAll('button');
                    if(slideBtn.length){
                        slideBtn[0].addEventListener('keydown', function(btnEvent){
                            if(btnEvent.key === 'Tab' && btnEvent.shiftKey){
                                tabEventChecker = false;
                            }

                            if(btnEvent.key === 'Tab' && !btnEvent.shiftKey){
                                tabEventChecker = true;
                            }
                        });

                        slideBtn.forEach(function(btn){
                            btn.setAttribute('tabIndex', '0');
                        });
                    } else {
                        tabEventChecker = false;
                    }

                    if( !tabEventChecker ) {
                        event.preventDefault();

                        // slide move
                        swiper.slideTo(swiper.activeIndex-1);

                        let oldSlideBtn = swiperSlide[swiper.activeIndex+1].querySelectorAll('button');
                        if(oldSlideBtn.length){
                            oldSlideBtn.forEach(function(btn){
                                btn.removeAttribute('tabIndex');
                            });
                        }
                    }
                }
            }
        });
    },
    /* 이용자선택 이벤트 */
    stepEvent:()=>{
        const cardStep = document.querySelector('.card-step');
        const cardStepBtns = cardStep.querySelectorAll('.list a');
        const cardStepCont = cardStep.querySelectorAll('.imgs img');

        cardStepBtns.forEach(function(btn, idx){

            btn.addEventListener('click', function(item){
                cardStepCont.forEach(function(cardCont){
                    cardCont.classList.remove('is-active');
                });

                cardStepBtns.forEach(function(cardBtn){
                    cardBtn.closest('li').classList.remove('is-active');
                });

                item.target.closest('li').classList.add('is-active');
                cardStepCont[idx].classList.add('is-active');
            })
        });
    },
}

window.addEventListener('DOMContentLoaded', function(){
    swiperSlide.init();

});