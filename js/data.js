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

var $userHeader = document.querySelector('#userHeader');
var $userPic = document.querySelector('#userPhoto');
var $userSmall = document.querySelector('#userSmall');
var $userLocation = document.querySelector('#userLocation');
var $userBio = document.querySelector('#profileBio');
var userEntries = {};
var $savedProfiles = localStorage.getItem('user-profile');
userEntries = JSON.parse($savedProfiles)

window.addEventListener('beforeunload', function (e) {
  var $profiles = JSON.stringify(userEntries);
  localStorage.setItem('user-profile', $profiles);

});

function profile(user) {
      $userHeader.textContent = user.username;
      $userPic.src = user.url;
      $userSmall.textContent = user.fullName;
      $userLocation.textContent = user.location;
      $userBio.textContent = user.bio;

    }
