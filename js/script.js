$(document).ready(function() {
  // resize the .item div to the viewport width/height
  height = $(window).height();

  $('.item').css({height: height});
  $('body').css('overflow', 'hidden');

  $('a.toggle').click(function (e) {
    e.preventDefault();

    // when toggle is clicked, slide to the link element's position
    scrollToAnchor($(this).attr('href'));
  });

  $(window).resize(function () {
    resizePanel();
  });
});

function scrollToAnchor(id){
  var el = $(id);
  $('html,body').animate({scrollTop: el.offset().top},'slow');
}

function resizePanel() {
  // resize the .item div to the viewport width/height
  height = $(window).height();

  $('.item').css({height: height});

  // goto the proper selected div
  scrollToAnchor($(this).attr('href'));
}