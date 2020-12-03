var $avatarUrl = document.querySelector('#url');
var $imgPlace = document.querySelector('#placeholder');
var $contact = document.querySelector('#userForm');
var $allDivs = document.querySelectorAll('div');
var $dataView = document.querySelectorAll('[data-view]');
var $profileMake = document.querySelector('#edit-profile');
var $profileShow = document.querySelector('#profile');
var $userHeader = document.querySelector('#userHeader');
var $userPic = document.querySelector('#userPhoto');
var $userSmall = document.querySelector('#userSmall');
var $userLocation = document.querySelector('#userLocation');
var $userBio = document.querySelector('#profileBio');

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
  profile(values);
  dataView('profile');
});


function dataView(string) {
  for(var i = 0; i < $dataView.length; i++) {
    if($dataView[i].id !== string) {
      $dataView[i].className = 'hidden';
  } else {
      $dataView[i].className = '';
  }
  data.view = name;
}
}

function profile(user) {
  $userHeader.textContent = user.username;
  $userPic.src = user.url;
  $userSmall.textContent = user.fullName;
  $userLocation.textContent = user.location;
  $userBio.textContent = user.bio;

}

document.addEventListener('DOMContentLoaded', function (e) {
  if (userEntries === null) {
    $profileMake.className = ' ';
    $profileShow.className = 'hidden';
  } else {
    $profileMake.className = 'hidden';
    $profileShow.className = '';
    profile(userEntries);
  }
})
