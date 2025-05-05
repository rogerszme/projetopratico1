$(document).ready(function() {
    $('.album').on('click', function() {
      const albumId = $(this).data('album');
      $('.albums').hide();
      $('#album' + albumId).removeClass('hidden');
    });
  
    $('.back').on('click', function() {
      $('.gallery').addClass('hidden');
      $('.albums').show();
    });
  });
  