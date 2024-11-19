const stepData = {
    0: {
        slideNum: 0,
        stepNum: 0,
        buttonPosition: { x: 340, y: 79 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "보유하고 있는 계좌에서 빠른 조회를 원하는 계좌를 등록할 수 있어요.",
        title: "빠른조회서비스 신청",
    },
    1: {
        slideNum: 0,
        stepNum: 2,
        buttonPosition: { x: 494, y: 402 },
        scrollRequired: true,
        scrollAmount: 350,
        message: "보유하고 있는 계좌에서 빠른 조회를 원하는 계좌를 등록할 수 있어요.",
        title: "빠른조회서비스 신청",
    },

    2: {
        slideNum: 1,
        stepNum: 3,
        buttonPosition: { x: 217, y: 404 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "이제 빠른조회를 사용할 수 있어요.",
        title: "빠른조회서비스 신청 완료",
    },

    3: {
        slideNum: 2,
        stepNum: 6,
        buttonPosition: { x: 306, y: 254 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "로그인 하지 않고 빠른서비스에서 계좌조회가 가능해요.",
        title: "빠른서비스 이용",
    },
    4: {
        slideNum: 2,
        stepNum: 8,
        buttonPosition: { x: 424, y: 398 },
        scrollRequired: true,
        scrollAmount: 567,
        message: "빠른조회서비스에 등록한 계좌의 정보를 넣어 거래내역을 조회할 수 있어요.",
        title: "빠른서비스 이용",
    },
    5: {
        slideNum: 2,
        stepNum: 6,
        buttonPosition: { x: 208, y: 345 },
        scrollRequired: true,
        scrollAmount: 1137,
        message: "조회된 거래내역은 인쇄하거나 파일로 저장할 수 있어요.",
        title: "빠른서비스 이용",
    },

    6: {
        slideNum: 3,
        stepNum: 8,
        buttonPosition: { x: 290, y: 183 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "더 이상 빠른조회가 필요하지 않다면 해제할 수 있어요.",
        title: "빠른조회서비스 해제",
    },
    7: {
        slideNum: 3,
        stepNum: 13,
        buttonPosition: { x: 511, y: 403 },
        scrollRequired: true,
        scrollAmount: 247,
        message: "더 이상 빠른조회가 필요하지 않다면 해제할 수 있어요.",
        title: "빠른조회서비스 해제",
    },

    8: {
        slideNum: 4,
        stepNum: 11,
        buttonPosition: { x: 216, y: 405 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "빠른서비스를 해제했어요.",
        title: "빠른조회서비스 해제",
    },
};

const stepDataTitle = {
    title:
        [
            '빠른조회서비스 신청', '빠른조회서비스 신청 완료', '빠른서비스 이용', '빠른조회서비스 해제',
            '빠른조회서비스 해제'
        ]
}

const modalData = {
    title: "빠른조회서비스",
    contentText: {
        start: "로그인하지 않고 원하는 계좌의 거래내역을\n 빠르게 조회할 수 있어요.",
        end: "체험하기를 완료했어요.\n다른 업무도 체험해 보세요.",
    },
};
