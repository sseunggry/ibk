const stepData = {
    0: {
        slideNum: 0,
        stepNum: 0,
        buttonPosition: { x: 168, y: 127 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "결재선을 설정할 이용자를 선택하고 결재라인등록/지정을 시작합니다.",
        title: "이용자 선택",
    },
    1: {
        slideNum: 0,
        stepNum: 2,
        buttonPosition: { x: 82, y: 331 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "결재선을 설정할 이용자를 선택하고 결재라인등록/지정을 시작합니다.",
        title: "이용자 선택",
    },

    2: {
        slideNum: 1,
        stepNum: 4,
        buttonPosition: { x: 191, y: 673 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "다단계결재 방식을 선택할 수 있어요.",
        title: "다단계결재 방식 지정",
    },
    3: {
        slideNum: 1,
        stepNum: 4,
        buttonPosition: { x: 353, y: 359 },
        scrollRequired: true,
        scrollAmount: 710,
        message: "다단계결재 방식을 선택할 수 있어요.",
        title: "다단계결재 방식 지정",
    },

    4: {
        slideNum: 2,
        stepNum: 5,
        buttonPosition: { x: 363, y: 183 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "업무별로 결재라인을 선택할 수 있어요. 결재할 이용자와 실행할 이용자를 지정해줍니다.",
        title: "업무별방식 지정",
    },
    5: {
        slideNum: 2,
        stepNum: 5,
        buttonPosition: { x: 310, y: 178 },
        scrollRequired: true,
        scrollAmount: 205,
        message: "업무별로 결재라인을 선택할 수 있어요. 결재할 이용자와 실행할 이용자를 지정해줍니다.",
        title: "업무별방식 지정",
    },
    6: {
        slideNum: 2,
        stepNum: 5,
        buttonPosition: { x: 456, y: 170 },
        scrollRequired: true,
        scrollAmount: 205,
        message: "업무별로 결재라인을 선택할 수 있어요. 결재할 이용자와 실행할 이용자를 지정해줍니다.",
        title: "업무별방식 지정",
    },
    7: {
        slideNum: 2,
        stepNum: 5,
        buttonPosition: { x: 516, y: 355 },
        scrollRequired: true,
        scrollAmount: 205,
        message: "업무별로 결재라인을 선택할 수 있어요. 결재할 이용자와 실행할 이용자를 지정해줍니다.",
        title: "업무별방식 지정",
    },
};

const stepDataTitle = {
    title:
        [
            '이용자 선택', '다단계결재 방식 지정', '업무별방식 지정'
        ]
}


const modalData = {
    title: "이용자별 뱅킹정보관리(결재선)",
    contentText: {
        start: "이용자별로 이체 가능한 한도를\n 설정할 수 있어요",
        end: "체험하기를 완료했어요.\n다른 업무도 체험해 보세요.",
    },
};
