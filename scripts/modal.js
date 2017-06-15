$(document).ready(function() {
  var url = window.location.href;
  if (url.indexOf('?the-minimum-viable-business-plan') != -1) {
    $("#post-2").modal('show');
  }
});
