$(window).on("load",function(){
  $('.phone').fadeIn(500);
});

$(function() {
  // 點擊TOP按鈕後nav展開
  $("#menu").click(function(){
    $("#menu").toggleClass('expanded');
    $("#green").toggleClass('expanded');
    $("#cross").toggleClass('turn');
    $(".menu_text").toggleClass('hidden');
    $(".menu_li").toggleClass('hidden');
  });

  // 點擊TOP按鈕後滾動至頂部
  document.querySelector(".topbtn").addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  });

});

