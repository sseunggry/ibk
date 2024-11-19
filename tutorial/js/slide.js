const slides = document.querySelectorAll(".slide");
const sliderBtns = document.querySelectorAll(".slider-btn");
const autoBtn = document.querySelector(".auto-btn");
const keysLength = Object.keys(stepData).length;
const range = 900;

let slide = 0;
let step = 0;
let autoMode = false;
let isMoving = false;
let autoFrameRequest;
let isModalStart = true;

function openModal(isOpen, isStart) {
    if (isOpen) {
        document.querySelector(".modalTitleBox").innerText = modalData.title;
        document.querySelector(".modalContentBox").innerText = isStart
            ? modalData.contentText.start
            : modalData.contentText.end;
        if (!isStart) {
            document.querySelector(".modal-btn").innerText = "확인";
            isModalStart = false;
        }
        document.querySelector(".dimmed").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        document.querySelector("#container", "#container a", "#container button").setAttribute('tab-index', '-1');
        document.querySelector(".modal").focus();
        document.querySelector(".modal", ".modal button").setAttribute('tab-index', '0');
    } else {
        document.querySelector(".modalContentBox").innerText = "";
        document.querySelector(".dimmed").style.display = "none";
        document.querySelector(".modal").style.display = "none";
        // document.querySelector(".modal .modal-btn").setAttribute('tab-index', '-1');
    }
}

function handleCloseModal() {
    openModal(false, false);
    isMoving = false;
    console.log({ isModalStart });
    if (!isModalStart) {
        document.querySelector(".menuBox").style.bottom = "0px";
    }
}

function autoPlayStart() {
    autoMode = true;
    //document.querySelector(".play-img").src = "../img/palyer/btn_stop.png";

    const playBtn = document.querySelector('.slide-indicater-info .play-btn');
    playBtn.classList.remove('play');
    playBtn.classList.add('stop');
    playBtn.querySelector('span').innerText ="일시정지";
    autoSlide();
}

function autoPlayStop() {
    autoMode = false;
    cancelAnimationFrame(autoFrameRequest);
    //document.querySelector(".play-img").src = "../img/palyer/btn_play.png";

    const playBtn = document.querySelector('.slide-indicater-info .play-btn');
    playBtn.classList.remove('stop');
    playBtn.classList.add('play');
    playBtn.querySelector('span').innerText ="자동재생";
    console.log(playBtn)
}

function handleAutoPlay() {
    if (autoMode) {
        autoPlayStop();
    } else {
        autoPlayStart();
    }
}

function autoSlide() {
    function autoStep() {
        if (!autoMode) return;
        if (step < keysLength) {
            handleStep(true);
            setTimeout(() => {
                autoFrameRequest = requestAnimationFrame(autoStep);
            }, 3000);
        } else {
            autoMode = false;
        }        
    }
    autoFrameRequest = requestAnimationFrame(autoStep);
}

function handleSlide(selectedSlide) {
    if (selectedSlide === slide) return;
    if (!isMoving) {
        isMoving = true;
        showStepBtn(false);
        slide = selectedSlide;
        step = stepData[slide].stepNum;
        initScroll();
        moveSlide();
        autoPlayStop();
    } else {
        console.log({ isMoving });
    }
    document.querySelector(".slide-info").innerText = stepData[step].message;
}

function handleStep(isAutoMode) {
    if (!isMoving) {
        isMoving = true;
        showStepBtn(false);
        if (step >= keysLength - 1) {
            openModal(true, false);
            autoPlayStop();
            return false;
        }
        step = step + 1;
        slide = stepData[step].slideNum;
        if (stepData[step].scrollRequired) {
            moveScroll(stepData[step].scrollAmount, slide);
        } else {
            initScroll();
            moveSlide();
        }
        if (!isAutoMode) {
            autoPlayStop();
        }
        document.querySelector(".slide-info").innerText = stepData[step].message;
    }
}

function initSlide() {
    slides.forEach((slide, i) => {  
        slide.style.left = `${i * range}px`;
        /* number title 추가 */
        sliderBtns[i].querySelector('span').innerText = i <9 ? `0${i+1}` : `${i+1}`; 
        sliderBtns[i].querySelector('em').innerText = stepDataTitle.title[i]
    });    
    document.querySelector(".slide-info").innerText = stepData[step].message;

    sliderBtns[slide].classList.add("active");
    showStepBtn(true);
}

function moveSlide() {
    const offset = slide * -range;
   
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}px)`;
    });
    sliderBtns.forEach((item) => {
        item.classList.remove("active");
    });
    sliderBtns[slide].classList.add("active");
    initScroll();
    if (stepData[step].scrollAmount) {
        setTimeout(() => {
            moveScroll(stepData[step].scrollAmount, slide);
        }, 1000);
    } else {
        showStepBtn(true);
    }
}

function showStepBtn(isShow) {
    if (isShow) {
        setTimeout(() => {
            isMoving = false;
            document.querySelector(".step-btn").style.top = `${stepData[step].buttonPosition.x}px`;
            document.querySelector(".step-btn").style.left = `${stepData[step].buttonPosition.y}px`;
            document.querySelector(".step-btn").style.display = "block";
            document.querySelector(".slide-info").classList.add("visible");
        }, 500);
    } else {
        document.querySelector(".step-btn").style.display = "none";
        document.querySelector(".slide-info").classList.remove("visible");
    }
}

function initScroll() {
    const scrollItme = document.querySelectorAll(`.scroll-img`);
    setTimeout(() => {
        scrollItme.forEach((item) => {
            item.style.transform = `translate(0, 0)`;
        });
    }, 500);
}

function moveScroll(offset, slide) {
    if (stepData[step].scrollAmount > 0) {
        document.querySelector(`.scroll-img-${slide}`).style.transform = `translate(0, -${offset}px)`;
    }
    if (offset !== 0) {
        showStepBtn(true);
    }
}

/* header Menu */
function initMenu(){
    const contHeader = document.querySelector('.content-header');
    const menuList = contHeader.querySelectorAll('.menuItem');

    menuList.forEach(function(btn){
        btn.classList.remove('is-active');
        btn.setAttribute('tab-index', '-1');

        const subMenu = btn.querySelectorAll('.subCategoryItem');
        const lastSubMenu = subMenu[subMenu.length - 1];
        const firstSubMenu = subMenu[0];

        btn.addEventListener('focusin', function (e) {
            const target = e.currentTarget;
            target.classList.add('is-active');
            target.setAttribute('tab-index', '0');
        });

        lastSubMenu.addEventListener('keydown', function(e) {
            if(e.key === 'Tab') {
                if(!e.shiftKey) {
                    btn.classList.remove('is-active');
                    btn.setAttribute('tab-index', '-1');
                }
            }
        });

        firstSubMenu.addEventListener('keydown', function(e) {
            if(e.key === 'Tab') {
                if(e.shiftKey) {
                    btn.classList.remove('is-active');
                    btn.setAttribute('tab-index', '-1');
                }
            }
        });

        btn.addEventListener('mouseenter', function(e){
            const target = e.currentTarget;
            target.classList.add('is-active');
            target.setAttribute('tab-index', '0');
        });

        btn.addEventListener('mouseleave', function(e){
            const target = e.currentTarget;
            target.classList.remove('is-active');
            btn.setAttribute('tab-index', '-1');
        });
    });
   
}

/* .experience-center width */
function initClass(){
    const exSlider = document.querySelector('.experience-slide');
    const exWrap = document.querySelector('.experience-center');
    const body = document.querySelector('body');
    if( exSlider ){
        exWrap.style.width = '112rem';
        body.classList.add('is-hidden'); 
    }
}



window.onload = function () {
    initSlide();
    initMenu();
    initClass();
    openModal(true, true);
};
