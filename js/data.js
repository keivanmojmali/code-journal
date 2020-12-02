/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

var userEntries = [];
var $savedProfiles = localStorage.getItem('user-profile');
userEntries = JSON.parse($savedProfiles);
var $contact = document.querySelector('#userForm');
var $imgPlace = document.querySelector('#placeholder');

window.addEventListener('beforeunload', function (e) {
  var $profiles = JSON.stringify(userEntries);
  localStorage.setItem('user-profile', $profiles);

});

document.addEventListener('submit', function (e) {
  e.preventDefault();
  var url = $contact.elements.url.value;
  var username = $contact.elements.username.value;
  var fullName = $contact.elements.fullName.value;
  var location = $contact.elements.location.value;
  var bio = $contact.elements.bio.value;
  var values = { username, fullName, location, url, bio };
  userEntries.push(values);
  $contact.reset();
  $imgPlace.src = './images/placeholder-image-square.jpg';

});
