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
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 0,
            mousewheel: true,
            speed: 1000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                slideChange() {
                    updateIconPosition(this.activeIndex);
                    toggleNavigationButtons(this.activeIndex);
                    handleTabIndex(this.activeIndex);
                },
                init() {
                    setNavigationLinks();
                    setCardMotion();
                    preventScrollInScrollBox();
                    hideNavigationButtonsOnFirstSlide();
                },
                reachEnd() {
                    resetTabIndexOnReachEnd();
                },
            },
        });

        function updateIconPosition(activeIndex) {
            const iconMove = document.querySelector('.guide-move-icon');
            const positions = [
                { top: '0', left: '81.9rem' },
                { top: '13.9rem', left: '81.9rem' },
                { top: '0rem', left: '82.5rem' },
                { top: '10.3rem', left: '85.5rem' },
                { top: '0rem', left: '82.4rem' },
                { top: '3rem', left: '80.9rem' },
                { top: '0rem', left: '82.3rem' },
                { top: '3.3rem', left: '82.3rem' },
                { top: '37rem', left: '87.3rem' }
            ];

            const position = positions[activeIndex] || { top: '0rem', left: '0rem' };
            iconMove.style.top = position.top;
            iconMove.style.left = position.left;
        }

        function toggleNavigationButtons(activeIndex) {
            const btnSwiperBtnWrap = document.querySelector('.swiper-buttons-wrap');
            const btnSwiperNext = btnSwiperBtnWrap.querySelector('.swiper-button-next');
            activeIndex === 0 ? btnSwiperBtnWrap.classList.add('hide') : btnSwiperBtnWrap.classList.remove('hide');
            activeIndex === 8 ? btnSwiperNext.classList.add('hide') : btnSwiperNext.classList.remove('hide');
        }

        function handleTabIndex(activeIndex) {
            const swiperBullet = document.querySelectorAll('.swiper-pagination-bullet');
            const swiperButton = document.querySelectorAll('.swiper-buttons-wrap [role=button]');
            const headerButton = document.querySelector('.content-header .btn');

            if (swiperSlide.length !== activeIndex + 1) {
                swiperBullet.forEach(btn => btn.setAttribute('tabIndex', '-1'));
                swiperButton.forEach(btn => btn.setAttribute('tabIndex', '-1'));
            }

            if (activeIndex === 0) {
                headerButton.setAttribute('tabIndex', '0');
            } else {
                headerButton.setAttribute('tabIndex', '-1');
            }

            if (activeIndex === 0 || activeIndex === 8) {
                tabEventChecker = true;
            }
        }

        function setNavigationLinks() {
            const dataNavi = document.querySelectorAll('[data-navi]');
            dataNavi.forEach(dataNaviBtn => {
                dataNaviBtn.addEventListener('click', (btn) => {
                    const idx = btn.currentTarget.getAttribute('data-navi');
                    swiper.slideTo(idx);
                });
            });
        }

        function setCardMotion() {
            const cardMotions = document.querySelectorAll('[data-motion-card]');
            cardMotions.forEach(cardItem => {
                const cardButtons = cardItem.querySelectorAll('.card-head .title');
                cardButtons.forEach(cardBtn => {
                    cardBtn.addEventListener('click', cardMotionEvent);
                    cardBtn.addEventListener('focus', cardMotionEvent);
                });
            });

            function cardMotionEvent(e) {
                const currentCard = e.currentTarget.closest('.card');
                const currentCardIndex = parseInt(currentCard.getAttribute('data-card'));
                const cardWrap = e.currentTarget.closest('[data-motion-card]');
                const maxCards = Array.from(cardWrap.querySelectorAll('[data-card]')).map(card => parseInt(card.getAttribute('data-card')));
                const maxIndex = Math.max(...maxCards);
                const moveCard = cardWrap.querySelector(`[data-card="${maxIndex}"]`);

                moveCard.setAttribute('data-card', currentCardIndex);
                currentCard.setAttribute('data-card', maxIndex);
            }
        }

        function preventScrollInScrollBox() {
            const scrollItem = document.querySelector('.card-cont.scroll');
            scrollItem.addEventListener('wheel', (e) => {
                e.stopPropagation();
            });
        }

        function hideNavigationButtonsOnFirstSlide() {
            const btnSwiperBtnWrap = document.querySelector('.swiper-buttons-wrap');
            btnSwiperBtnWrap.classList.add('hide');
        }

        function resetTabIndexOnReachEnd() {
            const swiperBullet = document.querySelectorAll('.swiper-pagination-bullet');
            const swiperButton = document.querySelectorAll('.swiper-buttons-wrap [role=button]');
            swiperBullet.forEach(btn => btn.setAttribute('tabIndex', '0'));
            swiperButton.forEach(btn => btn.setAttribute('tabIndex', '0'));
        }

        const swiperSlide = document.querySelectorAll('.experience-info .swiper-slide');
        const swiperBullet = document.querySelectorAll('.swiper-pagination-bullet');

        swiperSlide.forEach(slide => {
            slide.setAttribute('tabIndex', '-1');
        });

        swiperBullet[0].addEventListener("keydown", (event) => {
            if (event.key === 'Tab' && event.shiftKey) {
                event.preventDefault();
                document.activeElement.blur();
                swiper.slideTo(swiper.activeIndex - 1);
                swiperBullet.forEach(btn => btn.setAttribute('tabIndex', '-1'));
            }
        });

        window.addEventListener("keydown", (event) => {
            if (event.key === 'Tab' && !event.shiftKey && !tabEventChecker) {
                event.preventDefault();
                swiper.slideTo(swiper.activeIndex + 1);
                document.activeElement.blur();
                handleSlideBtnFocus();
            }

            if (event.key === 'Tab' && event.shiftKey) {
                handleShiftTabNavigation(event);
            }
        });

        function handleSlideBtnFocus() {
            let slideBtn = swiperSlide[swiper.activeIndex].querySelectorAll('button');
            if (slideBtn.length) {
                tabEventChecker = true;
                slideBtn[slideBtn.length - 1].addEventListener('keydown', (btnEvent) => {
                    if (btnEvent.key === 'Tab') {
                        tabEventChecker = !btnEvent.shiftKey;
                    }
                });
                slideBtn.forEach(btn => btn.setAttribute('tabIndex', '0'));
            }
        }

        function handleShiftTabNavigation(event) {
            if (swiperSlide.length === swiper.activeIndex + 1) {
                if (!document.activeElement.classList.contains('swiper-pagination-bullet') &&
                    !document.activeElement.classList.contains('swiper-button-prev') &&
                    !document.activeElement.classList.contains('swiper-button-next')) {
                    event.preventDefault();
                    swiper.slideTo(swiper.activeIndex - 1);
                }
            } else {
                let prevSlideBtn = swiperSlide[swiper.activeIndex - 1].querySelectorAll('button');
                if (prevSlideBtn.length) {
                    tabEventChecker = true;
                }
                handleSlideBtnFocus();
            }
        }
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