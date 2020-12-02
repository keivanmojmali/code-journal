var $avatarUrl = document.querySelector('#url');
var $imgPlace = document.querySelector('#placeholder');
var $contact = document.querySelector('#userForm');


$avatarUrl.addEventListener('input', function (e) {
  var $newUrl = e.target.value;
  $imgPlace.src = $newUrl;
});


document.addEventListener('submit', function (e) {
  e.preventDefault();
  var url = $contact.elements.url.value;
  var username = $contact.elements.username.value;
  var fullName = $contact.elements.fullName.value;
  var location = $contact.elements.location.value;
  var bio = $contact.elements.bio.value;
  var values = { username, fullName, location, url, bio };
  userEntries = values;
  $contact.reset();
  $imgPlace.src = './images/placeholder-image-square.jpg';

});
