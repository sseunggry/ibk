const stepData = {
    0: {
        slideNum: 0,
        stepNum: 0,
        buttonPosition: { x: 78, y: 199 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "자주쓰는 입금계좌를 그룹별로 관리할 수 있어요.",
        title: "그룹관리",
    },

    1: {
        slideNum: 1,
        stepNum: 1,
        buttonPosition: { x: 206, y: 372 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "그룹명을 설정하고 그룹을 생성하세요.",
        title: "그룹생성",
    },
    2: {
        slideNum: 1,
        stepNum: 3,
        buttonPosition: { x: 407, y: 353 },
        scrollRequired: true,
        scrollAmount: 460,
        message: "그룹명을 설정하고 그룹을 생성하세요.",
        title: "그룹생성",
    },

    3: {
        slideNum: 2,
        stepNum: 4,
        buttonPosition: { x: 171, y: 88 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "입금계좌를 직접 입력하거나 최근에 입금한 계좌를 불러올 수 있어요.",
        title: "계좌관리",
    },

    4: {
        slideNum: 3,
        stepNum: 4,
        buttonPosition: { x: 256, y: 403 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "예금주를 확인하고 계좌를 등록해 주세요.",
        title: "계좌등록",
    },
    5: {
        slideNum: 3,
        stepNum: 5,
        buttonPosition: { x: 432, y: 95 },
        scrollRequired: true,
        scrollAmount: 440,
        message: "자주쓰는 입금계좌를 등록했어요.\n이체할 때 편리하게 사용해 보세요.",
        title: "계좌등록",
    },
};

const stepDataTitle = {
    title:
        [
            '그룹관리', '그룹생성', '계좌관리', '계좌등록',
        ]
}


const modalData = {
    title: "자주쓰는 입금계좌 관리",
    contentText: {
        start: "자주 사용하는 계좌를 미리 등록해 놓고\n 편리하게 사용하세요.",
        end: "체험하기를 완료했어요.\n다른 업무도 체험해 보세요.",
    },
};
