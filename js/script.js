$(function () {
  // 點擊TOP按鈕後nav展開
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



});

