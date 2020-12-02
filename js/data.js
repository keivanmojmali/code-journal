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

var userEntries = {};
var $savedProfiles = localStorage.getItem('user-profile');
userEntries = JSON.parse($savedProfiles)

window.addEventListener('beforeunload', function (e) {
  var $profiles = JSON.stringify(userEntries);
  localStorage.setItem('user-profile', $profiles);

});
