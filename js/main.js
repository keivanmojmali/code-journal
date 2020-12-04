var $imgPlace = document.querySelector('#placeholder');
var $avatarUrl = document.querySelector('#url');
var $userInput = document.querySelector('#username');
var $nameInput = document.querySelector('#fullName');
var $locationInput = document.querySelector('#location');
var $bioInput = document.querySelector('#bio');
var $contact = document.querySelector('#userForm');
var $allDivs = document.querySelectorAll('div');
var $dataView = document.querySelectorAll('div[data-view]');
var $profileMake = document.querySelector('#edit-profile');
var $profileShow = document.querySelector('#profile');
var $userHeader = document.querySelector('#userHeader');
var $userPic = document.querySelector('#userPhoto');
var $userSmall = document.querySelector('#userSmall');
var $userLocation = document.querySelector('#userLocation');
var $userBio = document.querySelector('#profileBio');
var $profileButton = document.querySelector('#profileButton');
var $editProfileButton = document.querySelector('#editProfileButton');
var $entryButton = document.querySelector('#entryButton');
var $entries = document.querySelector('#entries');
var $goToEntries = document.querySelector('#goToEntries');
var $newEntryPhoto = document.querySelector('#newEntryPhoto');
var $newEntryPhotoUrl = document.querySelector('#newUrl');

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
  $profileButton.className = '';
});


function dataView(string) {
  for(var i = 0; i < $dataView.length; i++) {
    if($dataView[i].getAttribute('data-view') !== string) {
      $dataView[i].className = 'hidden';
  } else {
      $dataView[i].className = '';
  }
    if ($dataView[i] !== 'edit-profile') {
    $imgPlace.src = userEntries.url;
    $avatarUrl.value = userEntries.url;
    $userInput.value = userEntries.username;
    $nameInput.value = userEntries.fullName;
    $locationInput.value = userEntries.location;
    $bioInput.textContent = userEntries.bio;
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
    $profileButton.className = 'hidden';
    $profileShow.className = 'hidden';
    $entryButton.className = 'hidden';
    $entries.className = 'hidden';
  } else {
    $profileMake.className = 'hidden';
    $profileShow.className = '';
    profile(userEntries);
  }
})

document.addEventListener('click', function(e) {
  var localData = e.target.getAttribute('data-view');
  if(localData !== 'profile' && localData !== 'edit-profile' && localData !== 'entries') {
    console.log(localData);
    return;
  } else {
    dataView(localData);
  }
})

$goToEntries.addEventListener('click', function(e) {
  dataView('newEntries');
})

$newEntryPhotoUrl.addEventListener('input',function(e) {
  var photoValue = e.target.value;
  $newEntryPhoto.src = photoValue;
})
