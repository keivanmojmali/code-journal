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
var $journalEntry = document.querySelector('#journalEntry');
var $newEntrySave = document.querySelector('#newEntry');

$avatarUrl.addEventListener('input', function (e) {
  var $newUrl = e.target.value;
  $imgPlace.src = $newUrl;
});


$contact.addEventListener('submit', function (e) {
  e.preventDefault();
  var url = $contact.elements.url.value;
  var username = $contact.elements.username.value;
  var fullName = $contact.elements.fullName.value;
  var location = $contact.elements.location.value;
  var bio = $contact.elements.bio.value;
  var values = { username, fullName, location, url, bio };
  data.profile = values;
  $contact.reset();
  $imgPlace.src = './images/placeholder-image-square.jpg';
  profile(values);
  dataView('profile');
  $profileButton.className = '';
  $entryButton.className = '';
});


function dataView(string) {
  for(var i = 0; i < $dataView.length; i++) {
    if($dataView[i].getAttribute('data-view') !== string) {
      $dataView[i].className = 'hidden';
  } else {
      $dataView[i].className = '';
  }
    if ($dataView[i] !== 'edit-profile') {
      $imgPlace.src = data.profile.url;
      $avatarUrl.value = data.profile.url;
      $userInput.value = data.profile.username;
      $nameInput.value = data.profile.fullName;
      $locationInput.value = data.profile.location;
      $bioInput.textContent = data.profile.bio;
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

function entryAppend(object) {
  var newAppend = journalAppend(object);
  var position = document.querySelector('#entriesUl');
  position.prepend(newAppend);

}

function journalLoad(array) {
  for (var i = 0; i < array.length; i++) {
    entryAppend(array[i]);
  }
  return;
}


document.addEventListener('DOMContentLoaded', function (e) {

  if (data.profile.username === null) {
    $profileMake.className = ' ';
    $profileButton.className = 'hidden';
    $profileShow.className = 'hidden';
    $entryButton.className = 'hidden';
    $entries.className = 'hidden';
  } else {
    $profileMake.className = 'hidden';
    $profileShow.className = '';
    profile(data.profile);
  }
  journalLoad(data.entries);

})

document.addEventListener('click', function(e) {

  var localData = e.target.getAttribute('data-view');
  if(localData !== 'profile' && localData !== 'edit-profile' && localData !== 'entries') {
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

$journalEntry.addEventListener('submit', function(e) {
  e.preventDefault();
  var title = $journalEntry.elements.newTitle.value;
  var image = $journalEntry.elements.newUrl.value;
  var notes = $journalEntry.elements.newNotes.value;
  var newEntryValues = {title,notes,image};
  entryAppend(newEntryValues);
  data.entries.push(newEntryValues);
  $newEntryPhoto.src = './images/placeholder-image-square.jpg';
  $journalEntry.reset();
  dataView('entries');
})

function journalAppend(journal) {
  var newLi = document.createElement('li');
  newLi.setAttribute('class','journal-entry');
  var div1 = document.createElement('div');
  div1.setAttribute('class', 'col-half');
  newLi.appendChild(div1);
  var jImage = document.createElement('img');
  jImage.setAttribute('src', journal.image);
  jImage.setAttribute('class','full-width');
  div1.appendChild(jImage);
  var div2 = document.createElement('div');
  div2.setAttribute('class','col-half flex-column');
  newLi.appendChild(div2);
  var heading = document.createElement('h2');
  heading.setAttribute('class','profile-heading')
  heading.textContent = journal.title;
  div2.appendChild(heading);
  var pBody = document.createElement('p');
  pBody.textContent = journal.notes;
  div2.appendChild(pBody);
  return newLi;

}
