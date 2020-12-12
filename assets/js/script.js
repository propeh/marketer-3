// 자바스크립트 기본 준비 함수
// window.addEventListener('DomContentRoaded', function (){
//
//     marketer.init()
// })

// marketer 함수들
// const marketer = {
//     init : function () {
//         marketer.faq()
//     },
//     faq : function () {
//         document.querySelector('.faq.question').addEventListener('click', function (){
//             this.classList('is-active')
//         })
//     }
// }

// 제이쿼리 기본 준비 함수
$(function (){
    marketer.init()
})

const marketer = {
    init : function () {
        marketer.faq()
    },
    faq : function () {
        $('.faq li').on('click', function () {
            const faqIndex = $(this).index();
            $('.faq li').eq(faqIndex).addClass('is-active').siblings().removeClass('is-active');
        })
    }
}

