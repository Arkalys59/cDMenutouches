$(function() {
  $(document).ready(function() {
      window.addEventListener('message', function(event) {
          var item = event.data;
          if (item.ativa == true) {
              $('.container-fluid').css('display', 'block');
          } else if (item.ativa == false) {
              $('.container-fluid').css('display', 'none');
          }
      });
  })
})