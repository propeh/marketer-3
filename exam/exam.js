$(function () {
    /**
     * exam script
     */
    exam.init()
})

const exam = {

    init : function () {
        exam.handlerNav();
        exam.tab();
        exam.dropdown();
        exam.getScroll();
        exam.backTop();
        exam.handleSection();
    },

    handlerNav : function () {
        $('.header .nav-item').on('click', function () {
            const navIndex = $(this).index();
            const offsetTop = $('.section').eq(navIndex).offset().top;
            $('html, body').animate({scrollTop : offsetTop - 65}, 600, 'easeOutQuad');
        })
    },

    tab : function () {
        const handler = function () {
            const navIndex = $(this).index();
            $('.content').eq(navIndex).addClass('show').siblings().removeClass('show');
        }
        $('.section-tab .nav-item').on('click', handler).eq(0).trigger('click');
        // $('.nav-item').on('click', function() {
        //     const navIndex = $(this).index();
        //     $('.content').eq(navIndex).addClass('show').siblings().removeClass('show');
        // } ).eq(0).trigger('click');
    },

    dropdown : function () {
        $('.site-name').on('click', function () {
            $('.site-list').stop().slideToggle(300);
            // console.log(
            //     "@@ this", this
            // )
        })
    },

    getScroll : function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            if(scrollTop > 600) {
                $('html').addClass('show-header');
            } else  {
                $('html').removeClass('show-header');
            }
        })
    },

    backTop : function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            if(scrollTop > 1500) {
                $('.back-top').addClass('is-active');
            } else {
                $('.back-top').removeClass('is-active');
            }
        });

        $('.back-top').on('click', function () {
            $('html, body').animate({scrollTop : 0}, 600, 'easeOutQuad')
        })
    },

    handleSection : function () {
        $('.section').each(function (index, el) {
            const sectionRoom = $(this);
            const offsetTop = sectionRoom.offset().top;
            $(window).on('scroll', function (){
                const scrollTop = $(window).scrollTop()
                const windowH = $(window).innerHeight();
                if (scrollTop > offsetTop - windowH * 0.7){
                    sectionRoom.addClass('is-current');
                }
                if (scrollTop > offsetTop - 80){
                    $('.header .nav-item').eq(index).addClass('is-active').siblings().removeClass('is-active');
                }
            })
        })
    }
}