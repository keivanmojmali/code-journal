var $avatarUrl = document.querySelector('#url');
var $imgPlace = document.querySelector('#placeholder');

$avatarUrl.addEventListener('input', function (e) {
  var $newUrl = e.target.value;
  $imgPlace.src = $newUrl;
});
