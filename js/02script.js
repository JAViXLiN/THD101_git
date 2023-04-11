$(function () {
    // 點擊nav後nav展開
    $("#menu").click(function () {
        $("#menu").toggleClass('expanded');
        $("#green").toggleClass('expanded');
        $("#cross").toggleClass('turn');
        $(".menu_text").toggleClass('hidden');
        $(".menu_li").toggleClass('hidden');
    });

    // 點擊TOP按鈕後滾動至頂部
    document.querySelector(".topbtn").addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    //過往案例Swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        initialSlide: 1,
        loop: true,

        // pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    });

});