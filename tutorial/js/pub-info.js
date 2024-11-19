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
                        });
                    });  
                });

                /* 스크롤박스 있을 경우 스크롤이벤트 막기 */
                const scrollItem = document.querySelector('.card-cont.scroll');
                scrollItem.addEventListener('wheel', function(e){
                    e.stopPropagation();
                })
              },
            },
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
    }
}

window.addEventListener('DOMContentLoaded', function(){
    swiperSlide.init();

});