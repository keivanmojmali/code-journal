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

var $journalEntry = document.querySelector('#journalEntry');
var journal = {};
var $savedEntries = localStorage.getItem('user-entries');
journal = JSON.parse($savedEntries);

var userEntries = {};
var $savedProfiles = localStorage.getItem('user-profile');
userEntries = JSON.parse($savedProfiles);

window.addEventListener('beforeunload', function (e) {
  var $profiles = JSON.stringify(userEntries);
  localStorage.setItem('user-profile', $profiles);

});

$journalEntry.addEventListener('submit',function(e){
  var $jEntries = JSON.stringify(journal);
  localStorage.setItem('user-entries',$jEntries);
})
