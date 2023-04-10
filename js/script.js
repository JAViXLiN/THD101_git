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

  // 服務內容tabs
  var $li = $('ul.tab-title li');
  $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();

  $li.click(function (e) {
    e.preventDefault();
    $($(this).find('a').attr('href')).show().siblings('.tab-inner').hide();
    $(this).addClass('active').siblings('.active').removeClass('active');
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

  //合作夥伴
  $(".pners a").click(function (e) {
    e.preventDefault();
  });

  //最新消息
  var ps = document.querySelectorAll("p.posts"); // 選擇所有class="info"的<p>段落
  var limit = 80; // 設置字數限制
  for (var i = 0; i < ps.length; i++) { // 遍歷每一個段落
    var p = ps[i]; // 獲取當前的段落
    var text = p.textContent; // 獲取段落內的文字
    if (text.length > limit) { // 如果文字超過限制
      text = text.substring(0, limit) + "......"; // 截取前limit個字，並加上...
      p.textContent = text; // 更新段落內的文字
    }
  }
});