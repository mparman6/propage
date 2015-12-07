$( document ).ready(function() {
  $('#about').on('click', function() {
    $('#about').scrollTo('#about');
  });

  $('.page-scroll').on('click', function() {
    var section = $(this)

    $('.page-scroll').scrollHeight(section);
  });
}