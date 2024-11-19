const stepData = {
    0: {
        slideNum: 0,
        stepNum: 0,
        buttonPosition: { x: 285, y: 74 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "자주쓰는 입금계좌를 그룹별로 관리할 수 있어요.",
        title: "계좌관리",
    },

    1: {
        slideNum: 1,
        stepNum: 1,
        buttonPosition: { x: 529, y: 288 },
        scrollRequired: false,
        scrollAmount: 130,
        message: "보유하고 있는 계좌를 일괄로 등록할 수 있어요.",
        title: "계좌 일괄 등록",
    },
    2: {
        slideNum: 1,
        stepNum: 3,
        buttonPosition: { x: 355, y: 382 },
        scrollRequired: true,
        scrollAmount: 694,
        message: "보유하고 있는 계좌를 일괄로 등록할 수 있어요.",
        title: "계좌 일괄 등록",
    },

    3: {
        slideNum: 2,
        stepNum: 5,
        buttonPosition: { x: 527, y: 577 },
        scrollRequired: false,
        scrollAmount: 130,
        message: "원하는 계좌만 개별로 등록할 수 있어요.",
        title: "계좌 개별 등록",
    },
    4: {
        slideNum: 2,
        stepNum: 7,
        buttonPosition: { x: 355, y: 382 },
        scrollRequired: true,
        scrollAmount: 710,
        message: "원하는 계좌만 개별로 등록할 수 있어요.",
        title: "계좌 개별 등록",
    },

    5: {
        slideNum: 3,
        stepNum: 10,
        buttonPosition: { x: 277, y: 687 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "등록된 계좌의 1일 이체한도를 수정하거나 삭제할 수 있어요.",
        title: "이체한도 관리",
    },
    6: {
        slideNum: 3,
        stepNum: 7,
        buttonPosition: { x: 365, y: 382 },
        scrollRequired: true,
        scrollAmount: 710,
        message: "등록된 계좌의 1일 이체한도를 수정하거나 삭제할 수 있어요.",
        title: "이체한도 관리",
    },

    7: {
        slideNum: 4,
        stepNum: 10,
        buttonPosition: { x: 65, y: 189 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "이용자의 계좌와 카드 사용 권한을 설정해볼게요.",
        title: "이용자별 권한",
    },
    8: {
        slideNum: 4,
        stepNum: 12,
        buttonPosition: { x: 155, y: 218 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "이용자의 계좌와 카드 사용 권한을 설정해볼게요.",
        title: "이용자별 권한",
    },
    9: {
        slideNum: 4,
        stepNum: 7,
        buttonPosition: { x: 321, y: 400 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "이용자의 계좌와 카드 사용 권한을 설정해볼게요.",
        title: "이용자별 권한",
    },

    10: {
        slideNum: 5,
        stepNum: 7,
        buttonPosition: { x: 320, y: 402 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "계좌/카드의 출금과 조회 권한을 부여해 주세요.",
        title: "이용자별 권한부여",
    },
    11: {
        slideNum: 5,
        stepNum: 7,
        buttonPosition: { x: 211, y: 398 },
        scrollRequired: true,
        scrollAmount: 405,
        message: "계좌/카드의 출금과 조회 권한을 부여해 주세요.",
        title: "이용자별 권한부여",
    },
    12: {
        slideNum: 5,
        stepNum: 7,
        buttonPosition: { x: 503, y: 363 },
        scrollRequired: true,
        scrollAmount: 1033,
        message: "권한이 설정됐어요. 권한 부여 계좌/카드만 사용할 수 있어요.",
        title: "이용자별 권한부여",
    },
};

const stepDataTitle = {
    title:
        [
            '계좌관리', '계좌 일괄 등록', '계좌 개별 등록', '이체한도 관리',
            '이용자별 권한', '이용자별 권한부여'
        ]
}


const modalData = {
    title: "이용자별 계좌카드관리",
    contentText: {
        start: "인터넷뱅킹에서 사용할 계좌를 관리하고\n 이용자별로 계좌에 대한 조회, 출금 권한을 부여할 수 있어요.",
        end: "체험하기를 완료했어요.\n다른 업무도 체험해 보세요.",
    },
};
