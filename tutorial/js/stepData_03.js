const stepData = {
    0: {
        slideNum: 0,
        stepNum: 0,
        buttonPosition: { x: 314, y: 242 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "파일선택으로 엑셀에 정리된 급여이체 내역을 불러올 수 있어요.",
        title: "파일작성",
    },
    1: {
        slideNum: 0,
        stepNum: 4,
        buttonPosition: { x: 320, y: 241 },
        scrollRequired: true,
        scrollAmount: 790,
        message: "가져오기로 기존에 등록한 내역을 가져올 수 있어요.",
        title: "파일작성",
    },
    2: {
        slideNum: 0,
        stepNum: 5,
        buttonPosition: { x: 284, y: 241 },
        scrollRequired: true,
        scrollAmount: 1583,
        message: "이체 정보를 직접 입력할 수도 있어요.",
        title: "파일작성",
    },
    3: {
        slideNum: 0,
        stepNum: 11,
        buttonPosition: { x: 445, y: 83 },
        scrollRequired: true,
        scrollAmount: 1804,
        message: "예금주를 조회하거나 중복된 내역이 있는지 확인할 수 있어요.",
        title: "파일작성",
    },
    4: {
        slideNum: 1,
        stepNum: 5,
        buttonPosition: { x: 539, y: 367 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "급여이체 내역을 확인해 주세요.",
        title: "파일작성확인",
    },

    5: {
        slideNum: 2,
        stepNum: 7,
        buttonPosition: { x: 270, y: 254 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "이체종류를 선택해 주세요.(즉시이체 또는 예약이체)",
        title: "입력확인",
    },
    6: {
        slideNum: 2,
        stepNum: 9,
        buttonPosition: { x: 315, y: 255 },
        scrollRequired: true,
        scrollAmount: 101,
        message: "통장에 표시할 내용을 선택하거나 직접 입력할 수 있어요.",
        title: "입력확인",
    },
    7: {
        slideNum: 2,
        stepNum: 10,
        buttonPosition: { x: 275, y: 257 },
        scrollRequired: true,
        scrollAmount: 262,
        message: "통장일괄출금은 이체내역을 합산하여 1건으로, 통장건별출금은 각각 통장에 표시됩니다.",
        title: "입력확인",
    },
    8: {
        slideNum: 2,
        stepNum: 11,
        buttonPosition: { x: 500, y: 400 },
        scrollRequired: true,
        scrollAmount: 265,
        message: "통장일괄출금은 이체내역을 합산하여 1건으로, 통장건별출금은 각각 통장에 표시됩니다.",
        title: "입력확인",
    },






    9: {
        slideNum: 2,
        stepNum: 10,
        buttonPosition: { x: 510, y: 347 },
        scrollRequired: true,
        scrollAmount: 1180,
        message: "입력한 내용을 확인하고 인증을 진행합니다.",
        title: "입력확인",
    },
    10: {
        slideNum: 2,
        stepNum: 11,
        buttonPosition: { x: 418, y: 359 },
        scrollRequired: true,
        scrollAmount: 1766,
        message: "입력한 내용을 확인하고 인증을 진행합니다.",
        title: "입력확인",
    },


    11: {
        slideNum: 3,
        stepNum: 12,
        buttonPosition: { x: 68, y: 78 },
        scrollRequired: false,
        scrollAmount: 0,
        message: "이체가 완료됐습니다. 처리됐거나 예약된 내용을 확인해 보세요.",
        title: "처리결과",
    },
    12: {
        slideNum: 3,
        stepNum: 13,
        buttonPosition: { x: 515, y: 451 },
        scrollRequired: true,
        scrollAmount: 194,
        message: "예약된 급여이체는 이체시간 30분 전까지 취소가 가능합니다.",
        title: "처리결과",
    },
};

const stepDataTitle = {
    title:['파일작성', '파일작성확인', '입력확인', '처리결과']
}

const modalData = {
    title: "급여이체",
    contentText: {
        start: "직원들의 급여를 즉시 또는 예약하여\n한번에 보낼 수 있어요",
        end: "체험하기를 완료했어요.\n다른 업무도 체험해 보세요.",
    },
};
