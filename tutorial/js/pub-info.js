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

                    // 슬라이드가 변경될 때마다 활성화된 슬라이드에 tabIndex 설정
                    this.slides[activeIdx].setAttribute('tabIndex', '0');

                    console.log(this);

                    // slide.addEventListener('focus', function(e){
                    //     const target = e.currentTarget;
                    //     const slideBtn = target.querySelectorAll('button');
                    //
                    //     // 버튼이 있을 경우, 해당 버튼에 대해 처리
                    //     if(slideBtn.length){
                    //         slideBtn.forEach(function(btn){
                    //             btn.setAttribute('tabIndex', '0'); // 버튼에 포커스가 가능하도록 설정
                    //         });
                    //
                    //         // 마지막 버튼에서 Tab 눌렀을 때 다음 슬라이드로 이동
                    //         slideBtn[slideBtn.length - 1].addEventListener('keydown', function(btnEvent){
                    //             if(btnEvent.key === 'Tab' && !btnEvent.shiftKey){
                    //                 swiper.slideTo(slideIdx+1);
                    //                 target.setAttribute('tabIndex', '-1'); // 이전 슬라이드는 포커스 못하게 설정
                    //             }
                    //         });
                    //     } else{
                    //         // 버튼이 없을 경우, 해당 슬라이드 자체에서 Tab 눌렀을 때 다음 슬라이드로 이동
                    //         target.addEventListener('keydown', function(slideEvent){
                    //             if(slideEvent.key === 'Tab' && !slideEvent.shiftKey){
                    //                 swiper.slideTo(slideIdx+1);
                    //                 target.setAttribute('tabIndex', '-1'); // 현재 슬라이드는 포커스를 잃게 설정
                    //             }
                    //         });
                    //     }
                    // });
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

                            const cardBtnLast = cardButtons[cardButtons.length - 1];
                            cardBtnLast.addEventListener('keydown', function(e){
                                if(e.key === 'Tab'){
                                    if(!e.shiftKey){
                                        e.currentTarget.closest('.swiper-slide').nextElementSibling.focus();
                                    }
                                }
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
                    });

                    const slideList = document.querySelectorAll('.experience-info .swiper-slide');
                    const slideActive = document.querySelector('.experience-info .swiper-slide-active');
                    const slideBtn = document.querySelectorAll('.experience-info button');
                    const swiperBtn = document.querySelectorAll('.experience-info [role="button"]');

                    slideList.forEach(function(slide){
                        slide.setAttribute('tabIndex', '-1');
                    });
                    slideBtn.forEach(function(btn){
                        btn.setAttribute('tabIndex', '-1');
                    });
                    swiperBtn.forEach(function(btn){
                        btn.setAttribute('tabIndex', '-1');
                    });
                    slideActive.setAttribute('tabIndex', '0');
                    slideActive.querySelectorAll('button').forEach(function(btn){
                        btn.setAttribute('tabIndex', '0');
                    });
                },
            },
        });

        /* 스와이퍼 포커스 이벤트 */
        const swiperSlides = document.querySelectorAll('.experience-info .swiper-slide');
        const swiperSlideBtn = document.querySelectorAll('.experience-info button');
        const swiperBtn = document.querySelectorAll('.experience-info [role="button"]');

        swiperSlides.forEach(function(slide, slideIdx){
            // 슬라이드의 tabIndex 기본값 '-1'로 설정
            // slide.setAttribute('tabIndex', '-1');

            // 'swiper-slide-active' 클래스가 있는 슬라이드는 tabIndex '0'으로 설정하여 포커스가 가능하도록 설정
            // if(slide.classList.contains('swiper-slide-active')){
            //     slide.setAttribute('tabIndex', '0');
            // }

            // 각 슬라이드 내 버튼들의 tabIndex '-1'로 설정하여 기본적으로 포커스를 못하도록 설정
            // swiperSlideBtn.forEach(function(btn){
            //    btn.setAttribute('tabIndex', '-1');
            // });
            // swiperBtn.forEach(function(btn){
            //    btn.setAttribute('tabIndex', '-1');
            // });

            // 포커스가 해당 슬라이드로 이동할 때의 이벤트 처리
            slide.addEventListener('focus', function(e){
                const target = e.currentTarget;
                const slideBtn = target.querySelectorAll('button');

                // 버튼이 있을 경우, 해당 버튼에 대해 처리
                if(slideBtn.length){
                    slideBtn.forEach(function(btn){
                        btn.setAttribute('tabIndex', '0'); // 버튼에 포커스가 가능하도록 설정
                    });

                    // 마지막 버튼에서 Tab 눌렀을 때 다음 슬라이드로 이동
                    slideBtn[slideBtn.length - 1].addEventListener('keydown', function(btnEvent){
                        if(btnEvent.key === 'Tab' && !btnEvent.shiftKey){
                            swiper.slideTo(slideIdx+1);
                            target.setAttribute('tabIndex', '-1'); // 이전 슬라이드는 포커스 못하게 설정
                        }
                    });
                } else{
                    // 버튼이 없을 경우, 해당 슬라이드 자체에서 Tab 눌렀을 때 다음 슬라이드로 이동
                    target.addEventListener('keydown', function(slideEvent){
                       if(slideEvent.key === 'Tab' && !slideEvent.shiftKey){
                           swiper.slideTo(slideIdx+1);
                           target.setAttribute('tabIndex', '-1'); // 현재 슬라이드는 포커스를 잃게 설정
                       }
                    });
                }
            });
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