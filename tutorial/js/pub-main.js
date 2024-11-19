/* 체험관 - 홈  */
const experIntro = {  
    init:()=>{
        experIntro.setClass();
        experIntro.windowPopup();
        experIntro.aniFulllScreenRotate();
        experIntro.aniCircleRotate();
    },
    /* 초기 body 클래스 추가 */
    setClass:()=>{
        const experHome = document.querySelector('.experience-main');
        if( experHome ){ document.querySelector('body').classList.add('is-main')}        
    },
    /* circle 회전 */
    aniCircleRotate:()=>{
        /* circle 가운데로 이동 */
        const circleItem = document.querySelector('.pos8');
        const circleItems = document.querySelectorAll('.circle:not(.pos8)');
        const circleAll = Array.from(circleItems).filter(element => element.classList.contains('circle'));
 
        /* 현재 위치 구하기 */
        const rect = circleItem.getBoundingClientRect();
        const currentX = rect.left + rect.width / 2;
        const currentY = rect.top + rect.height / 2;

        const circleLast = document.querySelector('.circle-last');
        gsap.to(circleItem, {
            y: window.innerHeight / 2 - currentY, // y 위치를 정 가운데로 이동
            x: window.innerWidth / 2 - currentX, // x 위치를 정 가운데로 이동
            rotation:300,
            duration: 1, 
            onComplete: function() {
                // 다른 circle 요소들을 숨기는 애니메이션
                gsap.to(circleAll, {
                    opacity: 0, 
                    duration: 0.5, 
                    ease: 'power1.inOut', 
                    stagger: 0.3,
                    onComplete: function() {   
                        experIntro.aniCircleExpaned();
                    },
                });
            }
        });
    },
    /* circle 전체 화면 회전 */
    aniFulllScreenRotate:()=>{
        const circleWrap = document.querySelector('[data-motion-circle]');

        gsap.to(circleWrap,{rotation: 360, transformOrigin: 'center center', ease: 'linear', duration: 2 });
    },
    /* 마지막 circle 확장 */
    aniCircleExpaned:()=>{
        const circleWrap = document.querySelector('[data-motion-circle]');
        const homeGroup = document.querySelector('.home-group');

        gsap.to('.pos8', {
            scale: 100, // 축소할 크기
            duration: 1, // 애니메이션 지속 시간
            //repeat: -1, // 무한 반복 (-1을 사용하면 무한 반복)
            //yoyo: true, // 역방향으로 반복
            opacity:0,
            ease: 'power1.inOut', // 애니메이션 이징 설정
            backgroundColor:'#ffffff',

            onComplete:function(){
                circleWrap.classList.add('hide');
                homeGroup.classList.add('is-active');
                experIntro.contMotion();
            },
        });

        const circleLast = document.querySelector('.circle-last');
        gsap.from(circleLast,{ opacity:1 })
        gsap.to(circleLast, {
            opacity:0,scale: 100, duration: 2, ease: 'power1.inOut', 
            onComplete:function(){
                circleLast.classList.add('hide');
            },
        });        
    },    
    /* 컨텐츠 모션  */
    contMotion:()=>{
        // GSAP 애니메이션 설정
        gsap.to(".home-group .title-h1", { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power4.out" });

        gsap.to(".home-list-btn .item", { opacity: 1, y: 0, duration: 1, 
            delay: 0.7, // 제목 애니메이션 이후에 시작
            stagger: 0, // 요소들 간의 간격 설정
            ease: "power4.out"
        });
    },
    /* 윈도우팝업 열기 */
    windowPopup:()=>{
        const btnWindoe = document.querySelectorAll('.btn-window');
        btnWindoe.forEach(function(btn){
            const url = btn.getAttribute('data-url');
            btn.addEventListener('click', function(){
                window.open(url, "_blank", "width=1200, height=738, toolbar=1,menubar=1,resizable=1,scrollbars=1");
            })
        });        
    }
}

window.addEventListener('DOMContentLoaded', function(){
    experIntro.init();
})